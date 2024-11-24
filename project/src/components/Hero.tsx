import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';

const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: 12,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  }
};

export default function Hero() {
  const socialLinks = [
    { 
      icon: <Github size={24} />, 
      href: "https://github.com/codemasterio",
      color: "hover:text-gray-400"
    },
    { 
      icon: <Linkedin size={24} />, 
      href: "https://www.linkedin.com/in/anush-naik-783b2327a",
      color: "hover:text-blue-400"
    },
    { 
      icon: <Instagram size={24} />, 
      href: "https://www.instagram.com/_anush_s_n_35/profilecard/?igsh=NWI4ZXFrcHlhcmgx",
      color: "hover:text-pink-500"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            className="text-6xl font-bold mb-6 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 transition-all duration-300"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Anush Naik
          </motion.h1>
          <motion.h2 
            className="text-2xl text-purple-300 mb-8 hover:text-purple-200 cursor-default"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Software Engineering Student
          </motion.h2>
          <motion.div 
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 bg-purple-800/30 rounded-full hover:bg-purple-700/50 ${link.color}`}
                whileHover="hover"
                variants={iconVariants}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.a 
              href="#projects" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}