import React from 'react'
import FreeConsultanBtn from '../FreeConsultanBtn'

const HeroImageSection = ({ imageSrc, title, subtitle,  textColor = 'text-black' }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src={imageSrc}
        alt="Hero"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className={`relative z-10 flex flex-col items-center justify-center text-center h-full px-4 bg-opacity-50 text-black ${textColor}`}>
        <h1 className="text-5xl md:text-7xl font-bold m-4">{title}</h1>
        <h3 className="text-2xl md:text-3xl font-semibold m-14">{subtitle}</h3>
        <FreeConsultanBtn/>
      </div>
    </div>
  )
}

export default HeroImageSection
