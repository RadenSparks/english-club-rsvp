import React from 'react';
import { Container, Box, Heading, SimpleGrid, Image, AspectRatio } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Gallery = () => {
  const { t } = useTranslation(); // Initialize translation

  const images = [
    { src: '/images/gallery1.jpg', alt: t('gallery.team_event') },
    { src: '/images/gallery2.jpg', alt: t('gallery.workshop') },
    { src: '/images/gallery3.jpg', alt: t('gallery.students_practice') },
    { src: '/images/gallery4.jpg', alt: t('gallery.group_discussion') },
    { src: '/images/gallery5.jpg', alt: t('gallery.outdoor_activity') },
    { src: '/images/gallery6.jpg', alt: t('gallery.cultural_exchange') },
  ];

  return (
    <Container maxW="container.lg" py={12}>
      <Box bg="gray.50" p={8} borderRadius="lg" boxShadow="xl">
        <Heading as="h2" size="2xl" mb={6} textAlign="center" color="teal.600">
          {t('gallery.title')} {/* Localized gallery title */}
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          {images.map((image, index) => (
            <Box
              key={index}
              borderRadius="lg"
              overflow="hidden"
              boxShadow="lg"
              _hover={{ transform: 'scale(1.05)', transition: 'transform 0.3s ease-in-out' }}
            >
              <AspectRatio ratio={4 / 3}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  objectFit="cover"
                  borderRadius="lg"
                  w="100%"
                  h="100%"
                  loading="lazy" // Lazy loading for performance
                  fallbackSrc="/images/placeholder.jpg" // Placeholder for slow image loading
                />
              </AspectRatio>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Gallery;
