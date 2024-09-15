import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';  // Import your Chakra theme
import LandingPage from './LandingPage';
import ErrorBoundary from './components/ErrorBoundary';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ErrorBoundary>
        <LandingPage />
      </ErrorBoundary>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
