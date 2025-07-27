# Backend Integration Guide for Firebase Google Authentication

## Architecture Overview

```
Frontend (React/Next.js)
    ↓
Firebase Authentication (Google OAuth)
    ↓ 
Your Backend API (Node.js/Express/etc.)
    ↓
Your Database (MongoDB/PostgreSQL/etc.)
```

## Authentication Flow

### 1. User clicks "Sign in with Google"
- Frontend opens Google OAuth popup via Firebase
- User selects Google account and grants permissions
- Firebase returns user data (name, email, photo, etc.)

### 2. Frontend sends user data to YOUR backend
```javascript
// Data sent to your backend
{
  name: "John Doe",
  email: "john@gmail.com", 
  phone: "", // Usually empty from Google
  firebaseUid: "firebase-user-unique-id",
  profilePicture: "https://google-profile-pic-url",
  emailVerified: true,
  provider: "google"
}
```

### 3. Your backend processes the user
- Check if user exists in your database
- Create new user if doesn't exist
- Return user data with your internal user ID
- Set authentication cookies/sessions

## Required Backend Endpoints

### 1. Google Authentication Endpoint
```bash
POST /api/auth/google
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@gmail.com",
  "phone": "",
  "firebaseUid": "firebase-uid-123",
  "profilePicture": "https://profile-pic-url",
  "emailVerified": true,
  "provider": "google"
}
```

**Response (Success):**
```json
{
  "success": true,
  "user": {
    "id": "your-db-user-id-456",
    "name": "John Doe",
    "email": "john@gmail.com",
    "phone": "",
    "firebaseUid": "firebase-uid-123",
    "profilePicture": "https://profile-pic-url",
    "createdAt": "2025-01-27T10:30:00Z",
    "lastLogin": "2025-01-27T10:30:00Z"
  },
  "isNewUser": false
}
```

### 2. Other Required Endpoints
```bash
# For orders
POST /api/orders
GET /api/myOrders
GET /api/myOrders/:id

# For logout
GET /api/auth/logout

# Legacy phone auth (if still needed)
POST /api/auth/phone
```

## Backend Implementation Examples

### Node.js/Express Example

```javascript
// /api/auth/google
app.post('/api/auth/google', async (req, res) => {
  try {
    const { name, email, firebaseUid, profilePicture, emailVerified } = req.body;
    
    // Check if user exists
    let user = await User.findOne({ firebaseUid });
    
    if (!user) {
      // Create new user
      user = new User({
        name,
        email,
        firebaseUid,
        profilePicture,
        emailVerified,
        provider: 'google',
        createdAt: new Date()
      });
      await user.save();
    } else {
      // Update last login
      user.lastLogin = new Date();
      await user.save();
    }
    
    // Set session/cookie
    req.session.userId = user._id;
    
    res.json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        firebaseUid: user.firebaseUid,
        profilePicture: user.profilePicture
      },
      isNewUser: !user.lastLogin
    });
    
  } catch (error) {
    console.error('Google auth error:', error);
    res.status(500).json({
      success: false,
      message: 'Authentication failed'
    });
  }
});
```

### Database Schema Example

```javascript
// MongoDB/Mongoose User Schema
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, default: '' },
  firebaseUid: { type: String, required: true, unique: true },
  profilePicture: { type: String },
  emailVerified: { type: Boolean, default: false },
  provider: { type: String, enum: ['google', 'phone'], required: true },
  createdAt: { type: Date, default: Date.now },
  lastLogin: { type: Date }
});
```

## Environment Setup

### Frontend (.env.local)
```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
# or your production URL
NEXT_PUBLIC_API_BASE_URL=https://api.yourapp.com
```

### Backend (.env)
```bash
PORT=8000
DATABASE_URL=mongodb://localhost:27017/yourapp
SESSION_SECRET=your-session-secret
CORS_ORIGIN=http://localhost:3000
```

## Testing the Integration

### 1. Start your backend server
```bash
# Make sure your backend is running on the port specified in NEXT_PUBLIC_API_BASE_URL
npm start  # or however you start your backend
```

### 2. Test the authentication flow
1. Click "Sign in with Google" in your app
2. Complete Google OAuth
3. Check browser network tab for API calls
4. Verify user is created in your database
5. Check that authentication cookies are set

### 3. Debug common issues
- **CORS errors**: Add your frontend domain to backend CORS settings
- **404 errors**: Verify backend endpoint URLs match the frontend calls
- **500 errors**: Check backend logs for detailed error messages

## Security Considerations

### 1. Verify Firebase tokens (recommended)
```javascript
// Install firebase-admin
const admin = require('firebase-admin');

// Verify the Firebase ID token
app.post('/api/auth/google', async (req, res) => {
  try {
    const { idToken } = req.body;
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const { uid, email, name } = decodedToken;
    
    // Process user with verified data
    // ...
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
});
```

### 2. Sanitize input data
- Validate email format
- Sanitize name field
- Check for required fields

### 3. Rate limiting
- Implement rate limiting on auth endpoints
- Prevent abuse of authentication system

## Current Frontend Configuration

Your frontend is now configured to:
- ✅ Authenticate with Firebase
- ✅ Send user data to `/api/auth/google` endpoint
- ✅ Handle backend errors gracefully
- ✅ Sign out from Firebase if backend registration fails
- ✅ Show clear error messages

The frontend will now properly integrate with your backend once you implement the required endpoints!
