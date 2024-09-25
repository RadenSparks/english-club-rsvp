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
  const mapImageUrl = "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/305569474_450532497121640_4294428843693094959_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeH3LkY6R3NbD0fnBC3l3fuOGNtTXita74AY21NeK1rvgEfKCbRBmd6lLmkFRNm6IspRKtckzbJZSeqL37n33c3G&_nc_ohc=IyevKKd4HywQ7kNvgEIwRN5&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=ACyR3NxBI6ATaXUU-h5oLD8&oh=00_AYBxdd5ehpW0jcNq0Z-DhBZdM3LCIaV1_za81U4ywn7_FQ&oe=66F8C2AE";

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
        {t('event_location')} {/* Use translation for event location */}
      </Heading>
      <Text mb={6} fontSize="lg" color="gray.600">
        {t('map_description')} {/* Use translation for map description */}
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
          alt={t('modal.imageNotAvailable')} // Use translation for alt text
          objectFit="cover" // Ensure the image covers the Box
          borderRadius="md"
          w="100%"
          h="auto" // Change to 'auto' to maintain aspect ratio
          maxH="300px" // Set max height to limit overflow
        />
      </Box>
      <Text fontSize="sm" color="gray.600">
        <Link href="https://www.google.com/maps" color="teal.500" isExternal>
          {t('open_in_google_maps')} {/* Use translation for link text */}
        </Link>
      </Text>

      <Modal isOpen={isOpen} onClose={handleCloseModal} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{t('event_location')}</ModalHeader> {/* Use translation for modal header */}
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
