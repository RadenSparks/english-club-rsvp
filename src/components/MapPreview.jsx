import React, { useState } from 'react';
import { Box, Heading, Text, Link, Image, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, } from '@chakra-ui/react';

const MapPreview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.050704378477!2d-122.39986738468184!3d37.78946467975888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858066d83b42d7%3A0xf55f7d9c3d489a5!2sGolden%20Gate%20Park%2C%20San%20Francisco%2C%20CA%2094119%2C%20United%20States!5e0!3m2!1sen!2sin!4v1633393798295!5m2!1sen!2sin";
  const mapImageUrl = "https://via.placeholder.com/600x300?text=Map+Preview"; // Replace with your actual map preview image

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
        Event Location
      </Heading>
      <Text mb={6} fontSize="lg" color="gray.600">
        Here is the location of our event. Click the image to view the map.
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
      >
        <Image
          src={mapImageUrl}
          alt="Map Preview"
          objectFit="cover"
          borderRadius="md"
          w="100%"
          h="100%"
        />
      </Box>
      <Text fontSize="sm" color="gray.600">
        <Link href="https://www.google.com/maps" color="teal.500" isExternal>
          Open in Google Maps
        </Link>
      </Text>

      {/* Modal for full map */}
      <Modal isOpen={isOpen} onClose={handleCloseModal} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Event Location</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={0}>
            <iframe
              src={mapUrl}
              width="100%"
              height="600px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Event Location Map"
            ></iframe>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default MapPreview;
