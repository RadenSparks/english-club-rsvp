import React, { useState } from 'react';
import { Box, Image, Modal, ModalOverlay, ModalContent, ModalCloseButton, Spinner } from '@chakra-ui/react';

const ImageModal = ({ isOpen, onClose, imgSrc }) => {
  const [loading, setLoading] = useState(true); // State for loading image

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <Box p={4} position="relative">
          {loading && (
            <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
              <Spinner size="lg" color="teal.500" />
            </Box>
          )}
          <Image 
            src={imgSrc} 
            alt="Full size view" 
            width="100%" 
            borderRadius="md" 
            onLoad={() => setLoading(false)} // Hide spinner when image loads
            onError={() => setLoading(false)} // Hide spinner if image fails to load
            display={loading ? 'none' : 'block'} // Hide image while loading
          />
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default ImageModal;
