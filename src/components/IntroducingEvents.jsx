import React, { useState } from 'react';
import {
  Container,
  Box,
  Heading,
  VStack,
  Text,
  useColorModeValue,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Image,
  Spinner,
  Divider,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const IntroducingEvents = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true); // Simulating loading state

  const handleOpen = (event) => {
    setSelectedEvent(event);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedEvent(null);
  };

  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const cardBgColor = useColorModeValue('white', 'gray.700');
  const headingColor = useColorModeValue('teal.600', 'teal.300');

  const events = [
    {
      title: "First Event",
      time: "10:00 AM - 12:00 PM",
      date: "September 22, 2024",
      description: "Join us for our first English Club event filled with fun activities and learning!",
      place: "Community Center",
      topic: "Language Games and Activities",
      moreDetails: "Detailed description about the first event.",
      image: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG1vdW50YWluJTIwZXZlbnR8ZW58MHx8fHwxNjYzMjk2NDQ5&ixlib=rb-1.2.1&q=80&w=600"
    },
    {
      title: "Second Event",
      time: "2:00 PM - 4:00 PM",
      date: "September 29, 2024",
      description: "Join us for our second event with exciting games and discussions!",
      place: "City Hall",
      topic: "Discussion and Debate",
      moreDetails: "Detailed description about the second event.",
      image: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIyfHxjY2F0ZWdvcnklMjBldmVudHxlbnwwfHx8fDE2NjMyOTY0NDk&ixlib=rb-1.2.1&q=80&w=600"
    }
  ];

  // Simulate loading
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Container maxW="container.lg" py={8} bg={bgColor} borderRadius="lg" boxShadow="xl" textAlign="center">
        <Spinner size="xl" color="teal.500" />
      </Container>
    );
  }

  return (
    <MotionBox id="events" py={{ base: 8, md: 16 }} textAlign="center">
      <Container maxW="container.md" py={12} centerContent>
        <Box bg={bgColor} p={8} borderRadius="lg" boxShadow="xl">
          <VStack spacing={6} textAlign="center">
            <Heading as="h2" size="2xl" color={headingColor} fontWeight="bold">
              Introducing Our Events
            </Heading>
            <Divider borderColor="teal.300" />
            <Text fontSize="lg" color="gray.700" lineHeight="tall">
              Welcome to the English Club! We are excited to announce our upcoming events designed to enhance your skills, make new friends, and enjoy engaging experiences. Check out our events below!
            </Text>
            <VStack spacing={6} align="stretch">
              {events.map((event, index) => (
                <Box
                  key={index}
                  p={4}
                  borderWidth="1px"
                  borderRadius="lg"
                  boxShadow="md"
                  bg={cardBgColor}
                  transition="transform 0.2s ease-in-out"
                  _hover={{ transform: 'scale(1.03)', boxShadow: 'xl' }}
                  overflow="hidden"
                >
                  <Image 
                    src={event.image} 
                    alt={event.title} 
                    borderRadius="md" 
                    mb={4} 
                    objectFit="cover" 
                    width="100%" 
                    height="200px" 
                    fallbackSrc="https://via.placeholder.com/600x400?text=Image+Not+Available"
                    _hover={{ transform: 'scale(1.05)', transition: 'transform 0.3s ease-in-out' }}
                  />
                  <Heading as="h3" size="lg" color={headingColor}>
                    {event.title}
                  </Heading>
                  <Text fontWeight="bold">Time: {event.time}</Text>
                  <Text fontWeight="bold">Date: {event.date}</Text>
                  <Text mt={2}>{event.description}</Text>
                  <Button mt={4} colorScheme="teal" onClick={() => handleOpen(event)}>
                    More Details
                  </Button>
                </Box>
              ))}
            </VStack>
          </VStack>
        </Box>

        {selectedEvent && (
          <Modal isOpen={isOpen} onClose={handleClose} size="xl">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{selectedEvent.title}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Image 
                  src={selectedEvent.image} 
                  alt={selectedEvent.title} 
                  borderRadius="md" 
                  mb={4} 
                  objectFit="cover" 
                  width="100%" 
                  height="400px"
                  fallbackSrc="https://via.placeholder.com/600x400?text=Image+Not+Available"
                />
                <Text fontWeight="bold">Time:</Text> {selectedEvent.time}
                <Text fontWeight="bold">Date:</Text> {selectedEvent.date}
                <Text fontWeight="bold">Place:</Text> {selectedEvent.place}
                <Text fontWeight="bold">Topic:</Text> {selectedEvent.topic}
                <Text mt={4}>{selectedEvent.moreDetails}</Text>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </Container>
    </MotionBox>
  );
};

export default IntroducingEvents;
