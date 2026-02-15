import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';

const BackToTop = () => {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (v) => setShow(v > 400));
  }, [scrollY]);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-shadow border border-primary/30 bg-gradient-cyan text-foreground"
          whileHover={{ scale: 1.1, boxShadow: '0 0 20px hsl(187 82% 53% / 0.3)' }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
