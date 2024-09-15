import React from 'react';
import { Flex, Box, HStack, Button, IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

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
        onClick={() => console.log('Open Menu')}
        variant="ghost"
        color="white"
        _hover={{ bg: 'teal.600' }}
      />
    </Flex>
  );
};

export default Navbar;
