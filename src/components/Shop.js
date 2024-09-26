import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import useStrings from '@/hooks/useStrings';

const Shop = () => {
  const { titles, messages } = useStrings();

  return (
    <Box>
      <Heading as="h3" size="lg" mb={4}>{titles.shop}</Heading>
      <Text>{messages.shopComingSoon}</Text>
    </Box>
  );
};

export default Shop;
