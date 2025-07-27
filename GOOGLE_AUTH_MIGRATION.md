# Firebase Google Sign-In Implementation & Error Fixes

## Issues Fixed

### 1. ✅ Window is not defined error
**Problem**: Firebase Analytics was trying to access `window` during server-side rendering
**Solution**: 
- Modified `firebase.config.js` to conditionally initialize Analytics only on the client side
- Used dynamic import for Analytics module

### 2. ✅ API endpoint 404 errors
**Problem**: `NEXT_PUBLIC_API_BASE_URL` was undefined, causing requests to `/undefined/api/...`
**Solution**:
- Created `.env.local` file with proper environment variable
- Updated registration service to use different endpoints for Google vs Phone auth

### 3. ✅ "The user aborted a request" errors  
**Problem**: Firebase configuration issues during SSR and network requests
**Solution**:
- Fixed Firebase initialization to be SSR-compatible
- Removed analytics initialization from SSR context

## Changes Made

### 1. Updated Firebase Configuration (`firebase.config.js`)
```javascript
// Now properly handles SSR and client-side rendering
- Fixed window undefined error
- Dynamic analytics import
- Proper auth initialization
```

### 2. Environment Configuration (`.env.local`)
```bash
# Replace with your actual backend URL
NEXT_PUBLIC_API_BASE_URL=https://your-backend-api.com
```

### 3. Updated Registration Service (`services/auth/register.js`)
- Smart endpoint detection (Google vs Phone auth)
- Better error handling
- Supports both authentication methods

### 4. Created New Google Authentication Components

#### `GoogleAuthentication.js` (Replaces OtpAuthentication.js)
- Handles Google Sign-In for checkout flow
- Creates orders after successful authentication
- Integrates with existing backend registration system

#### `GoogleRegister.js` (Replaces OtpRegistration.js)
- Handles Google Sign-In for general registration
- Used in header modal for user authentication

### 5. Updated Component Usage
- `Header1.js`: Now uses `GoogleRegister`
- `app/checkout/page.js`: Now uses `GoogleAuthentication`

## Setup Requirements

### 1. Backend API Configuration
Your backend needs to support these endpoints:

```bash
# For Google authentication
POST /api/auth/google
# Request body: { name, email, phone?, password, accessToken, googleId }

# For phone authentication (legacy)
POST /api/auth/phone  
# Request body: { name, email, phone, password, accessToken }

# Other existing endpoints
GET /api/myOrders
POST /api/orders
GET /api/auth/logout
```

### 2. Firebase Console Setup
1. **Enable Google Authentication**:
   - Go to Firebase Console → Authentication → Sign-in method
   - Enable Google sign-in provider
   - Add your domain to authorized domains

2. **Configure OAuth Consent Screen**:
   - Go to Google Cloud Console
   - Configure OAuth consent screen
   - Add test users if needed

### 3. Environment Variables
Update `.env.local` with your actual backend URL:
```bash
NEXT_PUBLIC_API_BASE_URL=https://your-actual-backend-url.com
```

## Features

### Google Sign-In Benefits
- **Security**: OAuth 2.0 authentication via Google
- **User Experience**: One-click authentication
- **Data Quality**: Verified email addresses
- **No SMS costs**: No need for phone verification

### Maintained Functionality
- User registration with backend API
- Order creation flow in checkout
- Error handling and user feedback
- Modal-based authentication flow

## Testing

### 1. Local Development
```bash
npm run dev
# Visit http://localhost:3000
```

### 2. Test Authentication Flow
1. Click sign-in button in header
2. Test Google Sign-In popup
3. Verify user registration with backend
4. Test checkout flow with Google authentication

### 3. Backend Integration
Ensure your backend handles:
- Google authentication endpoint
- User data from Google (name, email, googleId)
- Token validation
- Order creation for authenticated users

## Common Issues & Solutions

### Issue: "Firebase API key is invalid"
**Solution**: Verify Firebase configuration in `firebase.config.js`

### Issue: "Google Sign-In popup blocked"
**Solution**: 
- Check browser popup settings
- Ensure domain is added to Firebase authorized domains
- Test in incognito mode

### Issue: "CORS errors"
**Solution**: Configure your backend to allow requests from your domain

### Issue: "Authentication state not persisting"
**Solution**: Ensure Firebase Auth persistence is configured

## Migration Notes

### Files that can be removed:
- `components/elements/OtpAuthentication.js`
- `components/elements/OtpRegistration.js`

### Backend changes needed:
- Add `/api/auth/google` endpoint
- Update user model to handle Google IDs
- Modify registration logic for Google users

### Testing checklist:
- [ ] Google Sign-In popup appears
- [ ] User data is correctly sent to backend
- [ ] Order creation works after authentication
- [ ] Error handling works properly
- [ ] No console errors
- [ ] SSR works without window errors

## Security Considerations

1. **Token Validation**: Verify Firebase ID tokens on your backend
2. **User Data**: Validate all incoming user data
3. **CORS**: Properly configure CORS settings
4. **HTTPS**: Use HTTPS in production
5. **Environment Variables**: Keep Firebase config secure
