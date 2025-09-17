import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const ServicesDropdown = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const linkClasses = ({ isActive }) =>
    `hover:text-blue-600 ${isActive ? "text-black" : "text-black"}`;

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
   <span className="cursor-pointer text-black text-lg sm:text-xl md:text-2xl hover:text-[#3AAFA9]">
  Services
</span>
      {open && (
        <div className="absolute bg-white shadow-lg p-6 rounded-lg top-full left-0 z-50 w-[500px] flex justify-between">
          <ul className="space-y-3 text-black text-lg sm:text-xl md:text-2xl">
            <li>
              <NavLink to="/services/predictive-modelling" className={linkClasses}>
                Predictive Modelling
              </NavLink>
            </li>
            <li>
              <NavLink to="/services/chat-gpt-integration" className={linkClasses}>
                Chat GPT Integration
              </NavLink>
            </li>
            <li>
              <NavLink to="/services/natural-language-processing" className={linkClasses}>
                Natural Language Processing
              </NavLink>
            </li>
          </ul>

          <ul className="space-y-3 text-black text-lg sm:text-xl md:text-2xl">
            <li>
              <NavLink to="/services/machine-learning" className={linkClasses}>
                Machine Learning
              </NavLink>
            </li>
            <li>
              <NavLink to="/services/computer-vision" className={linkClasses}>
                Computer Vision
              </NavLink>
            </li>
            <li>
              <NavLink to="/services/big-data-analytics" className={linkClasses}>
                Big Data Analytics
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ServicesDropdown;
