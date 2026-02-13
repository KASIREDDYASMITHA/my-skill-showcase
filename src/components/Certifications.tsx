import { Award } from 'lucide-react';

const certifications = [
  'Programming in Python – SWAYAM',
  'Data Structures using C',
  'Web Technology – SWAYAM',
  'Cloud Computing – IIT Kharagpur',
  'Programming – SWAYAM',
  'Introduction to Machine Learning – IIT Madras',
  'Certified Generative AI Professional – Oracle University',
  'Database Management System – SWAYAM',
  'Programming in Java – IIT Kharagpur',
  'AI Skills Passport – EY and Microsoft',
  'Salesforce Developer Course',
  'YUVA Unstoppable (Supported by YES Foundation) — 2025',
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <div key={i} className="flex items-center gap-3 bg-card rounded-lg p-4 card-shadow hover:card-shadow-hover transition-shadow">
              <Award size={18} className="text-primary shrink-0" />
              <span className="text-sm text-foreground">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
