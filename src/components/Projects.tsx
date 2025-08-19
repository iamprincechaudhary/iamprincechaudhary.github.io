import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Educational Consultancy Website',
    description: 'An abroad study web app that helps students find the best institutions for their studies abroad.',
    image: 'https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/474463260_122164375298330483_4804798115836411561_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=lQCxn9J2354Q7kNvwEbRjcv&_nc_oc=AdmHFqGcumjSNaTkO5tgpYPf3e5fQQAe_xCM4jeaL2Cxu8yCS7a-F0pD7zBh1xs1LUk&_nc_zt=23&_nc_ht=scontent.fktm20-1.fna&_nc_gid=XdmwQvSJylE8Evf8BvX0qA&oh=00_AfXrs4zsnFxFNDIqi1-KL1864iXZasjqv40_fJrvLr1EtA&oe=68AA1588',
    tags: ['TypeScript', 'React', 'Vite'],
    live: 'https://www.genalphaedu.com.np/',
    github: undefined,
  },
  {
    title: 'Boys Hostel Website',
    description: 'A website for a boys hostel built with Vite, React, and TypeScript',
    image: 'https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/499223138_1289721893158711_1588246789621362962_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Y1-NE65U0GkQ7kNvwGYTdwG&_nc_oc=AdlwPVYaWLt8TQx8uYtk7x8CcCQRro8yeCJKyXFApeqbq3iZij_mJ20pSkaMo9ZTqNY&_nc_zt=23&_nc_ht=scontent.fktm20-1.fna&_nc_gid=nXe7-9hm7_zQLyWloovJLA&oh=00_AfV3TTb1GyBKcZ1ONiKdi317e05N5UQH50D_rz6D23hIjQ&oe=68AA169E',
    tags: ['TypeScript', 'React', 'Vite'],
    live: 'https://yetauta.com',
    github: undefined,
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with Flutter and Firebase',
    image: 'https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2FWhat_is_E_commerce_and_What_are_its_Applications_2_d2eb0d4402.jpg&w=4500&q=90',
    tags: ['Flutter', 'Dart', 'Firebase', 'Rest API'],
    github: undefined,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-white">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/20 dark:bg-dark-card/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-500/40 border border-orange-300/20 dark:border-orange-500/30 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-orange-50 dark:bg-dark-bg text-orange-600 dark:text-orange-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
