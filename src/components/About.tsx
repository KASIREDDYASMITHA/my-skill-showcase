import { GraduationCap } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const education = [
  {
    degree: 'Bachelor of Technology (B.Tech) in Computer Science – Data Science Specialization',
    school: 'Sphoorthy Engineering College',
    period: '11/2022 – 05/2026',
    grade: 'CGPA: 8.50',
  },
  {
    degree: 'Intermediate',
    school: 'SR Junior College',
    period: '06/2020 – 05/2022',
    grade: 'Marks: 857',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Education</h2>
        </AnimatedSection>
        <div className="space-y-6">
          {education.map((edu, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <motion.div
                className="glass-card rounded-xl p-6"
                whileHover={{ y: -4, boxShadow: 'var(--card-shadow-hover)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="p-3 bg-accent rounded-lg text-accent-foreground shrink-0"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <GraduationCap size={22} />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{edu.school}</p>
                    <div className="flex flex-wrap gap-3 mt-2 text-xs text-muted-foreground">
                      <span className="bg-secondary px-2 py-1 rounded">{edu.period}</span>
                      <span className="bg-accent text-accent-foreground px-2 py-1 rounded font-medium">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
