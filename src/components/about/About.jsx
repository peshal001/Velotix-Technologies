import React from 'react';

const About = () => {
  return (
    <div className="bg-white  py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">
          About <span className="text-[#3AAFA9]">Velotix Technologies</span>
        </h1>
        <p className="text-lg text-gray-700 mb-12 lg:max-w-3xl mx-auto leading-relaxed">
          At Velotix Technologies, we are more than just an IT service provider. We are your partners in navigating the complex world of technology. Our passion lies in empowering businesses like yours to not only keep pace with the digital revolution but to lead it. With a strong foundation in innovation and a client-centric approach, we strive to deliver solutions that are not just effective but transformative.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl">
            <div className="p-6 flex flex-col items-center">
              <div className="w-16 h-16 bg-[#E0F7FA] rounded-full flex items-center justify-center text-[#3AAFA9] mb-4">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Mastery</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Harnessing the power of Artificial Intelligence and Machine Learning to optimize your operations and elevate customer experiences.
              </p>
            </div>
            <div className="bg-white p-4 text-center">
              <span className="text-[#3AAFA9] font-medium">Intelligent Solutions</span>
            </div>
          </div>
        
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl">
            <div className="p-6 flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#3AAFA9] mb-4">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 20 20">
                  <path d="M13 7a2 2 0 11-4 0 2 2 0 014 0zM9 14a2 2 0 10-4 0 2 2 0 014 0zM15 14a2 2 0 10-4 0 2 2 0 014 0zm-6-3a9 9 0 0112 0v1h-3a2 2 0 00-2-2v-1a4 4 0 00-4-4H5a2 2 0 00-2 2v1h-3v-1a9 9 0 0112 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Skilled Team</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                A collective of seasoned experts in AI, machine learning, and data science, dedicated to delivering exceptional results.
              </p>
            </div>
            <div className="bg-white  p-4 text-center">
              <span className="text-[#3AAFA9] font-medium">Professional Excellence</span>
            </div>
          </div>
         
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl">
            <div className="p-6 flex flex-col items-center">
              <div className="w-16 h-16 bg-[#E0F7FA] rounded-full flex items-center justify-center text-[#3AAFA9] mb-4">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 20 20">
                  <path d="M2 10a8 8 0 0116 0H2zm8-4a4 4 0 014 4H6a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pioneering Solutions</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Driving your business forward with state-of-the-art technology and innovative strategies that keep you ahead.
              </p>
            </div>
            <div className="bg-white p-4 text-center">
              <span className="text-[#3AAFA9] font-medium">Forward-Thinking Approach</span>
            </div>
          </div>
        
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl">
            <div className="p-6 flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#3AAFA9] mb-4">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 20 20">
                  <path d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V4a1 1 0 00-1-1H3zM5 5h10v2H5V5zm-1 4h12v2H4V9zm0 4h12v2H4v-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data-Centric Insights</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Transforming raw data into valuable insights, empowering you to make informed decisions and foster sustainable growth.
              </p>
            </div>
            <div className="bg-white p-4 text-center">
              <span className="text-[#3AAFA9] font-medium">Insightful Analytics</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;