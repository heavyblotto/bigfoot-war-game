import { useBigfootPlayerStore } from '@/store/bigfootPlayerStore';
import { useGameStore } from '@/store/gameStore';

export const useBigfootPlayer = () => {
  const {
    bigfoots,
    selectedBigfoot,
    fetchBigfoots,
    selectBigfoot,
    getSelectedBigfoot,
  } = useBigfootPlayerStore();

  const { getSelectedCharacter } = useGameStore();

  const fetchBigfootPlayers = async () => {
    await fetchBigfoots();
  };

  const selectBigfootPlayer = async (bigfootId) => {
    await selectBigfoot(bigfootId);
  };

  const getSelectedBigfootPlayer = () => {
    return getSelectedBigfoot();
  };

  return {
    bigfoots,
    selectedBigfoot,
    fetchBigfootPlayers,
    selectBigfootPlayer,
    getSelectedBigfootPlayer,
  };
};
