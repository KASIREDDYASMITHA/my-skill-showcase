import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend Development',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Authentication (JWT)'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    title: 'Version Control & Collaboration',
    skills: ['Git', 'GitHub'],
  },
  {
    title: 'Testing & Debugging',
    skills: ['Postman'],
  },
  {
    title: 'Tools & Deployment',
    skills: ['Responsive Design'],
  },
  {
    title: 'AI Tools',
    skills: ['GitHub Copilot', 'Lovable AI', 'Bolt'],
  },
  {
    title: 'Soft Skills',
    skills: ['Problem-solving', 'Analytical Thinking', 'Communication', 'Team Collaboration'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Skills</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <AnimatedSection key={cat.title} delay={i * 0.08}>
              <motion.div
                className="glass-card rounded-xl p-6 h-full"
                whileHover={{ y: -4, boxShadow: 'var(--card-shadow-hover)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      className="bg-accent text-accent-foreground text-xs font-medium px-3 py-1.5 rounded-full"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 + si * 0.05 }}
                      whileHover={{ scale: 1.08 }}
                    >
                      {skill}
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

export default Skills;
