import React from 'react';
import { Box, Text, useBreakpointValue, HStack, IconButton, useColorModeValue } from '@chakra-ui/react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  // Responsive font size
  const fontSize = useBreakpointValue({ base: 'sm', md: 'md' });

  // Colors for social media icons
  const iconColor = useColorModeValue('white', 'gray.300');
  const iconHoverColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box
      bg="blue.700"
      color="white"
      py={6}
      textAlign="center"
      boxShadow="md"
      px={{ base: 4, md: 6 }} // Added padding for responsiveness
    >
      <HStack spacing={4} justify="center" mb={4}>
        <IconButton 
          as="a" 
          href="https://www.facebook.com/yourpage" 
          aria-label="Facebook" 
          icon={<FaFacebookF />} 
          color={iconColor}
          _hover={{ color: iconHoverColor }}
          isRound
          target="_blank" // Open in a new tab
          rel="noopener noreferrer" // Security improvement
        />
        <IconButton 
          as="a" 
          href="https://twitter.com/yourprofile" 
          aria-label="Twitter" 
          icon={<FaTwitter />} 
          color={iconColor}
          _hover={{ color: iconHoverColor }}
          isRound
          target="_blank"
          rel="noopener noreferrer"
        />
        <IconButton 
          as="a" 
          href="https://www.instagram.com/yourprofile" 
          aria-label="Instagram" 
          icon={<FaInstagram />} 
          color={iconColor}
          _hover={{ color: iconHoverColor }}
          isRound
          target="_blank"
          rel="noopener noreferrer"
        />
        <IconButton 
          as="a" 
          href="https://www.linkedin.com/in/yourprofile" 
          aria-label="LinkedIn" 
          icon={<FaLinkedinIn />} 
          color={iconColor}
          _hover={{ color: iconHoverColor }}
          isRound
          target="_blank"
          rel="noopener noreferrer"
        />
      </HStack>
      <Text fontSize={fontSize} fontWeight="medium">
        &copy; 2024 English Club. All Rights Reserved.
      </Text>
    </Box>
  );
};

export default Footer;
