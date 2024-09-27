import { create } from 'zustand';

export const useCharacterStore = create((set, get) => ({
  bigfoots: [],
  selectedBigfoot: null,

  fetchBigfoots: async () => {
    try {
      const response = await fetch('/api/characters');
      const data = await response.json();
      set({ bigfoots: data });
    } catch (error) {
      console.error('Error fetching bigfoots:', error);
    }
  },

  selectBigfoot: async (playerId, bigfootId) => {
    try {
      const response = await fetch(`/api/users/${playerId}/selected-character`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bigfootId }),
      });
      const updatedPlayer = await response.json();
      const selectedBigfoot = get().bigfoots.find(b => b.id === bigfootId);
      set({ selectedBigfoot });
    } catch (error) {
      console.error('Error selecting bigfoot:', error);
    }
  },

  getSelectedBigfoot: (playerId) => {
    // This is a placeholder. In a real implementation, you might want to fetch this from the server
    // or maintain it in the state if it's updated frequently.
    return get().selectedBigfoot;
  },
}));
