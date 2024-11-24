import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "AI-Powered Chat bot",
    description: "Developed an AI-powered study assistant using Python and machine learning to help students optimize their learning patterns.",
    tech: ["Python", "TensorFlow", "Flask", "React"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Pneumonia Detection using AI",
    description: "Created a deep learning model for early pneumonia detection from chest X-rays using CNN architecture.",
    tech: ["Python", "PyTorch", "OpenCV", "FastAPI"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Oral Cancer Detection AI",
    description: "Developed an AI system for early oral cancer detection using image processing and deep learning techniques.",
    tech: ["TensorFlow", "Keras", "scikit-learn", "Flask"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const projectVariants = {
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const iconVariants = {
  initial: { scale: 0 },
  hover: { 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  }
};

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              variants={projectVariants}
              whileHover="hover"
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/20 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <motion.div 
                  className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      variants={iconVariants}
                      className="bg-white/10 p-3 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
                    >
                      <Github size={24} className="text-white" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      variants={iconVariants}
                      className="bg-white/10 p-3 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
                    >
                      <ExternalLink size={24} className="text-white" />
                    </motion.a>
                  </div>
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-purple-900 text-purple-200 rounded-full text-sm hover:bg-purple-800 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}