import React, { Suspense } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import IntroducingUs from './components/IntroducingUs';
import EventDetails from './components/EventDetails';
import RSVPForm from './components/RSVPForm';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import { motion } from 'framer-motion'; // For animations

// Lazy loaded components
const ImageGallery = React.lazy(() => import('./components/ImageGallery')); // Updated to ImageGallery
const ChatBot = React.lazy(() => import('./components/ChatBot'));
const MapPreview = React.lazy(() => import('./components/MapPreview'));

// Motion wrapper for animations
const MotionBox = motion(Box);

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Your Landing Page Title</title>
        <meta name="description" content="A description of your landing page" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Helmet>
      <Box
        bgGradient="linear(to-r, teal.500, green.500)"
        minH="100vh"
        fontFamily="'Montserrat', sans-serif" // Update to Montserrat
        style={{ scrollBehavior: 'smooth' }}
        display="flex"
        flexDirection="column"
      >
        <Navbar />
        <Box flex="1" mt="64px">
          <HeroSection id="home" />

          <MotionBox
            id="introducing"
            py={{ base: 8, md: 16 }}
            textAlign="center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <IntroducingUs />
          </MotionBox>

          <MotionBox
            id="events"
            py={{ base: 8, md: 16 }}
            textAlign="center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <EventDetails />
          </MotionBox>

          <MotionBox
            id="gallery"
            py={{ base: 8, md: 16 }}
            textAlign="center"
            bg="gray.50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Suspense fallback={<div>Loading gallery...</div>}>
              <ImageGallery />
            </Suspense>
          </MotionBox>

          <MotionBox
            id="map"
            py={{ base: 8, md: 16 }}
            textAlign="center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Suspense fallback={<div>Loading map...</div>}>
              <Box aria-label="Event location map">
                <MapPreview />
              </Box>
            </Suspense>
          </MotionBox>

          <MotionBox
            id="contact"
            py={{ base: 8, md: 16 }}
            textAlign="center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <RSVPForm />
          </MotionBox>

          <MotionBox
            id="about"
            py={{ base: 8, md: 16 }}
            textAlign="center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <AboutUs />
          </MotionBox>
        </Box>

        <Footer />

        <Suspense fallback={<div>Loading chat...</div>}>
          <ChatBot />
        </Suspense>
      </Box>
    </>
  );
};

export default LandingPage;
