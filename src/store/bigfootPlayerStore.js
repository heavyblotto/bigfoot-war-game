import { create } from 'zustand';

export const useBigfootPlayerStore = create((set, get) => ({
  bigfoots: [],
  selectedBigfoot: null,

  fetchBigfoots: async () => {
    try {
      const response = await fetch('/api/bigfoot-players');
      if (!response.ok) throw new Error('Failed to fetch bigfoots');
      const data = await response.json();
      set({ bigfoots: data });
    } catch (error) {
      console.error('Error fetching bigfoots:', error);
    }
  },

  selectBigfoot: async (bigfootId) => {
    try {
      const response = await fetch(`/api/bigfoot-players/${bigfootId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isSelected: true }),
      });
      if (!response.ok) throw new Error('Failed to select bigfoot');
      const updatedBigfoot = await response.json();
      set(state => ({
        bigfoots: state.bigfoots.map(b => 
          b.id === bigfootId ? { ...b, isSelected: true } : { ...b, isSelected: false }
        ),
        selectedBigfoot: updatedBigfoot
      }));
    } catch (error) {
      console.error('Error selecting bigfoot:', error);
    }
  },

  getSelectedBigfoot: () => get().selectedBigfoot,
}));
