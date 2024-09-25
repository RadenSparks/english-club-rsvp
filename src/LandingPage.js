import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Box, Spinner, Stack, Heading, Text, Button, Image } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import IntroducingEvents from './components/IntroducingEvents';
import RSVPForm from './components/RSVPForm';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import SliderModal from './components/SliderModal';
import { useTranslation } from 'react-i18next';

const ImageGallery = React.lazy(() => import('./components/ImageGallery'));
const ChatBot = React.lazy(() => import('./components/ChatBotEN'));
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
      return <Text textAlign="center" fontSize="xl" color="red.500">Something went wrong.</Text>;
    }
    return this.props.children; 
  }
}

// Club Activities Section
const ClubActivities = () => {
  const { t } = useTranslation();

  return (
    <MotionBox id="activities" py={{ base: 12, md: 20 }} textAlign="center">
      <Heading as="h2" size="2xl" mb={8} color="teal.600">{t('clubActivities.heading')}</Heading>
      <Stack spacing={8} direction={{ base: 'column', md: 'row' }} justify="center">
        <Box boxShadow="lg" p={4} borderRadius="lg" bg="white" maxW="sm">
          <Image src="https://source.unsplash.com/600x400/?conversation" alt={t('clubActivities.weeklyConversation')} borderRadius="md" />
          <Text fontSize="lg" mt={4} color="gray.700">{t('clubActivities.weeklyConversation')}</Text>
        </Box>
        <Box boxShadow="lg" p={4} borderRadius="lg" bg="white" maxW="sm">
          <Image src="https://source.unsplash.com/600x400/?workshop" alt={t('clubActivities.workshop')} borderRadius="md" />
          <Text fontSize="lg" mt={4} color="gray.700">{t('clubActivities.workshop')}</Text>
        </Box>
        <Box boxShadow="lg" p={4} borderRadius="lg" bg="white" maxW="sm">
          <Image src="https://source.unsplash.com/600x400/?cultural-event" alt={t('clubActivities.culturalEvent')} borderRadius="md" />
          <Text fontSize="lg" mt={4} color="gray.700">{t('clubActivities.culturalEvent')}</Text>
        </Box>
      </Stack>
      <MotionBox whileHover={{ scale: 1.1 }} mt={6}>
        <Button colorScheme="teal" size="lg" borderRadius="full" aria-label={t('clubActivities.viewAllActivities')}>{t('clubActivities.viewAllActivities')}</Button>
      </MotionBox>
    </MotionBox>
  );
};

const LandingPage = () => {
  const chatBotRef = useRef(null);
  const [isChatBotOpen, setIsChatBotOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const toggleChatBot = () => {
    if (chatBotRef.current) {
      if (isChatBotOpen) {
        chatBotRef.current.close();
      } else {
        chatBotRef.current.open();
      }
      setIsChatBotOpen(!isChatBotOpen);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const posts = [
    // Your existing posts data
  ];
  
  return (
    <>
      <Helmet>
        <title>Your English Club</title>
        <meta name="description" content="Join our English club for engaging activities and community." />
        <meta name="keywords" content="English club, community, activities, language learning" />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="Your English Club" />
        <meta property="og:description" content="Join our English club for engaging activities and community." />
        <meta property="og:image" content="https://example.com/your-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Helmet>
      <Box
        bgGradient="linear(to-r, #89f7fe, #66a6ff)"
        minH="100vh"
        fontFamily="'Montserrat', sans-serif"
        style={{ scrollBehavior: 'smooth' }}
        display="flex"
        flexDirection="column"
      >
        <Navbar />
        <Box flex="1" mt="64px">
          <HeroSection id="home" />
          <ClubActivities />
          <MotionBox id="events" py={{ base: 12, md: 20 }} textAlign="center">
            <IntroducingEvents />
          </MotionBox>
          <MotionBox id="slider" py={{ base: 12, md: 20 }} textAlign="center" bg="gray.50">
            <SliderModal posts={posts} />
          </MotionBox>
          <MotionBox id="gallery" py={{ base: 12, md: 20 }} textAlign="center">
            <ErrorBoundary>
              <Suspense fallback={<Box textAlign="center"><Spinner size="xl" color="teal.500" /><Text>Loading Gallery...</Text></Box>}>
                <ImageGallery />
              </Suspense>
            </ErrorBoundary>
          </MotionBox>
          <MotionBox id="map" py={{ base: 12, md: 20 }} textAlign="center">
            <ErrorBoundary>
              <Suspense fallback={<Box textAlign="center"><Spinner size="xl" color="teal.500" /><Text>Loading Map Preview...</Text></Box>}>
                <MapPreview />
              </Suspense>
            </ErrorBoundary>
          </MotionBox>
          <MotionBox id="contact" py={{ base: 12, md: 20 }} textAlign="center">
            <RSVPForm onRSVP={toggleChatBot} aria-label="RSVP Form" />
          </MotionBox>
          <MotionBox id="about" py={{ base: 12, md: 20 }} textAlign="center">
            <AboutUs />
          </MotionBox>
        </Box>
        <Footer />
        {isChatBotOpen && (
  <Box 
    textAlign="center" 
    position="fixed" 
    bottom="20px" 
    left="20px"  // Updated position
    zIndex="1000"
  >
    <Button onClick={toggleChatBot} colorScheme="teal">
      Close ChatBot
    </Button>
  </Box>
)}

        <ErrorBoundary>
          <Suspense fallback={<Box textAlign="center"><Spinner size="xl" color="teal.500" /><Text>Loading ChatBot...</Text></Box>}>
            <ChatBot ref={chatBotRef} />
          </Suspense>
        </ErrorBoundary>
        
        {/* Back to Top Button */}
        {showBackToTop && (
          <Box position="fixed" bottom="30px" right="30px" zIndex="1000">
            <Button onClick={scrollToTop} colorScheme="teal" borderRadius="full">
              ↑
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
};

export default LandingPage;