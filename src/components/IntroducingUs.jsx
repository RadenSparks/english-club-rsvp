import React from 'react';
import { Container, Box, Heading, Text, Divider, Stack, Button } from '@chakra-ui/react';

const IntroducingUs = () => (
  <Container maxW="container.md" py={12} centerContent>
    <Box bg="gray.50" p={8} borderRadius="lg" boxShadow="xl">
      <Stack spacing={6} textAlign="center">
        <Heading as="h2" size="2xl" color="teal.600" fontWeight="bold">
          Introducing Us
        </Heading>
        <Divider borderColor="teal.300" />
        <Text fontSize="lg" color="gray.700" lineHeight="tall">
          Welcome to the English Club! We are passionate about fostering a love for the English language through engaging
          events and activities. Our club is a community where learners of all levels can enhance their skills, make new
          friends, and enjoy exciting experiences.
        </Text>
        <Button 
          colorScheme="teal" 
          size="lg" 
          mt={6}
          _hover={{ bg: 'teal.700' }} 
          _focus={{ boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)' }}
        >
          Join Us Now
        </Button>
      </Stack>
    </Box>
  </Container>
);

export default IntroducingUs;
