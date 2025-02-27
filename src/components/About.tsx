export default function About() {
  const skills = [
    'Flutter', 'Firebase', 'Dart','GetX', 'REST API', 'Java',
    'Spring Boot', 'React', 'Git',
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
              alt="Developer workspace"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 dark:text-white">
              About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate mobile app developer with a strong foundation in
              computer science and information technology. I specialize in
              building cross-platform mobile applications using Flutter and Firebase.
              I have experience working with REST APIs, Java, and Spring Boot. I'm
              always eager to learn new technologies and tools to keep up with the
              ever-evolving tech landscape.
            </p>
            <div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-purple-50 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
