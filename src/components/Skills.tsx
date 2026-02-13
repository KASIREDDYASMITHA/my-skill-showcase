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
        <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-shadow">
              <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="bg-accent text-accent-foreground text-xs font-medium px-3 py-1.5 rounded-full">
                    {skill}
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

export default Skills;
