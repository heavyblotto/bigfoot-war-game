import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import useStrings from '@/hooks/useStrings';

const HelpTutorial = () => {
  const { titles, messages } = useStrings();

  return (
    <Box>
      <Heading as="h3" size="lg" mb={4}>{titles.helpTutorial}</Heading>
      <Text>{messages.helpTutorialComingSoon}</Text>
    </Box>
  );
};

export default HelpTutorial;
