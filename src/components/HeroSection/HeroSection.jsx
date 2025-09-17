import React from 'react';
import FreeConsultantBtn from '../FreeConsultanBtn';

const HeroSection = ({ videoSrc, title, subtitle, ctaText, textColor = "text-white" }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={`relative z-10 flex flex-col items-center justify-center text-center h-full px-4 bg-opacity-40 ${textColor}`}>
        <h1 className={`text-5xl md:text-8xl font-bold m-6 ${textColor}`}>{title}</h1>
        <h3 className={`text-2xl md:text-4xl font-extrabold m-4 ${textColor}`}>{subtitle}</h3>
        <h3 className={`text-3xl md:text-3xl font-bold m-20 ${textColor}`}>{ctaText}</h3>
        <FreeConsultantBtn />
      </div>
    </div>
  );
};

export default HeroSection;
