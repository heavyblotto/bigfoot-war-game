import React, { useState, useEffect } from 'react';
import { Box, SimpleGrid, Image, Text, VStack, Button } from '@chakra-ui/react';
import { useCharacterStore } from '@/store/characterStore';
import { useAuth } from '@/hooks/useAuth';

export function CharacterSelection() {
  const { user } = useAuth();
  const { bigfoots, selectedBigfoot, fetchBigfoots, selectBigfoot } = useCharacterStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBigfoots = async () => {
      await fetchBigfoots();
      setLoading(false);
    };
    loadBigfoots();
  }, [fetchBigfoots]);

  const handleSelectBigfoot = async (bigfoot) => {
    if (user?.player?.id) {
      await selectBigfoot(user.player.id, bigfoot.id);
    }
  };

  if (loading) {
    return <Box>Loading characters...</Box>;
  }

  return (
    <Box>
      <Text fontSize="2xl" mb={4}>Select Your Bigfoot</Text>
      <SimpleGrid columns={[2, 3, 4]} spacing={4}>
        {bigfoots.map((bigfoot) => (
          <VStack
            key={bigfoot.id}
            borderWidth={1}
            borderRadius="md"
            p={2}
            cursor="pointer"
            bg={selectedBigfoot?.id === bigfoot.id ? 'green.100' : 'gray.100'}
          >
            <Image src={bigfoot.imageUrl || '/placeholder.png'} alt={bigfoot.name} boxSize="100px" objectFit="cover" />
            <Text fontWeight="bold">{bigfoot.name}</Text>
            <Text>Type: {bigfoot.type}</Text>
            <Text>HP: {bigfoot.hp}</Text>
            <Text>Defense: {bigfoot.defense}</Text>
            <Text>Luck: {bigfoot.luck}</Text>
            <Button onClick={() => handleSelectBigfoot(bigfoot)}>
              {selectedBigfoot?.id === bigfoot.id ? 'Selected' : 'Select'}
            </Button>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
}
