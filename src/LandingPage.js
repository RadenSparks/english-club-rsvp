import React from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import IntroducingUs from './components/IntroducingUs';
import EventDetails from './components/EventDetails';
import Gallery from './components/Gallery';
import RSVPForm from './components/RSVPForm';
import AboutUs from './components/AboutUs'; // Import AboutUs component
import Footer from './components/Footer';
import ChatBot from './components/ChatBot'; // Import ChatBot component
import MapPreview from './components/MapPreview'; // Import MapPreview component

const LandingPage = () => {
  return (
    <Box bg="#f9f9f9" minH="100vh" fontFamily="'Roboto', sans-serif">
      <Navbar />
      <Box mt="64px"> {/* Offset for fixed navbar */}
        <HeroSection id="home" />
        <Box id="introducing" py={16} textAlign="center">
          <IntroducingUs />
        </Box>
        <Box id="events" py={16} textAlign="center">
          <EventDetails />
        </Box>
        <Box id="map" py={16} textAlign="center"> {/* Add MapPreview here */}
          <MapPreview />
        </Box>
        <Box id="gallery" py={16} bg="gray.50" textAlign="center">
          <Gallery />
        </Box>
        <Box id="contact" py={16} textAlign="center">
          <RSVPForm />
        </Box>
        <Box id="about" py={16} textAlign="center"> {/* Move AboutUs here */}
          <AboutUs />
        </Box>
        <Footer />
      </Box>
      <ChatBot /> {/* Add ChatBot component */}
    </Box>
  );
};

export default LandingPage;
