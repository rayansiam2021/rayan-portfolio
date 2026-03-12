import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame, useTransform } from 'framer-motion';

const injectStyles = () => {
  if (typeof document === 'undefined' || document.getElementById('gradient-text-styles')) return;
  const style = document.createElement('style');
  style.id = 'gradient-text-styles';
  style.textContent = `
    .animated-gradient-text {
      position: relative;
      margin: 0 auto;
      display: flex;
      max-width: fit-content;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border-radius: 1.25rem;
      font-weight: 500;
      backdrop-filter: blur(10px);
      transition: box-shadow 0.5s ease-out;
      overflow: hidden;
    }
    .animated-gradient-text.with-border { padding: 2px; }
    .gradient-overlay {
      position: absolute;
      inset: 0;
      z-index: 0;
      pointer-events: none;
      border-radius: inherit;
    }
    .gradient-overlay::before {
      content: '';
      position: absolute;
      inset: 1px;
      background-color: #060010; 
      border-radius: inherit;
      z-index: -1;
    }
    .text-content {
      display: inline-block;
      position: relative;
      z-index: 2;
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      padding: 0.35rem 0.75rem;
    }
  `;
  document.head.appendChild(style);
};

export default function GradientText({
  children,
  className = '',
  colors = ['#22d3ee', '#3b82f6', '#22d3ee'],
  animationSpeed = 8,
  showBorder = false,
  direction = 'horizontal',
  pauseOnHover = false,
  yoyo = true
}) {
  const [isPaused, setIsPaused] = useState(false);
  const progress = useMotionValue(0);
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef(null);

  useEffect(() => { injectStyles(); }, []);

  const animationDuration = animationSpeed * 1000;

  useAnimationFrame(time => {
    if (isPaused) {
      lastTimeRef.current = null;
      return;
    }
    if (lastTimeRef.current === null) {
      lastTimeRef.current = time;
      return;
    }
    const deltaTime = time - lastTimeRef.current;
    lastTimeRef.current = time;
    elapsedRef.current += deltaTime;

    if (yoyo) {
      const fullCycle = animationDuration * 2;
      const cycleTime = elapsedRef.current % fullCycle;
      progress.set(cycleTime < animationDuration ? (cycleTime / animationDuration) * 100 : 100 - ((cycleTime - animationDuration) / animationDuration) * 100);
    } else {
      progress.set((elapsedRef.current / animationDuration) * 100);
    }
  });

  const backgroundPosition = useTransform(progress, p => direction === 'horizontal' ? `${p}% 50%` : `50% ${p}%`);
  const gradientAngle = direction === 'horizontal' ? 'to right' : 'to bottom';
  const gradientColors = [...colors, colors[0]].join(', ');
  const gradientStyle = {
    backgroundImage: `linear-gradient(${gradientAngle}, ${gradientColors})`,
    backgroundSize: direction === 'horizontal' ? '300% 100%' : '100% 300%',
    backgroundRepeat: 'repeat'
  };

  return (
    <motion.div
      className={`animated-gradient-text ${showBorder ? 'with-border' : ''} ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {showBorder && <motion.div className="gradient-overlay" style={{ ...gradientStyle, backgroundPosition }} />}
      <motion.div className="text-content" style={{ ...gradientStyle, backgroundPosition }}>{children}</motion.div>
    </motion.div>
  );
}