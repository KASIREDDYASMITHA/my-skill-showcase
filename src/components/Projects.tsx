import { ExternalLink } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Digital Time Capsule',
    period: '10/2025 – 02/2026',
    description:
      'A full-stack web application where users can store messages, images, and memories to be unlocked in the future. Built with secure authentication and real-time database features.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    live: 'https://spiffy-cupcake-acdbdc.netlify.app/',
    frontend: 'https://github.com/KASIREDDYASMITHA/Ditital_Time_Capsule_Frontend',
    backend: 'https://github.com/KASIREDDYASMITHA/Project_Backend_digital_Time_Capsule',
  },
  {
    title: 'Smart Agriculture Crop Recommendation System',
    period: '11/2025 – 02/2026',
    description:
      'Developed a machine learning crop recommendation system analyzing soil and weather data to suggest optimal crops.',
    tags: ['Python', 'Machine Learning'],
    github: 'https://github.com/KASIREDDYASMITHA/Smart_Agriculture_Crop_Recommendation_System',
  },

  {
  title: 'Email Phishing Detection Using Logistic Regression',
  period: '07/2025 – Present',
  description:
    'Building a machine learning model to classify phishing vs legitimate emails. Currently working on improving accuracy using advanced NLP techniques.',
  tags: ['Python', 'NLP'],
  status: 'In Progress',
}
];
// const Projects = () => {
//   return (
//     <section id="projects" className="py-20 section-gradient">
//       <div className="container mx-auto px-4 max-w-4xl">
//         <AnimatedSection>
//           <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Projects</h2>
//         </AnimatedSection>
//         <div className="space-y-6">
//           {projects.map((project, i) => (
//             <AnimatedSection key={i} delay={i * 0.15}>
//               <motion.div
//                 className="project-card glass-card rounded-xl p-6 group border border-border/50 hover:border-primary/30 transition-colors"
//                 whileHover={{ y: -6, boxShadow: '0 4px 30px hsl(187 82% 53% / 0.12), 0 8px 40px hsl(0 0% 0% / 0.3)' }}
//                 transition={{ type: 'spring', stiffness: 300 }}
//               >
//                 <div className="flex items-start justify-between">
//                   <div>
//                     <h3 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">{project.title}</h3>
//                     <span className="text-xs text-muted-foreground font-mono">{project.period}</span>
//                   </div>
//                   <motion.div whileHover={{ scale: 1.2, rotate: 15 }}>
//                     <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
//                   </motion.div>
//                 </div>
//                 <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{project.description}</p>
//                 <div className="flex flex-wrap gap-2 mt-4">
//                   {project.tags.map((tag, ti) => (
//                     <motion.span
//                       key={tag}
//                       className="border border-primary/20 text-primary/80 text-xs font-medium px-2.5 py-1 rounded bg-primary/5"
//                       initial={{ opacity: 0, y: 10 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: i * 0.15 + ti * 0.05 }}
//                     >
//                       {tag}
//                     </motion.span>
//                   ))}
//                 </div>
//               </motion.div>
//             </AnimatedSection>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


// const Projects = () => {
//   return (
//     <section id="projects" className="py-20 section-gradient">
//       <div className="container mx-auto px-4 max-w-5xl">
//         <AnimatedSection>
//           <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
//             Projects
//           </h2>
//         </AnimatedSection>

//         <div className="space-y-6">
//           {projects.map((project, i) => (
//             <AnimatedSection key={i} delay={i * 0.15}>
//               <motion.div
//                 className="project-card glass-card rounded-xl p-6 group border border-border/50 hover:border-primary/30 transition-colors"
//                 whileHover={{
//                   y: -6,
//                   boxShadow:
//                     '0 4px 30px hsl(187 82% 53% / 0.12), 0 8px 40px hsl(0 0% 0% / 0.3)',
//                 }}
//                 transition={{ type: 'spring', stiffness: 300 }}
//               >
//                 <div className="flex items-start justify-between">
//                   <div>
//                     <div className="flex items-center gap-2 flex-wrap">
//                       <h3 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">
//                         {project.title}
//                       </h3>

