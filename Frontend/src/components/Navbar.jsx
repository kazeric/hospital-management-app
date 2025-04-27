import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">
            Health Information System
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="flex items-center p-2 rounded hover:bg-blue-700"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-4">
            <Link to="/programs/new" className="hover:text-blue-200">
              New Program
            </Link>
            <Link to="/clients/new" className="hover:text-blue-200">
              Register Client
            </Link>
            <Link to="/clients/enroll" className="hover:text-blue-200">
              Enroll Client
            </Link>
            <Link to="/" className="hover:text-blue-200">
              Search Clients
            </Link>
          </div>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="md:hidden py-2 pb-4">
            <div className="flex flex-col space-y-2">
              <Link
                to="/programs/new"
                className="block px-2 py-2 hover:bg-blue-700 rounded"
                onClick={() => setIsOpen(false)}
              >
                New Program
              </Link>
              <Link
                to="/clients/new"
                className="block px-2 py-2 hover:bg-blue-700 rounded"
                onClick={() => setIsOpen(false)}
              >
                Register Client
              </Link>
              <Link
                to="/clients/enroll"
                className="block px-2 py-2 hover:bg-blue-700 rounded"
                onClick={() => setIsOpen(false)}
              >
                Enroll Client
              </Link>
              <Link
                to="/"
                className="block px-2 py-2 hover:bg-blue-700 rounded"
                onClick={() => setIsOpen(false)}
              >
                Search Clients
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
