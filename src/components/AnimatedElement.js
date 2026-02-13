'use client';

import { useEffect, useRef, useState } from 'react';

export default function AnimatedElement({ 
  children, 
  animation = 'fadeIn', 
  delay, 
  duration,
  className = '',
  tag: Tag = 'div',
  ...props 
}) {
  const [isMounted, setIsMounted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Set mounted state on client
    setIsMounted(true);
    
    // Only initialize WOW on client and if not already initialized
    const initAnimation = async () => {
      if (typeof window !== 'undefined' && !window.wowInstance) {
        const WOW = (await import('wowjs')).default.WOW;
        window.wowInstance = new WOW({
          boxClass: 'wow',
          animateClass: 'animate__animated',
          offset: 0,
          mobile: true,
          live: false,
          scrollContainer: null,
          resetAnimation: true,
        });
        window.wowInstance.init();
      }
    };

    initAnimation();

    return () => {
      // Cleanup
      if (window.wowInstance) {
        window.wowInstance = null;
      }
    };
  }, []);

  // Don't add animation classes on server
  if (!isMounted) {
    return <Tag className={className} {...props}>{children}</Tag>;
  }

  // Add animation classes on client
  const animationClasses = `wow animate__animated animate__${animation} ${className}`;
  
  return (
    <Tag 
      ref={elementRef}
      className={animationClasses.trim()}
      data-wow-delay={delay}
      data-wow-duration={duration}
      {...props}
    >
      {children}
    </Tag>
  );
}
