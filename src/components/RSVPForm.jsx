import React, { useState } from 'react';
import { Container, Box, Heading, Text, FormControl, FormLabel, Input, Button, Stack, useToast } from '@chakra-ui/react';

const RSVPForm = ({ onRSVP }) => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Trim whitespace from name
    const trimmedName = name.trim();

    // Validation checks
    if (!trimmedName) {
      toast({
        title: 'Validation Error',
        description: 'Name is required.',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top',
      });
      setLoading(false);
      return;
    }

    try {
      // Log the form data (or send it to a server)
      console.log({ name: trimmedName });

      toast({
        title: 'RSVP successful!',
        description: "Thank you for your RSVP! We look forward to seeing you.",
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'top',
      });

      // Reset form fields
      setName('');
      onRSVP(); // Open the chatbot
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      toast({
        title: 'Submission Error',
        description: 'There was an error submitting your RSVP. Please try again later.',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxW="container.md" py={12} centerContent>
      <Box bg="gray.50" p={8} borderRadius="lg" boxShadow="xl" w="full">
        <Heading as="h2" size="xl" mb={6} color="teal.600" textAlign="center">
          Are You Attending?
        </Heading>
        <Text mb={6} fontSize="lg" color="gray.600" textAlign="center">
          Please fill out the form to let us know you're coming!
        </Text>
        <form onSubmit={handleSubmit}>
          <FormControl id="rsvp-form" isRequired>
            <Stack spacing={6}>
              <Box>
                <FormLabel fontSize="lg" color="gray.700">Name</FormLabel>
                <Input 
                  value={name}
                  onChange={(e) => setName(e.target.value)} 
                  placeholder="Your Name" 
                  size="lg"
                  focusBorderColor="teal.500"
                  _placeholder={{ color: 'gray.400' }}
                  isRequired
                  aria-label="Name input"
                />
              </Box>
              <Button 
                type="submit"
                colorScheme="teal" 
                isLoading={loading}
                size="lg"
                _hover={{ bg: 'teal.600' }} 
                _focus={{ boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)' }}
                aria-label="Submit RSVP"
              >
                Submit RSVP
              </Button>
            </Stack>
          </FormControl>
        </form>
      </Box>
    </Container>
  );
};

export default RSVPForm;
