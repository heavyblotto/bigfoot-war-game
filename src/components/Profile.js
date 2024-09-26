import { useUserStore } from '@/store/userStore';
import { useAuthStore } from '@/store/authStore';
import { useAuth } from '@/hooks/useAuth';
import { Box, Button, Text, VStack, Heading, useToast, Input, HStack } from '@chakra-ui/react';
import { useState } from 'react';
import { FaEnvelope, FaSignOutAlt, FaTrashAlt } from 'react-icons/fa';

const Profile = () => {
  const { user, updateUser, clearUser } = useUserStore();
  const { logout } = useAuth();
  const toast = useToast();
  const { token } = useAuthStore();
  
  console.log('Token in Profile component:', token);

  const [message, setMessage] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const handleUpdateEmail = async () => {
    try {
      console.log('Current auth state:', useAuthStore.getState());
      console.log('Token being sent:', token);
      const response = await fetch('/api/auth/update-email', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ email: newEmail }),
      });
      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);
      if (response.ok) {
        updateUser(data.user);
        toast({
          title: "Email updated successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setNewEmail('');
      } else {
        throw new Error(data.error || 'Failed to update email');
      }
    } catch (error) {
      console.error('Error in handleUpdateEmail:', error);
      toast({
        title: "Error updating email",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleAccountDeletion = async () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      try {
        const response = await fetch('/api/auth/delete-account', {
          method: 'DELETE',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        });
        
        if (response.ok) {
          clearUser();
          window.location.href = '/';
        } else {
          const data = await response.json();
          setMessage(data.error || 'An error occurred while deleting the account');
        }
      } catch (error) {
        setMessage('An error occurred while deleting the account');
      }
    }
  };

  return (
    <Box>
      <VStack spacing={6} align="stretch">
        <HStack justifyContent="space-between" alignItems="center">
          <Heading size="lg">Profile</Heading>
          <Button
            size="md"
            colorScheme="red"
            bgGradient="linear(to-r, red.400, red.600)"
            _hover={{
              bgGradient: "linear(to-r, red.500, red.700)",
            }}
            onClick={logout}
            leftIcon={<FaSignOutAlt />}
          >
            Logout
          </Button>
        </HStack>
        <Text><strong>Username:</strong> {user?.username}</Text>
        <Text><strong>Email:</strong> {user?.email}</Text>
        <Text><strong>Level:</strong> {user?.player?.level || 1}</Text>
        <Text><strong>XP:</strong> {user?.player?.xp || 0}</Text>
        <Text><strong>Joined:</strong> {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}</Text>
        <Box
          borderWidth={2}
          borderRadius="lg"
          p={4}
          bgGradient="linear(to-b, gray.700, gray.600)"
          boxShadow="md"
        >
          <VStack spacing={4} width="full">
            <Input
              placeholder="Enter new email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
            <Button
              size="lg"
              width="full"
              height="60px"
              colorScheme="green"
              bgGradient="linear(to-r, green.400, green.600)"
              _hover={{
                bgGradient: "linear(to-r, green.500, green.700)",
              }}
              onClick={handleUpdateEmail}
              leftIcon={<FaEnvelope />}
            >
              Update Email
            </Button>
          </VStack>
        </Box>
        <Box
          borderWidth={2}
          borderRadius="lg"
          p={4}
          bgGradient="linear(to-b, gray.700, gray.600)"
          boxShadow="md"
        >
          <VStack spacing={4} width="full">
            <Text color="red.500" fontWeight="bold">
              Warning: Deleting your account is irreversible!
            </Text>
            <Button
              size="lg"
              width="full"
              height="60px"
              colorScheme="red"
              bgGradient="linear(to-r, red.400, red.600)"
              _hover={{
                bgGradient: "linear(to-r, red.500, red.700)",
              }}
              onClick={handleAccountDeletion}
              leftIcon={<FaTrashAlt />}
            >
              Delete Account
            </Button>
          </VStack>
        </Box>
        <Text color="red.500" mt={2}>{message}</Text>
      </VStack>
    </Box>
  );
};

export default Profile;
