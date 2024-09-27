import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';
import useStrings from '@/hooks/useStrings';

export default function BackToLobbyButton() {
  const router = useRouter();
  const { labels } = useStrings();

  return (
    <Button
      leftIcon={<FaArrowLeft />}
      onClick={() => router.push('/')}
      colorScheme="blue"
      size="lg"
      width="full"
      maxW="200px"
    >
      {labels.backToLobby}
    </Button>
  );
}
