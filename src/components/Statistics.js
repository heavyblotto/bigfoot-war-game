import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import useStrings from '@/hooks/useStrings';

const Statistics = () => {
  const { titles, labels } = useStrings();

  return (
    <VStack spacing={6} align="stretch">
      <Heading as="h2" size="lg" textAlign="center" color="white">
        {titles.statistics}
      </Heading>
      <Box
        borderWidth={2}
        borderRadius="lg"
        p={6}
        bgGradient="linear(to-b, gray.700, gray.600)"
        boxShadow="md"
      >
        <VStack align="start" spacing={3}>
          <Text fontSize="xl" fontWeight="bold" color="white" mb={2}>
            {labels.playerStats}
          </Text>
          <Text color="white">{labels.gamesPlayed}: 0</Text>
          <Text color="white">{labels.wins}: 0</Text>
          <Text color="white">{labels.losses}: 0</Text>
          <Text color="white">{labels.winRate}: 0%</Text>
        </VStack>
      </Box>
    </VStack>
  );
};

export default Statistics;
