import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import Logo from '/Logo.jpg';

const Footer = () => {
  const linkClasses = ({ isActive }) =>
    `transition-all duration-300 hover:text-[#3AAFA9] ${isActive ? "text-[#3AAFA9] font-bold" : "text-white"}`;

  return (
    <footer className="bg-[#3AAFA9] text-white py-2 md:py-5">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <img src={Logo} alt="Logo" className="w-16 h-16 rounded-full" />
              <div>
                <span className="text-3xl font-semibold">Velotix Technologies</span>
              </div>
            </div>

            <p className="text-white-100 text-lg p-2">
              Shaping technology for the future. We are a leading provider of innovative
              technology solutions, dedicated to helping businesses thrive in the digital age.
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="flex items-center justify-center p-3 bg-gray-800 rounded-md hover:bg-[#3AAFA9] transition-colors duration-200"
                aria-label="Facebook"
              >
                <FaFacebook className="h-6 w-6 text-white" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center p-3 bg-gray-800 rounded-md hover:bg-[#3AAFA9] transition-colors duration-200"
                aria-label="Instagram"
              >
                <FaInstagram className="h-6 w-6 text-white" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center p-3 bg-gray-800 rounded-md hover:bg-[#3AAFA9] transition-colors duration-200"
                aria-label="Twitter"
              >
                <FaTwitter className="h-6 w-6 text-white" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center p-3 bg-gray-800 rounded-md hover:bg-[#3AAFA9] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl font-semibold text-white">Contact Us</h3>

            <div className="flex items-center gap-2 text-white">
              <FaMapMarkerAlt className="h-5 w-5" />
              <span className="text-lg">123 Main Street, Anytown, USA</span>
            </div>

            <div className="flex items-center gap-2 text-white">
              <span className="h-5 w-5">📞</span>
              <span className="text-lg">+1 555-123-4567</span>
            </div>

            <div className="flex items-center gap-2 text-white">
              <span className="h-5 w-5">✉️</span>
              <span className="text-lg">info@velotix.com</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl font-semibold text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/services/predictive-modelling" className={linkClasses}>
                  <span className="text-white text-xl">Predictive Modelling</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/chat-gpt-integration" className={linkClasses}>
                  <span className="text-white text-xl">Chat GPT Integration</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/natural-language-processing" className={linkClasses}>
                  <span className="text-white text-xl">Natural Language Processing</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/machine-learning" className={linkClasses}>
                  <span className="text-white text-xl">Machine Learning</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/computer-vision" className={linkClasses}>
                  <span className="text-white text-xl">Computer Vision</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/big-data-analytics" className={linkClasses}>
                  <span className="text-white text-xl">Big Data Analytics</span>
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="space-y-4 mt-6 lg:mt-0">
            <div className="flex flex-col gap-4"> 
              
            <div>
                <h4 className="text-3xl font-semibold text-white mt-4">Quick Links</h4>
                <ul className="space-y-2 mt-2">
                  <li>
                    <NavLink to="#about-us-section" className="text-white text-xl transition-colors duration-300">
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#latest-blogs-section" className="text-white text-xl transition-colors duration-300">
                      Latest Blogs & Articles
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#meet-our-team-section" className="text-white text-xl transition-colors duration-300">
                      Meet Our Team
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-white-400 text-lg mt-6">
          &copy; {new Date().getFullYear()} Velotix Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;