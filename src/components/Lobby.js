import React, { useState } from 'react';
import { VStack, HStack, Heading, Box, Text, Button, keyframes, usePrefersReducedMotion, Grid, GridItem } from '@chakra-ui/react';
import Statistics from './Statistics';
import Shop from './Shop';
import Settings from './Settings';
import Account from './Account';
import Profile from './Profile';
import { FaChessKing, FaPlay, FaShoppingCart, FaCog, FaUser, FaArrowLeft, FaChartBar } from 'react-icons/fa';
import useStrings from '@/hooks/useStrings';

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const Lobby = ({ user, setUser }) => {
  const [currentView, setCurrentView] = useState('main');
  const prefersReducedMotion = usePrefersReducedMotion();
  const { titles, labels, messages } = useStrings();

  const animation = prefersReducedMotion
    ? undefined
    : `${pulseAnimation} 2s ease-in-out infinite`;

  const renderView = () => {
    switch (currentView) {
      case 'statistics':
        return <Statistics />;
      case 'shop':
        return <Shop />;
      case 'settings':
        return <Settings />;
      case 'account':
        return <Account user={user} setUser={setUser} />;
      case 'profile':
        return <Profile user={user} setUser={setUser} />;
      default:
        return (
          <VStack spacing={6} align="stretch">
            <HStack justifyContent="center" alignItems="center">
              <FaChessKing size={24} color="white" />
              <Text
                fontSize="xl"
                fontWeight="bold"
                color="white"
                fontFamily='"Press Start 2P", sans-serif'
              >
                {messages.welcomeUser.replace('{username}', user.username)}
              </Text>
            </HStack>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              <GridItem colSpan={2}>
                <Button
                  size="lg"
                  width="full"
                  height="80px"
                  fontSize="2xl"
                  colorScheme="green"
                  bgGradient="linear(to-r, green.400, green.600)"
                  _hover={{
                    bgGradient: "linear(to-r, green.500, green.700)",
                    transform: "scale(1.05)",
                  }}
                  boxShadow="0px 4px 10px rgba(0, 255, 0, 0.3)"
                  transition="all 0.3s ease-in-out"
                  onClick={() => alert(messages.startGameComingSoon)}
                  animation={animation}
                  leftIcon={<FaPlay />}
                >
                  {labels.play}
                </Button>
              </GridItem>
              <GridItem>
                <Button
                  size="lg"
                  width="full"
                  height="60px"
                  colorScheme="yellow"
                  bgGradient="linear(to-r, yellow.400, yellow.600)"
                  _hover={{
                    bgGradient: "linear(to-r, yellow.500, yellow.700)",
                  }}
                  onClick={() => setCurrentView('shop')}
                  color="white"
                  leftIcon={<FaShoppingCart />}
                >
                  {labels.shop}
                </Button>
              </GridItem>
              <GridItem>
                <Button
                  size="lg"
                  width="full"
                  height="60px"
                  colorScheme="cyan"
                  bgGradient="linear(to-r, cyan.400, cyan.600)"
                  _hover={{
                    bgGradient: "linear(to-r, cyan.500, cyan.700)",
                  }}
                  onClick={() => setCurrentView('settings')}
                  color="white"
                  leftIcon={<FaCog />}
                >
                  {labels.settings}
                </Button>
              </GridItem>
              <GridItem>
                <Button
                  size="lg"
                  width="full"
                  height="60px"
                  colorScheme="orange"
                  bgGradient="linear(to-r, orange.400, orange.600)"
                  _hover={{
                    bgGradient: "linear(to-r, orange.500, orange.700)",
                  }}
                  onClick={() => setCurrentView('profile')}
                  color="white"
                  leftIcon={<FaUser />}
                >
                  {labels.profile}
                </Button>
              </GridItem>
              <GridItem>
                <Button
                  size="lg"
                  width="full"
                  height="60px"
                  colorScheme="purple"
                  bgGradient="linear(to-r, purple.400, purple.600)"
                  _hover={{
                    bgGradient: "linear(to-r, purple.500, purple.700)",
                  }}
                  onClick={() => setCurrentView('statistics')}
                  color="white"
                  leftIcon={<FaChartBar />}
                >
                  {labels.statistics}
                </Button>
              </GridItem>
            </Grid>
          </VStack>
        );
    }
  };

  return (
    <VStack spacing={6} align="stretch">
      <Heading as="h2" size="lg" textAlign="center" color="white">
        <HStack justifyContent="center" spacing={2}>
          <FaChessKing />
          <Text>{titles.lobby}</Text>
        </HStack>
      </Heading>
      <Box
        borderWidth={2}
        borderRadius="lg"
        p={6}
        bgGradient="linear(to-b, gray.700, gray.600)"
        boxShadow="md"
      >
        {renderView()}
        {currentView !== 'main' && (
          <Button
            mt={4}
            onClick={() => setCurrentView('main')}
            size="lg"
            width="full"
            colorScheme="purple"
            bgGradient="linear(to-r, purple.400, purple.600)"
            _hover={{
              bgGradient: "linear(to-r, purple.500, purple.700)",
            }}
            color="white"
            leftIcon={<FaArrowLeft />}
          >
            {labels.backToLobby}
          </Button>
        )}
      </Box>
    </VStack>
  );
};

export default Lobby;
