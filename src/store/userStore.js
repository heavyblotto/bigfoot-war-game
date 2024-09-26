import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      updateUser: (updatedFields) => set((state) => ({
        user: { ...state.user, ...updatedFields }
      })),
      clearUser: () => set({ user: null }),
    }),
    {
      name: 'user-storage', // unique name for localStorage key
      getStorage: () => localStorage, // specify storage medium
    }
  )
);
