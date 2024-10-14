import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for mobile toggle
import { Link } from "react-scroll"; // Import Link from react-scroll

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      {/* Main navigation container */}
      <nav className="bg-white fixed top-0 w-full z-10 shadow-md"> {/* Sticky and z-index added */}
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          {/* Logo Section */}
          <div className="flex items-center justify-center gap-3">
            <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center">
              <p className="text-2xl text-primary font-bold">M</p>
            </div>
            <p className="text-2xl font-semibold text-primary">Manojkumar</p>
          </div>

          {/* Links for large screens */}
          <div className="hidden md:flex items-center space-x-8 text-lg font-medium">
            <Link to="home" smooth={true} offset={-80} duration={500} className="cursor-pointer text-primary hover:text-primary">
              Home
            </Link>
            <Link to="about" smooth={true} offset={-80} duration={500} className="cursor-pointer hover:text-primary">
              About
            </Link>
            <Link to="skills" smooth={true} offset={-80} duration={500} className="cursor-pointer hover:text-primary">
              Skills
            </Link>
            <Link to="services" smooth={true} offset={-80} duration={500} className="cursor-pointer hover:text-primary">
              Services
            </Link>
            <Link to="projects" smooth={true} offset={-80} duration={500} className="cursor-pointer hover:text-primary">
              Projects
            </Link>
            <Link to="blogs" smooth={true} offset={-80} duration={500} className="cursor-pointer hover:text-primary">
              Blogs
            </Link>
            <Link to="contact" smooth={true} offset={-80} duration={500} className="cursor-pointer hover:text-primary">
              Contact
            </Link>
          </div>

          {/* Hamburger Menu for small screens */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-primary focus:outline-none">
              {isOpen ? (
                <FaTimes size={28} /> // Close icon when menu is open
              ) : (
                <FaBars size={28} /> // Hamburger icon when menu is closed
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white w-full text-lg font-medium space-y-4 px-10 py-4 flex flex-col items-start">
            <Link
              to="home"
              smooth={true}
              offset={-80}
              duration={500}
              onClick={toggleMenu}
              className="cursor-pointer w-full hover:text-primary"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              offset={-80}
              duration={500}
              onClick={toggleMenu}
              className="cursor-pointer w-full hover:text-primary"
            >
              About
            </Link>
            <Link
              to="skills"
              smooth={true}
              offset={-80}
              duration={500}
              onClick={toggleMenu}
              className="cursor-pointer w-full hover:text-primary"
            >
              Skills
            </Link>
            <Link
              to="services"
              smooth={true}
              offset={-80}
              duration={500}
              onClick={toggleMenu}
              className="cursor-pointer w-full hover:text-primary"
            >
              Services
            </Link>
            <Link
              to="projects"
              smooth={true}
              offset={-80}
              duration={500}
              onClick={toggleMenu}
              className="cursor-pointer w-full hover:text-primary"
            >
              Projects
            </Link>
            <Link
              to="blogs"
              smooth={true}
              offset={-80}
              duration={500}
              onClick={toggleMenu}
              className="cursor-pointer w-full hover:text-primary"
            >
              Blogs
            </Link>
            <Link
              to="contact"
              smooth={true}
              offset={-80}
              duration={500}
              onClick={toggleMenu}
              className="cursor-pointer w-full hover:text-primary"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
