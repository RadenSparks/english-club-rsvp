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
        new window.ArtiBot({
          i: "760fc770-e2a9-4001-90ef-7bb0821b01a1",
          em: {
            id: '1726707834850',
            w: '400',
            h: '400',
            sh: true,
            tb: false,
          },
        });
      };

      script.onerror = () => {
        console.error('Failed to load the chatbot script.');
      };
    };

    loadScript();

    return () => {
      const existingScript = document.querySelector('script[src="https://app.artibot.ai/loader.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
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
        <div id="artibot-1726707834850" style={{ width: '100%', height: '100%' }}>
          {/* Chatbot iframe or content goes here */}
        </div>
      </div>
    </div>
  );
});

export default ChatBot;
