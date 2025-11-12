import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Logo } from '../constants';
import { Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const navLinks = [
  { name: 'Learn', path: '/learn' },
  { name: 'Careers', path: '/careers' },
  { name: 'Labs', path: '/labs' },
  { name: 'Connect', path: '/connect' },
  { name: 'Media', path: '/media' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-base font-medium transition-colors ${
      isActive ? 'text-primary' : 'text-neutral-800 hover:text-primary'
    }`;
  
  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block py-2 px-4 text-lg font-medium rounded-md transition-colors ${
      isActive ? 'bg-primary text-white' : 'text-neutral-800 hover:bg-primary-light hover:text-white'
    }`;

  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-lg shadow-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-primary-dark">
              <Logo className="h-10 w-auto" />
            </NavLink>
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={linkClass}>
                {link.name}
              </NavLink>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-2">
            {user ? (
              <>
                <NavLink to="/dashboard" className="px-5 py-2 text-base font-medium text-white bg-primary rounded-full hover:bg-primary-dark shadow-md transition-all duration-300 transform hover:scale-105">
                  Dashboard
                </NavLink>
                <button onClick={handleSignOut} className="px-4 py-2 text-base font-medium text-neutral-800 hover:text-primary transition-colors">
                  Log Out
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" className="px-4 py-2 text-base font-medium text-neutral-800 hover:text-primary transition-colors">
                  Log In
                </NavLink>
                <NavLink to="/login" className="px-5 py-2 text-base font-medium text-white bg-primary rounded-full hover:bg-primary-dark shadow-md transition-all duration-300 transform hover:scale-105">
                  Sign Up
                </NavLink>
              </>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-neutral-800 hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg z-40">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={mobileLinkClass} onClick={() => setIsOpen(false)}>
                {link.name}
              </NavLink>
            ))}
            <div className="border-t border-neutral-200 my-4"></div>
            <div className="flex flex-col space-y-2 px-2 py-2">
              {user ? (
                <>
                  <NavLink to="/dashboard" onClick={() => setIsOpen(false)} className="w-full text-center px-5 py-3 text-base font-medium text-white bg-primary rounded-full hover:bg-primary-dark shadow-md transition-all">
                    Dashboard
                  </NavLink>
                  <button onClick={() => { handleSignOut(); setIsOpen(false); }} className="w-full text-center px-5 py-3 text-base font-medium text-neutral-800 bg-neutral-100 rounded-full hover:bg-neutral-200 transition-colors">
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <NavLink to="/login" onClick={() => setIsOpen(false)} className="w-full text-center px-5 py-3 text-base font-medium text-neutral-800 bg-neutral-100 rounded-full hover:bg-neutral-200 transition-colors">
                    Log In
                  </NavLink>
                  <NavLink to="/login" onClick={() => setIsOpen(false)} className="w-full text-center px-5 py-3 text-base font-medium text-white bg-primary rounded-full hover:bg-primary-dark shadow-md transition-all">
                    Sign Up
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;