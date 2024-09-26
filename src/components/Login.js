'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Box, Button, FormControl, FormLabel, Input, VStack, Text, HStack } from '@chakra-ui/react';
import { useUserStore } from '@/store/userStore';
import { useAuthStore } from '@/store/authStore';

const Login = ({ onCancel }) => {
  const setUser = useUserStore(state => state.setUser);
  const setAuth = useAuthStore(state => state.setAuth);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setUser(data.user);
        setAuth(true, data.token);
        // You might want to add a redirect here or call a function passed as prop
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An unexpected error occurred');
    }
  };

  return (
    <Box maxWidth="400px" margin="auto">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="username" isRequired>
            <FormLabel>Username</FormLabel>
            <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <HStack spacing={4} width="full">
            <Button
              colorScheme="blue"
              width="full"
              type="submit"
              bgGradient="linear(to-r, blue.400, blue.600)"
              _hover={{
                bgGradient: "linear(to-r, blue.500, blue.700)",
              }}
            >
              Login
            </Button>
            <Button
              width="full"
              onClick={onCancel}
              bg="gray.700"
              color="white"
              _hover={{
                bg: "gray.600"
              }}
            >
              Cancel
            </Button>
          </HStack>
          {error && <Text color="red.500">{error}</Text>}
        </VStack>
      </form>
    </Box>
  );
};

export default Login;
