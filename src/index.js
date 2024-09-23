import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';  
import ErrorBoundary from './components/ErrorBoundary';
import './i18n'; 
import './index.css'; 

const App = lazy(() => import('./App'));

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </ErrorBoundary>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
