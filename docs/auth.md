# Authentication System Design

## Overview
This document outlines the design and implementation of the authentication system for the Bigfoot War project. The system includes user registration, login functionality, and a simple player profile. The design leverages Next.js API routes for backend logic, Zustand for state management, and Chakra UI for UI components.

## Implementation Details

### API Routes
- **register.js**: Handles user registration with optional email.
- **login.js**: Handles user login.
- **verify.js**: Verifies user token for authentication persistence.

### Database Schema
The User model in the database schema has been updated to make the email field optional:

```
prisma:prisma/schema.prisma
startLine: 10
endLine: 18
```

### Registration Process
- Users can register with a username and password.
- Email is optional during registration.
- The registration form in the frontend reflects this change:

### Login Process
- Users can log in using their username and password.
- The login process remains unchanged, but the backend now handles the possibility of users without an email.

### State Management
- Zustand is used to manage user state across the application.

### Player Profile
- A simple profile component displays user information, including the email if provided.

### Forms
- Registration and login forms use Chakra UI components for consistent styling and accessibility.

## Design Rationale

### Flexibility
- Making email optional allows for a smoother registration process while still providing the option for account recovery in the future.

### Alignment with Project Conventions
- The implementation follows the project's conventions for state management, form handling, and UI components.

### Simplicity and Scalability
- The design remains simple and easy to understand, while allowing for future enhancements like email verification or password recovery.

## Impact on the Project

### Core System Features
- The "User Authentication" feature has been updated to include optional email registration.

### Technical Features
- The database schema and API routes have been adjusted to accommodate optional email addresses.

### Documentation and Conventions
- This document has been updated to reflect the changes in the authentication system.
- The `docs/database.md` file should be updated to reflect the change in the User schema.

## Future Improvements

### Email Verification
- Implement an email verification system for users who choose to provide an email address.

### Password Recovery
- Develop a password recovery feature for users with registered email addresses.

### Enhanced Profile Management
- Allow users to add or change their email address after registration.

## Conclusion
The updated authentication system provides a flexible approach to user registration and management, aligning with the project's goals of simplicity and scalability. The optional email feature balances user convenience with the potential for future account management features.
