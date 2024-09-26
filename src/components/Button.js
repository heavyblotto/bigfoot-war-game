'use client';

import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

const Button = ({ children, ...props }) => {
  return (
    <ChakraButton
      fontFamily="var(--font-primary)"
      textTransform="uppercase"
      bgGradient="linear(to-r, blue.400, blue.600)"
      color="white"
      _hover={{
        bgGradient: "linear(to-r, blue.500, blue.700)",
      }}
      {...props}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
