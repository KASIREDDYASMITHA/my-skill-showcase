import { ExternalLink } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Smart Agriculture Crop Recommendation System',
    period: '10/2025 – 02/2026',
    description:
      'Developed a machine learning crop recommendation system analyzing soil and weather data to suggest optimal crops. Implemented preprocessing and classification algorithms with a simple interface for real-time farmer support.',
    tags: ['Python', 'Machine Learning', 'Data Preprocessing', 'Classification'],
  },
  {
    title: 'Email Phishing Detection Using Logistic Regression',
    period: '07/2025 – 02/2026',
    description:
      'Built a machine learning model using Logistic Regression to classify phishing vs legitimate emails with high accuracy. Applied data preprocessing, feature extraction, and model evaluation techniques to strengthen email security detection.',
    tags: ['Python', 'Logistic Regression', 'NLP', 'Security'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 section-gradient">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Projects</h2>
        </AnimatedSection>
        <div className="space-y-6">
          {projects.map((project, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <motion.div
                className="project-card glass-card rounded-xl p-6 group border border-border/50 hover:border-primary/30 transition-colors"
                whileHover={{ y: -6, boxShadow: '0 4px 30px hsl(187 82% 53% / 0.12), 0 8px 40px hsl(0 0% 0% / 0.3)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">{project.title}</h3>
                    <span className="text-xs text-muted-foreground font-mono">{project.period}</span>
                  </div>
                  <motion.div whileHover={{ scale: 1.2, rotate: 15 }}>
                    <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                  </motion.div>
                </div>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, ti) => (
                    <motion.span
                      key={tag}
                      className="border border-primary/20 text-primary/80 text-xs font-medium px-2.5 py-1 rounded bg-primary/5"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + ti * 0.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
