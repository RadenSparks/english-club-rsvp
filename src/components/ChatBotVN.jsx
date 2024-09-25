import React, { useEffect, forwardRef, useImperativeHandle, useState } from 'react';

const ChatBot = forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://app.artibot.ai/loader.js';
      document.head.appendChild(script);

      script.onload = () => {
        if (window.ArtiBot) {
          new window.ArtiBot({
            i: '295b03fb-d85e-4d2d-a2bb-cca631a6acce', // Updated bot ID
          });
        }
      };

      script.onerror = () => {
        console.error('Failed to load the chatbot script.');
      };
    };

    loadScript();

    // Cleanup: Remove the script when the component unmounts
    return () => {
      const existingScript = document.querySelector('script[src="https://app.artibot.ai/loader.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
      const chatbotElement = document.getElementById('artibot-295b03fb-d85e-4d2d-a2bb-cca631a6acce');
      if (chatbotElement) {
        chatbotElement.innerHTML = ''; // Clear the chatbot content
      }
    };
  }, []);

  useImperativeHandle(ref, () => ({
    open: () => setIsVisible(true),
    close: () => setIsVisible(false),
  }));

  return (
    <div style={{ position: 'fixed', left: 0, top: '50%', transform: 'translateY(-50%)', height: '50%', zIndex: 1000 }}>
      <div style={{
        width: '400px',
        height: '400px', // Adjusted height for better visibility
        background: '#fff',
        boxShadow: '2px 0 10px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s',
        transform: isVisible ? 'translateX(0)' : 'translateX(-100%)'
      }}>
        <div id="artibot-295b03fb-d85e-4d2d-a2bb-cca631a6acce" style={{ width: '100%', height: '100%' }}>
          {/* Chatbot iframe or content goes here */}
        </div>
      </div>
    </div>
  );
});

export default ChatBot;
