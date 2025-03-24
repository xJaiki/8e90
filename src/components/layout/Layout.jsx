import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ExternalLink, Menu, X, MenuIcon, Utensils, PersonStanding, ChefHat, Images, Smartphone } from 'lucide-react';
import logo from '../../assets/logo.svg';
import { AnimatedLogoWithText } from '../ui/AnimatedLogo';

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Navbar items configuration
  const navbarItems = [
    {
      label: 'Home',
      icon: <Home size={18} />,
      path: '/',
    },
    {
      label: 'Menu',
      icon: <Utensils size={18} />,
      path: '/menu',
    },
    {
      label: 'Chi siamo',
      icon: <ChefHat size={18} />,
      path: '/chi-siamo',
    },
    {
      label: 'Galleria',
      icon: <Images size={18} />,
      path: '/galleria',
    },
    {
      label: 'Contatti',
      icon: <Smartphone size={18} />,
      path: '/contatti',
    },
  ];

  // Check if the current link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md py-2`}
      >
    <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center font-bold text-xl text-rose-600"
              style={{ marginLeft: '-0.8rem' }}
            >
              <AnimatedLogoWithText width="2" height="2" />
            </Link>
            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navbarItems.map((item, index) =>
                item.external ? (
                  <a
                    key={index}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 hover:text-rose-600 transition-colors"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                ) : (
                  <Link
                    key={index}
                    to={item.path}
                    className={`flex items-center space-x-2 transition-colors ${isActive(item.path)
                        ? 'text-rose-600 font-medium'
                        : 'text-gray-700 hover:text-rose-600'
                      }`}
                  >
                    {item.icon}
                    <span className="">{item.label}</span>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-95 z-40 transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
          {navbarItems.map((item, index) =>
            item.external ? (
              <a
                key={index}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-rose-300 flex items-center space-x-3"
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ) : (
              <Link
                key={index}
                to={item.path}
                className="text-white hover:text-rose-300 flex items-center space-x-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            )
          )}
        </div>
      </div>

      {/* Main content */}
      <main className="flex-grow py-24">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4 ">
        <div className="container mx-auto px-0">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="mb-2 md:mb-0">
              <div className="font-bold text-xl flex items-center justify-center text-rose-600">
                <AnimatedLogoWithText
                  width="2"
                  height="2"
                  className="text-rose-600"
                />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-4 pt-6 text-center text-gray-400">
            <p>© {new Date().getFullYear()} JaikiTemplate. Open source with 💖</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;