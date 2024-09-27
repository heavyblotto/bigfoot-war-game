import { create } from 'zustand';
import { useCharacterStore } from './characterStore';

export const useGameStore = create((set, get) => ({
  gameState: 'idle',
  currentRound: 0,
  playerScore: 0,
  opponentScore: 0,
  setGameState: (state) => set({ gameState: state }),
  incrementRound: () => set((state) => ({ currentRound: state.currentRound + 1 })),
  updateScore: (player, opponent) => set({ playerScore: player, opponentScore: opponent }),
  resetGame: () => set({ gameState: 'idle', currentRound: 0, playerScore: 0, opponentScore: 0 }),
  getSelectedCharacter: () => useCharacterStore.getState().selectedCharacter,
}));
