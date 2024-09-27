import React, { useState, useEffect } from 'react';
import { Box, SimpleGrid, Image, Text, VStack, Button } from '@chakra-ui/react';
import { useBigfootPlayer } from '@/hooks/useBigfootPlayer';
import { useAuth } from '@/hooks/useAuth';

export function BigfootSelection() {
  const { user } = useAuth();
  const { bigfoots, selectedBigfoot, fetchBigfootPlayers, selectBigfootPlayer } = useBigfootPlayer();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBigfoots = async () => {
      await fetchBigfootPlayers();
      setLoading(false);
    };
    loadBigfoots();
  }, [fetchBigfootPlayers]);

  const handleSelectBigfoot = async (bigfoot) => {
    if (user?.player?.id) {
      await selectBigfootPlayer(bigfoot.id);
    }
  };

  if (loading) {
    return <Box>Loading Bigfoots...</Box>;
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
