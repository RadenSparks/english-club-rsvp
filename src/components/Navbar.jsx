import React, { useState } from 'react';
import { Flex, Box, HStack, Button, IconButton, Collapse, VStack } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
      fontFamily="'Montserrat', sans-serif"
    >
      <Box 
        fontWeight="bold" 
        fontSize="2xl" 
        color="white" 
        letterSpacing="wide"
      >
        English Club
      </Box>

      <HStack 
        as="nav" 
        spacing={6} 
        display={{ base: 'none', md: 'flex' }}
      >
        {['home', 'about', 'events', 'gallery', 'contact'].map((item) => (
          <Button 
            key={item} 
            variant="link" 
            color="white" 
            fontSize="lg" 
            fontWeight="medium"
            onClick={() => scrollToSection(item)} 
            _hover={{ textDecoration: 'underline', color: 'gray.200' }}
            _active={{ color: 'gray.300' }}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Button>
        ))}
      </HStack>

      <IconButton
        aria-label="Open Menu"
        icon={<HamburgerIcon />}
        size="lg"
        display={{ base: 'inline-flex', md: 'none' }}
        onClick={toggleMenu}
        variant="ghost"
        color="white"
        _hover={{ bg: 'teal.600' }}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      />

      <Collapse in={isOpen} animateOpacity>
        <VStack 
          id="mobile-menu" 
          spacing={4} 
          bg="teal.500" 
          p={4} 
          position="absolute" 
          top="60px" 
          right="0" 
          zIndex={10}
          display={{ base: 'flex', md: 'none' }}
        >
          {['home', 'about', 'events', 'gallery', 'contact'].map((item) => (
            <Button 
              key={item} 
              variant="link" 
              color="white" 
              fontSize="lg" 
              fontWeight="medium"
              onClick={() => {
                scrollToSection(item);
                setIsOpen(false); // Close menu after selection
              }} 
              _hover={{ textDecoration: 'underline', color: 'gray.200' }}
              _active={{ color: 'gray.300' }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Button>
          ))}
        </VStack>
      </Collapse>
    </Flex>
  );
};

export default Navbar;
