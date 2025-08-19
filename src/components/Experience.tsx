import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Flutter Intern',
    company: 'Bibaabo',
    location: 'Kathmandu, Nepal',
    period: 'Jan, 2024 - July, 2024',
    description: [
      'Developed and maintained the mobile app using Flutter',
      'Implemented new features and fixed bugs reported by users',
      'Collaborated with the design team to create a seamless user experience',
    ],
  },
  {
    title: 'UI/UX Designer',
    company: 'Bibaabo',
    location: 'Kathmandu, Nepal',
    period: 'Jan, 2024 - July, 2024',
    description: [
      'Designed and prototyped user interfaces for the mobile app',
      'Conducted user research and usability testing to improve the user experience',
      'Collaborated with the development team to implement the designs',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-white">Work Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Over the years, I've had the privilege to work with some amazing companies and talented people.
          </p>
        </div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-600"></div>

          {/* Timeline */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.03 }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'justify-start md:justify-end' : 'justify-start'
                } md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}
              >
                <div className="bg-white/20 dark:bg-dark-card/80 backdrop-blur-md p-6 rounded-2xl shadow-lg 
                                hover:shadow-orange-500/40 border border-orange-300/20 dark:border-orange-500/30 w-full transition-all duration-300">
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-orange-200 to-orange-300 dark:from-orange-700 dark:to-orange-900 rounded-lg">
                      <Briefcase className="w-6 h-6 text-orange-600 dark:text-orange-200" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">{experience.title}</h3>
                      <p className="text-orange-400">{experience.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-gray-300 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-orange-300" />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-orange-300" />
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-gray-300">
                    {experience.description.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
