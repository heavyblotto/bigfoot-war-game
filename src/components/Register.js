import { useState } from 'react';
import { VStack, FormControl, FormLabel, Input, Button, Heading, Text } from '@chakra-ui/react';

const Register = ({ setUser, onCancel }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!username || !password) {
      setError('Username and password are required');
      return;
    }
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, email }),
      });
      const data = await response.json();
      if (response.ok) {
        setUser(data.user);
        onCancel();
      } else {
        setError(data.error || 'Registration failed');
      }
    } catch (error) {
      setError('An error occurred during registration');
    }
  };

  return (
    <VStack spacing={4} align="stretch">
      <Heading as="h2" size="lg" textAlign="center" color="white">
        Register
      </Heading>
      {error && (
        <Text color="red.500" textAlign="center" mb={4}>
          {error}
        </Text>
      )}
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
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
          <FormControl isRequired>
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
          <FormControl>
            <FormLabel color="white">Email (optional)</FormLabel>
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
            type="submit"
            size="lg"
            width="full"
            colorScheme="red"
            bgGradient="linear(to-r, red.400, red.600)"
            _hover={{
              bgGradient: "linear(to-r, red.500, red.700)",
            }}
          >
            Register
          </Button>
          <Button
            onClick={onCancel}
            size="lg"
            width="full"
            colorScheme="purple"
            bgGradient="linear(to-r, purple.400, purple.600)"
            _hover={{
              bgGradient: "linear(to-r, purple.500, purple.700)",
            }}
          >
            Cancel
          </Button>
        </VStack>
      </form>
    </VStack>
  );
};

export default Register;
