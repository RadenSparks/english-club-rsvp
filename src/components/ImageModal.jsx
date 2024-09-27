import React, { useState } from 'react';
import { Box, Image, Modal, ModalOverlay, ModalContent, ModalCloseButton, Spinner } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook

const ImageModal = ({ isOpen, onClose, imgSrc }) => {
  const { t } = useTranslation(); // Use the useTranslation hook for localization
  const [loading, setLoading] = useState(true);
  const [size, setSize] = useState('lg'); // Initial size of the modal

  const handleClick = () => {
    setSize((prevSize) => (prevSize === 'lg' ? 'xl' : 'lg')); // Toggle size between 'lg' and 'xl'
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size} isCentered>
      <ModalOverlay />
      <ModalContent onClick={handleClick} cursor="pointer"> {/* Change cursor to pointer */}
        <ModalCloseButton />
        <Box p={4} position="relative">
          {loading && (
            <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
              <Spinner size="lg" color="teal.500" />
            </Box>
          )}
          <Image
            src={imgSrc}
            alt={t('modal_image_alt')} // Use a translated alt text
            width="100%"
            borderRadius="md"
            onLoad={() => setLoading(false)}
            onError={() => {
              setLoading(false);
              // Optionally, display a fallback image or error message here
            }}
            display={loading ? 'none' : 'block'}
            transition="opacity 0.3s ease-in" // Added fade-in animation
            opacity={loading ? 0 : 1} // Fade in image when loading completes
          />
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default ImageModal;