//                       {project.status && (
//                         <span className="text-[10px] px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-400 border border-yellow-400/30">
//                           {project.status}
//                         </span>
//                       )}
//                     </div>

//                     <span className="text-xs text-muted-foreground font-mono">
//                       {project.period}
//                     </span>
//                   </div>
//                 </div>

//                 <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
//                   {project.description}
//                 </p>

//                 {/* Buttons */}
//                 <div className="flex gap-3 mt-4 flex-wrap">
//                   {project.live && (
//                     <a href={project.live} target="_blank" rel="noreferrer">
//                       <button className="text-xs px-3 py-1 rounded bg-primary text-white hover:scale-105 transition">
//                         Live
//                       </button>
//                     </a>
//                   )}

//                   {project.frontend && (
//                     <a href={project.frontend} target="_blank" rel="noreferrer">
//                       <button className="text-xs px-3 py-1 rounded border border-primary text-primary hover:bg-primary hover:text-white transition">
//                         Frontend
//                       </button>
//                     </a>
//                   )}

//                   {project.backend && (
//                     <a href={project.backend} target="_blank" rel="noreferrer">
//                       <button className="text-xs px-3 py-1 rounded border border-primary text-primary hover:bg-primary hover:text-white transition">
//                         Backend
//                       </button>
//                     </a>
//                   )}

//                   {project.github && (
//                     <a href={project.github} target="_blank" rel="noreferrer">
//                       <button className="text-xs px-3 py-1 rounded border border-primary text-primary hover:bg-primary hover:text-white transition">
//                         GitHub
//                       </button>
//                     </a>
//                   )}
//                 </div>

//                 {/* Tags */}
//                 <div className="flex flex-wrap gap-2 mt-4">
//                   {project.tags.map((tag, ti) => (
//                     <motion.span
//                       key={tag}
//                       className="border border-primary/20 text-primary/80 text-xs font-medium px-2.5 py-1 rounded bg-primary/5"
//                       initial={{ opacity: 0, y: 10 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: i * 0.15 + ti * 0.05 }}
//                     >
//                       {tag}
//                     </motion.span>
//                   ))}
//                 </div>
//               </motion.div>
//             </AnimatedSection>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
const Projects = () => {
  return (
    <section id="projects" className="py-20 section-gradient">
      <div className="container mx-auto px-4 max-w-5xl">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
            Projects
          </h2>
        </AnimatedSection>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <motion.div
                className="project-card glass-card rounded-xl p-6 group border border-border/50 hover:border-primary/40 transition-all duration-300 relative overflow-hidden"
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 250 }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 blur-xl" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>

                        {project.status && (
                          <span className="text-[10px] px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-400 border border-yellow-400/30 animate-pulse">
                            {project.status}
                          </span>
                        )}
                      </div>

                      <span className="text-xs text-muted-foreground font-mono">
                        {project.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-4 flex-wrap">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer">
                        <button className="text-xs px-3 py-1 rounded bg-primary text-white hover:scale-110 hover:shadow-lg transition-all duration-300">
                          Live
                        </button>
                      </a>
                    )}

                    {project.frontend && (
                      <a href={project.frontend} target="_blank" rel="noreferrer">
                        <button className="text-xs px-3 py-1 rounded border border-primary text-primary hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300">
                          Frontend
                        </button>
                      </a>
                    )}

                    {project.backend && (
                      <a href={project.backend} target="_blank" rel="noreferrer">
                        <button className="text-xs px-3 py-1 rounded border border-primary text-primary hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300">
                          Backend
                        </button>
                      </a>
                    )}

                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <button className="text-xs px-3 py-1 rounded border border-primary text-primary hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300">
                          GitHub
                        </button>
                      </a>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, ti) => (
                      <motion.span
                        key={tag}
                        className="border border-primary/20 text-primary/80 text-xs font-medium px-2.5 py-1 rounded bg-primary/5 hover:scale-105 transition"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 + ti * 0.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
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

export default Projects;