import { IconButton } from '@chakra-ui/react';
import { FaBeer } from 'react-icons/fa';

function MyIconButton() {
  return (
    <IconButton
      icon={<FaBeer />}
      aria-label="Beer"
    />
  );
}

export default MyIconButton;