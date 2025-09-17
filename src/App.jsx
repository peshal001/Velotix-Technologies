import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/HomePage';
import PredictiveModelling from './pages/Services/PredictiveModelling';
import ChatGPTIntegration from './pages/Services/ChatGPTIntegration';
import NaturalLanguageProcessing from './pages/Services/NaturalLanguageProcessing';
import MachineLearning from './pages/Services/MachineLearning';
import ComputerVision from './pages/Services/ComputerVision';
import BigDataAnalytics from './pages/Services/BigDataAnalytics';
import Salesforce from './pages/salesforce/Salesforce';

import Healthcare from './pages/Industries/Healthcare';
import Finance from './pages/Industries/Finance';
import Ecommerce from './pages/Industries/Ecommerce';
import Retail from './pages/Industries/Retail';
import Education from './pages/Industries/Education';

import Blog from "./pages/Resources/Blog";
import Gallery from "./pages/Resources/Gallery";

import AboutUs from './pages/company/AboutUs';
import Careers from './pages/company/Careers';
import FreeConsultan from './pages/aiconsultant/FreeConsultan';
import BlogDetail from './pages/BlogDetail';
import ServicesDropdown from './components/navbar/ServicesDropdown';



function App() {
  return (
    <div className="bg-white min-h-screen">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services/predictive-modelling" element={<PredictiveModelling />} />
        <Route path="/services/chat-gpt-integration" element={<ChatGPTIntegration />} />
        <Route path="/services/natural-language-processing" element={<NaturalLanguageProcessing />} />
        <Route path="/services/machine-learning" element={<MachineLearning />} />
        <Route path="/services/computer-vision" element={<ComputerVision />} />
        <Route path="/services/big-data-analytics" element={<BigDataAnalytics />} />
        <Route path="/services/salesforce" element={<Salesforce />} />

        <Route path="/industries/healthcare" element={<Healthcare />} />
        <Route path="/industries/finance" element={<Finance />} />
        <Route path="/industries/ecommerce" element={<Ecommerce />} />
        <Route path="/industries/retail" element={<Retail />} />
        <Route path="/industries/education" element={<Education />} />

        <Route path="/resources/blog" element={<Blog/>} />
        <Route path="/resources/blog/:id" element={<BlogDetail/>} />
        <Route path="/resources/gallery" element={<Gallery/>} />

        <Route path="/company/about-us" element={<AboutUs />} />
        <Route path="/company/careers" element={<Careers />} />
         <Route path="/aiconsultant" element={<FreeConsultan />} />
         <Route path="/services" element={<ServicesDropdown />} />
      </Routes>
     
    </div>
  );
}

export default App;
