import React from 'react';
import { Box, Heading, Text, VStack, HStack, Progress } from '@chakra-ui/react';
import useStrings from '@/hooks/useStrings';
import { useUserStore } from '@/store/userStore';

const Statistics = () => {
  const { titles, labels } = useStrings();
  const user = useUserStore(state => state.user);

  // Calculate win rate
  const totalGames = user?.player?.gamesPlayed || 0;
  const winRate = totalGames > 0 ? ((user?.player?.wins || 0) / totalGames * 100).toFixed(2) : 0;

  // Calculate XP progress to next level (assuming 100 XP per level)
  const xpProgress = (user?.player?.xp % 100) || 0;

  return (
    <VStack spacing={6} align="stretch">
      <Heading as="h2" size="lg" textAlign="center" color="white">
        {titles.statistics}
      </Heading>
      <Box
        borderWidth={2}
        borderRadius="lg"
        p={6}
        bgGradient="linear(to-b, gray.700, gray.600)"
        boxShadow="md"
      >
        <VStack align="start" spacing={3}>
          <Text fontSize="xl" fontWeight="bold" color="white" mb={2}>
            {labels.playerStats}
          </Text>
          <HStack justifyContent="space-between" width="100%">
            <Text color="white">{labels.level}:</Text>
            <Text color="white" fontWeight="bold">{user?.player?.level || 1}</Text>
          </HStack>
          <HStack justifyContent="space-between" width="100%">
            <Text color="white">{labels.xp}:</Text>
            <Text color="white" fontWeight="bold">{user?.player?.xp || 0}</Text>
          </HStack>
          <Text color="white" fontSize="sm">XP to next level:</Text>
          <Progress value={xpProgress} width="100%" colorScheme="green" />
          <HStack justifyContent="space-between" width="100%">
            <Text color="white">{labels.gamesPlayed}:</Text>
            <Text color="white" fontWeight="bold">{user?.player?.gamesPlayed || 0}</Text>
          </HStack>
          <HStack justifyContent="space-between" width="100%">
            <Text color="white">{labels.wins}:</Text>
            <Text color="white" fontWeight="bold">{user?.player?.wins || 0}</Text>
          </HStack>
          <HStack justifyContent="space-between" width="100%">
            <Text color="white">{labels.losses}:</Text>
            <Text color="white" fontWeight="bold">{(user?.player?.gamesPlayed || 0) - (user?.player?.wins || 0)}</Text>
          </HStack>
          <HStack justifyContent="space-between" width="100%">
            <Text color="white">{labels.winRate}:</Text>
            <Text color="white" fontWeight="bold">{winRate}%</Text>
          </HStack>
        </VStack>
      </Box>
    </VStack>
  );
};

export default Statistics;
