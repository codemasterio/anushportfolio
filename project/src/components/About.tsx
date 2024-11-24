import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Briefcase, GraduationCap } from 'lucide-react';
import Anush from '../../src/assets/Anush.png';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
          >
            <img
              src={Anush}
              alt="Profile"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-white">About Me</h2>
            <p className="text-gray-400">
            Hi, I'm [ANUSH ], a passionate Web Developer dedicated to crafting dynamic, user-friendly websites and applications. With a strong foundation in frontend and backend technologies, I specialize in building responsive, scalable, and intuitive digital experiences.

I started my journey in web development [2 years ago] and have since worked on projects ranging from sleek personal portfolios to complex e-commerce platforms. My tools of choice include HTML, CSS, JavaScript, and frameworks like React, Node.js, and TailwindCSS. I’m driven by a love for solving problems, exploring new technologies, and turning ideas into reality.

When I’m not coding, you can find me [ "exploring new tech trends," "watching Anime," or "reading sci-fi novels"]. Let’s create something amazing together!


            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <GraduationCap className="w-6 h-6 text-purple-500" />
                <div>
                  <h3 className="text-xl font-semibold text-white">Education</h3>
                  <p className="text-gray-400">B.E in Computer Science Engineering</p>
                  <p className="text-gray-500">Expected Graduation 2026</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Briefcase className="w-6 h-6 text-purple-500" />
                <div>
                  <h3 className="text-xl font-semibold text-white">Experience</h3>
                  <p className="text-gray-400">Software Engineering Intern</p>
                  <p className="text-gray-500">Kakud . - Summer 2024 
                    ,and    AI Intern @SPARK Shivamogga 2024
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Award className="w-6 h-6 text-purple-500" />
                <div>
                  <h3 className="text-xl font-semibold text-white">Achievements</h3>
                  <p className="text-gray-400">1st Place - Hack2Hire 2024</p>
                  <p className="text-gray-500">Best Idea and 2nd place- Ideathon 2023</p>
                  <p className="text-gray-400">3rd Place - HackAzure 2024</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}