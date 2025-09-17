import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const IndustriesDropdown = () => {
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
        Industries
      </span>

      {open && (
        <div className="absolute bg-white shadow-lg p-6 rounded-lg top-full left-0 z-50 w-[500px] flex justify-between">
          <ul className="space-y-3 text-black text-lg sm:text-xl md:text-2xl">
            <li>
              <NavLink to="/industries/healthcare" className={linkClasses}>
                Healthcare
              </NavLink>
            </li>
            <li>
              <NavLink to="/industries/finance" className={linkClasses}>
                Finance
              </NavLink>
            </li>
            <li>
              <NavLink to="/industries/ecommerce" className={linkClasses}>
                Ecommerce
              </NavLink>
            </li>
          </ul>

          <ul className="space-y-3 text-black text-lg sm:text-xl md:text-2xl">
            <li>
              <NavLink to="/industries/retail" className={linkClasses}>
                Retail
              </NavLink>
            </li>
            <li>
              <NavLink to="/industries/education" className={linkClasses}>
                Education
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default IndustriesDropdown;
