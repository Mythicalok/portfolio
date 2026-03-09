import { ExternalLink, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: "001",
      title: "Heart Attack Prediction Machine",
      link: "#",
      problem: "Identifying heart attack risk early is critical for patient care.",
      solution: "Developed a machine learning model to predict heart attack risk using patient health data with 85%+ accuracy.",
      features: [
        "Logistic Regression",
        "Decision Trees",
        "Random Forest",
        "Predictive modeling",
      ],
      techStack: ["Python", "Scikit", "Numpy", "Pandas"],
    },
    {
      id: "002",
      title: "Image Processing Application",
      link: "#",
      problem: "Complex image processing requires specialized desktop software.",
      solution: "Built image processing solutions for edge detection, filtering, and image enhancement.",
      features: [
        "Edge detection and filtering",
        "Image enhancement",
        "Histogram equalization",
        "Morphological operations",
      ],
      techStack: ["Python", "OpenCV"],
    },
    {
      id: "003",
      title: "Journal Database",
      link: "#",
      problem: "Managing journal entries efficiently requires a robust backend system.",
      solution: "Journal DataBase is a backend RESTful API designed to manage journal entries.",
      features: [
        "RESTful API design",
        "Robust database integration",
        "Entity management",
      ],
      techStack: ["Java", "Spring Boot", "MySQL/MongoDB"],
    },
    {
      id: "004",
      title: "Data Analysis Dashboard",
      link: "#",
      problem: "Extracting actionable insights from large datasets is difficult without visualization.",
      solution: "Created interactive data visualization dashboards for business intelligence.",
      features: [
        "Interactive visualizations",
        "Business intelligence insights",
        "Analyzed 10,000+ records",
      ],
      techStack: ["Power BI", "Data Analysis", "SQL"],
    },
  ];

  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 relative z-10 font-mono">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              key={index}
              className="bg-white/[0.02] backdrop-blur-md border border-white/[0.05] rounded-2xl p-6 sm:p-10 shadow-2xl hover:bg-white/[0.04] transition-colors duration-300"
            >
              {/* Case File Header */}
              <div className="flex items-center gap-3 text-muted-foreground/70 mb-8 border-b border-border/50 pb-4">
                <Terminal className="w-5 h-5" />
                <span className="text-sm tracking-widest uppercase">Case File #{project.id}</span>
              </div>

              {/* Title & Link */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <h3 className="text-3xl font-bold font-sans text-foreground">
                  Project: <span className="text-primary">{project.title}</span>
                </h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors bg-primary/10 px-4 py-2 rounded-full font-sans font-medium ${project.link === '#' ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-semibold">Problem</h4>
                    <p className="text-foreground/80 font-sans leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-semibold">Solution</h4>
                    <p className="text-foreground/80 font-sans leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-semibold">Features Executed</h4>
                  <ul className="space-y-3 font-sans">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start text-foreground/80 text-sm">
                        <span className="text-primary mr-2 mt-0.5">&gt;</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-border/50">
                    <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-semibold">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2 font-sans">
                      {project.techStack.map((tech, tIdx) => (
                        <span key={tIdx} className="text-xs text-muted-foreground bg-background px-2 py-1 rounded border border-border">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
