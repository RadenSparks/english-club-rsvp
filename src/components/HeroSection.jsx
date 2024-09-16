import React, { useState, useEffect } from 'react';
import { Box, Stack, Heading, Text, Button, Image, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const HeroSection = () => {
  const images = [
    '/images/event_bg1.jpg',
    '/images/event_bg2.jpg',
    '/images/event_bg3.jpg',
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(true);
    }, 600); // Match this duration with the CSS transition duration
  };

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setFade(true);
    }, 600);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <Box position="relative" h="70vh" overflow="hidden" boxShadow="lg">
      <Image
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        objectFit="cover"
        h="full"
        w="full"
        position="absolute"
        top="0"
        left="0"
        transition="opacity 0.6s ease-in-out" // Smooth transition for image change
        opacity={fade ? 1 : 0} // Control opacity based on fade state
        loading="lazy" // Added lazy loading
      />
      {/* Darker overlay for better text contrast */}
      <Box
        position="absolute"
        top="0"
        left="0"
        h="full"
        w="full"
        bg="rgba(0, 0, 0, 0.5)"
      />
      <Box position="relative" h="full" display="flex" alignItems="center" justifyContent="center" color="white">
        <Stack textAlign="center" spacing={4} zIndex="1">
          <Heading fontSize={['2xl', '4xl', '5xl']} fontWeight="bold" color="white" textShadow="2px 2px 6px rgba(0,0,0,0.7)">
            Join Our English Club Events!
          </Heading>
          <Text fontSize={['lg', 'xl', '2xl']} color="white" textShadow="1px 1px 4px rgba(0,0,0,0.5)">
            Dates: 22/09/2024 & 29/09/2024
          </Text>
          <Button 
            colorScheme="teal" 
            size="lg" 
            px={10} 
            _hover={{ bg: 'teal.700' }} 
            _focus={{ boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)' }}
          >
            RSVP Now
          </Button>
        </Stack>
      </Box>
      <IconButton
        icon={<ChevronLeftIcon boxSize={8} />}
        onClick={prevSlide}
        aria-label="Previous slide"
        position="absolute"
        left="10px"
        top="50%"
        transform="translateY(-50%)"
        colorScheme="teal"
        variant="outline"
        size="lg"
        zIndex="2"
        _hover={{ bg: 'rgba(0, 0, 0, 0.2)' }}
      />
      <IconButton
        icon={<ChevronRightIcon boxSize={8} />}
        onClick={nextSlide}
        aria-label="Next slide"
        position="absolute"
        right="10px"
        top="50%"
        transform="translateY(-50%)"
        colorScheme="teal"
        variant="outline"
        size="lg"
        zIndex="2"
        _hover={{ bg: 'rgba(0, 0, 0, 0.2)' }}
      />
    </Box>
  );
};

export default HeroSection;
