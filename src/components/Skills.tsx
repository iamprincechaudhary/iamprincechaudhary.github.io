import { motion } from 'framer-motion';
import { Box, Cloud, Code2, Database, Globe, Palette, Smartphone } from 'lucide-react';

const skillCategories = [
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: [
      'AWS (SAA Certified)', 'EC2', 'S3', 'VPC', 'IAM', 
      'RDS', 'Lambda', 'CloudWatch', 'CloudFormation', 'CloudFront'
    ],
  },
  {
    title: 'Containerization & CI/CD',
    icon: Box,
    skills: ['Docker', 'GitHub Actions', 'CI/CD Pipelines'],
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    skills: ['Flutter', 'Firebase', 'GetX'],
  },
  {
    title: 'Web Development',
    icon: Globe,
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: ['Python', 'C#', 'Dart'],
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['MySQL', 'Firebase'],
  },
  {
    title: 'UI/UX Design',
    icon: Palette,
    skills: ['Figma'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-white">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I specialize in a wide range of technologies and tools, constantly learning and adapting to new challenges.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-dark-card/80 
                         backdrop-blur-md rounded-2xl p-6 
                         shadow-lg hover:shadow-orange-500/40 
                         border border-orange-500/30 
                         transition-all duration-300"
            >
              {/* Icon & Title */}
              <div className="flex items-center mb-4">
                <category.icon className="w-7 h-7 text-orange-500 mr-3" />
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full 
                               bg-gradient-to-r from-orange-100 to-orange-200 
                               dark:from-orange-900 dark:to-orange-700 
                               text-orange-700 dark:text-orange-200 
                               shadow-sm hover:shadow-md transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
