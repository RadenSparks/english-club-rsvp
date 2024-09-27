import React, { useState } from 'react';
import { Box, Heading, Image, Grid, Spinner } from '@chakra-ui/react';
import ImageModal from './ImageModal';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook

// Import images from the local assets directory
const images = [
  require('../assets/img/gallery1.jpg'),
  require('../assets/img/gallery2.jpg'),
  require('../assets/img/gallery3.jpg'),
  require('../assets/img/gallery4.jpg'),
  require('../assets/img/gallery5.jpg'),
  require('../assets/img/gallery6.jpg'),
  require('../assets/img/hero-3.jpg'),
  require('../assets/img/hero-1.jpg'),
];

const ImageGallery = () => {
  const { t } = useTranslation(); // Use the useTranslation hook for localization
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageLoading, setImageLoading] = useState(Array(images.length).fill(true)); // Initial loading state for each image

  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // Handle image load and error
  const handleImageLoad = (index) => {
    const updatedLoadingState = [...imageLoading];
    updatedLoadingState[index] = false;
    setImageLoading(updatedLoadingState);
  };

  const handleImageError = (index) => {
    const updatedLoadingState = [...imageLoading];
    updatedLoadingState[index] = false;
    setImageLoading(updatedLoadingState);
  };

  return (
    <Box py={4} textAlign="center">
      <Heading as="h2" size="md" mb={4}>
        {t('gallery_title')} {/* Translated title */}
      </Heading>
      <Grid
        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }}
        gap={4}
        mx="auto"
        maxW="90%"
      >
        {images.map((src, index) => (
          <Box
            key={index}
            position="relative"
            borderRadius="md"
            overflow="hidden"
            boxShadow="md"
            cursor="pointer"
            onClick={() => openModal(src)}
            _hover={{ transform: 'scale(1.02)', transition: 'transform 0.3s' }}
          >
            <Image
              src={src}
              alt={t('image_alt', { index: index + 1 })} // Translated alt text
              width="100%"
              height="auto"
              objectFit="cover"
              onLoad={() => handleImageLoad(index)}
              onError={() => handleImageError(index)} // Handle image load error
            />
            {imageLoading[index] && (
              <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
                <Spinner size="lg" color="teal.500" label={t('loading_spinner_alt')} /> {/* Translated loading spinner alt */}
              </Box>
            )}
          </Box>
        ))}
      </Grid>
      <ImageModal isOpen={isModalOpen} onClose={closeModal} imgSrc={selectedImage} />
    </Box>
  );
};

export default ImageGallery;
