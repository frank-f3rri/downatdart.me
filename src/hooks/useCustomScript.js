import { useEffect } from 'react';
import Typed from 'typed.js';

const useCustomScript = (codeJSON) => {
  useEffect(() => {
    const script = document.createElement('script');

    const typed4 = new Typed('.typed-text',
      {
        strings: ['go rock climbing,', 'go rock climbing,', 'play chess,', 'go hiking,'],
        typeSpeed: 75,
        backSpeed: 50,
        bindInputFocusEvents: true,
        loop: true,
        cursorChar: '',
        backDelay: 1000,
        startDelay: 1000,
      });
    console.log(typed4);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
};

export default useCustomScript;
