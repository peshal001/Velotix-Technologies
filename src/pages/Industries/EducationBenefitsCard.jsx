import React from 'react';
import {
  MdSchool,
  MdComputer,
  MdLightbulbOutline,
  MdPeople,
  MdOutlineAutoGraph,
  MdSecurity,
} from 'react-icons/md';

const EducationBenefitsCard = () => {
  const capabilities = [
    {
      title: 'Capabilities and Benefits of AI in Education',
      isTitle: true,
    },
    {
      icon: <MdSchool size={32} className="text-[#3AAFA9]" />,
      title: 'Personalized Learning',
      description:
        'AI adapts lessons to student learning styles, helping learners understand concepts at their own pace for better results.',
    },
    {
      icon: <MdComputer size={32} className="text-[#3AAFA9]" />,
      title: 'Automated Grading',
      description:
        'Save time with AI-driven grading systems that evaluate assignments and provide real-time feedback to students.',
    },
    {
      icon: <MdLightbulbOutline size={32} className="text-[#3AAFA9]" />,
      title: 'Smart Content Creation',
      description:
        'AI helps generate interactive lessons, quizzes, and study material tailored to curriculum standards and student needs.',
    },
    {
      icon: <MdPeople size={32} className="text-[#3AAFA9]" />,
      title: 'Virtual Tutors & Assistants',
      description:
        'AI-powered tutors provide instant answers, help with homework, and support students anytime, anywhere.',
    },
    {
      icon: <MdOutlineAutoGraph size={32} className="text-[#3AAFA9]" />,
      title: 'Predictive Analytics',
      description:
        'Institutions use AI to analyze student performance data and intervene early to improve outcomes and reduce dropout rates.',
    },
    {
      icon: <MdSecurity size={32} className="text-[#3AAFA9]" />,
      title: 'Secure Online Exams',
      description:
        'AI ensures exam integrity with facial recognition, behavior analysis, and cheating detection for safe assessments.',
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6 py-6 md:px-8 lg:px-12">
        {capabilities.find((item) => item.isTitle) && (
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
            {capabilities.find((item) => item.isTitle)?.title}
          </h2>
        )}
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {capabilities
            .filter((item) => !item.isTitle)
            .map((capability, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-10 flex flex-col items-center text-center"
              >
                <div className="mb-4">{capability.icon}</div>
                <h3 className="text-2xl font-semibold text-[#3AAFA9] mb-2">
                  {capability.title}
                </h3>
                <p className="text-gray-900 text-xl tracking-wide">{capability.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default EducationBenefitsCard;
