import React, { useState, useEffect } from 'react'; // Import useEffect
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
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook

const MotionBox = motion(Box);

const IntroducingEvents = () => {
  const { t } = useTranslation(); // Use the useTranslation hook for localization
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
      title: t('events.first_event_title'),
      time: t('events.first_event_time'),
      date: t('events.first_event_date'),
      description: t('events.first_event_description'),
      place: t('events.first_event_place'),
      topic: t('events.first_event_topic'),
      moreDetails: t('events.first_event_more_details'),
      image: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG1vdW50YWluJTIwZXZlbnR8ZW58MHx8fHwxNjYzMjk2NDQ5&ixlib=rb-1.2.1&q=80&w=600"
    },
    {
      title: t('events.second_event_title'),
      time: t('events.second_event_time'),
      date: t('events.second_event_date'),
      description: t('events.second_event_description'),
      place: t('events.second_event_place'),
      topic: t('events.second_event_topic'),
      moreDetails: t('events.second_event_more_details'),
      image: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIyfHxjY2F0ZWdvcnklMjBldmVudHxlbnwwfHx8fDE2NjMyOTY0NDk&ixlib=rb-1.2.1&q=80&w=600"
    }
  ];

  // Simulate loading
  useEffect(() => {
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
              {t('events.heading')}
            </Heading>
            <Divider borderColor="teal.300" />
            <Text fontSize="lg" color="gray.700" lineHeight="tall">
              {t('events.intro')}
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
                  <Text fontWeight="bold">{t('events.time')}: {event.time}</Text>
                  <Text fontWeight="bold">{t('events.date')}: {event.date}</Text>
                  <Text mt={2}>{event.description}</Text>
                  <Button mt={4} colorScheme="teal" onClick={() => handleOpen(event)}>
                    {t('events.more_details')}
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
                <Text fontWeight="bold">{t('events.time')}:</Text> {selectedEvent.time}
                <Text fontWeight="bold">{t('events.date')}:</Text> {selectedEvent.date}
                <Text fontWeight="bold">{t('events.place')}:</Text> {selectedEvent.place}
                <Text fontWeight="bold">{t('events.topic')}:</Text> {selectedEvent.topic}
                <Text mt={4}>{selectedEvent.moreDetails}</Text>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleClose}>
                  {t('events.close')}
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
