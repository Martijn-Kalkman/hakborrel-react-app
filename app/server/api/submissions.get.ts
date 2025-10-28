import { connectToDatabase } from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  try {
    const db = await connectToDatabase()
    const submissions = await db.collection('questionnaire_submissions')
      .find({})
      .sort({ submittedAt: -1 })
      .toArray()

    return {
      success: true,
      submissions: submissions
    }
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Failed to fetch submissions'
    })
  }
})

