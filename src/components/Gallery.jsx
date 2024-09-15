import React from 'react';
import { Container, Box, Heading, SimpleGrid, Image } from '@chakra-ui/react';

const Gallery = () => (
  <Container maxW="container.lg" py={12}>
    <Box bg="gray.50" p={8} borderRadius="lg" boxShadow="xl">
      <Heading as="h2" size="2xl" mb={6} textAlign="center" color="teal.600">
        Gallery
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {[
          '/images/gallery1.jpg',
          '/images/gallery2.jpg',
          '/images/gallery3.jpg',
          '/images/gallery4.jpg',
          '/images/gallery5.jpg',
          '/images/gallery6.jpg',
        ].map((src, index) => (
          <Box
            key={index}
            borderRadius="lg"
            overflow="hidden"
            boxShadow="lg"
            _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
          >
            <Image 
              src={src} 
              alt={`Gallery Image ${index + 1}`} 
              objectFit="cover" 
              borderRadius="lg" 
              w="100%" 
              h="100%" 
              loading="lazy" // Added lazy loading
              fallbackSrc="/images/placeholder.jpg" // Added placeholder for fallback
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  </Container>
);

export default Gallery;
