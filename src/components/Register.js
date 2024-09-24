import { useState } from 'react';
import { VStack, FormControl, FormLabel, Input, Button, Heading } from '@chakra-ui/react';

const Register = ({ setUser, onCancel }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    // Here we'll add the registration logic
    console.log('Register:', username, password);
    // For now, let's just set a mock user
    setUser({ username });
  };

  return (
    <VStack spacing={4} align="stretch">
      <Heading as="h2" size="lg" textAlign="center" color="white">
        Register
      </Heading>
      <form onSubmit={handleRegister}>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel color="white">Username</FormLabel>
            <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel color="white">Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
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
            variant="outline"
            colorScheme="gray"
            _hover={{
              bg: "gray.700",
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
