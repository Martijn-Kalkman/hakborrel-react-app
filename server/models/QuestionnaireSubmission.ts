import { Schema, model, Model } from 'mongoose'

// Document interface
export interface IQuestionnaireSubmission {
  firstName: string
  lastName: string
  email: string
  phone: string
  age: string
  musicPreference?: string
  eventExperience?: string
  communityMember?: string
  additionalInfo?: string
  submittedAt: Date
}

// Schema definition
const questionnaireSubmissionSchema = new Schema<IQuestionnaireSubmission>({
  firstName: { 
    type: String, 
    required: [true, 'First name is required'],
    trim: true,
    maxlength: [100, 'First name cannot exceed 100 characters']
  },
  lastName: { 
    type: String, 
    required: [true, 'Last name is required'],
    trim: true,
    maxlength: [100, 'Last name cannot exceed 100 characters']
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'],
    lowercase: true,
    trim: true,
    maxlength: [255, 'Email cannot exceed 255 characters'],
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address']
  },
  phone: { 
    type: String, 
    required: [true, 'Phone is required'],
    trim: true,
    maxlength: [50, 'Phone cannot exceed 50 characters']
  },
  age: { 
    type: String, 
    required: [true, 'Age is required'],
    trim: true,
    maxlength: [10, 'Age cannot exceed 10 characters']
  },
  musicPreference: { 
    type: String, 
    default: '',
    maxlength: [100, 'Music preference cannot exceed 100 characters']
  },
  eventExperience: { 
    type: String, 
    default: '',
    maxlength: [100, 'Event experience cannot exceed 100 characters']
  },
  communityMember: { 
    type: String, 
    default: '',
    maxlength: [50, 'Community member field cannot exceed 50 characters']
  },
  additionalInfo: { 
    type: String, 
    default: '',
    maxlength: [5000, 'Additional info cannot exceed 5000 characters']
  },
  submittedAt: { 
    type: Date, 
    default: Date.now,
    index: true // Index for faster queries by date
  }
}, {
  timestamps: false, // We're using submittedAt instead
  collection: 'questionnaire_submissions' // Explicit collection name
})

// Add indexes for better query performance
questionnaireSubmissionSchema.index({ email: 1 })
questionnaireSubmissionSchema.index({ submittedAt: -1 }) // For sorting by newest first

// Create and export the model
// The model will be registered on the default mongoose connection
// Note: Model will use the collection name specified in schema options
export const QuestionnaireSubmission = model<IQuestionnaireSubmission>(
  'QuestionnaireSubmission',
  questionnaireSubmissionSchema
)


