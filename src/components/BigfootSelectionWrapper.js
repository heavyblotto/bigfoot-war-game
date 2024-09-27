'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Box, Spinner, VStack, Heading, Container } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import useStrings from '@/hooks/useStrings';
import BackToLobbyButton from './BackToLobbyButton';

const BigfootSelection = dynamic(() => import('./BigfootSelection').then(mod => mod.BigfootSelection), {
  ssr: false,
});

export default function BigfootSelectionWrapper() {
  const router = useRouter();
  const { labels } = useStrings();

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <BackToLobbyButton />
        <Heading as="h1" size="2xl" textAlign="center" color="white" fontFamily='"Press Start 2P", sans-serif'>
          {labels.selectYourBigfoot}
        </Heading>
        <Suspense fallback={<Box textAlign="center"><Spinner size="xl" color="white" /></Box>}>
          <BigfootSelection />
        </Suspense>
      </VStack>
    </Container>
  );
}
