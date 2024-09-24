'use client';

import { useState } from 'react';
import { Box, Heading, VStack, Container, Button, Text } from '@chakra-ui/react';
import Register from '../components/Register';
import Login from '../components/Login';
import Profile from '../components/Profile';
import Lobby from '../components/Lobby';

const Home = () => {
  const [user, setUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Container maxW="container.xl" centerContent>
      <VStack spacing={8} align="stretch" py={8}>
        <Heading
          as="h1"
          size="2xl"
          textAlign="center"
          color="white"
          fontFamily="'Press Start 2P', cursive"
          bgGradient="linear(to-r, #ff00ff, #00ffff)"
          bgClip="text"
          letterSpacing="2px"
          p={4}
          borderWidth={4}
          borderColor="#ff00ff"
          borderRadius="lg"
          boxShadow="0 0 20px #ff00ff"
        >
          Bigfoot War!
        </Heading>
        <Box
          borderWidth={2}
          borderRadius="lg"
          p={8}
          bgGradient="linear(to-b, gray.800, gray.700)"
          boxShadow="lg"
        >
          {!user ? (
            <>
              {!showRegister && !showLogin ? (
                <VStack spacing={4}>
                  <Button
                    onClick={() => setShowRegister(true)}
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
                    onClick={() => setShowLogin(true)}
                    size="lg"
                    width="full"
                    colorScheme="blue"
                    bgGradient="linear(to-r, blue.400, blue.600)"
                    _hover={{
                      bgGradient: "linear(to-r, blue.500, blue.700)",
                    }}
                  >
                    Login
                  </Button>
                </VStack>
              ) : showRegister ? (
                <Register setUser={setUser} onCancel={() => setShowRegister(false)} />
              ) : (
                <Login setUser={setUser} onCancel={() => setShowLogin(false)} />
              )}
            </>
          ) : (
            <Lobby user={user} setUser={setUser} />
          )}
        </Box>
      </VStack>
    </Container>
  );
};

export default Home;
