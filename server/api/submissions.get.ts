import { connectToDatabase } from '../utils/db'
import { QuestionnaireSubmission } from '../models/QuestionnaireSubmission'
import { isRequestAborted, safeSetHeader, isAbortError, withAbortCheck } from '../utils/request-handler'

export default defineEventHandler(async (event) => {
  return withAbortCheck(event, async () => {
    // Set response headers early
    safeSetHeader(event, 'Content-Type', 'application/json')
    safeSetHeader(event, 'Connection', 'keep-alive')
    
    await connectToDatabase()
    
    // Check if request was aborted before database query
    if (isRequestAborted(event)) {
      return null
    }
    
    // Fetch all submissions, sorted by newest first
    const submissions = await QuestionnaireSubmission.find({})
      .sort({ submittedAt: -1 })
      .lean()
      .exec()

    // Final check before returning
    if (isRequestAborted(event)) {
      return null
    }

    return {
      success: true,
      submissions: submissions
    }
  }).catch((error: any) => {
    // Handle MongoDB connection errors
    if (error.name === 'MongoServerError' || error.name === 'MongooseError') {
      console.error('MongoDB error in submissions.get:', error.message)
      throw createError({
        statusCode: 503,
        statusMessage: 'Database connection error. Please try again later.'
      })
    }
    
    // Don't throw errors for aborted requests
    if (isAbortError(error)) {
      return null
    }
    
    console.error('Error in submissions.get:', error)
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Failed to fetch submissions'
    })
  })
})

