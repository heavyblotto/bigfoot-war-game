import React, { useState } from 'react';
import { VStack, HStack, Text, Button, Heading, Box, Image, Progress, FormControl, FormLabel, Input } from '@chakra-ui/react';
import useStrings from '@/hooks/useStrings';
import { FaSignOutAlt, FaTrophy } from 'react-icons/fa';

const Profile = ({ user, setUser }) => {
  const { titles, labels, messages } = useStrings();
  const [email, setEmail] = useState(user.email || '');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogout = () => {
    setUser(null);
  };

  const handleUpdateEmail = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const response = await fetch('/api/auth/update-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, email }),
      });
      const data = await response.json();
      if (response.ok) {
        setUser({ ...user, email });
        setMessage(messages.emailUpdateSuccess);
      } else {
        setMessage(data.error || messages.emailUpdateError);
      }
    } catch (error) {
      setMessage(messages.generalError);
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const response = await fetch('/api/auth/update-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setPassword('');
        setMessage(messages.passwordUpdateSuccess);
      } else {
        setMessage(data.error || messages.passwordUpdateError);
      }
    } catch (error) {
      setMessage(messages.generalError);
    }
  };

  // TODO: Replace mock data with real user data from the backend
  // Mock data for demonstration purposes only
  const playerLevel = 5;
  const xp = 750;
  const xpToNextLevel = 1000;
  const dateJoined = "2023-05-01";
  const achievements = [
    { id: 1, name: "First Win", unlocked: true },
    { id: 2, name: "Reach Level 5", unlocked: true },
    { id: 3, name: "Win 10 Games", unlocked: false },
  ];
  const inventory = [
    { id: 1, name: "Health Potion", quantity: 5 },
    { id: 2, name: "Sword of Power", quantity: 1 },
  ];

  return (
    <VStack spacing={6} align="stretch">
      <Heading as="h2" size="lg" textAlign="center" color="white" fontFamily="'Press Start 2P', cursive">
        {titles.profile}
      </Heading>
      <Box
        borderWidth={2}
        borderRadius="lg"
        p={6}
        bgGradient="linear(to-b, gray.700, gray.600)"
        boxShadow="md"
      >
        {/* TODO: Implement real user avatar upload and display */}
        <HStack spacing={4} mb={4}>
          <Image
            borderRadius="full"
            boxSize="100px"
            src="/placeholder-avatar.jpg"
            alt={user.username}
            fallbackSrc="https://via.placeholder.com/100"
          />
          <VStack align="start" spacing={1}>
            <Text fontSize="2xl" fontWeight="bold" color="white" fontFamily="'Press Start 2P', cursive">{user.username}</Text>
            <Text color="gray.300" fontFamily="'Roboto', sans-serif">Level {playerLevel}</Text>
            <Text color="gray.300" fontFamily="'Roboto', sans-serif">Joined: {dateJoined}</Text>
          </VStack>
        </HStack>

        {/* TODO: Implement real XP progress tracking */}
        <Text color="white" mb={2} fontFamily="'Press Start 2P', cursive">XP Progress</Text>
        <Progress value={(xp / xpToNextLevel) * 100} colorScheme="green" mb={4} />
        <Text color="gray.300" mb={4} fontFamily="'Roboto', sans-serif">{xp} / {xpToNextLevel} XP</Text>

        {/* TODO: Implement real achievement system */}
        <Heading as="h3" size="md" color="white" mb={2} fontFamily="'Press Start 2P', cursive">
          {labels.achievements}
        </Heading>
        <VStack align="start" spacing={2} mb={4}>
          {achievements.map(achievement => (
            <HStack key={achievement.id}>
              <FaTrophy color={achievement.unlocked ? "gold" : "gray"} />
              <Text color={achievement.unlocked ? "white" : "gray.500"} fontFamily="'Roboto', sans-serif">{achievement.name}</Text>
            </HStack>
          ))}
        </VStack>

        {/* TODO: Implement real inventory system */}
        <Heading as="h3" size="md" color="white" mb={2} fontFamily="'Press Start 2P', cursive">
          {labels.inventory}
        </Heading>
        <VStack align="start" spacing={2} mb={4}>
          {inventory.map(item => (
            <Text key={item.id} color="white" fontFamily="'Roboto', sans-serif">{item.name} x{item.quantity}</Text>
          ))}
        </VStack>

        {/* Account Management Section */}
        <Heading as="h3" size="md" color="white" mb={4} fontFamily="'Press Start 2P', cursive">
          {titles.accountManagement}
        </Heading>
        {message && (
          <Text color="green.300" mb={4} fontFamily="'Roboto', sans-serif">
            {message}
          </Text>
        )}
        <form onSubmit={handleUpdateEmail}>
          <FormControl mb={4}>
            <FormLabel color="white" fontFamily="'Press Start 2P', cursive" fontSize="sm">{labels.email}</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              bg="gray.800"
              color="white"
              border="1px"
              borderColor="gray.600"
              _hover={{
                borderColor: "gray.500"
              }}
              _focus={{
                borderColor: "blue.300",
                boxShadow: "0 0 0 1px #63B3ED"
              }}
              fontFamily="'Roboto', sans-serif"
            />
          </FormControl>
          <Button
            mt={2}
            mb={4}
            colorScheme="blue"
            type="submit"
            width="full"
          >
            {labels.updateEmail}
          </Button>
        </form>
        <form onSubmit={handleUpdatePassword}>
          <FormControl mb={4}>
            <FormLabel color="white" fontFamily="'Press Start 2P', cursive" fontSize="sm">{labels.newPassword}</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              bg="gray.800"
              color="white"
              border="1px"
              borderColor="gray.600"
              _hover={{
                borderColor: "gray.500"
              }}
              _focus={{
                borderColor: "blue.300",
                boxShadow: "0 0 0 1px #63B3ED"
              }}
              fontFamily="'Roboto', sans-serif"
            />
          </FormControl>
          <Button
            mt={2}
            mb={4}
            colorScheme="blue"
            type="submit"
            width="full"
          >
            {labels.updatePassword}
          </Button>
        </form>

        <Button
          mt={6}
          onClick={handleLogout}
          size="lg"
          width="full"
          colorScheme="red"
          bgGradient="linear(to-r, red.400, red.600)"
          _hover={{
            bgGradient: "linear(to-r, red.500, red.700)",
          }}
          leftIcon={<FaSignOutAlt />}
        >
          {labels.logout}
        </Button>
      </Box>
    </VStack>
  );
};

export default Profile;
