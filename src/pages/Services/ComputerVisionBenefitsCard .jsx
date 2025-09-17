import React from 'react';
import {
    AiOutlineEye,
    AiOutlineCamera,
    AiOutlineVideoCamera,
    AiOutlineTag,
    AiOutlineSliders,
} from 'react-icons/ai';
import { FaObjectGroup } from 'react-icons/fa';

const ComputerVisionBenefitsCard = () => {
    const benefits = [
        {
            icon: <AiOutlineEye size={32} className="text-[#3AAFA9]" />,
            title: 'Image Recognition',
            description:
                'Identify and classify objects, people, and scenes within images with high accuracy.',
        },
        {
            icon: <AiOutlineCamera size={32} className="text-[#3AAFA9]" />,
            title: 'Object Detection',
            description:
                'Locate and track specific objects within images and videos for various applications.',
        },
        {
            icon: <FaObjectGroup size={32} className="text-[#3AAFA9]" />,
            title: 'Image Segmentation',
            description:
                'Divide images into meaningful regions for detailed analysis and understanding.',
        },
        {
            icon: <AiOutlineVideoCamera size={32} className="text-[#3AAFA9]" />,
            title: 'Video Analytics',
            description:
                'Extract valuable insights from video streams, including motion detection, object tracking, and event analysis.',
        },
        {
            icon: <AiOutlineTag size={32} className="text-[#3AAFA9]" />,
            title: 'Facial Recognition',
            description:
                'Identify and verify individuals based on their facial features for security and access control.',
        },
        {
            icon: <AiOutlineSliders size={32} className="text-[#3AAFA9]" />,
            title: 'Custom Vision Solutions',
            description:
                'Develop tailored computer vision models to address your specific visual data processing needs.',
        },
        {
            title: 'Exploring the Advantages of Computer Vision',
            isTitle: true,
        },
    ];

    return (
        <div className="bg-white py-12 mt-12 mb-20">
            <div className="container mx-auto px-6 py-6 md:px-8 lg:px-12 mb-20">
                {benefits.find((item) => item.isTitle) && (
                    <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-20">
                        {benefits.find((item) => item.isTitle)?.title}
                    </h2>
                )}
                <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-10">
                    {benefits
                        .filter((item) => !item.isTitle)
                        .map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md p-10 flex flex-col items-center text-center"
                            >
                                <div className="mb-4">{benefit.icon}</div>
                                <h3 className="text-2xl font-semibold text-[#3AAFA9] mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-900 text-xl tracking-wide">{benefit.description}</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ComputerVisionBenefitsCard;