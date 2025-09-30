// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
    <h1 className="text-xl font-bold">Prichard@Portfolio</h1>
    <div className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
