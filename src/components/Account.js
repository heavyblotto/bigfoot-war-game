import React, { useState } from 'react';
import { VStack, Heading, Box, Text, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

const Account = ({ user, setUser }) => {
  const [email, setEmail] = useState(user.email || '');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

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
        setMessage('Email updated successfully');
      } else {
        setMessage(data.error || 'Failed to update email');
      }
    } catch (error) {
      setMessage('An error occurred while updating email');
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
        setMessage('Password updated successfully');
      } else {
        setMessage(data.error || 'Failed to update password');
      }
    } catch (error) {
      setMessage('An error occurred while updating password');
    }
  };

  return (
    <VStack spacing={6} align="stretch">
      <Heading as="h2" size="lg" textAlign="center" color="white">
        Account Management
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
        {message && (
          <Text color="green.300" mb={4}>
            {message}
          </Text>
        )}
        <form onSubmit={handleUpdateEmail}>
          <FormControl>
            <FormLabel color="white">Email</FormLabel>
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
            />
          </FormControl>
          <Button
            mt={4}
            colorScheme="blue"
            type="submit"
            width="full"
          >
            Update Email
          </Button>
        </form>
        <form onSubmit={handleUpdatePassword} mt={6}>
          <FormControl>
            <FormLabel color="white">New Password</FormLabel>
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
            />
          </FormControl>
          <Button
            mt={4}
            colorScheme="blue"
            type="submit"
            width="full"
          >
            Update Password
          </Button>
        </form>
      </Box>
    </VStack>
  );
};

export default Account;
