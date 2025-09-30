import React from 'react';

const About = () => {
  return (
    <section className="relative min-h-screen text-white px-4 sm:px-6 md:px-12 py-12 flex flex-col items-center overflow-x-hidden">
      {/* Blurred background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/assets/wallpaper.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(8px) brightness(0.5)"
        }}
      ></div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-blue-400">
          About Me
        </h2>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8">
          I'm <span className="font-semibold text-blue-300">Prichard Dube</span>, a fullstack web developer who thrives on building scalable, user-friendly applications. I specialize in crafting seamless digital experiences that combine clean design, robust backend logic, and responsive frontend interfaces.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div>
            <h3 className="text-xl font-bold text-blue-300 mb-2">💻 What I Do</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Frontend: React, Tailwind CSS, Framer Motion, Formik</li>
              <li>Backend: Express.js, Django REST Framework, JWT Auth</li>
              <li>Deployment: Vercel, Render, GitHub Pages</li>
              <li>API Integration & UI/UX Optimization</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-300 mb-2">🧠 What Drives Me</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Building fitness/gym platforms with booking & payment flows</li>
              <li>Designing professional portfolios and dashboards</li>
              <li>Experimenting with advanced UI animations</li>
              <li>Creating tools that are intuitive and visually polished</li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-bold text-blue-300 mb-2">🛠️ How I Work</h3>
          <p className="text-gray-300 leading-relaxed">
            I value modularity, scalability, and clean code. I thrive in collaborative environments, welcome feedback, and iterate quickly. My goal is to create tools and experiences that are not only functional but also delightful to use.
          </p>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-blue-300 mb-4">🔗 Connect with Me</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/Prichard-1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded shadow transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/pricharddube"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded shadow transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:genarodube8@gmail.com"
              className="px-6 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded shadow transition"
            >
              Email Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
