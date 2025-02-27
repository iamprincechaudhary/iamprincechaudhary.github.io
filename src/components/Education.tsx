import { GraduationCap, Calendar, MapPin } from 'lucide-react';

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
    <section id="education" className="py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">Education</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic journey has equipped me with strong theoretical foundations and practical skills.
          </p>
        </div>

        <div className="space-y-8">
          {education.map((item) => (
            <div
              key={item.degree}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-50 dark:bg-purple-900 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 dark:text-white">{item.degree}</h3>
                  <h4 className="text-lg text-gray-700 dark:text-gray-400 mb-2">{item.school}</h4>
                  <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
