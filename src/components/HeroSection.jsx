import React, { useState, useEffect, useCallback } from 'react';
import { Box, Stack, Heading, Text, Button, Image, IconButton, HStack } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';

const images = [
  require('../assets/img/gallery2.jpg'),
  require('../assets/img/gallery7.jpg'),
  require('../assets/img/hero-2.jpg'),
];

const HeroSection = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

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
    if (!isPaused) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [nextSlide, isPaused]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      const headerOffset = 70; // Adjust based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 50; // Adjust the additional offset here

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box
      position="relative"
      h="70vh"
      overflow="hidden"
      boxShadow="lg"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
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
        aria-live="polite"
      />
      <Box position="relative" h="full" display="flex" alignItems="center" justifyContent="center" color="white">
        <Stack textAlign="center" spacing={4} zIndex="1">
          <Heading fontSize={['2xl', '4xl', '5xl']} fontWeight="bold" color="white" textShadow="2px 2px 6px rgba(0,0,0,0.7)">
            {t('hero_title')}
          </Heading>
          <Text fontSize={['lg', 'xl', '2xl']} color="white" textShadow="1px 1px 4px rgba(0,0,0,0.5)">
            {t('hero_date')}
          </Text>
          <Button
            colorScheme="teal"
            size="lg"
            px={10}
            onClick={() => scrollToSection('rsvp-form')}
            _hover={{ bg: 'teal.700' }}
            _focus={{ boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)' }}
          >
            {t('rsvp_button')}
          </Button>
        </Stack>
      </Box>
      <IconButton
        icon={<ChevronLeftIcon boxSize={8} />}
        onClick={prevSlide}
        aria-label={t('previous_slide')}
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
        aria-label={t('next_slide')}
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
      <HStack position="absolute" bottom="20px" width="full" justify="center" spacing={2} zIndex="2">
        {images.map((_, idx) => (
          <Box
            key={idx}
            w="10px"
            h="10px"
            borderRadius="full"
            bg={idx === currentIndex ? 'teal.400' : 'gray.300'}
            transition="background 0.3s"
          />
        ))}
      </HStack>
    </Box>
  );
};

export default HeroSection;
