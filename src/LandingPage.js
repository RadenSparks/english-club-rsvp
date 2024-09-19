import React, { Suspense, useRef } from 'react';
import { Box, Spinner, Stack, Heading, Text, Button } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import IntroducingEvents from './components/IntroducingEvents';
import RSVPForm from './components/RSVPForm';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import SliderModal from './components/SliderModal'; // Import the SliderModal component

const ImageGallery = React.lazy(() => import('./components/ImageGallery'));
const ChatBot = React.lazy(() => import('./components/ChatBot'));
const MapPreview = React.lazy(() => import('./components/MapPreview'));

const MotionBox = motion(Box);

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

// Club Activities Section with Stock Images
const ClubActivities = () => (
  <MotionBox id="activities" py={{ base: 8, md: 16 }} textAlign="center">
    <Heading as="h2" size="xl" mb={6} color="teal.600">Club Activities</Heading>
    <Stack spacing={4}>
      <Text fontSize="lg" color="gray.700">
        <img src="https://source.unsplash.com/600x400/?conversation" alt="Conversation Club" />
        Weekly Conversation Clubs - Practice speaking with fellow members.
      </Text>
      <Text fontSize="lg" color="gray.700">
        <img src="https://source.unsplash.com/600x400/?workshop" alt="Workshop" />
        Workshops - Attend workshops on various topics to improve your skills.
      </Text>
      <Text fontSize="lg" color="gray.700">
        <img src="https://source.unsplash.com/600x400/?cultural-event" alt="Cultural Event" />
        Cultural Events - Join us for fun activities celebrating different cultures.
      </Text>
      <Button colorScheme="teal" mt={4}>View All Activities</Button>
    </Stack>
  </MotionBox>
);

const LandingPage = () => {
  const chatBotRef = useRef(null);

  const openChat = () => {
    if (chatBotRef.current) {
      chatBotRef.current.open(); // Call the method to show the chat
    }
  };

  const posts = [
    {
      title: 'Exploring the Mountains',
      image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG1vdW50YWluJTIwcGF0dHxlbnwwfHx8fDE2MDY1NzA2MjM&ixlib=rb-1.2.1&q=80&w=600',
      description: 'Join us for an unforgettable adventure in the mountains, where breathtaking views await you!',
    },
    {
      title: 'Beach Cleanup Day',
      image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGJlYWNoJTIwY2xlYW5vdXAlMjBkYXklMjBjbGVhbiUyMGNvbW11bml0eXxlbnwwfHx8fDE2MDY1NzA2MjM&ixlib=rb-1.2.1&q=80&w=600',
      description: 'Help us keep our beaches clean! Participate in our community cleanup day and make a difference.',
    },
    {
      title: 'Cultural Festival 2024',
      image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGN1bHR1cmFsJTIwZmVzdGl2YWwlMjBpbWFnZXxlbnwwfHx8fDE2MDY1NzA2MjM&ixlib=rb-1.2.1&q=80&w=600',
      description: 'Experience the richness of our diverse cultures at the annual Cultural Festival. Food, music, and fun await!',
    },
    {
      title: 'Tech Innovations Conference',
      image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fHRlY2glMjBjb25mZXJlbmNlJTIwcGF0dHxlbnwwfHx8fDE2MDY1NzA2MjM&ixlib=rb-1.2.1&q=80&w=600',
      description: 'Join industry leaders at the Tech Innovations Conference to explore the latest trends and technologies.',
    },
    {
      title: 'Yoga Retreat Weekend',
      image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHlvZ2ElMjByZXRyZWF0JTIwd29lZW5kfGVufDB8fHx8MTYwNjU3MDYyMw&ixlib=rb-1.2.1&q=80&w=600',
      description: 'Relax and rejuvenate with our Yoga Retreat Weekend, perfect for all levels. Find your inner peace!',
    },
  ];
  
  return (
    <>
      <Helmet>
        <title>Your English Club</title>
        <meta name="description" content="Join our English club for engaging activities and community." />
        <meta name="keywords" content="English club, community, activities, language learning" />
        <meta name="author" content="Your Name" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Helmet>
      <Box
        bgGradient="linear(to-r, teal.500, green.500)"
        minH="100vh"
        fontFamily="'Montserrat', sans-serif"
        style={{ scrollBehavior: 'smooth' }}
        display="flex"
        flexDirection="column"
      >
        <Navbar />
        <Box flex="1" mt="64px">
          <HeroSection id="home" />
          <ClubActivities /> {/* New Club Activities Section */}
          <MotionBox id="introducing" py={{ base: 8, md: 16 }} textAlign="center">
            <IntroducingEvents />
          </MotionBox>
          
          {/* Slider Section */}
          <MotionBox id="slider" py={{ base: 8, md: 16 }} textAlign="center" bg="gray.50">
            <SliderModal posts={posts} />
          </MotionBox>

          <MotionBox id="gallery" py={{ base: 8, md: 16 }} textAlign="center">
            <ErrorBoundary>
              <Suspense fallback={<Spinner size="xl" color="teal.500" />}>
                <ImageGallery />
              </Suspense>
            </ErrorBoundary>
          </MotionBox>
          <MotionBox id="map" py={{ base: 8, md: 16 }} textAlign="center">
            <ErrorBoundary>
              <Suspense fallback={<Spinner size="xl" color="teal.500" />}>
                <MapPreview />
              </Suspense>
            </ErrorBoundary>
          </MotionBox>
          <MotionBox id="contact" py={{ base: 8, md: 16 }} textAlign="center">
            <RSVPForm onRSVP={openChat} aria-label="RSVP Form" />
          </MotionBox>
          <MotionBox id="about" py={{ base: 8, md: 16 }} textAlign="center">
            <AboutUs />
          </MotionBox>
        </Box>
        <Footer />
        <ErrorBoundary>
          <Suspense fallback={<Spinner size="xl" color="teal.500" />}>
            <ChatBot ref={chatBotRef} />
          </Suspense>
        </ErrorBoundary>
      </Box>
    </>
  );
};

export default LandingPage;
