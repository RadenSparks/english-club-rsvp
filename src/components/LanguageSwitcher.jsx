import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonGroup, Box, useToast } from '@chakra-ui/react';
import ChatBot from './ChatBot'; // Import the unified ChatBot component

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [activeChatBotId, setActiveChatBotId] = useState(i18n.language === 'en' ? '295b03fb-d85e-4d2d-a2bb-cca631a6acce' : '760fc770-e2a9-4001-90ef-7bb0821b01a1');
  const toast = useToast();

  const changeLanguage = (lng) => {
    // Close the current chatbot before changing the language
    setActiveChatBotId(null);

    i18n.changeLanguage(lng)
      .then(() => {
        setCurrentLanguage(lng);
        localStorage.setItem('i18nextLng', lng);

        // Set the new chatbot ID based on the selected language
        setTimeout(() => {
          setActiveChatBotId(lng === 'en' ? '295b03fb-d85e-4d2d-a2bb-cca631a6acce' : '760fc770-e2a9-4001-90ef-7bb0821b01a1'); // Vietnamese ID
        }, 0); // Use a timeout to ensure the previous chatbot is unmounted first

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
    // Set the initial chatbot ID based on the current language
    setActiveChatBotId(i18n.language === 'en' ? '295b03fb-d85e-4d2d-a2bb-cca631a6acce' : '760fc770-e2a9-4001-90ef-7bb0821b01a1');
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

      {/* Render the appropriate ChatBot based on the activeChatBotId state */}
      {activeChatBotId && <ChatBot key={activeChatBotId} botId={activeChatBotId} />}
    </Box>
  );
};

export default LanguageSwitcher;
