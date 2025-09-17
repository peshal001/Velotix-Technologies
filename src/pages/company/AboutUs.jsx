import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import HeroImageSection from '../../components/HeroSection/HeroImageSection';
import Footer from '../../components/footer/Footer';
import MeetOurTeamSection from '../company/TeamMemberCard';
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBrain,
  faUserCog,
  faLightbulb,
  faHandshake,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
  const coreValues = [
    {
      title: 'AI Expertise',
      description:
        'As a technology-focused company, we prioritize our deep knowledge and specialization in Artificial Intelligence and Machine Learning solutions to drive innovation and provide cutting-edge services to our clients.',
      icon: <FontAwesomeIcon icon={faBrain} className="text-[#3AAFA9] text-3xl mb-4" />,
    },
    {
      title: 'Expert Team',
      description:
        'As a people-centric organization, we recognize the value of our skilled professionals with extensive experience in software development, AI integration, and IT training, ensuring high-quality service and expertise for our clients and partners.',
      icon: <FontAwesomeIcon icon={faUserCog} className="text-[#3AAFA9] text-3xl mb-4" />,
    },
    {
      title: 'Innovative Solutions',
      description:
        'We place a high value on the development and implementation of cutting-edge technologies and creative solutions that effectively address the evolving needs and challenges of our clients.',
      icon: <FontAwesomeIcon icon={faLightbulb} className="text-[#3AAFA9] text-3xl mb-4" />,
    },
    {
      title: 'Client-Centric Approach',
      description:
        'We value understanding and meeting the unique goals of each client, taking responsibility for delivering tailored solutions and ensuring their success through our expertise and dedication.',
      icon: <FontAwesomeIcon icon={faHandshake} className="text-[#3AAFA9] text-3xl mb-4" />,
    },
    {
      title: 'Data-Driven Insights',
      description:
        'Collaboration fuels our progress as we leverage data insights to inform our strategies and the solutions we provide, ensuring they are effective, impactful, and contribute to our clients\' desired outcomes.',
      icon: <FontAwesomeIcon icon={faDatabase} className="text-[#3AAFA9] text-3xl mb-4" />,
    },
  ];

  return (
    <div className="bg-white">
      <Navbar />
      <HeroImageSection
        imageSrc="/src/assets/images/aboutus-banner.png"
        title="About Us"
        subtitle="Learn More About Our Vision, Mission, and Values"
        textColor="text-gray-900"
      />
      <main className="container mx-auto px-6 py-12 md:py-20">
        <section className="mb-16">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center md:text-left tracking-tight">
            Our <span className="text-[#3AAFA9]">Story</span>
          </h1>
          <div className="md:w-3/4">
            <p className="text-xl tracking-wide text-gray-700 mb-6 leading-relaxed">
              Velotix Technologies is a forward-thinking IT service provider leveraging cutting-edge
              technology to deliver intelligent solutions for organizations. Our mission is to empower
              businesses to maximize the potential of IT, enhancing their internal operations to
              maintain a competitive edge in today's rapidly evolving market.
            </p>
            <p className="text-xl tracking-wide text-gray-700 mb-6 leading-relaxed">
              Our journey began with a group of IT experts driven by the desire to create innovative
              solutions for real-world business needs. We recognized that achieving success in the
              digital era requires embracing technology as a fundamental strategic asset. Our
              expertise encompasses areas such as software development, AI integration, specialized
              training, and leveraging data insights.
            </p>
            <p className="text-xl tracking-wide text-gray-700 mb-8 leading-relaxed">
              At Velotix Technologies, we support businesses of all sizes, from emerging startups to
              established enterprises, across diverse industries including technology, finance, and
              beyond. Our work is fueled by a passion for innovation, a dedication to excellence, and
              a commitment to making a meaningful impact on the way businesses operate and thrive.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl tracking-tight">
              Core Values That <span className="text-[#3AAFA9]">Drive</span> Our Brand Forward
            </h2>
            <p className="mt-4 text-lg tracking-wide text-gray-600 leading-relaxed">
              Our values serve as a guiding force for our actions, decisions, and interactions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-lg transition duration-300"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-[#3AAFA9] mb-2 tracking-tight">
                  {value.title}
                </h3>
                <p className="text-lg tracking-wide text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16">
          <MeetOurTeamSection />
        </section>

        <section className="py-16 bg-gray-50 rounded-lg shadow-md">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 tracking-tight">
              Celebrating Our <span className="text-[#3AAFA9]">Journey</span>
            </h2>
            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              A few key milestones that highlight our growth and impact.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center">
                <span className="text-5xl font-bold text-[#3AAFA9] mb-3">
                  <CountUp end={4} duration={3} suffix="+" />
                </span>
                <p className="text-gray-700 text-lg">Years of Experience</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center">
                <span className="text-5xl font-bold text-[#3AAFA9] mb-3">
                  <CountUp end={100} duration={3} suffix="+" />
                </span>
                <p className="text-gray-700 text-lg">Happy Clients</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center">
                <span className="text-5xl font-bold text-[#3AAFA9] mb-3">
                  <CountUp end={100} duration={3} suffix="+" />
                </span>
                <p className="text-gray-700 text-lg">Dedicated Employees</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center">
                <span className="text-5xl font-bold text-[#3AAFA9] mb-3">
                  <CountUp end={4} duration={3} />
                </span>
                <p className="text-gray-700 text-lg">Global Offices</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center tracking-tight">
            Why Choose <span className="text-[#3AAFA9]">Velotix Technologies</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-md bg-purple-100 text-[#3AAFA9] flex items-center justify-center mr-4 mt-1">
                  <svg
                    className="w-7 h-7 fill-current"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 14a4 4 0 00-4-4v-1a1 1 0 012 0v1a2 2 0 012 2 2 2 0 01-2 2zm0-8a3 3 0 110-6 3 3 0 010 6zm-6 8a6 6 0 1112 0H4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">AI Expertise</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Our team is committed to going above and beyond your expectations and ensuring
                    complete satisfaction.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-md bg-blue-100 text-[#3AAFA9] flex items-center justify-center mr-4 mt-1">
                  <svg
                    className="w-7 h-7 fill-current"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Team</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    We efficiently produce outstanding results with a thorough understanding of your
                    industry's specific standards and requirements.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-md bg-pink-100 text-[#3AAFA9] flex items-center justify-center mr-4 mt-1">
                  <svg
                    className="w-7 h-7 fill-current"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovative Solutions</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Our specialized and business experts are equipped with deep skill, innovative
                    ideas, and a commitment to progress.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-lg shadow-md overflow-hidden md:order-first">
              <img
                src="/src/assets/images/gallery-banner.png"
                alt="Office Space"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-md bg-yellow-100 text-[#3AAFA9] flex items-center justify-center mr-4 mt-1">
                  <svg
                    className="w-7 h-7 fill-current"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Expansion</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Our global presence across the UK, USA, and UAE enables us to provide digital
                    excellence with agility and promptness.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-md bg-indigo-100 text-indigo-600 flex items-center justify-center mr-4 mt-1">
                  <svg
                    className="w-7 h-7 fill-current"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10 9.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">On-Time Delivery</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    We deliver the exact range of products & services we pledge, within the
                    specified timeframe, without compromising precision.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-md bg-teal-100 text-teal-600 flex items-center justify-center mr-4 mt-1">
                  <svg
                    className="w-7 h-7 fill-current"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 5a3 3 0 015-2.236 3 3 0 015 2.236V5c0 1.565-.895 3.05-2.364 4.316a5.97 5.97 0 01-2.732 1.582 5.97 5.97 0 01-2.732-1.582C5.895 8.05 5 6.565 5 5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium Value</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Our various hiring models, including dedicated teams, fixed-price projects,
                    & hourly rates, provide clients with flexible options while delivering
                    premium value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
