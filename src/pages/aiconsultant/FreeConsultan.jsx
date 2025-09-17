import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import ContactForm from '../../components/ContactForm/ContactForm';
import LocationCards from '../../components/location/LocationCard';

const FreeConsultan = () => {
  return (
    <>
      <Navbar />
      <div className='mt-50'>

      <ContactForm/>
      </div>
     <LocationCards/>
      <Footer />
    </>
  );
};

export default FreeConsultan;
