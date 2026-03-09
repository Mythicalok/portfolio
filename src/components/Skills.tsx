import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages & Frameworks",
      skills: ["Java", "Python", "SpringBoot", "Swing"],
    },
    {
      category: "Data & ML",
      skills: ["OpenCV", "Numpy", "Pandas", "PowerBI"],
    },
    {
      category: "Database & API",
      skills: ["MongoDB", "SQL", "Supa Base", "REST API"],
    },
    {
      category: "Other ",
      skills: ["Data Structures", "Object Oriented Programming", "Postman", "Git & GitHub"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8 relative z-10 font-mono">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="space-y-12"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
              <div className="md:w-48 flex-shrink-0">
                <h3 className="text-xl font-bold text-primary/90">
                  {category.category}
                </h3>
              </div>
              <div className="flex-1 flex flex-wrap gap-x-6 gap-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.05, color: "hsl(var(--primary))" }}
                    className="text-lg text-muted-foreground transition-colors cursor-crosshair"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
