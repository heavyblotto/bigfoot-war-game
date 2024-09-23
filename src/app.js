import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// ... other imports

const queryClient = new QueryClient();

function App() {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        {/* Your app components */}
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;