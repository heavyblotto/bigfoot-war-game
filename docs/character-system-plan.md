# Bigfoot Character System Implementation Plan

## Current State of the Codebase

1. Authentication System:
   - Fully implemented with user registration, login, and token-based authentication
   - Uses Zustand for state management (useUserStore and useAuthStore)
   - API routes for login, registration, email update, and account deletion are in place
   - Reference: 
     ```javascript:src/hooks/useAuth.js
     startLine: 1
     endLine: 35
     ```

2. Database:
   - Vercel PostgreSQL is set up and connected using Prisma ORM
   - User model is defined and functional
   - Reference: 
     ```prisma/schema.prisma
     startLine: 1
     endLine: 18
     ```

3. Frontend:
   - Next.js 13+ with App Router is implemented
   - Chakra UI is set up for consistent styling
   - Basic layout and routing are in place
   - Reference: 
     ```javascript:src/app/layout.js
     startLine: 1
     endLine: 25
     ```

4. State Management:
   - Zustand is used for global state management
   - Stores for user, auth, and game state are implemented
   - Reference: 
     ```javascript:src/store/gameStore.js
     startLine: 1
     endLine: 16
     ```

5. API Routes:
   - Authentication-related API routes are implemented
   - Reference: 
     ```javascript:src/app/api/auth/login/route.js
     startLine: 1
     endLine: 45
     ```

This existing infrastructure provides a solid foundation for implementing the Bigfoot Character System. The plan below outlines the steps to build upon this foundation and integrate the new features seamlessly.

## Phase 1: Data Structure and Management
1. Create a Bigfoot character model based on the `bigfoots.json` file, character-system.md, and character-system-plan.md.
2. Implement a data layer to manage character information using Zustand
3. Set up a system for updating and expanding the character database in Vercel PostgreSQL
4. Create a player model to store XP, level, and unlocked characters in Vercel PostgreSQL
5. Make sure to implement string management using the centralized approach with `useStrings` hook as you go along

## Phase 2: Basic Character Functionality
1. Implement character selection mechanism for both player characters and NPCs using App Router
2. Create a basic character details view using Chakra UI components
3. Develop a simple collection management system with Zustand state management
4. Implement difficulty selection for NPC opponents
5. Implement the initial Sasquatch character for players and the first NPC opponent
6. Ensure all UI components use consistent styles, fonts, and layouts

## Phase 3: Player and Character Progression System
1. Implement experience points and leveling system for players using Zustand and Vercel PostgreSQL
2. Create a mechanism for characters to level up based on player XP
3. Develop stat calculation based on character level
4. Implement ability unlocking based on character level
5. Create a system for unlocking NPC opponents as the player progresses
6. Ensure all text strings are managed using the `useStrings` hook

## Phase 4: Unlocking Mechanics
1. Implement story-based character unlocks using App Router for navigation
2. Create a challenge system for unlocking characters
3. Develop a random drop system for battles
4. Implement a system to track unlocked characters in the player's collection using Zustand and Vercel PostgreSQL
5. Implement a system to unlock NPC opponents based on player level

## Phase 5: Character Customization
1. Implement a system for special items that modify abilities
2. Ensure all UI components for customization use Chakra UI and follow the project's style guidelines

## Phase 6: Combat System Integration
1. Integrate character stats into the combat system using Zustand for state management
2. Implement special abilities in battles
3. Develop type advantage/disadvantage system
4. Implement the luck stat and its influence on battles and special abilities
5. Ensure all combat-related text uses the `useStrings` hook for centralized management

## Phase 7: User Interface Development
1. Design and implement the character selection screen using Chakra UI and App Router
2. Create a detailed character view interface
3. Develop the collection management UI
4. Create the character upgrade/progression UI
5. Implement UI for selecting NPC opponents and difficulty levels
6. Design and implement the player profile interface
7. Ensure all UI components use consistent styles, fonts, and layouts as per the project conventions

## Phase 8: Data Persistence and Synchronization
1. Implement local storage for offline character data using Zustand persist middleware
2. Develop server-side storage and synchronization with Vercel PostgreSQL
3. Create a system for regular updates and balancing
4. Ensure proper integration with the existing user account and authentication system

## Phase 9: Testing and Refinement
1. Conduct thorough testing of all character system components
2. Balance character stats and abilities
3. Refine user interface based on feedback
4. Optimize performance for character management and battles
5. Test and refine the NPC opponent selection and difficulty system
6. Ensure proper integration of player XP and character leveling
7. Verify that all components work correctly with the App Router and Zustand state management

## Phase 10: Documentation and Deployment
1. Create user documentation for the character system
2. Develop technical documentation for future maintenance
3. Deploy the character system as part of the game update on Vercel
4. Ensure all environment variables are properly set in Vercel for database access and other configurations

This updated plan ensures that we're implementing everything correctly, using string management, consistent styles and layouts, App Router, Zustand for state management, Vercel PostgreSQL, and integrating with the existing user account and authentication system.

For reference to the existing authentication system, please refer to:

```javascript:src/hooks/useAuth.js
import { useUserStore } from '@/store/userStore';
import { useAuthStore } from '@/store/authStore';

export const useAuth = () => {
  const { user, setUser, clearUser } = useUserStore();
  const { isAuthenticated, token, setAuth, clearAuth } = useAuthStore();

  const login = async (credentials) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      if (response.ok) {
        setUser(data.user);
        setAuth(true, data.token);
        return { success: true, user: data.user };
      } else {
        return { success: false, error: data.error };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'An error occurred during login. Please try again.' };
    }
  };

  const logout = () => {
    clearUser();
    clearAuth();
  };

  return { user, isAuthenticated, token, login, logout };
};
```

This hook should be used for all authentication-related operations in the character system.

For Zustand store implementation, follow the pattern in:

```javascript:src/store/authStore.js
import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  token: null,
  isAuthenticated: false,
  setAuth: (isAuthenticated, token) => set({ isAuthenticated, token }),
  clearAuth: () => set({ isAuthenticated: false, token: null }),
}));
```

Ensure that all new stores are created in the `src/store` directory and follow this pattern.

For database operations, make sure to use Prisma with Vercel PostgreSQL. The connection string should be stored in the `POSTGRES_PRISMA_URL` environment variable on Vercel.

By following this updated plan, we'll ensure that the Bigfoot Character System is implemented correctly and integrates seamlessly with the existing project structure and conventions.
