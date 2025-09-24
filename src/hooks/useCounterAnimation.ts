import { useEffect, useState } from 'react';

interface UseCounterAnimationProps {
  targetValue: number;
  duration?: number;
  isActive?: boolean;
}

export function useCounterAnimation({ 
  targetValue, 
  duration = 1000, 
  isActive = true 
}: UseCounterAnimationProps) {
  const [currentValue, setCurrentValue] = useState(0);
  
  useEffect(() => {
    if (!isActive || targetValue === 0) {
      setCurrentValue(targetValue);
      return;
    }
    
    let startTime: number;
    let animationId: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Function for ease-out effect
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
      const easedProgress = easeOutCubic(progress);
      
      setCurrentValue(Math.floor(easedProgress * targetValue));
      
      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [targetValue, duration, isActive]);
  
  return currentValue;
}