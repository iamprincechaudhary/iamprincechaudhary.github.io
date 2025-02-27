import { Briefcase, Calendar, MapPin } from 'lucide-react';

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
    <section id="experience" className="py-20 bg-gray-50 dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">Work Experience</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Over the years, I've had the privilege to work with some amazing companies and talented people.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.title}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'justify-start md:justify-end' : 'justify-start'
                } md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-purple-50 dark:bg-purple-900 rounded-lg">
                      <Briefcase className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold dark:text-white">{experience.title}</h3>
                      <p className="text-purple-600 dark:text-purple-400">{experience.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {experience.description.map((item, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
