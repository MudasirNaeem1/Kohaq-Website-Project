
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '../constants';
import { Facebook, Twitter, Linkedin, Youtube, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    'Kohaq': [
      { name: 'About Us', path: '#' },
      { name: 'Careers', path: '/careers' },
      { name: 'Press', path: '#' },
    ],
    'Platform': [
      { name: 'Kohaq Learn', path: '/learn' },
      { name: 'Kohaq Labs', path: '/labs' },
      { name: 'Kohaq Connect', path: '/connect' },
    ],
    'Support': [
      { name: 'Help Center', path: '#' },
      { name: 'Contact Us', path: '#' },
      { name: 'Privacy Policy', path: '#' },
      { name: 'Terms of Service', path: '#' },
    ]
  };
  
  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#', name: 'Facebook' },
    { icon: <Twitter size={20} />, href: '#', name: 'Twitter' },
    { icon: <Linkedin size={20} />, href: '#', name: 'LinkedIn' },
    { icon: <Youtube size={20} />, href: '#', name: 'YouTube' },
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand and Newsletter */}
          <div className="lg:col-span-4">
            <NavLink to="/" className="text-white">
              <Logo className="h-10 w-auto" />
            </NavLink>
            <p className="mt-4 text-neutral-300 max-w-sm">
              Bridging education, innovation, and employment for a brighter future.
            </p>
            <div className="mt-8">
                <h3 className="font-semibold tracking-wider uppercase">Stay Updated</h3>
                <form className="mt-4 flex">
                    <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-l-md bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary" />
                    <button type="submit" className="p-3 bg-primary rounded-r-md hover:bg-primary-dark transition-colors">
                        <Send size={24} />
                    </button>
                </form>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-semibold tracking-wider uppercase">{title}</h3>
                <ul className="mt-4 space-y-3">
                  {links.map(link => (
                    <li key={link.name}>
                      <NavLink to={link.path} className="text-neutral-300 hover:text-white transition-colors">{link.name}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between">
            <p className="text-neutral-400 text-center md:text-left">&copy; {new Date().getFullYear()} Kohaq Inc. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
                {socialLinks.map(link => (
                    <a key={link.name} href={link.href} className="text-neutral-400 hover:text-white transition-colors" aria-label={link.name}>
                        {link.icon}
                    </a>
                ))}
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;