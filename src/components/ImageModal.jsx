import React from 'react';
import { Box, Image, Modal, ModalOverlay, ModalContent, ModalCloseButton } from '@chakra-ui/react';

const ImageModal = ({ isOpen, onClose, imgSrc }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <Box p={4}>
          <Image src={imgSrc} alt="Full size" width="100%" borderRadius="md" />
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default ImageModal;
