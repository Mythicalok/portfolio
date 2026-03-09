import { motion } from "framer-motion";
import { Mail, Github, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const handleCloseTab = () => {
    // In many browsers, window.close() won't work on tabs not opened by JS,
    // so we'll just show a funny alert or navigate them away.
    alert("Nice try. But you're still here.");
  };

  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative z-10 font-mono">
      <div className="container mx-auto max-w-3xl text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-16"
        >
          <p className="text-xl md:text-2xl text-foreground font-medium">
            So here's the situation.
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            You have two options.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* Option 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center p-8 bg-white/[0.02] backdrop-blur-md rounded-2xl border border-white/[0.05] hover:bg-white/[0.04] transition-colors duration-300"
          >
            <h3 className="text-2xl font-bold font-sans text-muted-foreground mb-4">Option 1</h3>
            <p className="text-muted-foreground mb-8">Close this tab and forget we ever met.</p>
            <Button
              variant="outline"
              onClick={handleCloseTab}
              className="mt-auto w-full border-destructive/50 text-destructive hover:bg-destructive/10 hover:text-destructive"
            >
              <X className="w-4 h-4 mr-2" />
              Close Tab
            </Button>
          </motion.div>

          {/* Option 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center p-8 bg-primary/[0.05] backdrop-blur-md rounded-2xl border border-primary/30 hover:bg-primary/[0.08] hover:-translate-y-1 transition-all duration-300 shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:shadow-[0_0_50px_rgba(99,102,241,0.3)] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/10 to-primary/0 translate-y-[-100%] group-hover:animate-[shimmer_2s_infinite]" />
            <h3 className="text-2xl font-bold font-sans text-primary mb-4 relative z-10">Option 2</h3>
            <p className="text-foreground/90 mb-8 font-medium relative z-10">Make the right choice. Hire me.</p>
            <div className="mt-auto flex flex-col w-full gap-3 relative z-10">
              <Button
                onClick={() => window.location.href = "mailto:aloksingh7587@gmail.com"}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/resume.pdf';
                    link.download = 'Alok_Pratap_Singh_Resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="w-full text-xs px-2 border-border/50 hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Download className="w-3 h-3 mr-1" />
                  Resume
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open('https://github.com/Mythicalok', '_blank')}
                  className="w-full text-xs px-2 border-border/50 hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Github className="w-3 h-3 mr-1" />
                  GitHub
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
