'use client';

import { useEffect } from 'react';

export default function WOWInitializer() {
  useEffect(() => {
    const initWOW = async () => {
      if (typeof window !== 'undefined') {
        try {
          const WOW = (await import('wowjs')).default;
          const wow = new WOW.WOW({
            boxClass: 'wow',
            animateClass: 'animate__animated',
            offset: 0,
            mobile: true,
            live: true,
            scrollContainer: null,
            resetAnimation: true,
          });
          wow.init();
        } catch (error) {
          console.error('Failed to initialize WOW.js:', error);
        }
      }
    };

    initWOW();

    // Cleanup function
    return () => {
      if (typeof window !== 'undefined' && window.WOW) {
        try {
          // Properly clean up WOW instance
          const wow = new window.WOW.WOW();
          wow.sync();
        } catch (e) {
          console.error('Error cleaning up WOW.js:', e);
        }
      }
    };
  }, []);

  return null;
}
