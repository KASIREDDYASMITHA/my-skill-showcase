import { Award } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const certifications = [
  "Programming in Python – SWAYAM",
  "Data Structures using C",
  "Web Technology – SWAYAM",
  "Cloud Computing – IIT Kharagpur",
  "Programming – SWAYAM",
  "Introduction to Machine Learning – IIT Madras",
  "Certified Generative AI Professional – Oracle University",
  "Database Management System – SWAYAM",
  "Programming in Java – IIT Kharagpur",
  "AI Skills Passport – EY and Microsoft",
  "Salesforce Developer Course",
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
            Certifications
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <motion.div
                  className="glass-card glass-card-violet flex items-center gap-3 rounded-lg p-4 border border-border/50 hover:border-accent/20 transition-colors"
                  whileHover={{ y: -2, x: 4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div whileHover={{ rotate: 15, scale: 1.15 }}>
                    <Award size={18} className="text-accent shrink-0" />
                  </motion.div>

                  <span className="text-sm text-foreground">{cert}</span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Certifications;