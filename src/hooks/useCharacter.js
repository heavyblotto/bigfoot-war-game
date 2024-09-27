import { useCharacterStore } from '@/store/characterStore';
import { useGameStore } from '@/store/gameStore';

export const useCharacter = () => {
  const {
    characters,
    selectedCharacter,
    setCharacters,
    setSelectedCharacter,
    addCharacter,
    updateCharacter,
    removeCharacter,
  } = useCharacterStore();

  const { getSelectedCharacter } = useGameStore();

  const fetchCharacters = async () => {
    try {
      const response = await fetch('/api/characters');
      const data = await response.json();
      setCharacters(data);
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };

  const createCharacter = async (characterData) => {
    try {
      const response = await fetch('/api/characters', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(characterData),
      });
      const newCharacter = await response.json();
      addCharacter(newCharacter);
      return newCharacter;
    } catch (error) {
      console.error('Error creating character:', error);
    }
  };

  const updateCharacterData = async (characterId, updateData) => {
    try {
      const response = await fetch(`/api/characters/${characterId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateData),
      });
      const updatedCharacter = await response.json();
      updateCharacter(updatedCharacter);
      return updatedCharacter;
    } catch (error) {
      console.error('Error updating character:', error);
    }
  };

  const deleteCharacter = async (characterId) => {
    try {
      await fetch(`/api/characters/${characterId}`, { method: 'DELETE' });
      removeCharacter(characterId);
    } catch (error) {
      console.error('Error deleting character:', error);
    }
  };

  return {
    characters,
    selectedCharacter,
    setSelectedCharacter,
    fetchCharacters,
    createCharacter,
    updateCharacterData,
    deleteCharacter,
    getSelectedCharacter,
  };
};
