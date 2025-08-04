# Google Sign-In Troubleshooting Guide

## Current Issue: "No response from server" & Persistent sign-in window

### Quick Fixes Applied:

1. **Added Demo Mode Support**
   - If backend is not configured, authentication will work in demo mode
   - User data will be stored in localStorage
   - Success message will indicate demo mode

2. **Enhanced Error Handling**
   - Better detection of popup closure
   - Specific error messages for different scenarios
   - Graceful fallback when backend is unavailable

3. **Firebase Configuration Improvements**
   - Added `prompt: 'select_account'` to Google Provider
   - Better popup management

### Testing Steps:

1. **Firebase Test Component Added**
   - Visit `http://localhost:3000`
   - Look for "Firebase Test Component" at the top
   - Click "Test Firebase Connection" to verify setup
   - Click "Test Google Sign-In" to test authentication

2. **Expected Behavior Now:**
   - Google popup should appear
   - After selecting account, popup should close
   - Success message should show (demo mode)
   - No "no response from server" error

### Common Issues & Solutions:

#### Issue 1: Popup doesn't close after authentication
**Cause**: Firebase redirect URI mismatch
**Solution**:
1. Go to Firebase Console → Authentication → Settings
2. Add `http://localhost:3000` to authorized domains
3. In Google Cloud Console, add `http://localhost:3000` to OAuth redirect URIs

#### Issue 2: "No response from server"
**Cause**: Backend API not available
**Solution**: 
- Fixed with demo mode - authentication will work without backend
- Update `.env.local` with real backend URL when available

#### Issue 3: Popup blocked
**Solution**:
- Allow popups in browser settings
- Try in incognito mode
- Check if browser extensions are blocking popups

#### Issue 4: "auth/unauthorized-domain"
**Solution**:
1. Firebase Console → Authentication → Settings → Authorized domains
2. Add your domain (localhost:3000 for development)

### Current Environment Configuration:

```bash
# In .env.local
NEXT_PUBLIC_API_BASE_URL=https://your-backend-api.com
```

This triggers demo mode since it's not a real URL.

### To Enable Real Backend:

1. Replace `.env.local` with your real backend URL:
```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
# or
NEXT_PUBLIC_API_BASE_URL=https://your-real-backend.com
```

2. Ensure your backend has these endpoints:
```bash
POST /api/auth/google    # For Google authentication
POST /api/auth/phone     # For phone authentication (legacy)
GET /api/myOrders        # For fetching user orders
POST /api/orders         # For creating orders
```

### Firebase Console Setup Checklist:

- [ ] Authentication enabled
- [ ] Google sign-in provider enabled
- [ ] Authorized domains include localhost:3000
- [ ] OAuth consent screen configured
- [ ] API keys are correct in firebase.config.js

### Next Steps:

1. **Test with Firebase Test Component**
2. **Verify Google Sign-In works in demo mode**
3. **Configure real backend when ready**
4. **Remove test component from production**

### Remove Test Component:

When ready for production, remove:
- `FirebaseTest` import from `app/page.js`
- `<FirebaseTest />` component from the page
- Delete `components/elements/FirebaseTest.js`
