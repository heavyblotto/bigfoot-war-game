import { VStack, Text, Button, Heading, Box } from '@chakra-ui/react';

const Profile = ({ user, setUser }) => {
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <VStack spacing={6} align="stretch">
      <Heading as="h2" size="lg" textAlign="center" color="white">
        Profile
      </Heading>
      <Box
        borderWidth={2}
        borderRadius="lg"
        p={6}
        bgGradient="linear(to-b, gray.700, gray.600)"
        boxShadow="md"
      >
        <Text fontSize="xl" fontWeight="bold" color="white" mb={4}>
          Welcome, {user.username}!
        </Text>
        <Text color="gray.300" mb={2}>
          Player Stats:
        </Text>
        <Text color="white" mb={1}>Games Played: 0</Text>
        <Text color="white" mb={1}>Wins: 0</Text>
        <Text color="white" mb={4}>Losses: 0</Text>
      </Box>
      <Button
        onClick={handleLogout}
        size="lg"
        width="full"
        colorScheme="red"
      >
        Logout
      </Button>
    </VStack>
  );
};

export default Profile;
