// src/components/Navbar.js
import React from 'react';
import { Flex, Box, HStack, Button, IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'; // Optional for mobile responsiveness

const Navbar = () => {
  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Flex 
      as="nav" 
      bg="teal.500" 
      color="white" 
      p={4} 
      justify="space-between" 
      align="center" 
      boxShadow="md"
      position="fixed"
      w="100%"
      top={0}
      zIndex={10}
    >
      {/* Logo/Brand Name */}
      <Box 
        fontWeight="bold" 
        fontSize="2xl" 
        color="white" 
        letterSpacing="wide"
      >
        English Club
      </Box>

      {/* Navigation Links */}
      <HStack 
        as="nav" 
        spacing={6} 
        display={{ base: 'none', md: 'flex' }} // Hide on mobile, show on larger screens
      >
        {['home', 'about', 'events', 'gallery', 'contact'].map((item) => (
          <Button 
            key={item} 
            variant="link" 
            color="white" 
            fontSize="lg" 
            fontWeight="medium"
            onClick={() => scrollToSection(item)} 
            _hover={{ textDecoration: 'underline', color: 'gray.200' }} // Lighter color on hover
            _active={{ color: 'gray.300' }} // Change active color
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Button>
        ))}
      </HStack>

      {/* Hamburger Menu for Mobile */}
      <IconButton
        aria-label="Open Menu"
        icon={<HamburgerIcon />}
        size="lg"
        display={{ base: 'inline-flex', md: 'none' }} // Show on mobile
        onClick={() => console.log('Open Menu')} // Placeholder for functionality
        variant="ghost"
        color="white"
        _hover={{ bg: 'teal.600' }}
      />
    </Flex>
  );
};

export default Navbar;
