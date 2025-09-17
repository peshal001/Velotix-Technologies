import React, { useState } from 'react';
import servicesData from '../../services.json'; // Assuming services.json is in the src folder

const SalesforceServices = () => {
  const [selectedService, setSelectedService] = useState(servicesData[0] || null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <>
        <h2 className="text-4xl font-extrabold mb-6  mt-30 text-center text-black">Our Salesforce Services</h2>
    <div className="bg-gray-100 min-h-3/4 max-w-1/2 flex tracking-wider mt-15 ml-65 mb-30">
    
      <aside className="bg-indigo-900 text-white w-64 py-8 px-4 text-xl font-bold rounded-r-xl shadow-md">
        <ul className="space-y-2">
          {servicesData.map((service) => (
            <li key={service.name}>
              <button
                className={`w-full text-left text-xl py-2 px-4 rounded-md hover:bg-indigo-800 focus:outline-none focus:ring focus:ring-indigo-500 ${
                  selectedService?.name === service.name ? 'bg-[#3AA] text-white  text-2xl font-semibold' : ''
                }`}
                onClick={() => handleServiceClick(service)}
              >
                {service.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>
  
      <main className="flex-1 mt-8 ml-8 mr-8 bg-white rounded-lg shadow-xl p-8">
        {selectedService ? (
          <div>
            <h3 className="text-2xl font-semibold mb-4">{selectedService.title}</h3>
            <p className="text-gray-700 mb-6 text-xl">{selectedService.description}</p>
            {selectedService.features && selectedService.features.length > 0 && (
              <div className="mt-4">
                <h4 className="text-2xl font-semibold mb-2">Key Features of Our {selectedService.title}:</h4>
                <ul className="list-disc list-inside text-xl text-gray-700">
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className="mb-1">{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className="p-6 text-center text-gray-500">
            Click on a service on the left to see its details.
          </div>
        )}
      </main>
    </div>

    </>
  );
};

export default SalesforceServices;