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
  return <>{displayed}<span className="animate-pulse">|</span></>;
};

const Hero = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Animated background gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, hsl(174 60% 30% / 0.3) 0%, transparent 60%)',
            'radial-gradient(circle at 80% 50%, hsl(174 60% 30% / 0.3) 0%, transparent 60%)',
            'radial-gradient(circle at 20% 50%, hsl(174 60% 30% / 0.3) 0%, transparent 60%)',
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
              className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/40 shadow-2xl"
              whileHover={{ scale: 1.05, borderColor: 'hsl(174 60% 50% / 0.6)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img src={profileImg} alt="Kasireddy Asmitha" className="w-full h-full object-cover object-top" loading="eager" />
            </motion.div>
          </motion.div>

          {/* Text */}
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-3 tracking-tight"
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
              <TypeWriter text="Full Stack Developer | Web Development • Python • SQL • AI Tools" delay={800} />
            </motion.p>
            <motion.p
              className="text-primary-foreground/80 leading-relaxed max-w-xl text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Entry-level Full Stack Developer with hands-on experience building responsive web applications using HTML, CSS, JavaScript, Python, and SQL. Developed multiple real-world projects involving frontend UI, backend logic, and database integration, while leveraging AI tools to accelerate development and improve UI design. Seeking an opportunity to contribute to production-ready applications and grow as a software engineer.
            </motion.p>

            {/* Contact info */}
            <motion.div
              className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-4 text-primary-foreground/70 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <span className="flex items-center gap-1"><Mail size={14} /> asmithareddy2022@gmail.com</span>
              <span className="flex items-center gap-1"><Phone size={14} /> 9030821604</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> Hyderabad</span>
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
                className="btn inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold transition-all"
                whileHover={{ scale: 1.05, y: -2, boxShadow: '0 8px 25px hsl(174 60% 40% / 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={16} /> GitHub
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/kasireddy-asmitha"
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold transition-all"
                whileHover={{ scale: 1.05, y: -2, boxShadow: '0 8px 25px rgba(255,255,255,0.1)' }}
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
