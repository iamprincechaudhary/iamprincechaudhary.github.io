export default function About() {
  const skills = [
    'Cloud & DevOps',
    'AWS (SAA-C03)',
    'Docker',
    'CI/CD',
    'GitHub Actions',
    'Flutter',
    'Firebase',
    'GetX',
    'REST API',
    'Python',
  ];

  return (
    <section id="about" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
              alt="Developer workspace"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">
              About Me
            </h2>
            <p className="text-gray-300 mb-6">
              I'm a passionate <span className="text-blue-400">Cloud & DevOps Engineer</span> 
               with a strong interest in automation, infrastructure, and scalable systems. 
              I have hands-on experience with <span className="text-yellow-400">AWS</span>, 
              <span className="text-green-400"> Docker</span>, and modern 
              <span className="text-red-400"> CI/CD pipelines</span>.
              <br /><br />
              Besides DevOps, I also specialize in building cross-platform mobile applications 
              using <span className="text-blue-400">Flutter</span> and <span className="text-orange-400">Firebase</span>. 
              I enjoy solving problems, learning new technologies, and contributing to innovative projects.
            </p>

            {/* Skills */}
            <div>
              {/* <h3 className="text-xl font-semibold mb-4 text-white">
                Skills
              </h3> */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full text-sm hover:bg-gray-700 transition-colors"
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
