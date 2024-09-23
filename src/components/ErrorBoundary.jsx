import React, { Component } from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { withTranslation } from 'react-i18next'; // Import withTranslation

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
    // Log the error to an error reporting service or console
    console.error("Uncaught error:", error, errorInfo);
    this.logErrorToService(error, errorInfo);
  }

  logErrorToService = (error, errorInfo) => {
    // Simulate error logging (replace with an actual service like Sentry or a logging API)
    console.log("Error logged to service:", { error, errorInfo });
  };

  handleReset = () => {
    // Reset the error boundary state
    this.setState({ hasError: false });
  };

  render() {
    const { hasError } = this.state;
    const { t, fallbackMessage, fallbackTitle } = this.props;

    if (hasError) {
      // Fallback UI
      return (
        <Box textAlign="center" py={10} px={6}>
          <Heading as="h2" size="xl" mb={4} color="red.500">
            {fallbackTitle ? t(fallbackTitle) : t('error.default_title')}
          </Heading>
          <Text mb={4}>
            {fallbackMessage ? t(fallbackMessage) : t('error.default_message')}
          </Text>
          <Button onClick={this.handleReset} colorScheme="teal">{t('error.try_again')}</Button>
        </Box>
      );
    }

    return this.props.children;
  }
}

// Wrap ErrorBoundary with translation capabilities
export default withTranslation()(ErrorBoundary);
