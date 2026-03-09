import { GraduationCap, Code2, Rocket, Coffee } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Software Engineer",
      description: "Building scalable and efficient solutions.",
    },
    {
      icon: Rocket,
      title: "Machine Learning",
      description: "Predictive models and data-driven insights.",
    },
    {
      icon: Coffee,
      title: "Caffeinated Developer",
      description: "Powered by coffee and an irrational fear of bugs.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20 relative z-10 border-t border-border/40">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16 max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground tracking-tight">
            Who am I, anyway?
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">
            Glad you asked. Or scrolled down, at least.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="max-w-4xl space-y-8"
        >
          {/* Bio */}
          <motion.div variants={itemVariants}>
            <Card className="p-6 sm:p-10 bg-card border-border shadow-sm">
              <p className="text-lg text-foreground/90 leading-relaxed font-light">
                Listen, I could give you the standard "I am a passionate Full-Stack Developer", but you've probably read that 100 times today.
                <br /><br />
                The short version: I specialize in <span className="font-semibold text-primary">Java and Python</span>.
                I have hands-on experience in building and debugging scalable applications through academic projects. I enjoy turning complex problems into elegant, user-friendly digital solutions.
                <br /><br />
                My goal? Build solid software, learn continuously, and work with teams that value good engineering and a sense of humor.
              </p>
            </Card>
          </motion.div>

          {/* Education & Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants}>
              <Card className="p-6 sm:p-8 bg-card border-border shadow-sm h-full flex flex-col items-start gap-4">
                <div className="flex items-center gap-4 w-full">
                  <div className="p-4 bg-muted rounded-xl">
                    <GraduationCap className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Education</h3>
                </div>
                <div className="space-y-4 mt-2 w-full">
                  <div>
                    <p className="text-lg font-medium text-foreground/80">
                      Bachelors in Technology
                    </p>
                    <p className="text-muted-foreground mt-1">
                      Jai Narain College Of Technology, Bhopal — (2022-2026)
                    </p>
                    <p className="text-sm text-primary mt-1 font-medium">
                      6.9 CGPA
                    </p>
                  </div>
                  <div className="h-px bg-border/50 w-full" />
                  <div>
                    <p className="text-lg font-medium text-foreground/80">
                      Intermediate
                    </p>
                    <p className="text-muted-foreground mt-1">
                      Christ Jyoti Sr. Sec. Satna — (2020-2021)
                    </p>
                    <p className="text-sm text-primary mt-1 font-medium">
                      79%
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-6 sm:p-8 bg-card border-border shadow-sm h-full flex flex-col items-start gap-4">
                <div className="flex items-center gap-4 w-full">
                  <div className="p-4 bg-muted rounded-xl">
                    <Code2 className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Experience</h3>
                </div>
                <div className="space-y-4 mt-2 w-full">
                  <div>
                    <p className="text-lg font-medium text-foreground/80">
                      Software Developer Intern
                    </p>
                    <p className="text-muted-foreground mt-1">
                      UVNetware Pvt. Ltd. — Feb 2026 - Present
                    </p>
                  </div>
                  <div className="h-px bg-border/50 w-full" />
                  <div>
                    <p className="text-lg font-medium text-foreground/80">
                      Marketing Intern
                    </p>
                    <p className="text-muted-foreground mt-1">
                      Corizo pvt. Ltd. — Dec 2025 - Jan 2026
                    </p>
                  </div>
                  <div className="h-px bg-border/50 w-full" />
                  <div>
                    <p className="text-lg font-medium text-foreground/80">
                      Python Intern
                    </p>
                    <p className="text-muted-foreground mt-1">
                      Techsim Plus Pvt. Ltd. — Jun 2024 - Aug 2024
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Highlights Grid */}
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  className="p-8 bg-card border-border hover:bg-muted/50 text-left transition-colors duration-300 h-full flex flex-col"
                >
                  <div className="mb-4">
                    <highlight.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    {highlight.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
