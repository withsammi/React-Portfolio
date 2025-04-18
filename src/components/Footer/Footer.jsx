import React from "react";

const Footer = () => {
  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "BIO", path: "/bio" },
    { name: "Projects", path: "/Projects" },
    { name: "CONTACT", path: "/contact" },
    { name: "CERTIFICATES", path: "/certificates" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: "github", url: "https://github.com/withsammi" },
    { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/aditya-rai-995a941a0/" },
    { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/withsammi/" }
  ];

  return (
    <footer className="bg-transparent py-8  mt-auto">
      <div className="container mx-auto px-4">
        {/* Logo and Name */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center">
            
            <h1 className="text-3xl font-bold text-gray-500">Aditya Rai</h1>
          </div>
          
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className="text-gray-700 hover:text-amber-600 font-medium text-sm md:text-base transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-amber-600 transition-colors"
              aria-label={social.name}
            >
              <span className="sr-only">{social.name}</span>
              <i className={`fab fa-${social.icon} text-xl`}></i>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Aditya Rai. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
