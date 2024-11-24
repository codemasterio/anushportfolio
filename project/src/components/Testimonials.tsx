import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';
import Ammu from '../../src/assets/Ammu.jpg';
import Khasim from '../../src/assets/Khasim.jpg';
import Manoj from '../../src/assets/Manoj.jpg';

const testimonials = [
  {
    name: "khasimn",
    role: "Team Lead",
    image: Khasim, 
    text: "One of the most dedicated learners I've mentored. His problem-solving skills and attention to detail are exceptional."
  },
  {
    name: "manoj",
    role: "Hackathon Partner",
    image: Manoj,
    text: "His project stood out for its innovative approach and polished execution. Truly deserving of the first place."
  },
  {
    name: "Ammu",
    role: "Junior Web developer",
    image: Ammu, 
    text: "An exceptional Senior who consistently demonstrates deep understanding of complex concepts and their practical applications."
  }
];


export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Testimonials
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg p-6 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-purple-500 opacity-50" />
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-purple-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-400">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}