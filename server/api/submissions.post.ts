import { connectToDatabase } from '../utils/db'
import { QuestionnaireSubmission } from '../models/QuestionnaireSubmission'
import { validateQuestionnaireForm } from '../../app/utils/validation'
import { isRequestAborted, safeSetHeader, isAbortError, withAbortCheck } from '../utils/request-handler'

export default defineEventHandler(async (event) => {
  return withAbortCheck(event, async () => {
    // Set response headers early
    safeSetHeader(event, 'Content-Type', 'application/json')
    safeSetHeader(event, 'Connection', 'keep-alive')
    
    const body = await readBody(event).catch((err: any) => {
      // If reading body fails due to abort, return null
      if (isAbortError(err)) {
        return null
      }
      throw err
    })
    
    if (body === null || isRequestAborted(event)) {
      return null
    }
    
    await connectToDatabase()
    
    // Check again if request was aborted after database connection
    if (isRequestAborted(event)) {
      return null
    }

    // Validate and sanitize input using validation utility
    const validation = validateQuestionnaireForm(body)
    
    if (!validation.isValid) {
      // Return first error message (don't expose all validation details)
      const firstError = Object.values(validation.errors)[0] || 'Invalid form data'
      throw createError({
        statusCode: 400,
        statusMessage: firstError
      })
    }

    // Use sanitized data to prevent injection attacks
    const submission = new QuestionnaireSubmission({
      firstName: validation.sanitized.firstName,
      lastName: validation.sanitized.lastName,
      email: validation.sanitized.email,
      phone: validation.sanitized.phone,
      age: validation.sanitized.age,
      musicPreference: validation.sanitized.musicPreference || '',
      eventExperience: validation.sanitized.eventExperience || '',
      communityMember: validation.sanitized.communityMember || '',
      additionalInfo: validation.sanitized.additionalInfo || '',
      submittedAt: new Date()
    })

    // Save to database - Mongoose will validate against schema
    const savedSubmission = await submission.save()

    // Final check before returning
    if (isRequestAborted(event)) {
      return null
    }

    // Ensure response is sent properly
    setResponseStatus(event, 201)
    return {
      success: true,
      id: savedSubmission._id.toString(),
      message: 'Submission received successfully'
    }
  }).catch((error: any) => {
    // Don't throw errors for aborted requests
    if (isAbortError(error)) {
      return null
    }
    
    // If it's already a Nuxt error, re-throw it
    if (error.statusCode) {
      throw error
    }
    
    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((err: any) => err.message).join(', ')
      throw createError({
        statusCode: 400,
        statusMessage: `Validation error: ${messages}`
      })
    }
    
    // Handle MongoDB connection errors
    if (error.name === 'MongoServerError' || error.name === 'MongooseError') {
      console.error('MongoDB error in submissions.post:', error.message)
      throw createError({
        statusCode: 503,
        statusMessage: 'Database connection error. Please try again later.'
      })
    }
    
    // Handle other errors - don't expose internal error details
    console.error('Error in submissions.post:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to submit questionnaire. Please try again later.'
    })
  })
})

