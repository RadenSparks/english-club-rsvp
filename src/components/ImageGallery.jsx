import React, { useState } from 'react';
import { Box, Heading, Image, Grid, Spinner, } from '@chakra-ui/react';
import ImageModal from './ImageModal'; // Ensure this is the correct path

const images = [
  "https://via.placeholder.com/600x300",
  "https://via.placeholder.com/600x300?text=Slide+2",
  "https://via.placeholder.com/600x300?text=Slide+3",
  "https://via.placeholder.com/600x300?text=Slide+4",
  "https://via.placeholder.com/600x300?text=Slide+5",
  "https://via.placeholder.com/600x300?text=Slide+6"
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true); // State for loading images

  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <Box py={4} textAlign="center">
      <Heading as="h2" size="md" mb={4}>
        Gallery
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
            borderRadius="md"
            overflow="hidden"
            boxShadow="md"
            cursor="pointer"
            onClick={() => openModal(src)}
            _hover={{ transform: 'scale(1.02)', transition: 'transform 0.3s' }}
          >
            <Image
              src={src}
              alt={`Thumbnail ${index + 1}`}
              width="100%"
              height="auto"
              objectFit="cover"
              onLoad={() => setLoading(false)} // Set loading to false on image load
              onError={() => setLoading(false)} // Handle image load error
            />
            {loading && (
              <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
                <Spinner size="lg" color="teal.500" />
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
