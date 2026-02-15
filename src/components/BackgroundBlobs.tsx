import { motion } from 'framer-motion';

const BackgroundBlobs = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    {/* Noise overlay */}
    <div className="absolute inset-0 noise-overlay" />
    
    {/* Cyan blob */}
    <motion.div
      className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-[120px]"
      style={{ background: 'hsl(187 82% 53% / 0.06)' }}
      animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
    />
    {/* Violet blob */}
    <motion.div
      className="absolute top-1/2 -right-32 w-[400px] h-[400px] rounded-full blur-[120px]"
      style={{ background: 'hsl(270 91% 59% / 0.05)' }}
      animate={{ x: [0, -40, 0], y: [0, -60, 0] }}
      transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
    />
    {/* Cyan-violet blend blob */}
    <motion.div
      className="absolute -bottom-32 left-1/3 w-[350px] h-[350px] rounded-full blur-[100px]"
      style={{ background: 'linear-gradient(135deg, hsl(187 82% 53% / 0.04), hsl(270 91% 59% / 0.04))' }}
      animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
    />
  </div>
);

export default BackgroundBlobs;
