# Admission Questionnaire Setup

## Overview
This application includes an admission questionnaire system with MongoDB for self-hosted database storage.

## Features
- ✅ Multi-field questionnaire form
- ✅ MongoDB integration for data storage
- ✅ Admin panel to view submissions
- ✅ Form validation
- ✅ Success/error messaging

## Setup Instructions

### 1. MongoDB Setup

#### Option A: Local MongoDB Installation
```bash
# On macOS with Homebrew
brew install mongodb-community@7.0
brew services start mongodb-community@7.0

# On Ubuntu/Debian
sudo apt-get install mongodb
sudo systemctl start mongodb

# On Windows
Download and install from: https://www.mongodb.com/try/download/community
```

#### Option B: Docker (Recommended for self-hosting)
```bash
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

### 2. Environment Configuration

Create a `.env` file in the project root:

```env
MONGODB_URI=mongodb://localhost:27017
MONGODB_DB=hakborrel
```

For remote MongoDB:
```env
MONGODB_URI=mongodb://username:password@host:port
MONGODB_DB=hakborrel
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start the Development Server
```bash
npm run dev
```

## Usage

### Access the Questionnaire
Navigate to: `http://localhost:3000/questionnaire`

### View Submissions (Admin)
Navigate to: `http://localhost:3000/admin/submissions`

## Pages

### `/questionnaire`
- Public admission questionnaire form
- Fields: Name, Email, Phone, Age, Music Preferences, Event Experience
- Form validation and submission handling
- Success/error messaging

### `/admin/submissions`
- Admin panel to view all submissions
- Statistics dashboard (Total, This Week, Today)
- Submission details modal
- Sortable table view

## API Endpoints

### POST `/api/submissions`
Submit a new questionnaire response.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+31 6 12345678",
  "age": "25",
  "musicPreference": "hardcore",
  "eventExperience": "experienced",
  "communityMember": "yes",
  "additionalInfo": "Additional information..."
}
```

### GET `/api/submissions`
Retrieve all questionnaire submissions (admin only).

## Database Schema

The submissions are stored in a MongoDB collection called `questionnaire_submissions` with the following structure:

```json
{
  "_id": "ObjectId",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "phone": "string",
  "age": "string",
  "musicPreference": "string",
  "eventExperience": "string",
  "communityMember": "string",
  "additionalInfo": "string",
  "submittedAt": "Date"
}
```

## Security Recommendations

1. **Environment Variables**: Never commit `.env` files to version control
2. **Admin Access**: Add authentication to `/admin/submissions` route
3. **Rate Limiting**: Implement rate limiting on form submissions
4. **Input Validation**: Already implemented on the server-side
5. **MongoDB Security**: Enable authentication in production
   - Create admin user: `db.createUser({user: "admin", pwd: "password", roles: ["root"]})`
   - Enable auth in `mongod.conf`: `security.authorization: enabled`

## Production Deployment

### Build for Production
```bash
npm run build
npm run preview
```

### MongoDB Production Setup
1. Set up MongoDB replica set for high availability
2. Configure firewall rules
3. Enable SSL/TLS for MongoDB connections
4. Set up regular backups
5. Monitor database performance

## Troubleshooting

### Connection Issues
- Verify MongoDB is running: `mongosh` or `mongo`
- Check connection string in `.env`
- Ensure MongoDB is accessible on the specified port (default: 27017)

### Form Submission Errors
- Check browser console for errors
- Verify API endpoint is accessible
- Check MongoDB connection status

## Support
For issues or questions, contact the development team.

