# State Management Plan

## Current State
- Zustand is intended to be used for state management but not fully implemented.
- Some components (e.g., Profile, Account) are using local state and prop drilling.

## Transition Plan to Zustand

### 1. Create Zustand Stores

Create the following stores in `src/store/`:

a. `userStore.js`:
```javascript
import create from 'zustand';

export const useUserStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  updateUser: (updates) => set((state) => ({ user: { ...state.user, ...updates } })),
  clearUser: () => set({ user: null }),
}));
```

b. `authStore.js`:
```javascript
import create from 'zustand';

export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  token: null,
  setAuth: (isAuthenticated, token) => set({ isAuthenticated, token }),
  clearAuth: () => set({ isAuthenticated: false, token: null }),
}));
```

c. `gameStore.js` (for game-related state):
```javascript
import create from 'zustand';

export const useGameStore = create((set) => ({
  gameState: null,
  setGameState: (gameState) => set({ gameState }),
  // Add more game-related state and actions as needed
}));
```

### 2. Update Components

Refactor components to use Zustand stores instead of local state and prop drilling. For example:

a. Update `Profile.js`:
```javascript
import { useUserStore } from '@/store/userStore';

const Profile = () => {
  const { user, updateUser } = useUserStore();
  // Use user data from the store and updateUser for modifications
  // ...
};
```

b. Update `Account.js`:
```javascript
import { useUserStore } from '@/store/userStore';

const Account = () => {
  const { user, updateUser } = useUserStore();
  // Use user data from the store and updateUser for modifications
  // ...
};
```

### 3. Update API Calls

Modify API calls to update Zustand stores directly. For example, in login and registration handlers:

```javascript
import { useUserStore } from '@/store/userStore';
import { useAuthStore } from '@/store/authStore';

const handleLogin = async (credentials) => {
  // ... perform login API call
  if (success) {
    useUserStore.getState().setUser(userData);
    useAuthStore.getState().setAuth(true, token);
  }
};
```

### 4. Implement Persistence

Use Zustand middleware to persist authentication state:

```javascript
import create from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set) => ({
      // ... existing store logic
    }),
    {
      name: 'auth-storage',
      getStorage: () => localStorage,
    }
  )
);
```

### 5. Create Custom Hooks

Develop custom hooks to encapsulate common state operations:

```javascript
export const useAuth = () => {
  const { isAuthenticated, token } = useAuthStore();
  const { user } = useUserStore();

  const login = async (credentials) => {
    // ... login logic
  };

  const logout = () => {
    useAuthStore.getState().clearAuth();
    useUserStore.getState().clearUser();
  };

  return { isAuthenticated, token, user, login, logout };
};
```

### 6. Update Route Guards

Modify route guards to use Zustand stores for checking authentication status.

### Implementation Timeline

1. Create Zustand stores (1 day)
2. Update main components (Profile, Account, Login, Register) (2-3 days)
3. Refactor API calls and state updates (1-2 days)
4. Implement persistence and custom hooks (1 day)
5. Update route guards and perform thorough testing (1-2 days)

Total estimated time: 6-9 days

## Conclusion

This plan outlines a comprehensive approach to fully implement Zustand for state management across the application. It will result in more predictable state updates, easier management of global state, and improved performance by reducing unnecessary re-renders.

