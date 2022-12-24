import React, { useState, useEffect } from 'react';

const Toast = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [message, setMessage] = useState('Toast message');

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isVisible]);

  const handleClick = () => {
    setIsVisible(true);
    setMessage('New toast message');
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <button onClick={handleClick} className="bg-cyan-500">Show Toast</button>
      <div
        className={`fixed bottom-0 right-0 m-4 p-4 text-red-500 rounded-lg shadow-lg bg-blue-500 text-white text-sm ${
          isVisible ? 'fade-in' : 'fade-out'
        }`}
        style={{
          transition: 'all 0.5s ease-out',
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        }}
      >
        {message}
      </div>
    </>
  );
};

export default Toast;
