import { connectToDatabase } from '../utils/db'
import { QuestionnaireSubmission } from '../models/QuestionnaireSubmission'

export default defineEventHandler(async (event) => {
  // Check if request was aborted (client disconnected)
  if (event.node.req.aborted || event.node.req.destroyed) {
    return // Silently return if request was cancelled
  }

  try {
    // Set response headers early to prevent premature close
    setHeader(event, 'Content-Type', 'application/json')
    setHeader(event, 'Connection', 'keep-alive')
    
    const body = await readBody(event)
    await connectToDatabase()
    
    // Check again if request was aborted after reading body
    if (event.node.req.aborted || event.node.req.destroyed) {
      return
    }

    // Validate required fields - Mongoose will also validate based on schema
    const required = ['firstName', 'lastName', 'email', 'phone', 'age']
    for (const field of required) {
      const value = body[field]
      if (field === 'age') {
        // Age can be a number
        if (!value || value === '') {
          throw createError({
            statusCode: 400,
            statusMessage: `Field '${field}' is required`
          })
        }
      } else {
        // Other fields must be strings
        if (!value || typeof value !== 'string' || value.trim() === '') {
          throw createError({
            statusCode: 400,
            statusMessage: `Field '${field}' is required`
          })
        }
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid email format'
      })
    }

    // Create submission document using Mongoose
    const submission = new QuestionnaireSubmission({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone,
      age: String(body.age),
      musicPreference: body.musicPreference || '',
      eventExperience: body.eventExperience || '',
      communityMember: body.communityMember || '',
      additionalInfo: body.additionalInfo || '',
      submittedAt: new Date()
    })

    // Save to database - Mongoose will validate against schema
    const savedSubmission = await submission.save()

    // Ensure response is sent properly
    setResponseStatus(event, 201)
    return {
      success: true,
      id: savedSubmission._id.toString(),
      message: 'Submission received successfully'
    }
  } catch (error: any) {
    // Don't log if request was aborted (expected behavior)
    if (error.code === 'ECONNRESET' || error.code === 'ECONNABORTED' || 
        error.message?.includes('aborted') || error.message?.includes('Premature close')) {
      return // Silently ignore aborted requests
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
    
    // Handle other errors
    console.error('Error in submissions.post:', error)
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Failed to submit questionnaire'
    })
  }
})

