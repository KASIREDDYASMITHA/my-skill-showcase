import { useEffect, useState, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hoverType, setHoverType] = useState<'default' | 'button' | 'link' | 'card'>('default');
  const dotX = useSpring(0, { stiffness: 800, damping: 35 });
  const dotY = useSpring(0, { stiffness: 800, damping: 35 });
  const ringX = useSpring(0, { stiffness: 200, damping: 25 });
  const ringY = useSpring(0, { stiffness: 200, damping: 25 });
  const isTouchDevice = useRef(false);

  useEffect(() => {
    isTouchDevice.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice.current) return;

    const move = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const down = () => setClicking(true);
    const up = () => setClicking(false);

    const over = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const closest = el.closest('button, [role="button"], .btn') ? 'button'
        : el.closest('a') ? 'link'
        : el.closest('.glass-card, .project-card') ? 'card'
        : 'default';
      setHoverType(closest);
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      window.removeEventListener('mouseover', over);
    };
  }, [visible, dotX, dotY, ringX, ringY]);

  if (isTouchDevice.current || !visible) return null;

  const ringColor = hoverType === 'button' ? 'rgba(45,212,191,0.5)'
    : hoverType === 'link' ? 'rgba(34,211,238,0.5)'
    : hoverType === 'card' ? 'rgba(45,212,191,0.3)'
    : 'rgba(255,255,255,0.2)';

  const ringSize = hoverType === 'card' ? 48 : hoverType === 'default' ? 32 : 40;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference hidden md:block"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          className="rounded-full bg-primary"
          animate={{ scale: clicking ? 0.6 : 1, width: 8, height: 8 }}
          transition={{ type: 'spring', stiffness: 500 }}
        />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none hidden md:block"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          className="rounded-full border-2"
          animate={{
            width: clicking ? ringSize - 8 : ringSize,
            height: clicking ? ringSize - 8 : ringSize,
            borderColor: ringColor,
            boxShadow: hoverType !== 'default' ? `0 0 20px ${ringColor}` : 'none',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
