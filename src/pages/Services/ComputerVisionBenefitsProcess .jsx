import React from 'react';
import {
    AiOutlineEye,
    AiOutlineCamera,
    AiOutlineVideoCamera,
    AiOutlineTag,
    AiOutlineSliders,
} from 'react-icons/ai';
import { FaObjectGroup } from 'react-icons/fa'; 


const ComputerVisionBenefitsProcess = () => {
    const benefits = [
        {
            icon: <AiOutlineEye size={48} className="text-white" />,
            title: 'Image Recognition',
            description:
                'Identify and classify objects, people, and scenes within images with high accuracy.',
        },
        {
            icon: <AiOutlineCamera size={48} className="text-white" />,
            title: 'Object Detection',
            description:
                'Locate and track specific objects within images and videos for various applications.',
        },
        {
            icon: <FaObjectGroup size={48} className="text-white" />,
            title: 'Image Segmentation',
            description:
                'Divide images into meaningful regions for detailed analysis and understanding.',
        },
        {
            icon: <AiOutlineVideoCamera size={48} className="text-white" />,
            title: 'Video Analytics',
            description:
                'Extract valuable insights from video streams, including motion detection, object tracking, and event analysis.',
        },
        {
            icon: <AiOutlineTag size={48} className="text-white" />,
            title: 'Facial Recognition',
            description:
                'Identify and verify individuals based on their facial features for security and access control.',
        },
        {
            icon: <AiOutlineSliders size={48} className="text-white" />,
            title: 'Custom Vision Solutions',
            description:
                'Develop tailored computer vision models to address your specific visual data processing needs.',
        },
        {
            title: 'The Computer Vision Process',
            isTitle: true,
        },
    ];

    return (
        <div className="bg-[#3AAFA9] py-12 mb-20">
            <div className="container mx-auto px-6 py-6 md:px-8 lg:px-12">
                {benefits.find((item) => item.isTitle) && (
                    <h2 className="text-4xl font-extrabold text-white mb-12 text-center">
                        {benefits.find((item) => item.isTitle)?.title}
                    </h2>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits
                        .filter((item) => !item.isTitle)
                        .map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                            >
                                <div className="w-16 h-16 rounded-full bg-[#3AAFA9] flex items-center justify-center mb-4">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-700 text-lg tracking-wide">{benefit.description}</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ComputerVisionBenefitsProcess;