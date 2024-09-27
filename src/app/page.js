'use client';

import { useState, useEffect } from 'react';
import { Box, Heading, VStack, Container, Button, Text, useColorModeValue, Flex, Spinner } from '@chakra-ui/react';
import Image from 'next/image';
import Register from '../components/Register';
import Login from '../components/Login';
import Lobby from '../components/Lobby';
import useStrings from '@/hooks/useStrings';
import { motion } from 'framer-motion';
import { useUserStore } from '@/store/userStore';

const MotionBox = motion(Box);

const Home = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { titles, labels, messages } = useStrings();
  const user = useUserStore(state => state.user);
  const setUser = useUserStore(state => state.setUser);

  const bgGradient = useColorModeValue(
    'linear(to-b, gray.800, gray.700)',
    'linear(to-b, gray.900, gray.800)'
  );

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch('/api/auth/verify', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.user) {
            setUser(data.user);
          }
        })
        .catch((error) => {
          console.error('Error verifying token:', error);
          localStorage.removeItem('token');
        })
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Spinner size="xl" color="blue.500" />
      </Flex>
    );
  }

  return (
    <Container maxW="container.xl" centerContent minHeight="100vh" py={8}>
      <VStack spacing={8} align="stretch" width="100%">
        <MotionBox
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
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
            width="100%"
            maxWidth="600px"
            mx="auto"
          >
            {titles.mainTitle}
          </Heading>
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          borderWidth={2}
          borderRadius="lg"
          p={8}
          bgGradient={bgGradient}
          boxShadow="lg"
          width="100%"
          maxWidth="600px"
          mx="auto"
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
                    transition="all 0.2s"
                  >
                    {labels.register}
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
                    transition="all 0.2s"
                  >
                    {labels.login}
                  </Button>
                </VStack>
              ) : showRegister ? (
                <Register setUser={setUser} onCancel={() => setShowRegister(false)} />
              ) : (
                <Login onCancel={() => setShowLogin(false)} />
              )}
            </>
          ) : (
            <Lobby user={user} setUser={setUser} />
          )}
        </MotionBox>
        {!user && !showRegister && !showLogin && (
          <MotionBox
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Box position="relative" width="100%" maxWidth="600px" height="300px" mx="auto">
              <Image
                src="/assets/images/Bigfoot-War.webp"
                alt="Bigfoot War"
                fill
                style={{ objectFit: 'cover', borderRadius: '0.5rem' }}
              />
            </Box>
            <Text
              color="white"
              fontSize="sm"
              fontFamily="'Press Start 2P', cursive"
              textAlign="center"
              mt={4}
              width="100%"
              maxWidth="600px"
              mx="auto"
            >
              {messages.gameDescription}
            </Text>
          </MotionBox>
        )}
      </VStack>
    </Container>
  );
};

export default Home;
