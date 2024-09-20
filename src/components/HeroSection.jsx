import React, { useState, useEffect, useCallback } from 'react';
import { Box, Stack, Heading, Text, Button, Image, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

// Importing images from local assets
const images = [
  require('../assets/img/hero-1.jpg'), // Replace with your actual image file names
  require('../assets/img/hero-2.jpg'),
  require('../assets/img/hero-3.jpg'),
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const nextSlide = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(true);
    }, 600);
  }, []);

  const prevSlide = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setFade(true);
    }, 600);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

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
        transition="opacity 0.6s ease-in-out"
        opacity={fade ? 1 : 0}
        loading="lazy"
      />
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
      <Box aria-live="polite" style={{ position: 'absolute', top: '10px', left: '10px' }}>
      </Box>
    </Box>
  );
};

export default HeroSection;
