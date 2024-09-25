import { useState } from 'react';
import { VStack, FormControl, FormLabel, Input, Button, Heading, Text } from '@chakra-ui/react';

const Login = ({ setUser, onCancel }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setUser(data.user);
        localStorage.setItem('token', data.token);
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleTestUserLogin = () => {
    setUser({ username: 'testuser' });
  };

  return (
    <VStack spacing={4} align="stretch">
      <Heading as="h2" size="lg" textAlign="center" color="white">
        Login
      </Heading>
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
          <Button
            colorScheme="green"
            width="full"
            mt={2}
            onClick={handleTestUserLogin}
            bgGradient="linear(to-r, green.400, green.600)"
            _hover={{}} // Remove hover effect
          >
            Login as Test User
          </Button>
          <Button
            colorScheme="purple"
            width="full"
            mt={2}
            onClick={onCancel}
            bgGradient="linear(to-r, purple.400, purple.600)"
            _hover={{}} // Remove hover effect
          >
            Cancel
          </Button>
        </VStack>
      </form>
    </VStack>
  );
};

export default Login;
