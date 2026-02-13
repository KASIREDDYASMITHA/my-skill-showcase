import { ExternalLink } from 'lucide-react';

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
        <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Projects</h2>
        <div className="space-y-6">
          {projects.map((project, i) => (
            <div key={i} className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-shadow group">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">{project.title}</h3>
                  <span className="text-xs text-muted-foreground">{project.period}</span>
                </div>
                <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
              </div>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-accent text-accent-foreground text-xs font-medium px-2.5 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
