import React, { useState } from 'react';
import { Container, Box, Heading, Text, FormControl, FormLabel, Input, Textarea, Button, Stack, useToast } from '@chakra-ui/react';

const RSVPForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [comments, setComments] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone && preferredDate) {
      setLoading(true);
      // Simulate an API call
      setTimeout(() => {
        setLoading(false);
        setMessage('');
        toast({
          title: 'RSVP successful!',
          description: "Thank you for your RSVP! We look forward to seeing you.",
          status: 'success',
          duration: 4000,
          isClosable: true,
          position: 'top',
        });
        setName('');
        setEmail('');
        setPhone('');
        setPreferredDate('');
        setComments('');
      }, 2000);
    } else {
      setMessage('Please fill in all required fields.');
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
                />
              </Box>
              <Box>
                <FormLabel fontSize="lg" color="gray.700">Email</FormLabel>
                <Input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Your Email"
                  size="lg"
                  focusBorderColor="teal.500"
                  _placeholder={{ color: 'gray.400' }}
                  isRequired
                />
              </Box>
              <Box>
                <FormLabel fontSize="lg" color="gray.700">Phone Number</FormLabel>
                <Input 
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your Phone Number"
                  size="lg"
                  focusBorderColor="teal.500"
                  _placeholder={{ color: 'gray.400' }}
                />
              </Box>
              <Box>
                <FormLabel fontSize="lg" color="gray.700">Preferred Event Date</FormLabel>
                <Input 
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  size="lg"
                  focusBorderColor="teal.500"
                />
              </Box>
              <Box>
                <FormLabel fontSize="lg" color="gray.700">Comments</FormLabel>
                <Textarea 
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  placeholder="Additional comments or requests"
                  size="lg"
                  focusBorderColor="teal.500"
                  _placeholder={{ color: 'gray.400' }}
                />
              </Box>
              <Button 
                type="submit"
                colorScheme="teal" 
                isLoading={loading}
                size="lg"
                _hover={{ bg: 'teal.600' }} 
                _focus={{ boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)' }}
              >
                RSVP
              </Button>
            </Stack>
          </FormControl>
        </form>
        {message && <Text mt={4} color="red.500" textAlign="center">{message}</Text>}
      </Box>
    </Container>
  );
};

export default RSVPForm;
