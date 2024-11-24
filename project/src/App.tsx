import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import IntroAnimation from './components/IntroAnimation';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <IntroAnimation onComplete={() => setShowIntro(false)} />
      <AnimatePresence>
        {!showIntro && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Navbar />
            <Hero />
            <About />
            <Achievements />
            <Projects />
            <Skills />
            <Testimonials />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;