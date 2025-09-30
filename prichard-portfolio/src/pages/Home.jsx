import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="relative h-screen text-white px-4 sm:px-6 md:px-12 flex flex-col justify-center items-center overflow-hidden">
      {/* Clean background image */}
      <img
        src="/assets/Laptop mockup.jpeg"
        alt="Wallpaper"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Foreground content */}
      <div className="relative z-10 text-center max-w-xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm Prichard 👋
        </h1>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          Fullstack Developer & Data Science Practitioner. I build scalable apps and decode housing trends.
        </p>

        {/* Mission Statement */}
        <p className="mt-6 italic text-gray-300">
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
