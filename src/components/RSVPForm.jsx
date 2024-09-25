import React, { useState } from 'react';
import { Container, Box, Heading, Text, FormControl, FormLabel, Input, Button, Stack, useToast } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const RSVPForm = ({ onRSVP }) => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const trimmedName = name.trim();

    if (!trimmedName) {
      toast({
        title: 'Validation Error',
        description: t('rsvp.validationError'),
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top',
      });
      setLoading(false);
      return;
    }

    try {
      console.log({ name: trimmedName });

      // Simulate API call here, e.g. await submitRSVP({ name: trimmedName });

      toast({
        title: 'RSVP successful!',
        description: t('rsvp.success'),
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'top',
      });

      setName('');
      onRSVP(); // Trigger additional actions, like opening a chatbot
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      toast({
        title: 'Submission Error',
        description: t('rsvp.submissionError'),
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
          {t('rsvp.title')}
        </Heading>
        <Text mb={6} fontSize="lg" color="gray.600" textAlign="center">
          {t('rsvp.description')}
        </Text>
        <form onSubmit={handleSubmit}>
          <FormControl id="rsvp-form" isRequired>
            <Stack spacing={6}>
              <Box>
                <FormLabel fontSize="lg" color="gray.700">{t('rsvp.name')}</FormLabel>
                <Input 
                  value={name}
                  onChange={(e) => setName(e.target.value)} 
                  placeholder={t('rsvp.name')}
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
                {t('rsvp.submit')}
              </Button>
            </Stack>
          </FormControl>
        </form>
      </Box>
    </Container>
  );
};

export default RSVPForm;
