import profileImg from '@/assets/profile.jpeg';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const TypeWriter = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    const timer = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, 30);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [text, delay]);
  return <>{displayed}<span className="animate-pulse text-primary">|</span></>;
};

const Hero = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      
      {/* Animated radial gradient */}
      <motion.div
        className="absolute inset-0 opacity-40"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, hsl(187 82% 53% / 0.08) 0%, transparent 60%)',
            'radial-gradient(circle at 80% 50%, hsl(270 91% 59% / 0.08) 0%, transparent 60%)',
            'radial-gradient(circle at 20% 50%, hsl(187 82% 53% / 0.08) 0%, transparent 60%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          {/* Profile Image */}
          <motion.div
            className="shrink-0"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-primary/30 shadow-2xl ring-4 ring-primary/10"
              whileHover={{ scale: 1.05, borderColor: 'hsl(187 82% 53% / 0.5)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img src={profileImg} alt="Kasireddy Asmitha" className="w-full h-full object-cover object-top" loading="eager" />
            </motion.div>
          </motion.div>

          {/* Text */}
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-3 tracking-tight"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Kasireddy Asmitha
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl font-medium text-primary mb-5 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <TypeWriter text="Web Development • Python • SQL • AI Tools " delay={800} />
            </motion.p>
            <motion.p
              className="text-muted-foreground leading-relaxed max-w-xl text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Entry-level Full Stack Developer with hands-on experience building responsive web applications. Skilled in frontend UI, backend logic, and database integration using HTML, CSS, JavaScript, Python, and SQL. Leveraged AI tools to accelerate development and enhance UI/UX. Passionate about contributing to production-ready applications and growing as a software engineer.
            </motion.p>

            {/* Contact info */}
            <motion.div
              className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-4 text-muted-foreground text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <span className="flex items-center gap-1.5"><Mail size={14} className="text-primary" /> asmithareddy2022@gmail.com</span>
              <span className="flex items-center gap-1.5"><Phone size={14} className="text-primary" /> 9030821604</span>
              <span className="flex items-center gap-1.5"><MapPin size={14} className="text-primary" /> Hyderabad</span>
            </motion.div>

            {/* Links */}
            <motion.div
              className="mt-5 flex items-center justify-center md:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <motion.a
                href="https://github.com/KASIREDDYASMITHA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center gap-2 bg-gradient-cyan text-foreground px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-primary/20"
                whileHover={{ scale: 1.05, y: -2, boxShadow: '0 8px 30px hsl(187 82% 53% / 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={16} /> GitHub
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/kasireddy-asmitha"
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center gap-2 border border-primary/30 text-foreground px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:border-primary/60"
                whileHover={{ scale: 1.05, y: -2, boxShadow: '0 8px 25px hsl(187 82% 53% / 0.15)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={16} /> LinkedIn
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
