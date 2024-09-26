# Authentication System Design

## Overview
This document outlines the design and implementation of the authentication system for the Bigfoot War project. The system includes user registration, login functionality, and a player profile. The design leverages Next.js API routes for backend logic, Zustand for state management, and Chakra UI for UI components.

## Current Implementation

### Database Schema
The User model in the database schema is defined as follows:

```prisma
model User {
  id        String   @id @default(uuid())
  username  String   @unique
  email     String?  @unique
  password  String
  profile   Json     @default("{}")
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### API Routes
- **register.js**: Handles user registration with optional email.
- **login.js**: Handles user login.
- **update-email.js**: Updates user email (not integrated into UI).
- **update-password.js**: Updates user password (not integrated into UI).

### Registration Process
- Users can register with a username and password.
- Email is optional during registration.

### Login Process
- Users can log in using their username and password.
- JWT is used for authentication.

### State Management
- Zustand is used to manage user state across the application.

### Player Profile
- A profile component exists but currently uses mock data instead of real user data.

### Forms
- Registration and login forms use Chakra UI components for consistent styling and accessibility.

## Planned Improvements

### 1. Enhance User Model
- Update the User model to include game-related fields such as level, xp, achievements, and inventory.

### 2. Update Profile Component
- Modify the Profile component to use real user data.
- Implement API route to fetch user profile data.
- Integrate email and password update functionality into the UI.

### 3. Implement Account Deletion
- Create API route for account deletion.
- Add account deletion option to the Profile component.

### 4. Enhance Authentication Persistence
- Implement token refresh mechanism.
- Store refresh token in HTTP-only cookie.
- Create middleware to check and refresh tokens on protected routes.

### 5. Email Verification
- Implement email verification process for new accounts.
- Create API route for sending verification emails.

### 6. Password Reset Functionality
- Implement "Forgot Password" feature.
- Create API routes for password reset request and confirmation.

### 7. User Settings Page
- Create a dedicated settings page for users to manage preferences.
- Implement API routes for updating user settings.

### 8. Security Enhancements
- Implement rate limiting on authentication routes.
- Add CSRF protection.
- Enhance password requirements and validation.

## Design Rationale

### Flexibility
- Optional email registration allows for a smoother onboarding process while still providing the option for account recovery in the future.

### Alignment with Project Conventions
- The implementation follows the project's conventions for state management, form handling, and UI components.

### Scalability
- The planned improvements will enhance the authentication system's robustness and feature set, preparing it for future growth.

## Impact on the Project

### Core System Features
- The authentication system forms the foundation for user management and game progression tracking.

### Technical Features
- The database schema and API routes will be expanded to accommodate new user-related functionalities.

### Documentation and Conventions
- This document will be regularly updated to reflect changes in the authentication system.
- Other documentation, including `database.md`, will be updated to maintain consistency.

## Conclusion
The current authentication system provides basic functionality, with a clear roadmap for enhancements. The planned improvements will significantly boost the system's capabilities, providing a more robust and feature-rich user management experience aligned with the project's goals of simplicity, scalability, and security.
