import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/assets/Laptop mockup.jpeg')" }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Foreground content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Prichard 👋</h1>
        <p className="text-xl max-w-xl mx-auto">
          Fullstack Developer & Data Science Practitioner. I build scalable apps and decode housing trends.
        </p>

        {/* Mission Statement */}
        <p className="mt-6 italic text-gray-300 max-w-xl mx-auto">
          "I craft scalable, visually polished applications that solve real-world problems and elevate user experience. Every line of code is a step toward clarity, performance, and impact."
        </p>

        {/* CTA Button */}
        <Link
          to="/projects"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 rounded hover:bg-blue-700 transition"
        >
          Explore My Work
        </Link>
      </div>
    </section>
  );
};

export default Home;



