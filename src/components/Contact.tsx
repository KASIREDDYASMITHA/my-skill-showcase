import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 section-gradient">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Get In Touch</h2>
        <p className="text-muted-foreground mb-8">
          I'm currently looking for new opportunities. Feel free to reach out!
        </p>
        <div className="flex flex-col items-center gap-4 mb-8">
          <a href="mailto:asmithareddy2022@gmail.com" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <Mail size={18} /> asmithareddy2022@gmail.com
          </a>
          <a href="tel:9030821604" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <Phone size={18} /> 9030821604
          </a>
          <span className="flex items-center gap-2 text-muted-foreground">
            <MapPin size={18} /> Hyderabad, India
          </span>
        </div>
        <div className="flex items-center justify-center gap-4">
          <a href="https://github.com/KASIREDDYASMITHA" target="_blank" rel="noopener noreferrer" className="p-3 bg-card rounded-full card-shadow hover:card-shadow-hover text-foreground hover:text-primary transition-all">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/kasireddy-asmitha" target="_blank" rel="noopener noreferrer" className="p-3 bg-card rounded-full card-shadow hover:card-shadow-hover text-foreground hover:text-primary transition-all">
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">© 2026 Kasireddy Asmitha. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Contact;
