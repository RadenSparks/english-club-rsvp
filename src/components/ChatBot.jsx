import React, { useEffect } from 'react';

const ChatBot = () => {
  useEffect(() => {
    // Function to load the external script
    const loadScript = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://app.artibot.ai/loader.js';
      script.onload = () => {
        if (window.ArtiBot) {
          new window.ArtiBot({ i: "8129ffa5-08d8-475f-80a1-46b032cd2ac8" });
        }
      };
      document.head.appendChild(script);
    };

    loadScript();

    // Cleanup function to remove the script when the component unmounts
    return () => {
      const existingScript = document.querySelector('script[src="https://app.artibot.ai/loader.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return null; // This component does not render anything
};

export default ChatBot;
