import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Terminal as TerminalIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";

interface WelcomeScreenProps {
    onComplete: () => void;
}

const WelcomeScreen = ({ onComplete }: WelcomeScreenProps) => {
    const [step, setStep] = useState(0);
    const [showConnectBtn, setShowConnectBtn] = useState(false);
    const [showExploreBtn, setShowExploreBtn] = useState(false);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden p-4 font-mono">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

            <AnimatePresence mode="wait">
                {step === 0 && (
                    <motion.div
                        key="step-0"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                        transition={{ duration: 0.6 }}
                        className="w-full max-w-2xl bg-card border border-border rounded-xl shadow-2xl overflow-hidden"
                    >
                        {/* Terminal Header */}
                        <div className="px-4 py-2 border-b border-border bg-muted flex items-center gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            </div>
                            <div className="mx-auto flex items-center text-xs text-muted-foreground font-sans">
                                <TerminalIcon className="w-3 h-3 mr-2" />
                                system_connect.exe
                            </div>
                        </div>

                        {/* Terminal Body */}
                        <div className="p-6 text-sm text-primary/90 h-[300px] flex flex-col justify-between">
                            <div>
                                <TypeAnimation
                                    sequence={[
                                        'Initializing connection...',
                                        800,
                                        'Initializing connection... [OK]\nSearching developer profile...',
                                        1000,
                                        'Initializing connection... [OK]\nSearching developer profile... [FOUND]\n\nProfile: Alok Pratap Singh\nSkill level: Advanced\nStatus: Available for opportunities',
                                        () => setShowConnectBtn(true)
                                    ]}
                                    wrapper="div"
                                    cursor={true}
                                    style={{ whiteSpace: 'pre-line', display: 'block', lineHeight: '1.6' }}
                                />
                            </div>

                            <AnimatePresence>
                                {showConnectBtn && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-8 flex justify-end"
                                    >
                                        <Button
                                            onClick={() => setStep(1)}
                                            className="bg-primary text-primary-foreground font-sans hover:scale-105 transition-transform"
                                        >
                                            Establish Connection
                                        </Button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}

                {step === 1 && (
                    <motion.div
                        key="step-1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-start max-w-2xl text-left space-y-8 w-full px-6"
                    >
                        <div className="text-xl md:text-2xl text-foreground font-medium leading-relaxed max-w-xl">
                            <TypeAnimation
                                sequence={[
                                    500,
                                    "Hey.",
                                    1000,
                                    "Hey.\n\nYou actually came.",
                                    1500,
                                    "Hey.\n\nYou actually came.\nMost people open portfolios\nand close them in 3 seconds.",
                                    1000,
                                    "Hey.\n\nYou actually came.\nMost people open portfolios\nand close them in 3 seconds.\n\nBut since you're still here...",
                                    1000,
                                    "Hey.\n\nYou actually came.\nMost people open portfolios\nand close them in 3 seconds.\n\nBut since you're still here...\nLet me introduce myself.",
                                    1000,
                                    "Hey.\n\nYou actually came.\nMost people open portfolios\nand close them in 3 seconds.\n\nBut since you're still here...\nLet me introduce myself.\n\nI'm Alok.\nI build scalable applications.",
                                    1000,
                                    "Hey.\n\nYou actually came.\nMost people open portfolios\nand close them in 3 seconds.\n\nBut since you're still here...\nLet me introduce myself.\n\nI'm Alok.\nI build scalable applications.\nAnd sometimes...",
                                    1500,
                                    "Hey.\n\nYou actually came.\nMost people open portfolios\nand close them in 3 seconds.\n\nBut since you're still here...\nLet me introduce myself.\n\nI'm Alok.\nI build scalable applications.\nAnd sometimes...\nI break production too.",
                                    () => setShowExploreBtn(true)
                                ]}
                                wrapper="div"
                                cursor={true}
                                style={{ whiteSpace: 'pre-line', display: 'block' }}
                            />
                        </div>

                        <AnimatePresence>
                            {showExploreBtn && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="pt-8"
                                >
                                    <Button
                                        onClick={onComplete}
                                        size="lg"
                                        className="group bg-foreground text-background font-sans hover:bg-foreground/90 rounded-full px-8 py-6 text-lg font-medium"
                                    >
                                        Let's Explore
                                        <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default WelcomeScreen;
