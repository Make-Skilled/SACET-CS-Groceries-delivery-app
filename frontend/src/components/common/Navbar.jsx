import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const userEmail = sessionStorage.getItem('userEmail');
        if (userEmail) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleSignOut = () => {
        sessionStorage.removeItem('userEmail');
        sessionStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/');
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold text-green-600 tracking-wider">GROCEASE</span>
              </Link>
            </div>
  
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-green-600 transition-colors duration-300">
                Home
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-green-600 transition-colors duration-300">
                About
              </Link>
              <Link to="/products" className="text-gray-600 hover:text-green-600 transition-colors duration-300">
                Products
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-green-600 transition-colors duration-300">
                Contact
              </Link>
              {isLoggedIn ? (
                <button 
                  onClick={handleSignOut}
                  className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors duration-300"
                >
                  Sign Out
                </button>
              ) : (
                <Link to="/login">
                  <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors duration-300">
                    Sign In
                  </button>
                </Link>
              )}
            </div>
  
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-gray-600 hover:text-green-600 focus:outline-none p-2"
              >
                <span className="text-2xl">☰</span>
              </button>
            </div>
          </div>
  
          {/* Mobile Navigation */}
          <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors duration-300">
                Home
              </Link>
              <Link to="/about" className="block px-3 py-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors duration-300">
                About
              </Link>
              <Link to="/products" className="block px-3 py-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors duration-300">
                Products
              </Link>
              <Link to="/contact" className="block px-3 py-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors duration-300">
                Contact
              </Link>
              {isLoggedIn ? (
                <button 
                  onClick={handleSignOut}
                  className="w-full mt-2 bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors duration-300"
                >
                  Sign Out
                </button>
              ) : (
                <Link to="/login" className="block w-full">
                  <button className="w-full mt-2 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors duration-300">
                    Sign In
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;