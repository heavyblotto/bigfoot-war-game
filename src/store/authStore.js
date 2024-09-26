import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      token: null,
      setAuth: (isAuthenticated, token) => {
        console.log('Setting auth in store:', { isAuthenticated, token });
        set({ isAuthenticated, token });
        console.log('Auth state after set:', get());
      },
      clearAuth: () => {
        console.log('Clearing auth in store');
        set({ isAuthenticated: false, token: null });
        console.log('Auth state after clear:', get());
      },
    }),
    {
      name: 'auth-storage',
      getStorage: () => localStorage,
    }
  )
);
