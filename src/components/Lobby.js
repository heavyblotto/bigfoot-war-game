import React, { useState } from 'react';
import { VStack, Heading, Box, Text, Button, Tooltip, keyframes, usePrefersReducedMotion } from '@chakra-ui/react';
import Statistics from './Statistics';
import Shop from './Shop';
import Settings from './Settings';
import HelpTutorial from './HelpTutorial';

// Add this near the top of your component, outside of the render function
const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const Lobby = ({ user, setUser }) => {
  const [currentView, setCurrentView] = useState('main');
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${pulseAnimation} 2s ease-in-out infinite`;

  const handleLogout = () => {
    setUser(null);
  };

  const renderView = () => {
    switch (currentView) {
      case 'statistics':
        return <Statistics />;
      case 'shop':
        return <Shop />;
      case 'settings':
        return <Settings />;
      case 'help':
        return <HelpTutorial />;
      default:
        return (
          <VStack spacing={4}>
            <Tooltip label={`Welcome to the Lobby, ${user.username}!`} aria-label="Full welcome message">
              <Text
                fontSize="xl"
                fontWeight="bold"
                color="white"
                mb={4}
                fontFamily='"Press Start 2P", sans-serif'
                maxWidth="100%"
                overflow="hidden"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
              >
                Welcome, {user.username}!
              </Text>
            </Tooltip>
            <Button
              size="lg"
              width="full"
              height="60px"
              fontSize="xl"
              colorScheme="green"
              bgGradient="linear(to-r, green.400, green.600)"
              _hover={{
                bgGradient: "linear(to-r, green.500, green.700)",
                transform: "scale(1.05)",
              }}
              boxShadow="0px 4px 10px rgba(0, 255, 0, 0.3)"
              transition="all 0.3s ease-in-out"
              onClick={() => alert('Start New Game feature coming soon!')}
              animation={animation}
            >
              Start New Game
            </Button>
            <Button
              size="lg"
              width="full"
              colorScheme="blue"
              bgGradient="linear(to-r, blue.400, blue.600)"
              _hover={{
                bgGradient: "linear(to-r, blue.500, blue.700)",
              }}
              onClick={() => alert('Join Existing Game feature coming soon!')}
            >
              Join Existing Game
            </Button>
            <Button
              size="lg"
              width="full"
              colorScheme="yellow"
              bgGradient="linear(to-r, yellow.400, yellow.600)"
              _hover={{
                bgGradient: "linear(to-r, yellow.500, yellow.700)",
              }}
              onClick={() => setCurrentView('shop')}
              color="white"  // This ensures the text color is white
            >
              Shop
            </Button>
            <Button
              size="lg"
              width="full"
              colorScheme="cyan"
              bgGradient="linear(to-r, cyan.400, cyan.600)"
              _hover={{
                bgGradient: "linear(to-r, cyan.500, cyan.700)",
              }}
              onClick={() => setCurrentView('settings')}
              color="white"
            >
              Settings
            </Button>
            <Button
              size="lg"
              width="full"
              colorScheme="teal"
              bgGradient="linear(to-r, teal.400, teal.600)"
              _hover={{
                bgGradient: "linear(to-r, teal.500, teal.700)",
              }}
              onClick={() => setCurrentView('help')}
            >
              Help/Tutorial
            </Button>
            <Button
              onClick={handleLogout}
              size="lg"
              width="full"
              colorScheme="red"
              bgGradient="linear(to-r, red.400, red.600)"
              _hover={{
                bgGradient: "linear(to-r, red.500, red.700)",
              }}
            >
              Logout
            </Button>
          </VStack>
        );
    }
  };

  return (
    <VStack spacing={6} align="stretch">
      <Heading as="h2" size="lg" textAlign="center" color="white">
        Game Lobby
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
          >
            Back to Lobby
          </Button>
        )}
      </Box>
    </VStack>
  );
};

export default Lobby;
