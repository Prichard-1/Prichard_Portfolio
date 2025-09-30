// src/components/ProjectCard.jsx
const ProjectCard = ({ title, description, tech, liveLink, codeLink }) => (
  <div className="bg-white shadow-md rounded p-4">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="mt-2">{description}</p>
    <div className="mt-2 text-sm text-gray-600">{tech.join(', ')}</div>
    <div className="mt-4 flex space-x-4">
      <a href={liveLink} target="_blank" className="text-blue-600">Live Demo</a>
      <a href={codeLink} target="_blank" className="text-gray-600">GitHub</a>
    </div>
  </div>
);

export default ProjectCard;
