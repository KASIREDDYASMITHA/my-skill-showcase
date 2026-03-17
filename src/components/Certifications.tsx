// import { Award } from "lucide-react";
// import AnimatedSection from "./AnimatedSection";
// import { motion } from "framer-motion";

// const certifications = [
//   "Programming in Python – SWAYAM",
//   "Data Structures using C",
//   "Web Technology – SWAYAM",
//   "Cloud Computing – IIT Kharagpur",
//   "Programming – SWAYAM",
//   "Introduction to Machine Learning – IIT Madras",
//   "Certified Generative AI Professional – Oracle University",
//   "Database Management System – SWAYAM",
//   "Programming in Java – IIT Kharagpur",
//   "AI Skills Passport – EY and Microsoft",
//   "Salesforce Developer Course",
// ];

// const Certifications = () => {
//   return (
//     <section id="certifications" className="py-20">
//       <div className="container mx-auto px-4 max-w-4xl">
//         <AnimatedSection>
//           <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
//             Certifications
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {certifications.map((cert, i) => (
//               <AnimatedSection key={i} delay={i * 0.06}>
//                 <motion.div
//                   className="glass-card glass-card-violet flex items-center gap-3 rounded-lg p-4 border border-border/50 hover:border-accent/20 transition-colors"
//                   whileHover={{ y: -2, x: 4 }}
//                   transition={{ type: "spring", stiffness: 400 }}
//                 >
//                   <motion.div whileHover={{ rotate: 15, scale: 1.15 }}>
//                     <Award size={18} className="text-accent shrink-0" />
//                   </motion.div>

//                   <span className="text-sm text-foreground">{cert}</span>
//                 </motion.div>
//               </AnimatedSection>
//             ))}
//           </div>
//         </AnimatedSection>
//       </div>
//     </section>
//   );
// };

// export default Certifications;


















import { Award, ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Web Development Training — Internshala Trainings",
    link: "https://drive.google.com/file/d/1bV8Vl4ZW_FufGsVqb-UB9G6A6KJwi506/view?usp=sharing",
  },
  {
    title: "Programming in Python – SWAYAM",
    link: "https://drive.google.com/file/d/1okCUsFRo9BFKHQEvnOB3G_Os6BpSCPcI/view?usp=sharing",
  },
  {
    title: "Data Structures using C",
    link: "https://drive.google.com/file/d/1bB-_GNfdk33Y1sI8Mz4GcdgtEVlnuds6/view?usp=sharing",
  },
  {
    title: "Web Technology – SWAYAM",
    link: "https://drive.google.com/file/d/1G3NbTaHpG0f8Wf8bpUhBjSNFzKdYBC1t/view?usp=sharing",
  },
  {
    title: "Cloud Computing – IIT Kharagpur",
    link: "https://drive.google.com/file/d/1xHFLkU2woRpRkzoBhqOT2dM-veA3QmWS/view?usp=sharing",
  },
  // {
  //   title: "Programming – SWAYAM",
  //   link: "#",
  // },
  {
    title: "Introduction to Machine Learning – IIT Madras",
    link: "https://drive.google.com/file/d/1EBDOizEA-ioeCFGduDWYX1lEtaIOOVHO/view?usp=sharing",
  },
  {
    title: "Certified Generative AI Professional – Oracle University",
    link: "https://drive.google.com/file/d/1ejqpfwWfseLRzbCJR31Byx4wj_c9hQSt/view?usp=sharing",
  },
  {
    title: "Database Management System – SWAYAM",
    link: "https://drive.google.com/file/d/1ioQlpfNW3wawBt7bb9KCKN4FtmdncZLX/view?usp=sharing",
  },
  // {
  //   title: "Programming in Java – IIT Kharagpur",
  //   link: "",
  // },
  {
    title: "AI Skills Passport – EY and Microsoft",
    link: "https://drive.google.com/file/d/1wIYvJRqU0NF7sllUJkhYZcdg1ljxwmDb/view?usp=sharing",
  },
  {
    title: "Salesforce Developer Course — YES Foundation (Youth Skilling Program)",
    link: "https://drive.google.com/file/d/1HjBFEKjdeaBQl1AZAc1s3csGenXVmYAt/view?usp=sharing",
  },
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
                  className="glass-card glass-card-violet flex flex-col gap-2 rounded-lg p-4 border border-border/50 hover:border-accent/30 transition-all"
                  
                  whileHover={{ y: -6, scale: 1.04, rotate: 0.5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div whileHover={{ rotate: 15, scale: 1.15 }}>
                      <Award size={18} className="text-accent shrink-0" />
                    </motion.div>

                    <span className="text-sm text-foreground font-medium">
                      {cert.title}
                    </span>
                  </div>

                  {/* View Certificate Button */}
                  {cert.link !== "#" && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-xs text-primary hover:underline mt-1"
                    >
                      View Certificate
                      <ExternalLink size={12} />
                    </a>
                  )}
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