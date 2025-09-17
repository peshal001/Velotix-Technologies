import React from 'react';

const SalesforceLifecycle = () => {
  const lifecycleStages = [
    { id: 1, name: 'Planning', description: 'Start by creating a detailed plan with requirements and analysis before moving to development. Discuss your project idea with the Development team to ensure efficient development.' },
    { id: 2, name: 'Design', description: 'Design Salesforce solutions with Lightning App Builder and Visualforce for intuitive user interfaces and compelling user experiences.' },
    { id: 3, name: 'Building', description: 'Develop Salesforce applications using Apex for coding and Lightning components for responsive and dynamic user interfaces.' },
    { id: 4, name: 'Testing', description: ' Ensure the quality of Salesforce applications through thorough testing, leveraging tools like Salesforce '},
    { id: 5, name: 'Deployment', description: ' Implement Salesforce applications to production seamlessly using tools such as Salesforce CLI, change sets, and continuous integration platforms.' },
    { id: 6, name: 'Maintenance & Support', description: 'Provide ongoing support, ensuring the smooth functioning of Salesforce applications, utilizing monitoring tools and regular updates for optimal performance.' },
  ];

  return (
    <div className="bg-white-50 mt-30 min-h-screen py-12">
      <div className="container ml-65 mt-20  px-4">
        <h2 className="text-4xl font-extrabold text-black mb-10 text-center">Salesforce Development Lifecycle</h2>
        <p className="text-gray-700 mb-10 text-xl tracking-wide">
          Take a journey through the Salesforce Development Lifecycle, where strategies unfold, codes come to life, and innovation shapes seamless solutions for business growth.
        </p>

        <div className="relative flex justify-center items-center w-full text-xl max-w-2xl mx-auto h-96">
          <div className="absolute w-24 h-24 bg-[#3AA] text-white rounded-full flex items-center justify-center font-semibold shadow-md z-10">
            Salesforce
          </div>

          {lifecycleStages.map((stage, index) => {
            const angle = (index / lifecycleStages.length) * 2 * Math.PI - Math.PI / 2; 
            const radius = 180;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            const translateX = `translate(${x}px, ${y}px)`;

            return (
              <div
                key={stage.id}
                style={{ transform: translateX }}
                className="absolute w-32 text-center"
              >
                <div className="bg-indigo-200 text-[#3AA] rounded-md shadow-sm p-4 w-40 text-2xl font-medium">
                  {stage.name}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lifecycleStages.map((stage) => (
            <div key={stage.id} className="bg-white rounded-md shadow-md p-10">
              <h3 className="text-xl font-semibold text-[#3AA] mb-2">{stage.name}</h3>
              <p className="text-gray-600 text-xl tracking-wide">{stage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesforceLifecycle;