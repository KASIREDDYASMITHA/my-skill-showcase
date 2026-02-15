import { motion } from 'framer-motion';

const BackgroundBlobs = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
      animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-accent/10 blur-3xl"
      animate={{ x: [0, -40, 0], y: [0, -60, 0] }}
      transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute -bottom-32 left-1/3 w-72 h-72 rounded-full bg-primary/5 blur-3xl"
      animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
    />
  </div>
);

export default BackgroundBlobs;
