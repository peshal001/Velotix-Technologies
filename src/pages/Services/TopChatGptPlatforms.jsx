import React from 'react';

// Import logos (replace with your actual image imports)
import openaiLogo from '../../assets/Service/chatgpt.png';
import langchainLogo from '../../assets/Service/langchainLogo.png';
import pineconeLogo from '../../assets/Service/pineconeLogo.png';
import debuildLogo from '../../assets/Service/debuildLogo.png';

const TopChatGptPlatforms = () => {
  return (
    <div className="bg-white py-4 sm:px-6 lg:px-8 mt-20 mb-30">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-30 mt-20">
        Top Chat GPT Platforms We Use
      </h2>
      <div className="flex gap-60 ml-130 items-center">
        <Logo platform="OpenAI" logo={openaiLogo} />
        <Logo platform="LangChain" logo={langchainLogo} />
        <Logo platform="Pinecone" logo={pineconeLogo} />
        <Logo platform="Debuild" logo={debuildLogo} />
      </div>
    </div>
  );
};

const Logo = ({ platform, logo }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={logo} alt={`${platform} Logo`} className="h-8 md:h-10" />
      <p className="text-gray-600 text-sm mt-2">{platform}</p>
    </div>
  );
};

export default TopChatGptPlatforms;