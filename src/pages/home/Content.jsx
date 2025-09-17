import React from 'react';
import FreeConsultanBtn from '../../components/FreeConsultanBtn';

const Content = () => {
  return (
    <div className="bg-[#F9F5F6]  py-16 md:py-24 lg:py-32">
    <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between gap-8 lg:gap-16">
      <div className="text-content lg:max-w-lg">
        <h1 className="text-4xl font-semibold text-gray-900 sm:text-4xl lg:text-5xl mb-4">
          Drive Unstoppable Business Success Through AI!
        </h1>
        <p className="text-xl text-gray-900 mb-4  mt-6 tracking-wide">
          Maximize your business potential with our exceptional AI Development Services. Our customer-centric and passionate team of engineers is committed to delivering tailored solutions that exceed your expectations.
        </p>
        <p className="text-xl text-gray-900 mb-4 tracking-wide">
          We leverage our expertise in machine learning, deep learning, and AI development to deliver exceptional solutions in NLP, computer vision, predictive analytics, generative AI, AI chatbot development, and more.
        </p>
        <p className="text-xl text-gray-900 mb-10 tracking-wide">
          Our AI-based solutions offer a clear pathway to success, helping businesses improve decision-making, automate operations, save time, and boost profits. Partner with Xeven Solutions – AI Experts in Pakistan, to seamlessly integrate, scale, and access data-driven insights, leading to exceptional business outcomes.
        </p>
        <FreeConsultanBtn/>
      </div>
      <div className="image-container lg:max-w-4xl ml-auto mr-10 transition-transform duration-500 ease-in-out hover:scale-105">
  <img
    src="/content_banner.jpg" 
    alt="AI in Business"
    className="rounded-2xl shadow-2xl w-[650px] h-[420px] object-cover border-4 border-white hover:shadow-blue-500/50 transition-all duration-700 ease-in-out"
  />
</div>
    </div>
  </div>

  );
};

export default Content;
