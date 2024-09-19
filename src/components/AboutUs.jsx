// src/AboutUs.js
import React from 'react';
import { Container, Box, Heading, Text, Stack, Divider, Button } from '@chakra-ui/react';

const AboutUs = () => (
  <Container maxW="container.md" py={12} centerContent>
    <Box 
      bg="gray.50" 
      p={8} 
      borderRadius="lg" 
      boxShadow="xl" 
      w="100%" 
      textAlign="center"
      aria-label="About Us Section" // Accessibility improvement
    >
      <Heading as="h2" size="2xl" mb={6} color="teal.600">
        About Us
      </Heading>
      <Divider borderColor="teal.300" mb={6} />
      <Stack spacing={5}>
        <Text fontSize="lg" color="gray.700">
          We are dedicated to improving English language skills through engaging activities and events.
        </Text>
        <Text fontSize="lg" color="gray.700">
          Join us to enhance your learning experience!
        </Text>
      </Stack>
      <Button 
        mt={6} 
        colorScheme="teal" 
        size="lg" 
        onClick={() => alert("Join us now!")} // Placeholder for actual action
      >
        Join Us
      </Button>
    </Box>
  </Container>
);

export default AboutUs;
