/**
 * Input validation and sanitization utilities
 * Protects against injection attacks (XSS, NoSQL injection, etc.)
 */

/**
 * Sanitize string input to prevent XSS and injection attacks
 */
export function sanitizeString(input: string, maxLength: number = 1000): string {
  if (typeof input !== 'string') {
    return ''
  }
  
  // Trim and limit length
  let sanitized = input.trim().slice(0, maxLength)
  
  // Remove potentially dangerous characters but keep basic formatting
  // Vue's template system already escapes by default, but this adds extra protection
  sanitized = sanitized.replace(/[<>]/g, '')
  
  return sanitized
}

/**
 * Validate email format
 */
export function validateEmail(email: string): boolean {
  if (!email || typeof email !== 'string') {
    return false
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email.trim()) && email.length <= 255
}

/**
 * Validate phone number (flexible format)
 */
export function validatePhone(phone: string): boolean {
  if (!phone || typeof phone !== 'string') {
    return false
  }
  
  // Remove spaces, dashes, parentheses, and plus signs for validation
  const cleaned = phone.replace(/[\s\-\(\)\+]/g, '')
  
  // Must contain only digits and be between 7 and 20 characters
  const phoneRegex = /^\d{7,20}$/
  return phoneRegex.test(cleaned) && phone.length <= 50
}

/**
 * Validate age (must be between 18 and 120)
 */
export function validateAge(age: string | number): boolean {
  const ageNum = typeof age === 'string' ? parseInt(age, 10) : age
  return !isNaN(ageNum) && ageNum >= 18 && ageNum <= 120
}

/**
 * Sanitize input to prevent NoSQL injection
 * Removes MongoDB operators from strings
 */
export function sanitizeForMongoDB(input: string): string {
  if (typeof input !== 'string') {
    return ''
  }
  
  // Remove MongoDB operators that could be used for injection
  const dangerousPatterns = [
    /\$where/gi,
    /\$ne/gi,
    /\$gt/gi,
    /\$gte/gi,
    /\$lt/gi,
    /\$lte/gi,
    /\$in/gi,
    /\$nin/gi,
    /\$regex/gi,
    /\$exists/gi,
    /\$elemMatch/gi,
    /\$size/gi,
    /\$type/gi,
    /\$mod/gi,
    /\$text/gi,
    /\$geoWithin/gi,
    /\$geoIntersects/gi,
    /\$near/gi,
    /\$nearSphere/gi
  ]
  
  let sanitized = input
  dangerousPatterns.forEach(pattern => {
    sanitized = sanitized.replace(pattern, '')
  })
  
  return sanitized.trim()
}

/**
 * Validate and sanitize questionnaire form data
 */
export interface FormValidationResult {
  isValid: boolean
  errors: Record<string, string>
  sanitized: Record<string, string>
}

export function validateQuestionnaireForm(data: {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  age?: string | number
  musicPreference?: string
  eventExperience?: string
  communityMember?: string
  additionalInfo?: string
}): FormValidationResult {
  const errors: Record<string, string> = {}
  const sanitized: Record<string, string> = {}
  
  // Validate and sanitize firstName
  if (!data.firstName || !data.firstName.trim()) {
    errors.firstName = 'Voornaam is verplicht'
  } else {
    const name = sanitizeString(data.firstName, 100)
    if (name.length < 2) {
      errors.firstName = 'Voornaam moet minimaal 2 tekens bevatten'
    } else if (name.length > 100) {
      errors.firstName = 'Voornaam mag maximaal 100 tekens bevatten'
    } else {
      sanitized.firstName = sanitizeForMongoDB(name)
    }
  }
  
  // Validate and sanitize lastName
  if (!data.lastName || !data.lastName.trim()) {
    errors.lastName = 'Achternaam is verplicht'
  } else {
    const name = sanitizeString(data.lastName, 100)
    if (name.length < 2) {
      errors.lastName = 'Achternaam moet minimaal 2 tekens bevatten'
    } else if (name.length > 100) {
      errors.lastName = 'Achternaam mag maximaal 100 tekens bevatten'
    } else {
      sanitized.lastName = sanitizeForMongoDB(name)
    }
  }
  
  // Validate and sanitize email
  if (!data.email || !data.email.trim()) {
    errors.email = 'E-mail is verplicht'
  } else {
    const email = data.email.trim().toLowerCase()
    if (!validateEmail(email)) {
      errors.email = 'Ongeldig e-mailadres'
    } else {
      sanitized.email = email
    }
  }
  
  // Validate and sanitize phone
  if (!data.phone || !data.phone.trim()) {
    errors.phone = 'Telefoonnummer is verplicht'
  } else {
    const phone = sanitizeString(data.phone, 50)
    if (!validatePhone(phone)) {
      errors.phone = 'Ongeldig telefoonnummer'
    } else {
      sanitized.phone = phone
    }
  }
  
  // Validate and sanitize age
  if (!data.age || data.age === '') {
    errors.age = 'Leeftijd is verplicht'
  } else {
    if (!validateAge(data.age)) {
      errors.age = 'Leeftijd moet tussen 18 en 120 zijn'
    } else {
      sanitized.age = String(data.age)
    }
  }
  
  // Sanitize optional fields
  if (data.musicPreference) {
    sanitized.musicPreference = sanitizeForMongoDB(sanitizeString(data.musicPreference, 100))
  }
  
  if (data.eventExperience) {
    sanitized.eventExperience = sanitizeForMongoDB(sanitizeString(data.eventExperience, 100))
  }
  
  if (data.communityMember) {
    sanitized.communityMember = sanitizeForMongoDB(sanitizeString(data.communityMember, 50))
  }
  
  if (data.additionalInfo) {
    sanitized.additionalInfo = sanitizeForMongoDB(sanitizeString(data.additionalInfo, 5000))
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitized
  }
}

