import React, { useState } from 'react';

const projects = [
  {
    title: '🥊 Boxing Gym App',
    description:
      'A responsive web app for a boxing gym where users can register securely, book training sessions, view personalized dashboards, access workout plans, and subscribe to membership plans with Stripe.',
    tech: [
      'React (Vite)',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Auth0',
      'Stripe',
      'Google Calendar API',
    ],
    liveLink: 'https://majestic-sprite-8d5f3b.netlify.app/',
    codeLink: 'https://github.com/Prichard-1/boxing-gym-app',
    backendLink: 'https://boxing-gym-backend.onrender.com',
    images: [
      '/assets/Home.JPEG.png',
      '/assets/Contact.JPEG.png',
      '/assets/Book.JPEG.png',
      '/assets/Plans.JPEG.png',
      '/assets/Workouts.JPEG.png',
    ],
  },
  {
    title: '🏋️ Fitness Tracker API',
    description:
      'A Django REST Framework API for managing fitness activities. Users can register, log in, and track workouts like running, cycling, swimming, or weightlifting. Includes activity summaries and metrics over time.',
    tech: [
      'Python 3.10',
      'Django 5+',
      'Django REST Framework',
      'Simple JWT',
      'SQLite/MySQL/Postgres',
      'PythonAnywhere',
    ],
    liveLink: 'https://pricharddube.pythonanywhere.com/api/users/',
    codeLink: 'https://github.com/Prichard-1/API-TRACKER',
    images: [
      '/assets/admin.png',
      '/assets/users endpoint.png',
      '/assets/activity API.png',
    ],
  },
];

const Project = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat text-white px-6 py-12 flex flex-col items-center"
      style={{ backgroundImage: "url('/assets/Laptop mockup.jpeg')" }}
    >
      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      <div className="relative z-10 max-w-5xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-blue-400">
          My Projects
        </h2>

        <div className="space-y-12">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-gray-700 rounded-lg shadow-lg overflow-hidden text-left"
            >
              {/* Image Gallery */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
                {proj.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${proj.title} Screenshot ${i + 1}`}
                    className="w-full h-40 object-cover rounded-md shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-300 mb-2">
                  {proj.title}
                </h3>
                <p className="text-gray-300 mb-4">{proj.description}</p>

                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-blue-200 mb-2">
                    🚀 Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-800 text-sm rounded-full border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-6">
                  {proj.liveLink && (
                    <a
                      href={proj.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded transition"
                    >
                      Live Demo
                    </a>
                  )}
                  {proj.backendLink && (
                    <a
                      href={proj.backendLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded transition"
                    >
                      Backend API
                    </a>
                  )}
                  {proj.codeLink && (
                    <a
                      href={proj.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded transition"
                    >
                      GitHub Repo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Image Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full view"
            className="max-w-3xl max-h-[80vh] rounded-lg shadow-lg"
          />
        </div>
      )}
    </section>
  );
};

export default Project;

