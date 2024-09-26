import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useGameStore = create(
  persist(
    (set) => ({
      gameState: null,
      setGameState: (gameState) => set({ gameState }),
      resetGameState: () => set({ gameState: null }),
    }),
    {
      name: 'game-storage',
      getStorage: () => localStorage,
    }
  )
);
