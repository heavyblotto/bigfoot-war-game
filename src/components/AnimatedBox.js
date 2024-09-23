import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';

function AnimatedBox() {
  return (
    <Box as={motion.div} animate={{ scale: 1.2 }} transition={{ duration: 0.5 }}>
      Hover over me!
    </Box>
  );
}

export default AnimatedBox;