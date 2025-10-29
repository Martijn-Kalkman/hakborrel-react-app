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
    
    await connectToDatabase()
    
    // Fetch all submissions, sorted by newest first
    const submissions = await QuestionnaireSubmission.find({})
      .sort({ submittedAt: -1 })
      .lean()
      .exec()

    // Check again if request was aborted before sending response
    if (event.node.req.aborted || event.node.req.destroyed) {
      return
    }

    return {
      success: true,
      submissions: submissions
    }
  } catch (error: any) {
    // Don't log if request was aborted (expected behavior)
    if (error.code === 'ECONNRESET' || error.code === 'ECONNABORTED' || 
        error.message?.includes('aborted') || error.message?.includes('Premature close')) {
      return // Silently ignore aborted requests
    }
    
    // Handle MongoDB connection errors
    if (error.name === 'MongoServerError' || error.name === 'MongooseError') {
      console.error('MongoDB error in submissions.get:', error.message)
      throw createError({
        statusCode: 503,
        statusMessage: 'Database connection error. Please try again later.'
      })
    }
    
    console.error('Error in submissions.get:', error)
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Failed to fetch submissions'
    })
  }
})

