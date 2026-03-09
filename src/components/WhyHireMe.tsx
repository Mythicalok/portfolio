import { motion } from "framer-motion";
import { CheckSquare } from "lucide-react";

const WhyHireMe = () => {
    const points = [
        "I learn quickly and adapt to new tech stacks.",
        "I build systems designed to scale, not just work locally.",
        "I write clean, maintainable, and readable code.",
        "I actually enjoy solving complicated real-world problems.",
    ];

    return (
        <section id="why-hire-me" className="py-32 px-4 sm:px-6 lg:px-8 relative z-10 font-mono">
            <div className="container mx-auto max-w-3xl">
                <div className="space-y-6">
                    {points.map((point, index) => (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            key={index}
                            className="group flex items-center p-4 rounded-lg hover:bg-muted/50 transition-colors border border-transparent hover:border-border/50"
                        >
                            <div className="mr-4 text-muted-foreground group-hover:text-primary transition-colors">
                                <CheckSquare className="w-5 h-5" />
                            </div>
                            <p className="text-lg md:text-xl text-foreground/80 font-sans tracking-wide">
                                {point}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyHireMe;
