import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
  },
  fonts: {
    heading: '"Press Start 2P", sans-serif',
    body: '"Roboto", sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'white',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        fontFamily: '"Press Start 2P", sans-serif',
        color: 'white', // Change this to white
        textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
        transition: 'all 0.3s ease-in-out',
        _hover: {
          transform: 'scale(1.05)',
        },
      },
      variants: {
        solid: (props) => ({
          bg: `${props.colorScheme}.400`,
          bgGradient: `linear(to-r, ${props.colorScheme}.400, ${props.colorScheme}.600)`,
          boxShadow: `0px 4px 10px ${props.colorScheme}.300`,
          _hover: {
            bgGradient: `linear(to-r, ${props.colorScheme}.500, ${props.colorScheme}.700)`,
          },
        }),
      },
    },
  },
});

export default theme;
