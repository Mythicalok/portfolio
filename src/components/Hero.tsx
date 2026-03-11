import { motion } from "framer-motion";
import { ChevronDown, Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  const scrollToNext = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const codeString = `> Who Am I ?

Alok Pratap Singh
Software Developer

> tech_stack

Java
Python
SpringBoot
MongoDB

> mission

Solve problems and
contribute to innovative software solutions.`;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative"
    >

      <div className="container mx-auto relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{
            duration: 0.8,
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="w-full bg-card/40 backdrop-blur-xl border border-primary/30 rounded-2xl shadow-[0_0_40px_rgba(99,102,241,0.15)] overflow-hidden font-mono"
        >
          {/* VS Code window header */}
          <div className="px-4 py-2.5 border-b border-border/50 bg-secondary/30 flex items-center justify-between">
            <div className="flex items-center text-xs text-muted-foreground/80 font-sans tracking-wide">
              portfolio.exe — Terminal
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-muted-foreground/20"></div>
              <div className="w-3 h-3 rounded-full bg-muted-foreground/20"></div>
              <div className="w-3 h-3 rounded-full bg-muted-foreground/20"></div>
            </div>
          </div>

          {/* Terminal content window */}
          <div className="p-6 md:p-8 text-sm md:text-base text-foreground/90 space-y-6">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="space-y-2"
            >
              <div className="flex items-center text-primary font-bold">
                <span className="mr-2">&gt;</span> whoami
              </div>
              <div className="pl-4">
                <div className="text-xl md:text-2xl font-bold font-sans tracking-tight text-foreground">Alok Pratap Singh</div>
                <div className="text-muted-foreground font-sans">Software Developer</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="space-y-2 pt-2"
            >
              <div className="flex items-center text-primary font-bold">
                <span className="mr-2">&gt;</span> tech_stack
              </div>
              <div className="pl-4 flex flex-wrap gap-2 pt-1 font-sans">
                {["Java", "Python", "SpringBoot", "MongoDB", "SQL"].map((tech) => (
                  <Badge key={tech} variant="outline" className="border-primary/30 bg-primary/5 hover:bg-primary/20 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all cursor-default pointer-events-auto">
                    <Code2 className="w-3 h-3 mr-1.5 text-primary" />
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="space-y-2 pt-2 pb-4"
            >
              <div className="flex items-center text-primary font-bold">
                <span className="mr-2">&gt;</span> mission
              </div>
              <div className="pl-4 font-sans text-muted-foreground">
                Solve problems and <br className="hidden sm:block" />
                contribute to innovative software solutions.
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.8 }}
              className="flex items-center text-muted-foreground/50 text-sm italic"
            >
              <span className="mr-2 text-primary animate-pulse w-3 h-5 bg-primary/60 inline-block align-middle"></span>
              Type Help or scroll to interact
            </motion.div>

          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer group"
          onClick={scrollToNext}
        >
          <span className="text-xs text-muted-foreground mb-2 group-hover:text-primary transition-colors font-mono">scroll to continue</span>
          <ChevronDown className="w-5 h-5 text-muted-foreground animate-bounce group-hover:text-primary transition-colors" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
