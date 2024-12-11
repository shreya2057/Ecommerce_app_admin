import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme/index.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppRoutes } from './routes/AppRoutes.tsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { ErrorBoundary } from 'react-error-boundary';
import { Error } from './components/ErrorPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      staleTime: 30 * 1000,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider value={theme}>
        <ErrorBoundary FallbackComponent={Error}>
          <HelmetProvider>
            <Toaster position="bottom-center" />
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </HelmetProvider>
        </ErrorBoundary>
      </ChakraProvider>
    </QueryClientProvider>
  </StrictMode>,
);
