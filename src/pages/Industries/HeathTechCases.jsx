import React from 'react';
import careersBanner from "../../assets/HealthTech/careersBanner.png";
import remoteMonitoring from "../../assets/HealthTech/remoteMonitoring.png";
import adminTasks from "../../assets/HealthTech/adminTasks.png"; 
import mentalHealth from "../../assets/HealthTech/mentalHealth.png";
import medicalAnalysis from "../../assets/HealthTech/medicalAnalysis.png"; 
import virtualAssistant from "../../assets/HealthTech/virtualAssistant.png"; 

const HealthTechCases = () => {
  const useCases = [
    {
      title: 'Drug Discovery',
      description:
        'AI accelerates drug discovery by evaluating extensive data, identifying potential medications, and developing innovative clinical software solutions.',
      imageSrc: careersBanner,
    },
    {
      title: 'Remote Patient Monitoring',
      description:
        'RPM technologies can help healthcare providers remotely track a patient\'s vital signs and other health metrics, allowing for early detection of potential issues and proactive interventions.',
      imageSrc: remoteMonitoring,
    },
    {
      title: 'Administrative Tasks',
      description:
        'Leveraging AI technology, various administrative tasks can be automated, leading to more efficient and accurate processes. This automation minimizes the likelihood of errors and ultimately enhances patient satisfaction.',
      imageSrc: adminTasks,
    },
    {
      title: 'Mental Health',
      description:
        'AI is being used to develop tools for mental health support, including chatbots for therapy, early detection of mental health conditions through data analysis, and personalized treatment plans.',
      imageSrc: mentalHealth,
    },
    {
      title: 'Medical Image Analysis',
      description:
        'AI algorithms can analyze medical images like X-rays, MRIs, and CT scans to assist in diagnosis, detect anomalies, and improve the accuracy and speed of image interpretation.',
      imageSrc: medicalAnalysis,
    },
    {
      title: 'Virtual Health Assistants',
      description:
        'Virtual Health Assistants (VHAs), powered by machine learning, learn and adapt to patient needs. They offer personalized recommendations and medication management.',
      imageSrc: virtualAssistant,
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
          AI Health Tech Use Cases
        </h2>
        <div className="overflow-x-auto">
          <div className="flex flex-row gap-8 py-4">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-md overflow-hidden w-80 md:w-96 flex-shrink-0"
              >
                <img
                  src={useCase.imageSrc}
                  alt={useCase.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-900 text-xl">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthTechCases;