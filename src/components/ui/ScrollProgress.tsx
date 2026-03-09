import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [percent, setPercent] = useState(0);

    useEffect(() => {
        return scrollYProgress.onChange((latest) => {
            setPercent(Math.round(latest * 100));
        });
    }, [scrollYProgress]);

    return (
        <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-secondary">
            <motion.div
                className="h-full bg-primary origin-left"
                style={{ scaleX }}
            />
            <div className="absolute top-2 right-4 text-xs font-mono text-primary/80">
                Connection Strength: {percent}%
            </div>
        </div>
    );
};

export default ScrollProgress;
