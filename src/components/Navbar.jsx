import React, { useState } from 'react';
import { Flex, Box, HStack, Button, IconButton, Collapse, VStack, Image } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import LanguageSwitcher from './LanguageSwitcher'; // Import the LanguageSwitcher component
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook

const Navbar = () => {
  const { t } = useTranslation(); // Initialize the translation function
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (section) => {
    const element = document.getElementById(section); 
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
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
      {/* Logo Section */}
      <Box>
      <Box>
  <Image 
    src={require('../assets/img/logo.png')} // Ensure the path is correct
    boxSize={{ base: "70px", md: "90px" }} // Increased size for better visibility
    objectFit="contain"
  />
</Box>

</Box>


      {/* Desktop Navigation Links */}
      <HStack as="nav" spacing={6} display={{ base: 'none', md: 'flex' }}>
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
            {t(`nav.${item}`)} {/* Use translation here */}
          </Button>
        ))}

        {/* Language Switcher on the right */}
        <LanguageSwitcher />
      </HStack>

      {/* Mobile Hamburger Menu Icon */}
      <IconButton
        aria-label={isOpen ? t('nav.closeMenu') : t('nav.openMenu')} // Localized aria-label
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

      {/* Mobile Menu */}
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
              {t(`nav.${item}`)} {/* Use translation here */}
            </Button>
          ))}

          {/* Language Switcher in the mobile menu */}
          <LanguageSwitcher />
        </VStack>
      </Collapse>
    </Flex>
  );
};

export default Navbar;
