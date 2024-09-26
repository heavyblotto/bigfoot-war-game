import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'var(--font-primary)',
    body: 'var(--font-secondary)',
    mono: 'var(--font-accent)',
  },
  components: {
    Heading: {
      baseStyle: {
        textTransform: 'uppercase',
      },
    },
    Button: {
      baseStyle: {
        fontFamily: 'var(--font-primary)',
        textTransform: 'uppercase',
      },
    },
  },
});

export default theme;