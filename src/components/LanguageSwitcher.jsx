import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonGroup, Box, useToast } from '@chakra-ui/react';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const toast = useToast(); // To show error messages

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
      .then(() => {
        setCurrentLanguage(lng);
        localStorage.setItem('i18nextLng', lng);
        toast({
          title: t('languageChangeSuccess'),
          description: t('languageChangeSuccessDescription', { language: lng }),
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error('Error changing language:', error);
        toast({
          title: t('languageChangeError'),
          description: t('languageChangeErrorDescription'),
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      });
  };

  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);

  return (
    <Box 
      borderWidth={1} 
      borderColor="gray.300" 
      borderRadius="md" 
      padding={2} 
      bg="white" 
      boxShadow="md"
    >
      <ButtonGroup spacing={4}>
        <Button 
          onClick={() => changeLanguage('en')} 
          colorScheme={currentLanguage === 'en' ? 'teal' : 'gray'}
          variant="solid"
          fontSize="lg"
          fontWeight="medium"
          _hover={{ bg: 'teal.600', color: 'white' }}
          _active={{ bg: 'teal.700', color: 'white' }}
          aria-label="Switch to English"
          aria-pressed={currentLanguage === 'en'}
        >
          {t('language.english')}
        </Button>
        <Button 
          onClick={() => changeLanguage('vi')} 
          colorScheme={currentLanguage === 'vi' ? 'teal' : 'gray'}
          variant="solid"
          fontSize="lg"
          fontWeight="medium"
          _hover={{ bg: 'teal.600', color: 'white' }}
          _active={{ bg: 'teal.700', color: 'white' }}
          aria-label="Switch to Vietnamese"
          aria-pressed={currentLanguage === 'vi'}
        >
          {t('language.vietnamese')}
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default LanguageSwitcher;
