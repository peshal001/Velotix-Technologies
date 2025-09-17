import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const CompanyDropdown = () => {
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

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className="cursor-pointer text-black text-2xl hover:text-[#3AAFA9]">
        Company
      </span>

      {open && (
        <div className="absolute bg-white shadow-md p-6 rounded-lg top-full left-0 z-50 w-[500px] flex justify-between">
          <ul className="space-y-3 text-lg text-black">
            <li>
              <NavLink
                to="/company/about-us"
                className={({ isActive }) =>
                  `transition-all duration-300 hover:text-sky-500 ${isActive ? "text-sky-500 text-2xl" : "text-gray-900 text-2xl"}`
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/company/careers"
                className={({ isActive }) =>
                  `transition-all duration-300 hover:text-sky-500 ${isActive ? "text-sky-500 text-2xl" : "text-gray-900 text-2xl"}`
                }
              >
                Careers
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CompanyDropdown;
