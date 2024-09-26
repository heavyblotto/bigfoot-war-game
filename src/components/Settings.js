import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import useStrings from '@/hooks/useStrings';

const Settings = () => {
  const { titles, messages } = useStrings();

  return (
    <VStack spacing={6} align="stretch">
      <Heading as="h2" size="lg" textAlign="center" color="white" fontFamily="'Press Start 2P', cursive">
        {titles.settings}
      </Heading>
      <Box
        borderWidth={2}
        borderRadius="lg"
        p={6}
        bgGradient="linear(to-b, gray.700, gray.600)"
        boxShadow="md"
      >
        <Text color="white" fontFamily="'Roboto', sans-serif">
          {messages.settingsComingSoon}
        </Text>
      </Box>
    </VStack>
  );
};

export default Settings;
