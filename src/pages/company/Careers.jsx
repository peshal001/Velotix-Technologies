import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import HeroImageSection from '../../components/HeroSection/HeroImageSection';
import Footer from '../../components/footer/Footer';

const Careers = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/aiconsultant');
  };

  const careerBenefits = [
    {
      title: 'Innovative Projects',
      description:
        'Engage in cutting-edge projects that challenge and inspire, driving technological advancements.',
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      ),
      color: 'bg-blue-100 text-blue-700',
    },
    {
      title: 'Collaborative Culture',
      description:
        'Thrive in a supportive environment that fosters teamwork, open communication, and mutual respect.',
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 00-4 4v1h1V8a3 3 0 013-3h2V4H8zm8 0h-2v1h2a3 3 0 01-3 3v1h1v-1a4 4 0 004-4zm-4 12H8v-1h2a3 3 0 013 3v1h1v-1a4 4 0 00-4-4zM4 16h2v-1H4a3 3 0 013-3v-1h-1v1a4 4 0 00-4 4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      color: 'bg-green-100 text-[#3AAFA9]',
    },
    {
      title: 'Career Growth',
      description:
        'Unlock your potential through continuous learning, mentorship programs, and diverse career paths.',
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clipRule="evenodd"
          />
        </svg>
      ),
      color: 'bg-purple-100 text-[#3AAFA9]',
    },
    {
      title: 'Competitive Benefits',
      description:
        'Enjoy comprehensive benefits that support your health, financial well-being, and work-life integration.',
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M5 5a3 3 0 015-2.236 3 3 0 015 2.236V5c0 1.565-.895 3.05-2.364 4.316a5.97 5.97 0 01-2.732 1.582 5.97 5.97 0 01-2.732-1.582C5.895 8.05 5 6.565 5 5z"
            clipRule="evenodd"
          />
        </svg>
      ),
      color: 'bg-yellow-100 text-[#3AAFA9]',
    },
  ];

  return (
    <div className="bg-white">
      <Navbar />
      <HeroImageSection
        imageSrc="./careers-banner.jpeg"
        title="Join Our Team"
        subtitle="Build the Future with Velotix Technologies"
        textColor="text-gray-900"
      />

      <div className="py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-10 tracking-tight">
            Why Choose a Career at <span className="text-[#3AAFA9]">Velotix</span> Technologies?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 leading-relaxed">
            Join our team and be part of a vibrant ecosystem where innovation is encouraged,
            collaboration is key, and your growth is our priority. We're building the future of
            technology, one brilliant mind at a time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {careerBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out"
              >
                <div className="p-8 flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-full ${benefit.color} flex items-center justify-center mb-4`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-2 text-center tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h3 className="text-3xl font-semibold text-[#3AAFA9] tracking-tight">
              Ready to Shape the Future with Us?
            </h3>
            <p className="text-xl text-gray-600 mt-6 leading-relaxed">
              If you're driven by innovation and eager to contribute to groundbreaking projects, we'd
              love to hear from you.
            </p>
            <div className="mt-10">
              <button
                className="bg-[#3AAFA9] hover:bg-[#32948e] text-white font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                onClick={handleButtonClick}
              >
                Explore Opportunities
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
