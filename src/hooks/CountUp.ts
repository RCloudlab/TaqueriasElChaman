import { useEffect, useState } from "react";

export function useCountUp(end: number, duration = 2000, start:boolean) {
  const [count, setCount] = useState(0);
  const steps = 50;
  const stepDuration = duration / steps;
  const increment = end / steps;

  useEffect(() => {
    if (!start) return;
    if (end === 0) return;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep += 1;
      const newCount = Math.min(Math.round(increment * currentStep), end);
      
      setCount(newCount);

      if (currentStep === steps) {
        clearInterval(timer);
        setCount(end);
      }
    }, stepDuration);

    return () => clearInterval(timer);

  }, [end, duration, increment, steps, start]); 

  return count.toLocaleString('en-US');
}