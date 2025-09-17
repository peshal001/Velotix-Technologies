import React, { useState } from 'react';

const SalesForceFAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is Software Development?',
      answer:
        'Software development is the process of designing, coding, testing, and maintaining software applications to meet specific user needs. It involves programming, system architecture, and collaboration to build functional and reliable software.',
    },
    {
      question: 'What are the key stages in software development?',
      answer:
        'The key stages include requirement gathering, system design, coding, testing, deployment, and maintenance. Agile, Waterfall, and other methodologies define how these stages are executed.',
    },
    {
      question: 'What programming languages are commonly used?',
      answer:
        'Popular programming languages for software development include JavaScript, Python, Java, C++, Ruby, and PHP. The choice of language depends on the type of application being developed.',
    },
    {
      question: 'What is Agile software development?',
      answer:
        'Agile is a methodology that promotes iterative development, where requirements and solutions evolve through collaboration between cross-functional teams. It emphasizes flexibility, quick delivery, and customer feedback.',
    },
    {
      question: 'What is the role of testing in software development?',
      answer:
        'Testing is crucial for ensuring software reliability, identifying bugs, and validating that the software meets user requirements. Types of testing include unit testing, integration testing, system testing, and user acceptance testing (UAT).',
    },
    {
      question: 'How long does it take to develop software?',
      answer:
        'The time to develop software depends on the complexity of the project, team size, and scope. Simple applications can be developed in a few weeks, while larger systems may take months or even years to complete.',
    },
    {
      question: 'What are some common challenges in software development?',
      answer:
        'Challenges include managing scope creep, maintaining code quality, meeting deadlines, ensuring scalability, and handling unforeseen technical issues. Effective communication and team collaboration can help overcome these challenges.',
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-12 mb-10">
      <div className="container mx-65 px-6 py-6 md:px-8 lg:px-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-30 text-center">
          Frequently Asked Questions - Software Development
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-[#3AAFA9]">{faq.question}</h3>
                <span className="text-2xl text-[#3AAFA9]">
                  {activeIndex === index ? '-' : '+'}
                </span>
              </div>
              {activeIndex === index && (
                <p className="mt-4 text-lg text-gray-900">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesForceFAQSection;
