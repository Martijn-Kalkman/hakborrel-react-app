import { connectToDatabase } from '~/server/utils/db'

interface QuestionnaireSubmission {
  firstName: string
  lastName: string
  email: string
  phone: string
  age: string
  musicPreference: string
  eventExperience: string
  communityMember: string
  additionalInfo: string
  submittedAt: Date
}

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const db = await connectToDatabase()

    // Validate required fields
    const required = ['firstName', 'lastName', 'email', 'phone', 'age']
    for (const field of required) {
      if (!body[field] || body[field].trim() === '') {
        throw createError({
          statusCode: 400,
          statusMessage: `Field '${field}' is required`
        })
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

    // Create submission document
    const submission: QuestionnaireSubmission = {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone,
      age: body.age,
      musicPreference: body.musicPreference || '',
      eventExperience: body.eventExperience || '',
      communityMember: body.communityMember || '',
      additionalInfo: body.additionalInfo || '',
      submittedAt: new Date()
    }

    // Insert into database
    const result = await db.collection('questionnaire_submissions').insertOne(submission)

    return {
      success: true,
      id: result.insertedId,
      message: 'Submission received successfully'
    }
  } catch (error: any) {
    if (error.statusCode) {
      throw error
    }
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Failed to submit questionnaire'
    })
  }
})

