import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: 'Bachelor of Science in Computer Science and Information Technology',
    school: 'ASCOL',
    location: 'Thamel, Kathmandu',
    period: '2023 - present',
    description:
      "Currently pursuing a bachelor's degree in computer science and information technology.",
  },
  {
    degree: 'Higher Secondary Education',
    school: 'Mithila Institute of Technology',
    location: 'Janakpur, Nepal',
    period: '2020-2023',
    description: 'Completed higher secondary education with a major in science.',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-white">Education</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic journey has equipped me with strong theoretical foundations and practical skills.
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="relative bg-white/20 dark:bg-dark-card/80 backdrop-blur-md rounded-2xl p-6 shadow-lg 
                         hover:shadow-orange-500/40 border border-orange-300/20 dark:border-orange-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-orange-200 to-orange-300 dark:from-orange-700 dark:to-orange-900 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-orange-600 dark:text-orange-200" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-white">{item.degree}</h3>
                  <h4 className="text-lg text-orange-400 mb-2">{item.school}</h4>
                  <div className="flex flex-wrap gap-4 text-gray-300 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-orange-300" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-orange-300" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
