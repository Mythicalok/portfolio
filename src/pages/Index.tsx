import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WelcomeScreen from "@/components/WelcomeScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StoryTransition from "@/components/StoryTransition";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import WhyHireMe from "@/components/WhyHireMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);

  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/30">

      {/* Background Radial Gradient (Global) */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-background to-background pointer-events-none z-0"></div>

      <AnimatePresence mode="wait">
        {!showPortfolio ? (
          <WelcomeScreen key="welcome" onComplete={() => setShowPortfolio(true)} />
        ) : (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10"
          >
            <Navbar />

            <main>
              {/* Terminal Hero Section */}
              <Hero />

              {/* Transition -> Skills */}
              <StoryTransition
                lines={[
                  "You might be wondering...",
                  "What can this guy actually do?"
                ]}
              />
              <Skills />

              {/* Transition -> Projects */}
              <StoryTransition
                lines={[
                  "Skills are nice.",
                  "But real developers ship products.",
                  "Let me show you what I built."
                ]}
              />
              <Projects />

              {/* Transition -> Why Hire Me */}
              <StoryTransition
                lines={[
                  "Okay.",
                  "Now the real question.",
                  "Why should someone hire me?"
                ]}
              />
              <WhyHireMe />

              {/* Contact/CTA */}
              <Contact />
            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
