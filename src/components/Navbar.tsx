import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "care", label: "Things I Care About" },
    { id: "skills", label: "Creative Skills Inside Me" },
    { id: "experience", label: "Where I've Worked" },
    { id: "artist", label: "Artist Inside Me" },
    { id: "publications", label: "Publications" },
    { id: "contributions", label: "My Contributions" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-4 right-4 z-50">
      <button
        onClick={toggleMenu}
        className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full text-2xl shadow-md"
        aria-label="Toggle Menu"
      >
        <HiOutlineMenuAlt3 />
      </button>

      {isOpen && (
        <ul
          className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-900 rounded shadow-lg py-2 text-sm text-gray-800 dark:text-white"
          onMouseLeave={closeMenu} // Auto-hide on mouse leave
        >
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={closeMenu}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
