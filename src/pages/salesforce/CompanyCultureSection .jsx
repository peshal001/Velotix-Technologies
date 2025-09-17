import React from 'react';

const CompanyCultureSection = () => {
  return (
    <div className="flex items-center justify-center py-10">
      <div className="w-2/5 pr-8">
        <div className="relative rounded-md overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="325" 
            src="https://www.youtube.com/embed/your_youtube_video_id"
            title="Xeven Solutions Culture"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
            <h3 className="text-xl font-semibold">A Powerhouse of Positivity</h3>
          </div>
        </div>
      </div>

      
      <div className="w-1/3 pl-8">
        <h2 className="text-4xl font-bold text-[#3AAFA9] mb-8">Building Trust with Velotix Technologies</h2>
        <p className="text-gray-900 leading-relaxed  text-xl w-4/5">
          At Velotix, we believe in making a work environment that allows our employees thrive
          professionally and personally. Our team is dynamic and multi-faceted; employees work together to
          reach their common goals. While fostering a sense of community and unity, our employees
          are encouraged to be in charge of their lives. Realize the potential of their abilities by offering
          opportunities to grow and develop.
        </p>
      </div>
    </div>
  );
};

export default CompanyCultureSection;