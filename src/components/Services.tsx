import { Code2, Database, Server, Layout } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const Services = () => {
  const serviceFeatures = [
    {
      icon: Layout,
      title: "Responsive UI",
      description: "Interfaces that actually look good on your phone.",
    },
    {
      icon: Server,
      title: "Backend APIs",
      description: "Logic that works on the server, holding it all together.",
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Because stuffing everything in LocalStorage is a bad idea.",
    },
    {
      icon: Code2,
      title: "Full-Stack Web",
      description: "From pixel to database, and everything in between.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-muted/20 border-t border-border/40">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16 max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground tracking-tight">
            What I actually do.
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">
            Besides googling error messages, I build end-to-end applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mb-12"
        >
          <Card className="p-8 bg-card border-border shadow-sm flex flex-col md:flex-row items-start gap-6">
            <div className="p-4 bg-muted rounded-xl flex-shrink-0">
              <Code2 className="h-8 w-8 text-foreground" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">
                End-to-End Development
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed font-light">
                Whether you need a sleek landing page or a complex dashboard with a robust backend, I can handle the entire stack.
                I write modern React apps on the frontend and wire them up securely to Node.js/Express APIs. The result? Scalable, maintainable, and user-friendly software that solves real problems.
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {serviceFeatures.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className="p-6 bg-card border-border hover:bg-muted/50 transition-colors duration-300 h-full flex flex-col items-start"
              >
                <div className="inline-flex p-3 bg-muted rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-foreground" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h4>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
