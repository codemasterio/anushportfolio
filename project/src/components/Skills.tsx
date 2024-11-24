import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Globe, Server, Cpu, Terminal } from 'lucide-react';

const skills = [
  {
    category: "Programming Languages",
    icon: <Code2 className="w-6 h-6" />,
    items: ["Python", "Java", "C++", "JavaScript", "TypeScript"]
  },
  {
    category: "Web Technologies",
    icon: <Globe className="w-6 h-6" />,
    items: ["React", "Node.js", "HTML5", "CSS3", "REST APIs"]
  },
  {
    category: "Databases",
    icon: <Database className="w-6 h-6" />,
    items: ["MongoDB", "PostgreSQL", "MySQL"]
  },
  {
    category: "DevOps & Tools",
    icon: <Server className="w-6 h-6" />,
    items: ["Git", "Docker", "AWS"]
  },
  {
    category: "Embedded Systems",
    icon: <Cpu className="w-6 h-6" />,
    items: [ "IoT", "Sensors"]
  },
  /*{
    category: "Software Engineering",
    icon: <Terminal className="w-6 h-6" />,
    items: ["Agile", "SDLC", "Design Patterns", "Testing"]
  }
    */
];

const cardVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

const iconVariants = {
  initial: { rotate: 0 },
  hover: { 
    rotate: 360,
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  }
};

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-indigo-950">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Technical Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              variants={cardVariants}
              whileHover="hover"
              className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-lg p-6 cursor-pointer"
            >
              <div className="flex items-center mb-4 text-purple-400">
                <motion.div
                  variants={iconVariants}
                  className="mr-2"
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-xl font-semibold ml-2">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, itemIndex) => (
                  <motion.span
                    key={itemIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + itemIndex * 0.1 }}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(147, 51, 234, 0.7)" }}
                    className="px-3 py-1 bg-purple-900 bg-opacity-50 text-purple-200 rounded-full text-sm"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}