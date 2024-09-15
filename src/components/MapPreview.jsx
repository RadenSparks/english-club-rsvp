import React from 'react';
import { Container, Box, Heading, Text, Image, Link } from '@chakra-ui/react';

const MapPreview = () => {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.050704378477!2d-122.39986738468184!3d37.78946467975888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858066d83b42d7%3A0xf55f7d9c3d489a5!2sGolden%20Gate%20Park%2C%20San%20Francisco%2C%20CA%2094119%2C%20United%20States!5e0!3m2!1sen!2sin!4v1633393798295!5m2!1sen!2sin";

  return (
    <Container maxW="container.md" py={12} centerContent>
      <Box bg="white" p={8} borderRadius="lg" boxShadow="xl">
        <Heading as="h2" size="xl" mb={6} color="teal.600" textAlign="center">
          Event Location
        </Heading>
        <Text mb={6} fontSize="lg" color="gray.600" textAlign="center">
          Here is the location of our event. Click the map to view in Google Maps.
        </Text>
        <Box
          borderRadius="lg"
          overflow="hidden"
          boxShadow="md"
          w="full"
          maxW="600px"
          h="400px"
        >
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Event Location Map"
          ></iframe>
        </Box>
        <Text mt={4} fontSize="sm" color="gray.600" textAlign="center">
          <Link href="https://www.google.com/maps" color="teal.500" isExternal>
            Open in Google Maps
          </Link>
        </Text>
      </Box>
    </Container>
  );
};

export default MapPreview;
