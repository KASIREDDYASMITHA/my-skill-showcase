import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 section-gradient">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-foreground mb-4">Get In Touch</h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p className="text-muted-foreground mb-8">
            I'm currently looking for new opportunities. Feel free to reach out!
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="flex flex-col items-center gap-4 mb-8">
            <a href="mailto:asmithareddy2022@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail size={18} className="text-primary" /> asmithareddy2022@gmail.com
            </a>
            <a href="tel:9030821604" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone size={18} className="text-primary" /> 9030821604
            </a>
            <span className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={18} className="text-primary" /> Hyderabad, India
            </span>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <div className="flex items-center justify-center gap-4">
            {[
              { href: 'https://github.com/KASIREDDYASMITHA', icon: Github },
              { href: 'https://www.linkedin.com/in/kasireddy-asmitha', icon: Linkedin },
            ].map(({ href, icon: Icon }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-full text-primary hover:text-foreground transition-all border border-primary/20 hover:border-primary/50"
                whileHover={{ scale: 1.15, y: -3, boxShadow: '0 0 20px hsl(187 82% 53% / 0.2)' }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-border/50 text-center">
        <p className="text-xs text-muted-foreground">© 2026 Kasireddy Asmitha. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Contact;
