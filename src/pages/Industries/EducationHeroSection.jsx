import { useNavigate } from "react-router-dom"; 
export default function EducationHeroSection() {
  const navigate = useNavigate();
  
    const handleButtonClick = () => {
      navigate('/aiconsultant'); 
    };

  return (
    <main>
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between">
       
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              AI-Driven Learning: Empowering Education for a Smarter Tomorrow
            </h2>
            <p className="text-xl tracking-wider text-gray-900 mb-6 mr-20">
              Explore how AI revolutionizes education with personalized tutoring, automated grading, and predictive analytics. Our smart solutions help students learn more effectively and allow educators to focus on what truly matters: teaching.
            </p>
            <button
              onClick={handleButtonClick}
              className="bg-[#3AAFA9] hover:bg-[#3AAFA9] text-white mt-10 font-bold py-3 px-6 rounded-md"
            >
              Schedule a Demo
            </button>
          </div>
          <div className="lg:w-1/2">
            <div className="relative rounded-xl ml-55 overflow-hidden">
              <img
                src="./education-banner.jpeg"
                alt="AI in Education"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
