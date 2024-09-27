'use client';

import React from 'react';
import { Box, SimpleGrid, Image, Text, VStack, Button, useColorModeValue, Spinner } from '@chakra-ui/react';
import { useBigfootPlayer } from '@/hooks/useBigfootPlayer';
import { useAuth } from '@/hooks/useAuth';
import useStrings from '@/hooks/useStrings';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export function BigfootSelection() {
  const { user } = useAuth();
  const { bigfoots, selectedBigfoot, selectBigfootPlayer, loading } = useBigfootPlayer();
  const { labels, messages } = useStrings();
  console.log('Bigfoots:', bigfoots);

  const handleSelectBigfoot = async (bigfoot) => {
    if (user?.player?.id) {
      await selectBigfootPlayer(bigfoot.id);
    }
  };

  const bgColor = useColorModeValue('gray.700', 'gray.900');
  const selectedBgColor = useColorModeValue('green.500', 'green.700');

  if (loading) {
    return <Box textAlign="center"><Spinner size="xl" color="white" /></Box>;
  }

  if (bigfoots.length === 0) {
    return <Box textAlign="center"><Text color="white">No Bigfoots available</Text></Box>;
  }

  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={6}>
      {bigfoots.map((bigfoot) => {
        console.log('Bigfoot data:', bigfoot);
        return (
          <MotionBox
            key={bigfoot.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg={selectedBigfoot?.id === bigfoot.id ? selectedBgColor : bgColor}
            _hover={{ transform: "scale(1.05)" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image src={bigfoot.name ? `/assets/images/characters/${bigfoot.name.toLowerCase()}.png` : '/placeholder.png'} alt={bigfoot.name || 'Unknown Bigfoot'} />
            <VStack p={4} spacing={2} align="start">
              <Text fontWeight="bold" fontSize="xl">{bigfoot.name || 'Unknown Bigfoot'}</Text>
              <Text><strong>Type:</strong> {bigfoot.type || 'N/A'}</Text>
              <Text fontSize="sm" noOfLines={3}><strong>Description:</strong> {bigfoot.description || 'No description available'}</Text>
              <Text fontSize="sm"><strong>Location:</strong> {bigfoot.location || 'Unknown'}</Text>
              <Text fontSize="sm"><strong>Habitat:</strong> {Array.isArray(bigfoot.habitat) ? bigfoot.habitat.join(', ') : (bigfoot.habitat || 'Unknown')}</Text>
              <Button
                colorScheme={selectedBigfoot?.id === bigfoot.id ? "green" : "blue"}
                onClick={() => handleSelectBigfoot(bigfoot)}
                isDisabled={!user}
              >
                {selectedBigfoot?.id === bigfoot.id ? labels.selected : labels.selectBigfoot}
              </Button>
            </VStack>
          </MotionBox>
        );
      })}
    </SimpleGrid>
  );
}
