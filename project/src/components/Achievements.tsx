import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, Star, Target } from 'lucide-react';

const achievements = [
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Hackathon Champion",
    description: "Won first place at National Hackathon 2023 with an AI-powered education platform",
    date: "July 2024"
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Best Innovation Award",
    description: "Received Best Innovation Award at Tech Fest 2023 for IoT-based smart city solution",
    date: "August 2023"
  },
  /*{
    icon: <Star className="w-8 h-8" />,
    title: "Research Publication",
    description: "Published paper on ML algorithms in International Journal of Computer Science",
    date: "July 2023"
  },*/
  {
    icon: <Target className="w-8 h-8" />,
    title: "Internship Impact",
    description: "Developed Pneumonia detection model using AI model",
    date: "Summer 2024"
  }
];

export default function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-gray-900 to-indigo-950">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Achievements
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 bg-opacity-50 rounded-lg p-6 hover:bg-opacity-70 transition-all"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-start space-x-4"
              >
                <div className="p-3 bg-purple-600 rounded-lg text-white">
                  {achievement.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 mb-2">{achievement.description}</p>
                  <p className="text-purple-400 text-sm">{achievement.date}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}