import { useAuthStore } from '@/store/authStore';

export function middleware(request) {
  const isAuthenticated = useAuthStore.getState().isAuthenticated;
  const protectedRoutes = ['/protected-route1', '/protected-route2']; // Add your protected routes here

  if (protectedRoutes.includes(request.url) && !isAuthenticated) {
    return new Response('Unauthorized', { status: 401 });
  }

  // Continue with the request if authenticated or if the route is not protected
  return fetch(request);
}
