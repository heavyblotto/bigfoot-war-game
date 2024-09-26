import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      updateUser: (updatedUser) => set((state) => ({ user: { ...state.user, ...updatedUser } })),
      clearUser: () => set({ user: null }),
    }),
    {
      name: 'user-storage',
      getStorage: () => localStorage,
    }
  )
);
