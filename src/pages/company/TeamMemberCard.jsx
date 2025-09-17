import React, { useState, useEffect } from 'react';

const TeamMemberCard = ({ name, title, imageSrc }) => (
  <div className="bg-[#F9F5F6]  rounded-lg shadow-md overflow-hidden">
    <div className="relative">
      <img
        className="w-full h-64 object-cover"
        src={imageSrc || 'https://via.placeholder.com/200x150'}
        alt={name}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-purple-100 bg-opacity-80 py-4 text-center">
        <h3 className="text-lg font-semibold text-[#3AAFA9]">{name}</h3>
        <p className="text-sm text-black">{title}</p>
      </div>
    </div>
  </div>
);

const MeetOurTeamSection = () => {
  const allTeamMembers = [
    {
      name: 'Ayaz Qaiser',
      title: 'CTO',
      imageSrc: '/path/to/ayaz-qaiser.jpg',
    },
    {
      name: 'Irfan Malik',
      title: 'Founder & CEO',
      imageSrc: '/path/to/irfan-malik.jpg',
    },
    {
      name: 'Dr. Sheraz Naseer',
      title: 'Head of AI Department',
      imageSrc: '/path/to/sheraz-naseer.jpg',
    },
    {
      name: 'Sh. Ahsan Tariq',
      title: 'COO - MENA Region',
      imageSrc: '/path/to/tariq-photo.jpg',
    },
    {
      name: 'Ayaz Qaiser 2',
      title: 'Role 5',
      imageSrc: '/path/to/qaiser-photo2.jpg',
    },
    {
      name: 'Dr. Tazeen Rizvi',
      title: 'Director',
      imageSrc: '/path/to/rizvi-photo.jpg',
    },
    {
      name: 'Team Member 7',
      title: 'Role 7',
      imageSrc: '/path/to/member7-photo.jpg',
    },
    {
      name: 'Team Member 8',
      title: 'Role 8',
      imageSrc: '/path/to/member8-photo.jpg',
    },
    {
      name: 'Team Member 9',
      title: 'Role 9',
      imageSrc: '/path/to/member9-photo.jpg',
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleMembers = allTeamMembers.slice(startIndex, startIndex + 3);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 3) % allTeamMembers.length);
    }, 2000); 

    return () => clearInterval(intervalId); 
  }, [allTeamMembers.length]);

  return (
    <div className="py-16 bg-[#F9F5F6]  mt-30">
      <div className="max-w-7xl mx-65 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-black mb-20 text-center ">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-500 text-black ease-in-out">
          {visibleMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
        {allTeamMembers.length > 3 && (
          <div className="mt-6 flex justify-center space-x-2">
            {Array.from({ length: Math.ceil(allTeamMembers.length / 3) }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 text-black rounded-full ${startIndex / 3 === index ? 'bg-indigo-500' : 'bg-gray-300 hover:bg-indigo-400'}`}
                onClick={() => setStartIndex(index * 3)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MeetOurTeamSection;