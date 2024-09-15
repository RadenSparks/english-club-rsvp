import React, { useEffect } from 'react';

const ChatBot = () => {
  useEffect(() => {
    // Function to load the external script
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = 'https://app.artibot.ai/loader.js';
      script.async = true;
      script.type = 'text/javascript';
      script.onload = () => {
        if (window.ArtiBot) {
          new window.ArtiBot({ i: "760fc770-e2a9-4001-90ef-7bb0821b01a1" });
        }
      };
      document.body.appendChild(script);
    };

    loadScript();

    // Cleanup function to remove the script when the component unmounts
    return () => {
      const existingScript = document.querySelector('script[src="https://app.artibot.ai/loader.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return null; // This component does not render anything
};

export default ChatBot;
