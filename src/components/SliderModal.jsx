import React, { useState } from 'react';
import { Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Image, Text, SimpleGrid, Button, Spinner } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook

const MotionBox = motion(Box);

const SliderModal = ({ posts }) => {
  const { t } = useTranslation(); // Get the translation function
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(false);

  const openModal = (post) => {
    setSelectedPost(post);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedPost(null);
  };

  return (
    <Box>
      <MotionBox p={4} borderRadius="md" boxShadow="md" bg="white">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          {posts.slice(0, 3).map((post, index) => (
            <MotionBox 
              key={index} 
              onClick={() => openModal(post)} 
              cursor="pointer" 
              borderWidth="1px" 
              borderRadius="md" 
              overflow="hidden" 
              boxShadow="lg" 
              transition="transform 0.2s" 
              whileHover={{ scale: 1.05 }}
              role="button" 
              aria-label={`Open ${post.title} details`}
            >
              <Image 
                src={post.image} 
                alt={post.title} 
                boxSize="100%" 
                objectFit="cover" 
                onLoad={() => setLoading(false)} 
                onError={() => setLoading(false)}
                fallbackSrc="https://via.placeholder.com/300x200?text=Image+Not+Available" // Fallback image
              />
              <Box mt={2} textAlign="center" fontWeight="bold" fontSize="lg">{post.title}</Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </MotionBox>

      <Modal isOpen={isOpen} onClose={closeModal} size="lg" isCentered>
        <ModalOverlay />
        <ModalContent borderRadius="md" boxShadow="2xl">
          <ModalHeader fontSize="xl" fontWeight="bold">{selectedPost?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {loading && <Spinner size="lg" color="teal.500" />}
            <Image 
              src={selectedPost?.image} 
              alt={selectedPost?.title} 
              borderRadius="md" 
              fallbackSrc="https://via.placeholder.com/600x400?text=Image+Not+Available"
              onLoad={() => setLoading(false)} 
              onError={() => setLoading(false)}
            />
            <Text mt={4} fontSize="md">{selectedPost?.description}</Text>
            <Button 
              mt={4} 
              colorScheme="teal" 
              onClick={() => alert(`${t('modal.learnMore')} ${selectedPost?.title}`)} 
            >
              {t('modal.learnMore')} {/* Use translation here */}
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default SliderModal;
