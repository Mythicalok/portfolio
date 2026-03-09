import { motion } from "framer-motion";

interface StoryTransitionProps {
    lines: string[];
}

const StoryTransition = ({ lines }: StoryTransitionProps) => {
    return (
        <div className="py-32 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto flex flex-col justify-center min-h-[50vh]">
            <div className="space-y-6 md:space-y-8 font-mono text-lg md:text-2xl text-foreground/80 leading-relaxed font-medium">
                {lines.map((line, index) => (
                    <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.4 }}
                    >
                        {line}
                    </motion.p>
                ))}
            </div>
        </div>
    );
};

export default StoryTransition;
