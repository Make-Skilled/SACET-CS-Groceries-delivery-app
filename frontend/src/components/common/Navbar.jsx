import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <span className="text-2xl font-bold text-green-600 tracking-wider">GROCEASE</span>
              </a>
            </div>
  
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300">
                Products
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300">
                Contact
              </a>
              <Link to="/login">
              <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors duration-300">
                Sign In
              </button>
              </Link>
            </div>
  
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-green-600 focus:outline-none p-2">
                <span className="text-2xl">☰</span>
              </button>
            </div>
          </div>
  
          {/* Mobile Navigation - Hidden by default */}
          <div className="hidden md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors duration-300">
                Home
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors duration-300">
                About
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors duration-300">
                Products
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors duration-300">
                Contact
              </a>
              <button className="w-full mt-2 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors duration-300">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;