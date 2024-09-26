import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import useStrings from '@/hooks/useStrings';

const Settings = () => {
  const { titles, messages } = useStrings();

  return (
    <Box>
      <Heading as="h3" size="lg" mb={4}>{titles.settings}</Heading>
      <Text>{messages.settingsComingSoon}</Text>
    </Box>
  );
};

export default Settings;
