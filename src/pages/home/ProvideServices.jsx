import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const serviceData = {
  'Predictive Modeling': {
    title: 'Predictive Modeling',
    slug: 'predictive-modelling',
    description: 'Use our predictive modeling services to anticipate business outcomes...',
    benefits: [
      'Accurate forecasting of customer trends and behaviors.',
      'Data-driven decision-making capabilities.',
      'Enhanced business planning and risk management.',
    ],
  },
  'ChatGPT Integration': {
    title: 'ChatGPT Integration',
    slug: 'chat-gpt-integration',
    description: 'Integrate ChatGPT into your digital products...',
    benefits: [
      '24/7 intelligent virtual assistance.',
      'Context-aware and coherent conversations.',
      'Boost user engagement with smarter interactions.',
    ],
  },
  'Natural Language Processing': {
    title: 'Natural Language Processing',
    slug: 'natural-language-processing',
    description: 'Transform text data into meaningful insights...',
    benefits: [
      'Sentiment analysis for real-time customer feedback.',
      'Automated language translation and summarization.',
      'Speech recognition and chatbot integration.',
    ],
  },
  'Machine Learning': {
    title: 'Machine Learning',
    slug: 'machine-learning',
    description: 'Leverage cutting-edge machine learning solutions...',
    benefits: [
      'Real-time decision-making systems.',
      'Adaptive learning models that improve with data.',
      'Custom solutions for fraud detection, recommendation engines, and more.',
    ],
  },
  'Computer Vision': {
    title: 'Computer Vision',
    slug: 'computer-vision',
    description: 'Analyze and interpret visual data from the world...',
    benefits: [
      'Automated visual inspection and quality control.',
      'Face and gesture recognition for secure access.',
      'Real-time video analysis and surveillance.',
    ],
  },
  'Big Data Analytics': {
    title: 'Big Data Analytics',
    slug: 'big-data-analytics',
    description: 'Unlock hidden patterns and insights...',
    benefits: [
      'High-speed data processing and analysis.',
      'Scalable data storage and retrieval systems.',
      'Advanced visualization and reporting tools.',
    ],
  },
};

function ProvideServices() {
  const navigate = useNavigate();

  const handleReadMore = (slug) => {
    navigate(`/services/${slug}`);
  };

  return (
    <div className="bg-[#F9F5F6]  min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
          Explore Our <span className="text-[#3AAFA9]">Services</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(serviceData).map((service) => (
            <motion.div
              key={service.slug}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:border-2 hover:border-[#3AAFA9]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">{service.title}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">{service.description}</p>
                <h3 className="text-lg font-semibold text-[#3AAFA9] mb-2">Key Advantages</h3>
                <ul className="list-disc list-inside text-gray-600 leading-relaxed mb-4 space-y-1">
                  {service.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleReadMore(service.slug)}
                  className="bg-[#3AAFA9] hover:bg-[#2b7a78] transition duration-300 text-white font-bold py-3 px-6 rounded-full shadow-md"
                >
                  Discover More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProvideServices;