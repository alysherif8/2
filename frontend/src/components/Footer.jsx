import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-risd-blue text-white mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Brand Section */}
          <div>
            <h3 className="font-brodien-bold text-lg mb-2">Leash</h3>
            <p className="font-gully text-sm">
              Connecting pet owners with trusted care providers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-brodien-medium text-base mb-2">Quick Links</h4>
            <ul className="space-y-1 font-gully text-sm">
              <li>
                <a href="/about" className="hover:text-azure">About Us</a>
              </li>
              <li>
                <a href="/blog" className="hover:text-azure">Blog</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-azure">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-brodien-medium text-base mb-2">Connect With Us</h4>
            <div className="flex space-x-4 text-sm">
              <a 
                href="https://chat.whatsapp.com/GNkYjZEiM5DGaWu7lbeszq" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-azure"
              >
                WhatsApp
              </a>
              <a 
                href="https://www.instagram.com/leash.pets/profilecard/?igsh=MTQxamJ1aHhnNzlkaQ==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-azure"
              >
                Instagram
              </a>
              <a 
                href="https://www.tiktok.com/@leash.pets?_t=8rlshdwbdbe&_r=1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-azure"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-azure/20 text-center">
          <p className="font-gully text-sm">
            {new Date().getFullYear()} Leash. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
