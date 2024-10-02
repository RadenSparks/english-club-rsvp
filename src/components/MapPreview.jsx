import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Link,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const MapPreview = () => {
  const { t } = useTranslation(); // Get the translation function
  const [isOpen, setIsOpen] = useState(false);

  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0470743329676!2d106.6990291!3d10.825577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529707ff48387%3A0xe1fc3373a8383574!2sJan%20Caf%C3%A9!5e0!3m2!1sen!2s!4v1633393798295!5m2!1sen!2s"; // Updated map URL
  const mapImageUrl = 
  require('../assets/img/map.jpg');

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <Box
      py={{ base: 8, md: 16 }}
      bg="gray.50"
      borderRadius="md"
      boxShadow="xl"
      textAlign="center"
      mx={{ base: 4, md: 8 }}
    >
      <Heading as="h2" size="lg" mb={4} color="teal.600">
        {t('event_location')} {/* Translated heading */}
      </Heading>
      <Text mb={6} fontSize="lg" color="gray.600">
        {t('map_description')} {/* Translated description */}
      </Text>
      <Box
        borderRadius="md"
        overflow="hidden"
        boxShadow="md"
        maxW="100%"
        maxH="300px"
        mx="auto"
        mb={4}
        cursor="pointer"
        onClick={handleOpenModal}
        aria-label={t('modal.learnMore')} // Localized aria-label
      >
        <Image
          src={mapImageUrl}
          alt={t('modal.imageNotAvailable')} // Translated alt text
          objectFit="cover" // Ensure the image covers the Box
          borderRadius="md"
          w="100%"
          h="auto" // Change to 'auto' to maintain aspect ratio
          maxH="300px" // Set max height to limit overflow
        />
      </Box>
      <Text fontSize="sm" color="gray.600">
        <Link href="https://www.google.com/maps" color="teal.500" isExternal>
          {t('open_in_google_maps')} {/* Translated link */}
        </Link>
      </Text>

      <Modal isOpen={isOpen} onClose={handleCloseModal} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{t('event_location')}</ModalHeader> {/* Translated modal header */}
          <ModalCloseButton />
          <ModalBody p={0}>
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '50vh' }}
              allowFullScreen=""
              loading="lazy"
              title={t('modal.learnMore')} // Localized title for iframe
            ></iframe>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default MapPreview;
