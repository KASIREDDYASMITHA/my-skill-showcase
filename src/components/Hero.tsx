import profileImg from '@/assets/profile.jpeg';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          {/* Profile Image */}
          <div className="shrink-0">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/40 shadow-2xl">
              <img src={profileImg} alt="Kasireddy Asmitha" className="w-full h-full object-cover object-top" />
            </div>
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-3 tracking-tight">
              Kasireddy Asmitha
            </h1>
            <p className="text-lg md:text-xl font-medium text-primary mb-5">
              Full Stack Developer | Web Development • Python • SQL • AI Tools
            </p>
            <p className="text-primary-foreground/80 leading-relaxed max-w-xl text-sm md:text-base">
              Entry-level Full Stack Developer with hands-on experience building responsive web applications using HTML, CSS, JavaScript, Python, and SQL. Developed multiple real-world projects involving frontend UI, backend logic, and database integration, while leveraging AI tools to accelerate development and improve UI design. Seeking an opportunity to contribute to production-ready applications and grow as a software engineer.
            </p>

            {/* Contact info */}
            <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-4 text-primary-foreground/70 text-sm">
              <span className="flex items-center gap-1"><Mail size={14} /> asmithareddy2022@gmail.com</span>
              <span className="flex items-center gap-1"><Phone size={14} /> 9030821604</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> Hyderabad</span>
            </div>

            {/* Links */}
            <div className="mt-5 flex items-center justify-center md:justify-start gap-4">
              <a href="https://github.com/KASIREDDYASMITHA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                <Github size={16} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/kasireddy-asmitha" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-foreground/10 transition-colors">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
