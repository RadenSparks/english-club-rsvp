import React, { Component } from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
  }

  handleReset = () => {
    // Reset the error boundary state
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <Box textAlign="center" py={10} px={6}>
          <Heading as="h2" size="xl" mb={4}>Something went wrong.</Heading>
          <Text mb={4}>Please try again later.</Text>
          <Button onClick={this.handleReset} colorScheme="teal">Try Again</Button>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
