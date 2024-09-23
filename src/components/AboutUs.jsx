import React from 'react';
import { Container, Box, Heading, Text, Stack, Divider, Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';  // Import the hook

const AboutUs = () => {
  const { t } = useTranslation();  // Initialize the translation function

  return (
    <Container maxW="container.md" py={12} centerContent>
      <Box 
        bg="gray.50" 
        p={8} 
        borderRadius="lg" 
        boxShadow="xl" 
        w="100%" 
        textAlign="center"
        aria-label={t('aboutUs.label')}  // Use translation for aria-label
      >
        <Heading as="h2" size="2xl" mb={6} color="teal.600">
          {t('aboutUs.title')}  {/* Use translation for title */}
        </Heading>
        <Divider borderColor="teal.300" mb={6} />
        <Stack spacing={5}>
          <Text fontSize="lg" color="gray.700">
            {t('aboutUs.description1')}  {/* Use translation for description1 */}
          </Text>
          <Text fontSize="lg" color="gray.700">
            {t('aboutUs.description2')}  {/* Use translation for description2 */}
          </Text>
        </Stack>
        <Button 
          mt={6} 
          colorScheme="teal" 
          size="lg" 
          onClick={() => window.location.href = '/join-us'}  // Navigate to the Join Us page
        >
          {t('aboutUs.button')}  {/* Use translation for button text */}
        </Button>
      </Box>
    </Container>
  );
};

export default AboutUs;
