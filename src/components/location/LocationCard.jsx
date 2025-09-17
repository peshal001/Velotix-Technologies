import React from 'react';

const LocationCards = () => {
  const locations = [
    {
      title: 'Kathmandu Office',
      addressLine1: 'XYZ Marg, Thamel',
      addressLine2: 'Kathmandu, Bagmati Province',
      phone: '+977-1-XXXXXXX',
      email: 'ktm@example.com',
    },
    {
      title: 'Pokhara Branch',
      addressLine1: 'ABC Road, Lakeside',
      addressLine2: 'Pokhara, Gandaki Province',
      phone: '+977-61-YYYYYYY',
      email: 'pkr@example.com',
    },
    {
      title: 'Butwal Sub-Office',
      addressLine1: 'PQR Chowk, Traffic Mode',
      addressLine2: 'Butwal, Lumbini Province',
      phone: '+977-71-ZZZZZZZ',
      email: 'btw@example.com',
    },
    {
      title: 'UAE',
      addressLine1: 'Business Center 1, M Floor, The Meydan Hotel',
      addressLine2: 'Nad, Al Sheba, Dubai',
      phone: '+971-569-136-243',
      email: null,
    },
    {
      title: 'PAK',
      addressLine1: 'Building # 15, Civic Centre Block D 2, Phase 1',
      addressLine2: 'Johar Town, Lahore',
      phone: null,
      email: null,
    },
    {
      title: 'USA',
      addressLine1: '30 N Gould St Suite R, Sheridan, WY 82801',
      addressLine2: 'United States',
      phone: '+1-267-800-0191',
      email: null,
    },
    
  ];

  return (
    <div className="bg-white-400 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Our Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <div key={index} className="bg-white rounded-lg shadow-2xl p-6">
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">{location.title}</h3>
              {location.addressLine1 && <p className="text-gray-600 text-sm mb-1">{location.addressLine1}</p>}
              {location.addressLine2 && <p className="text-gray-600 text-sm mb-2">{location.addressLine2}</p>}
              {location.phone && <p className="text-gray-600 text-sm mb-1">Phone: {location.phone}</p>}
              {location.email && <p className="text-gray-600 text-sm">Email: {location.email}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationCards;