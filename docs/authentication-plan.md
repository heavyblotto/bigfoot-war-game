# Authentication and User Account Plan

## Current State
- Basic registration and login functionality implemented
- User model in database with minimal fields
- JWT used for authentication
- Email and password update routes exist but are not integrated into the UI

## Planned Improvements

### 1. Enhance User Model
- Update `prisma/schema.prisma` to include game-related fields:
  ```prisma
  model User {
    id            String   @id @default(uuid())
    username      String   @unique
    email         String?  @unique
    password      String
    profile       Json     @default("{}")
    level         Int      @default(1)
    xp            Int      @default(0)
    achievements  Json     @default("[]")
    inventory     Json     @default("[]")
    createdAt     DateTime @default(now())
    updatedAt     DateTime @updatedAt
  }
  ```

### 2. Update Profile Component
- Modify `src/components/Profile.js` to use real user data instead of mock data
- Implement API route to fetch user profile data
- Add UI elements for updating email and password

### 3. Implement Account Deletion
- Create API route for account deletion
- Add account deletion option to the Profile component
- Implement confirmation modal for account deletion

### 4. Enhance Authentication Persistence
- Implement token refresh mechanism
- Store refresh token in HTTP-only cookie
- Create middleware to check and refresh tokens on protected routes

### 5. Email Verification
- Implement email verification process for new accounts
- Create API route for sending verification emails
- Add UI for users to request new verification emails

### 6. Password Reset Functionality
- Implement "Forgot Password" feature
- Create API routes for password reset request and confirmation
- Add UI for password reset process

### 7. User Settings Page
- Create a dedicated settings page for users to manage preferences
- Implement API routes for updating user settings
- Store user settings in the `profile` JSON field

### 8. Security Enhancements
- Implement rate limiting on authentication routes
- Add CSRF protection
- Enhance password requirements and validation

### 9. Admin Panel (if needed)
- Create an admin dashboard for user management
- Implement role-based access control
- Add API routes for admin actions (e.g., ban user, reset password)

## Implementation Plan

1. Enhance User Model and Update Profile Component
   - Estimated time: 2-3 days
   - Update Prisma schema and generate migration
   - Modify Profile component and create necessary API routes

2. Account Deletion and Authentication Persistence
   - Estimated time: 2 days
   - Implement account deletion functionality
   - Enhance token refresh and persistence mechanisms

3. Email Verification and Password Reset
   - Estimated time: 3-4 days
   - Set up email sending functionality (e.g., using SendGrid or Nodemailer)
   - Implement verification and password reset flows

4. User Settings and Security Enhancements
   - Estimated time: 2-3 days
   - Create user settings page and implement preferences management
