import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const Statistics = () => {
  return (
    <Box>
      <Heading as="h3" size="lg" mb={4}>Statistics</Heading>
      <VStack align="start" spacing={2}>
        <Text>Games Played: 0</Text>
        <Text>Wins: 0</Text>
        <Text>Losses: 0</Text>
        <Text>Win Rate: 0%</Text>
      </VStack>
    </Box>
  );
};

export default Statistics;
