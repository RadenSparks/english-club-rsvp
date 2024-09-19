import React, { useState } from 'react';
import { Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Image, Text, SimpleGrid, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const SliderModal = ({ posts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

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
              whileHover={{ scale: 1.05 }} // Animation on hover
              role="button" 
              aria-label={`Open ${post.title} details`} // Accessibility
            >
              <Image src={post.image} alt={post.title} boxSize="100%" objectFit="cover" />
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
            <Image 
              src={selectedPost?.image} 
              alt={selectedPost?.title} 
              borderRadius="md" 
              fallbackSrc="https://via.placeholder.com/600x400" // Placeholder for loading error
            />
            <Text mt={4} fontSize="md">{selectedPost?.description}</Text>
            <Button 
              mt={4} 
              colorScheme="teal" 
              onClick={() => alert(`You clicked on ${selectedPost?.title}`)} // Example additional feature
            >
              Learn More
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default SliderModal;
