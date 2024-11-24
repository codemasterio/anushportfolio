import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Brain, Sparkles, Github, Linkedin, Instagram } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const links = [
    { href: "#about", label: "About" },
    { href: "#achievements", label: "Achievements" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" }
  ];

  const socialLinks = [
    { 
      icon: <Github className="w-5 h-5" />, 
      href: "https://github.com/codemasterio",
      color: "hover:text-gray-400"
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      href: "https://www.linkedin.com/in/anush-naik-783b2327a",
      color: "hover:text-blue-400"
    },
    { 
      icon: <Instagram className="w-5 h-5" />, 
      href: "https://www.instagram.com/_anush_s_n_35/profilecard/?igsh=NWI4ZXFrcHlhcmgx",
      color: "hover:text-pink-500"
    }
  ];

  return (
    <nav className="fixed w-full z-50">
      <motion.div 
        className="bg-gray-900/80 backdrop-blur-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Left Logo */}
            <motion.a
              href="#"
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="relative"
                animate={{ 
                  boxShadow: ["0 0 0 rgba(139, 92, 246, 0)", "0 0 20px rgba(139, 92, 246, 0.5)", "0 0 0 rgba(139, 92, 246, 0)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 360, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Brain className="w-8 h-8 text-purple-500" />
                </motion.div>
                <motion.div
                  className="absolute -inset-1 bg-purple-500/20 rounded-full -z-10"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <motion.span 
                className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                AN
              </motion.span>
            </motion.a>

            {/* Social Links and Menu */}
            <div className="flex items-center space-x-6">
              {/* Social Links */}
              <div className="hidden md:flex items-center space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-white transition-colors ${link.color}`}
                    whileHover={{ scale: 1.2, rotate: 12 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>

              {/* Menu Button */}
              <motion.button
                className="p-2 z-50 relative"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-white"
                >
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-gray-900/95 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              className="fixed inset-0 flex items-center justify-center p-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="relative z-50">
                <motion.div className="flex flex-col items-center space-y-8">
                  {/* Mobile Social Links */}
                  <motion.div 
                    className="flex md:hidden space-x-8 mb-8"
                    variants={itemVariants}
                  >
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-white ${link.color}`}
                        whileHover={{ scale: 1.2, rotate: 12 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {link.icon}
                      </motion.a>
                    ))}
                  </motion.div>

                  {/* Navigation Links */}
                  {links.map((link, index) => (
                    <motion.div
                      key={link.href}
                      variants={itemVariants}
                      whileHover={{ scale: 1.1 }}
                      className="relative group"
                    >
                      <motion.div
                        className="absolute -inset-2 rounded-lg bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity"
                        layoutId={`highlight-${index}`}
                      />
                      <a
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="relative text-4xl font-bold text-white hover:text-purple-400 transition-colors"
                      >
                        {link.label}
                      </a>
                      <motion.div
                        className="h-0.5 bg-purple-500 w-0 group-hover:w-full absolute bottom-0 left-0"
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}