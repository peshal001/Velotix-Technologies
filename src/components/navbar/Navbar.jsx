import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '/Logo.jpg';
import ServicesDropdown from './ServicesDropdown';
import IndustriesDropdown from './IndustriesDropdown';
import CompanyDropdown from './CompanyDropdown';
import ResourcesDropdown from './ResourcesDropDown';
import FreeConsultanBtn from '../FreeConsultanBtn';

const DateTimeNavbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const navbarHeight = '2.5rem'; 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > scrollPosition) {
        setIsVisible(false);
      } else {
        setIsVisible(true); 
      }
      setScrollPosition(currentScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const formatTime = (date) => {
    const options = { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true };
    return date.toLocaleTimeString('en-US', options);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 bg-gray-800 text-white py-2 transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container  flex ml-10 items-center space-x-4">
        <span>{formatDate(currentTime)}</span>
        <span>{formatTime(currentTime)}</span>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [dateTimeNavbarVisible, setDateTimeNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      const scrollThreshold = 5;
      if (currentScrollPosition > scrollThreshold) {
        setDateTimeNavbarVisible(false);
      } else {
        setDateTimeNavbarVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <DateTimeNavbar />
      <header
        className={`fixed top-0 left-0 w-full h-25 z-40 bg-[rgba(255,255,255,0.4)] backdrop-blur-lg transition-all duration-300 ease-in-out shadow-lg ${
          dateTimeNavbarVisible ? 'mt-0 md:mt-0' : 'mt-0' 
        }`}
        style={{ top: dateTimeNavbarVisible ? '2.5rem' : '0' }} 
      >
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <NavLink to="/" className="flex title-font font-bold items-center text-black mb-4 md:mb-0">
            <img src={Logo} alt="Logo" className="w-16 h-16 rounded-full" />
            <span className="ml-3 text-4xl text-black">Velotix-Tech</span>
          </NavLink>

          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center text-lg space-x-6">
            <ServicesDropdown />
            <NavLink
              to="/services/salesforce"
              className={({ isActive }) =>
                `transition-all duration-300 hover:text-[#3AAFA9] ${
                  isActive ? 'text-[#3AAFA9] font-bold text-2xl' : 'text-gray-900 text-2xl'
                }`
              }
            >
              Salesforce
            </NavLink>
            <IndustriesDropdown />
            <ResourcesDropdown />
            <CompanyDropdown />
          </nav>

          <FreeConsultanBtn />
        </div>
      </header>
    </>
  );
};

export default Navbar;