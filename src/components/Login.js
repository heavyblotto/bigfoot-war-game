import { useState } from 'react';
import { VStack, FormControl, FormLabel, Input, Button, Heading, Text } from '@chakra-ui/react';

const Login = ({ setUser, onCancel }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
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
        localStorage.setItem('token', data.token);
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (error) {
      setError('An error occurred during login');
    }
  };

  return (
    <VStack spacing={4} align="stretch">
      <Heading as="h2" size="lg" textAlign="center" color="white">
        Login
      </Heading>
      {error && (
        <Text color="red.500" textAlign="center" mb={4}>
          {error}
        </Text>
      )}
      <form onSubmit={handleLogin}>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel color="white">Username</FormLabel>
            <Input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
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
          <FormControl>
            <FormLabel color="white">Password</FormLabel>
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
            colorScheme="blue"
            width="full"
            mt={4}
            type="submit"
            bgGradient="linear(to-r, blue.400, blue.600)"
            _hover={{}} // Remove hover effect
          >
            Login
          </Button>
        </VStack>
      </form>
    </VStack>
  );
};

export default Login;
