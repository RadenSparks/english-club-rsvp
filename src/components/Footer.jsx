import React from 'react';
import { Box, Text, useBreakpointValue, HStack, IconButton, useColorModeValue } from '@chakra-ui/react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Footer = () => {
  const { t } = useTranslation(); // Initialize translation
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
          aria-label={t('footer.facebook')} // Localized aria-label
          icon={<FaFacebookF />} 
          color={iconColor} // Use iconColor here
          _hover={{ color: iconHoverColor }}
          isRound
          target="_blank" 
          rel="noopener noreferrer"
        />
        <IconButton 
          as="a" 
          href="https://twitter.com/yourprofile" 
          aria-label={t('footer.twitter')} // Localized aria-label
          icon={<FaTwitter />} 
          color={iconColor} // Use iconColor here
          _hover={{ color: iconHoverColor }}
          isRound
          target="_blank"
          rel="noopener noreferrer"
        />
        <IconButton 
          as="a" 
          href="https://www.instagram.com/yourprofile" 
          aria-label={t('footer.instagram')} // Localized aria-label
          icon={<FaInstagram />} 
          color={iconColor} // Use iconColor here
          _hover={{ color: iconHoverColor }}
          isRound
          target="_blank"
          rel="noopener noreferrer"
        />
        <IconButton 
          as="a" 
          href="https://www.linkedin.com/in/yourprofile" 
          aria-label={t('footer.linkedin')} // Localized aria-label
          icon={<FaLinkedinIn />} 
          color={iconColor} // Use iconColor here
          _hover={{ color: iconHoverColor }}
          isRound
          target="_blank"
          rel="noopener noreferrer"
        />
      </HStack>
      <Text fontSize={fontSize} fontWeight="medium">
        &copy; {new Date().getFullYear()} {t('footer.copy_right')} {/* Localized copyright text */}
      </Text>
    </Box>
  );
};

export default Footer;
