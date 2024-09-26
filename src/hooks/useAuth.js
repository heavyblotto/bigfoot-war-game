import { useUserStore } from '@/store/userStore';
import { useAuthStore } from '@/store/authStore';

export const useAuth = () => {
  const { user, setUser, clearUser } = useUserStore();
  const { isAuthenticated, token, setAuth, clearAuth } = useAuthStore();

  const login = async (credentials) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Received token after login:', data.token);
        setUser(data.user);
        setAuth(true, data.token);
        return { success: true, user: data.user };
      } else {
        return { success: false, error: data.error };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'An error occurred during login. Please try again.' };
    }
  };

  const logout = () => {
    clearUser();
    clearAuth();
  };

  const updateUser = (updatedUserData) => {
    setUser(updatedUserData);
  };

  return { user, isAuthenticated, token, login, logout, updateUser };
};
