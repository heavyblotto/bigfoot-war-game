import { VStack, Heading, Button, Text, Box } from '@chakra-ui/react';

const Lobby = ({ user }) => {
  return (
    <VStack spacing={6} align="stretch">
      <Heading as="h2" size="lg" textAlign="center" color="white">
        Game Lobby
      </Heading>
      <Box
        borderWidth={2}
        borderRadius="lg"
        p={6}
        bgGradient="linear(to-b, gray.700, gray.600)"
        boxShadow="md"
      >
        <Text fontSize="xl" fontWeight="bold" color="white" mb={4}>
          Welcome to the Lobby, {user.username}!
        </Text>
        <VStack spacing={4}>
          <Button
            size="lg"
            width="full"
            colorScheme="green"
            bgGradient="linear(to-r, green.400, green.600)"
            _hover={{
              bgGradient: "linear(to-r, green.500, green.700)",
            }}
          >
            Start New Game
          </Button>
          <Button
            size="lg"
            width="full"
            colorScheme="blue"
            bgGradient="linear(to-r, blue.400, blue.600)"
            _hover={{
              bgGradient: "linear(to-r, blue.500, blue.700)",
            }}
          >
            Join Existing Game
          </Button>
          <Button
            size="lg"
            width="full"
            colorScheme="purple"
            bgGradient="linear(to-r, purple.400, purple.600)"
            _hover={{
              bgGradient: "linear(to-r, purple.500, purple.700)",
            }}
          >
            View Statistics
          </Button>
        </VStack>
      </Box>
    </VStack>
  );
};

export default Lobby;
