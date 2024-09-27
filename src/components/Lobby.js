import React, { useState } from 'react';
import { VStack, HStack, Heading, Box, Text, Button, keyframes, usePrefersReducedMotion, SimpleGrid } from '@chakra-ui/react';
import Statistics from './Statistics';
import Shop from './Shop';
import Settings from './Settings';
import Profile from './Profile';
import { FaChessKing, FaPlay, FaShoppingCart, FaCog, FaUser, FaArrowLeft, FaChartBar, FaUserAstronaut } from 'react-icons/fa';
import useStrings from '@/hooks/useStrings';
import { useRouter } from 'next/navigation';

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const Lobby = ({ user, setUser }) => {
  const [currentView, setCurrentView] = useState('main');
  const prefersReducedMotion = usePrefersReducedMotion();
  const { titles, labels, messages } = useStrings();
  const router = useRouter();

  const animation = prefersReducedMotion
    ? undefined
    : `${pulseAnimation} 2s ease-in-out infinite`;

  const renderView = () => {
    switch (currentView) {
      case 'statistics':
        return <Statistics player={user.player} />;
      case 'shop':
        return <Shop />;
      case 'settings':
        return <Settings />;
      case 'profile':
        return <Profile user={user} setUser={setUser} />;
      default:
        return (
          <VStack spacing={6} align="stretch">
            <HStack justifyContent="center" alignItems="center">
              <FaChessKing size={24} color="gold" /> {/* Changed to gold color */}
              <Text
                fontSize="xl"
                fontWeight="bold"
                color="white"
                fontFamily='"Press Start 2P", sans-serif'
              >
                {messages.welcomeUser.replace('{username}', user.username)}
              </Text>
            </HStack>
            <HStack justifyContent="center" spacing={4}>
              <Text color="white">Level: {user.player.level}</Text>
              <Text color="white">XP: {user.player.xp}</Text>
            </HStack>
            <SimpleGrid columns={{ base: 1 }} spacing={4}>
              <Button
                size="lg"
                width="full"
                height="80px"
                fontSize="2xl"
                colorScheme="teal"
                bgGradient="linear(to-r, teal.400, teal.600)"
                _hover={{
                  bgGradient: "linear(to-r, teal.500, teal.700)",
                  transform: "scale(1.05)",
                }}
                boxShadow="0px 4px 10px rgba(0, 255, 0, 0.3)"
                transition="all 0.3s ease-in-out"
                onClick={() => alert(messages.startGameComingSoon)}
                animation={animation}
                leftIcon={<FaPlay color="#333" />}
              >
                {labels.play}
              </Button>
              <Button
                size="lg"
                width="full"
                height="60px"
                colorScheme="blue"
                bgGradient="linear(to-r, blue.400, blue.600)"
                _hover={{
                  bgGradient: "linear(to-r, blue.500, blue.700)",
                }}
                onClick={() => router.push('/character-selection')}
                color="white"
                leftIcon={<FaUserAstronaut color="#333" />}
              >
                My Bigfoots
              </Button>
              <Button
                size="lg"
                width="full"
                colorScheme="yellow"
                bgGradient="linear(to-r, yellow.400, yellow.600)"
                _hover={{
                  bgGradient: "linear(to-r, yellow.500, yellow.700)",
                }}
                onClick={() => setCurrentView('statistics')}
                leftIcon={<FaChartBar color="#333" />}
                color="white"
              >
                {labels.statistics}
              </Button>
              <Button
                size="lg"
                width="full"
                colorScheme="orange"
                bgGradient="linear(to-r, orange.400, orange.600)"
                _hover={{
                  bgGradient: "linear(to-r, orange.500, orange.700)",
                }}
                onClick={() => setCurrentView('shop')}
                leftIcon={<FaShoppingCart color="#333" />}
              >
                {labels.shop}
              </Button>
              <Button
                size="lg"
                width="full"
                colorScheme="gray"
                bgGradient="linear(to-r, gray.500, gray.700)"
                _hover={{
                  bgGradient: "linear(to-r, gray.600, gray.800)",
                }}
                onClick={() => setCurrentView('settings')}
                leftIcon={<FaCog color="#333" />}
                color="white"
              >
                {labels.settings}
              </Button>
              <Button
                size="lg"
                width="full"
                colorScheme="purple"
                bgGradient="linear(to-r, purple.400, purple.600)"
                _hover={{
                  bgGradient: "linear(to-r, purple.500, purple.700)",
                }}
                onClick={() => setCurrentView('profile')}
                leftIcon={<FaUser color="#333" />}
              >
                {labels.profile}
              </Button>
            </SimpleGrid>
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
