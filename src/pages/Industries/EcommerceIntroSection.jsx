
export default function EcommerceIntroSection({ handleButtonClick }) {
  return (
    <main>
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              AI-Driven E-Commerce: Transforming Online Shopping Experiences
            </h2>
            <p className="text-xl tracking-wider text-gray-900 mb-6 mr-20">
              As a forward-thinking e-commerce solutions provider, we integrate Artificial Intelligence to reshape how businesses engage with customers. From personalized product recommendations and smart search to real-time analytics and automated customer service, our solutions empower online retailers to deliver seamless, data-driven, and intuitive shopping journeys. We help you unlock the true potential of your digital store with intelligent tools that drive conversions and enhance user experience.
            </p>
            <button onClick={handleButtonClick} className="bg-[#3AAFA9] hover:bg-[#3AAFA9] text-white mt-10 font-bold py-3 px-6 rounded-md">
              Schedule a Demo
            </button>
          </div>
          <div className="lg:w-1/2">
            <div className="relative rounded-xl ml-55 overflow-hidden">
              <img
                src="/ecommerce-banner.jpeg"
                alt="E-commerce AI Integration"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
