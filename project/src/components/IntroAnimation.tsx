import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const words = [
  { text: "IMAGINE", className: "text-6xl font-bold text-purple-400" },
  { text: "CREATE", className: "text-7xl font-extrabold text-blue-400" },
  { text: "INNOVATE", className: "text-6xl font-bold text-green-400" },
  { text: "SHAPING THE DIGITAL FUTURE", className: "text-4xl font-bold text-white" }
];

const containerVariants = {
  exit: {
    opacity: 0,
    transition: { duration: 0.5 }
  }
};

const wordVariants = {
  imagine: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1.1,
      textShadow: "0 0 8px rgb(167, 139, 250)",
      transition: { duration: 0.8 }
    },
    exit: { opacity: 0, scale: 0.8 }
  },
  create: {
    initial: { opacity: 0, x: -100 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    },
    exit: { opacity: 0, x: 100 }
  },
  innovate: {
    initial: { opacity: 0, rotate: -180 },
    animate: { 
      opacity: 1, 
      rotate: 0,
      transition: { type: "spring", stiffness: 200, damping: 20 }
    },
    exit: { opacity: 0, rotate: 180 }
  },
  future: {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
      transition: { duration: 1 }
    },
    exit: { opacity: 0, y: -50 }
  }
};

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentWordIndex < words.length - 1) {
        setCurrentWordIndex(prev => prev + 1);
      } else {
        setIsComplete(true);
        setTimeout(onComplete, 1000);
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, [currentWordIndex, onComplete]);

  const getVariant = (index: number) => {
    switch (index) {
      case 0: return wordVariants.imagine;
      case 1: return wordVariants.create;
      case 2: return wordVariants.innovate;
      case 3: return wordVariants.future;
      default: return wordVariants.imagine;
    }
  };

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50"
          variants={containerVariants}
          exit="exit"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentWordIndex}
              className={`text-center ${words[currentWordIndex].className}`}
              variants={getVariant(currentWordIndex)}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {words[currentWordIndex].text}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}