import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-white shadow sticky top-0 z-50 w-full">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <ul className="flex gap-6 text-gray-700">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/destinations">Destinations</Link></li>
          <li><Link to="/trip-planner">Trip Planner</Link></li>
          <li><Link to="/cultural-guide">Cultural Guide</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
