'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Box, Spinner, VStack, Heading, Container, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import useStrings from '@/hooks/useStrings';
import BackToLobbyButton from '@/components/BackToLobbyButton';

const BigfootSelection = dynamic(() => import('@/components/BigfootSelection').then(mod => mod.BigfootSelection), {
  ssr: false,
});

export default function CharacterSelectionPage() {
  const router = useRouter();
  const { labels, titles, messages } = useStrings();

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <BackToLobbyButton />
        <Heading 
          as="h1" 
          size="2xl" 
          textAlign="center" 
          color="white" 
          fontFamily='"Press Start 2P", cursive'
          textShadow="0 0 10px #00BFFF, 0 0 20px #00BFFF, 0 0 30px #00BFFF"
        >
          {titles.selectYourBigfoot}
        </Heading>
        <Text 
          textAlign="center" 
          color="gray.300" 
          fontSize="lg"
        >
          {messages.chooseBigfootWarrior}
        </Text>
        <Suspense fallback={<Box textAlign="center"><Spinner size="xl" color="white" /></Box>}>
          <BigfootSelection />
        </Suspense>
      </VStack>
    </Container>
  );
}
