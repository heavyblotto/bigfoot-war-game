import { useState, useEffect } from 'react';
import { useBigfootPlayerStore } from '@/store/bigfootPlayerStore';
import { useAuthStore } from '@/store/authStore';

export const useBigfootPlayer = () => {
  const { user } = useAuthStore();
  const { bigfoots, selectedBigfoot, fetchBigfoots, selectBigfoot } = useBigfootPlayerStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBigfoots = async () => {
      setLoading(true);
      await fetchBigfoots();
      const currentBigfoots = useBigfootPlayerStore.getState().bigfoots;
      console.log('Fetched bigfoots:', currentBigfoots);
      setLoading(false);
    };
    loadBigfoots();
  }, [fetchBigfoots]);

  const selectBigfootPlayer = async (bigfootId) => {
    if (user?.player?.id) {
      await selectBigfoot(bigfootId);
    }
  };

  return {
    bigfoots,
    selectedBigfoot,
    selectBigfootPlayer,
    loading,
  };
};
