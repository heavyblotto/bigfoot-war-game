import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  token: null,
  isAuthenticated: false,
  setAuth: (isAuthenticated, token) => set({ isAuthenticated, token }),
  clearAuth: () => set({ isAuthenticated: false, token: null }),
}));
