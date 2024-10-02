import React, { useEffect, forwardRef, useImperativeHandle, useState } from 'react';

const ChatBot = forwardRef(({ language }, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentBotId, setCurrentBotId] = useState('');

  useEffect(() => {
    // Set the bot ID based on the selected language
    if (language === 'en') {
      setCurrentBotId('760fc770-e2a9-4001-90ef-7bb0821b01a1'); // English Bot ID
    } else if (language === 'vi') {
      setCurrentBotId('295b03fb-d85e-4d2d-a2bb-cca631a6acce'); // Vietnamese Bot ID
    }
  }, [language]);

  useEffect(() => {
    if (!currentBotId) return;

    const loadChatBotScript = () => {
      const scriptId = 'artibot-script';
      let script = document.getElementById(scriptId);

      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://app.artibot.ai/loader.js';
        document.head.appendChild(script);
      }

      script.onload = () => {
        if (window.ArtiBot) {
          new window.ArtiBot({
            i: currentBotId,
            em: {
              id: '1726707834850',
              w: '400',
              h: '400',
              sh: true,
              tb: false,
            },
          });
        }
      };

      script.onerror = () => {
        console.error('Failed to load the chatbot script.');
      };
    };

    loadChatBotScript();

    return () => {
      const chatbotElement = document.getElementById(`artibot-${currentBotId}`);
      if (chatbotElement) {
        chatbotElement.innerHTML = ''; // Clear the chatbot content on unmount or bot ID change
      }
    };
  }, [currentBotId]);

  useImperativeHandle(ref, () => ({
    open: () => setIsVisible(true),
    close: () => setIsVisible(false),
  }));

  return (
    <div style={{ position: 'fixed', left: 0, top: '50%', transform: 'translateY(-50%)', height: '50%', zIndex: 1000 }}>
      <div style={{
        width: '400px',
        height: '400px',
        background: '#fff',
        boxShadow: '2px 0 10px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s',
        transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
      }}>
        <div id={`artibot-${currentBotId}`} style={{ width: '100%', height: '100%' }}>
          {/* Chatbot iframe or content */}
        </div>
      </div>
    </div>
  );
});

export default ChatBot;
