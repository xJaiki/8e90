import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, UtensilsCrossed, Users, Image, Phone, Menu, X, ExternalLink } from 'lucide-react';

// Layout component that wraps all pages
const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navbar items configuration
  const navbarItems = [
    {
      label: 'Home',
      icon: <Home size={18} />,
      path: '/',
    },
    {
      label: 'Menu',
      icon: <UtensilsCrossed size={18} />,
      path: '/menu',
    },
    {
      label: 'Chi Siamo',
      icon: <Users size={18} />,
      path: '/chi-siamo',
    },
    // {
    //   label: 'Galleria',
    //   icon: <Image size={18} />,
    //   path: '/galleria',
    // },
    {
      label: 'Contatti',
      icon: <Phone size={18} />,
      path: '/contatti',
    },
  ];

  // External delivery service links
  const deliveryServices = [
    {
      label: 'Just Eat',
      path: 'https://www.justeat.it/restaurants-8and90-paninoteca-marano-di-napoli/menu?utm_source=google&utm_medium=organic&utm_campaign=orderaction',
      external: true,
    },
    {
      label: 'Glovo',
      path: 'https://glovoapp.com/it/it/napoli/890-nap/?utm_source=google&utm_medium=organic&utm_campaign=google_reserve_place_order_action',
      external: true,
    },
  ];

  // Check if the current link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-bg">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-secondary shadow-lg py-2' : 'bg-secondary shadow-lg py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-end font-bold text-2xl text-bg"
              aria-label="8&90 - Torna alla Home"
            >
              <span>8</span>
              <span className="font-caveat mr-1 text-sm">&</span>
              <span>90</span>
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-bg p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Chiudi menu" : "Apri menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navbarItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`flex items-center space-x-2 transition-colors ${
                    isActive(item.path) ? 'text-accent-light' : 'text-white hover:text-accent-light'
                  }`}
                  aria-current={isActive(item.path) ? "page" : undefined}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
              
              <div className="h-6 w-px bg-text-secondary"></div>
              
              {deliveryServices.map((service, index) => (
                <a
                  key={index}
                  href={service.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-white hover:text-accent-light transition-colors"
                >
                  <span>{service.label}</span>
                  <ExternalLink size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-secondary bg-opacity-98 z-40 transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
          {navbarItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-bg hover:text-accent-light flex items-center space-x-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
          
          <div className="h-px w-24 bg-text-secondary my-4"></div>
          
          {deliveryServices.map((service, index) => (
            <a
              key={index}
              href={service.path}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bg hover:text-accent-light flex items-center space-x-2"
            >
              <span>{service.label}</span>
              <ExternalLink size={16} />
            </a>
          ))}
        </div>
      </div>

      {/* Main content */}
      <main className="flex-grow pt-16">{children}</main>

      {/* Footer */}
      <footer className="bg-secondary text-bg py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">
                8
                <span className="text-bg font-caveat"> & </span>
                90
              </h3>
              <p className="mb-2">Corso Europa 88</p>
              <p className="mb-2">80016 Marano di Napoli (NA)</p>
              <p className="mb-2">Tel: +39 081 1802 0573 </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Link Rapidi</h3>
              <ul className="space-y-2">
                {navbarItems.map((item, index) => (
                  <li key={index}>
                    <Link 
                      to={item.path} 
                      className="hover:text-accent-light transition-colors text-bg underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Hours */}
            <div>
              <h3 className="text-xl font-bold mb-4">Orari di Apertura</h3>
              <p className="mb-2">Martedi - Venerdi: 09:30 - 15:00 | 18:30 - 22:30</p>
              <p className="mb-2">Sabato: 09:30 - 15:30 | 18:30 - 00:00</p>
              <p className="mb-6">Domenica: 09:30 - 15:30</p>
              
              {/*
              <div className="flex space-x-4">
                <a href="#" className="hover:text-accent-dark text-bg" aria-label="Facebook">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-accent-dark text-bg" aria-label="Instagram">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="hover:text-accent-dark text-bg" aria-label="TripAdvisor">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="6.5" cy="13.5" r="2.5"></circle>
                    <circle cx="17.5" cy="13.5" r="2.5"></circle>
                    <path d="M0 12c0 6.628 5.372 12 12 12s12-5.372 12-12S18.628 0 12 0 0 5.372 0 12zm23 0a11 11 0 0 1-1.5 5.5A11 11 0 0 1 1 12V11.5a11 11 0 0 1 1.5-5.5 2.5 2.5 0 0 0 4 0A11 11 0 0 1 12 1a11 11 0 0 1 5.5 1.5 2.5 2.5 0 0 0 4 0A11 11 0 0 1 23 6.5V12zm-11-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"></path>
                  </svg>
                </a>
              </div>
              */}
            </div>
          </div>
          
          <div className="mt-12 pt-4 border-t text-center text-sm opacity-80 border-text-secondary flex flex-row justify-center">
            <p>&copy; {new Date().getFullYear()} 8&90. Tutti i diritti riservati.</p>
            <p className="mx-2">|</p>
            <p>Fatto con <span className="text-accent-light">♥</span> da <a href="https://www.jaiki.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-accent-light">Jaiki</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;