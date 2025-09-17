import React, { useState } from 'react';

const ContactForm = () => {
    const [fullName, setFullName] = useState('');
    const [helpType, setHelpType] = useState('');
    const [industry, setIndustry] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');
    const [newsletter, setNewsletter] = useState(false);
    const [terms, setTerms] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState(null);

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            fullName,
            helpType,
            industry,
            email,
            phone,
            country,
            company,
            message,
            newsletter,
            terms,
        };

        try {
            const response = await fetch('http://localhost:5000/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log('Success:', data);

            if (data.success) {
                setSubmissionStatus({ type: 'success', message: 'Thank you! We have received your message and a confirmation has been sent to your email address.' });
                setFullName('');
                setHelpType('');
                setIndustry('');
                setEmail('');
                setPhone('');
                setCountry('');
                setCompany('');
                setMessage('');
                setNewsletter(false);
                setTerms(false);
            } else if (data.message) {
                setSubmissionStatus({ type: 'error', message: data.message });
            } else {
                setSubmissionStatus({ type: 'error', message: 'There was an issue processing your request.' });
            }

        } catch (error) {
            console.error('Error:', error);
            setSubmissionStatus({ type: 'error', message: 'There was an error submitting the form. Please try again.' });
        }
    };

    return (
        <div className="flex flex-col my-20 items-center w-full">
            <h2 className="text-5xl font-bold text-center mb-12">Contact Us</h2>
            <p className="text-3xl text-center mb-16 text-gray-700 w-2/3">
                We appreciate your interest in Velotix Tech. Please fill out the form, and we'll get in touch with you.
            </p>
            <div className="shadow-2xl rounded-lg p-12 w-4/5 max-w-4xl">
                <form onSubmit={handleOnSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                    <div className="md:col-span-1">
                        <div className="mb-8">
                            <label htmlFor="fullName" className="block text-gray-700 text-xl font-bold mb-3">
                                Full Name*
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                placeholder="Enter your full name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xl"
                                required
                            />
                        </div>
                        <div className="mb-8">
                            <label htmlFor="email" className="block text-gray-700 text-xl font-bold mb-3">
                                Email*
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xl"
                                required
                            />
                        </div>
                        <div className="mb-8">
                            <label htmlFor="phone" className="block text-gray-700 text-xl font-bold mb-3">
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Enter your phone number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xl"
                            />
                        </div>
                        <div className="mb-8">
                            <label htmlFor="country" className="block text-gray-700 text-xl font-bold mb-3">
                                Country*
                            </label>
                            <input
                                type="text"
                                id="country"
                                name="country"
                                placeholder="Enter your country"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xl"
                                required
                            />
                        </div>
                    </div>

                    <div className="md:col-span-1">
                        <div className="mb-8">
                            <label htmlFor="helpType" className="block text-gray-700 text-xl font-bold mb-3">
                                How can we help you?*
                            </label>
                            <select
                                id="helpType"
                                name="helpType"
                                value={helpType}
                                onChange={(e) => setHelpType(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xl"
                                required
                            >
                                <option value="">Please Select One</option>
                                <option value="artificial_intelligence_course">Artificial Intelligence Course / Xeven Skills</option>
                                <option value="big_data_analytics">Big Data Analytics</option>
                                <option value="chat_gpt_integrations">Chat GPT Integrations</option>
                                <option value="cloud_computing">Cloud Computing</option>
                                <option value="computer_vision">Computer Vision</option>
                                <option value="internet_of_things">Internet of Things</option>
                                <option value="it_consulting">IT Consulting</option>
                                <option value="machine_learning">Machine Learning</option>
                                <option value="natural_language_processing">Natural Language Processing</option>
                                <option value="predictive_modeling">Predictive Modeling</option>
                                <option value="web_development">Web Development</option>
                                <option value="others">Others</option>
                            </select>
                        </div>

                        <div className="mb-8">
                            <label htmlFor="industry" className="block text-gray-700 text-xl font-bold mb-3">
                                Select your Industry*
                            </label>
                            <select
                                id="industry"
                                name="industry"
                                value={industry}
                                onChange={(e) => setIndustry(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xl"
                                required
                            >
                                <option value="">Please Select One</option>
                                <option value="automotive_transportation">Automotive & Transportation</option>
                                <option value="customer_service">Customer Service</option>
                                <option value="edtech">EdTech</option>
                                <option value="fashion_retail">Fashion & Retail</option>
                                <option value="fintech">FinTech</option>
                                <option value="greentech">GreenTech</option>
                                <option value="health_tech">Health Tech</option>
                                <option value="hr">HR (Human Resources)</option>
                                <option value="internet_of_things_industry">Internet of Things</option>
                                <option value="information_technology">Information Technology</option>
                                <option value="legal_finance">Legal & Finance</option>
                                <option value="marketing_sales">Marketing & Sales</option>
                                <option value="manufacturing_logistics">Manufacturing and Logistics</option>
                                <option value="real_estate">Real Estate</option>
                                <option value="retail">Retail</option>
                                <option value="security_surveillance">Security & Surveillance</option>
                                <option value="travel_hospitality">Travel & Hospitality</option>
                                <option value="others_industry">Others</option>
                            </select>
                        </div>

                        <div className="mb-8">
                            <label htmlFor="company" className="block text-gray-700 text-xl font-bold mb-3">
                                Company/Organization
                            </label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                placeholder="Enter your company or organization"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xl"
                            />
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <div className="mb-8">
                            <label htmlFor="message" className="block text-gray-700 text-xl font-bold mb-3">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Write your message here..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xl"
                            />
                        </div>

                        <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
                            <label className="flex items-center text-gray-700 text-lg">
                                <input
                                    type="checkbox"
                                    checked={newsletter}
                                    onChange={(e) => setNewsletter(e.target.checked)}
                                    className="mr-3"
                                />
                                Subscribe to our newsletter
                            </label>

                            <label className="flex items-center text-gray-700 text-lg">
                                <input
                                    type="checkbox"
                                    checked={terms}
                                    onChange={(e) => setTerms(e.target.checked)}
                                    className="mr-3"
                                    required
                                />
                                I agree to the Terms & Conditions*
                            </label>
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white text-xl font-semibold py-4 px-10 rounded hover:bg-blue-700 transition duration-300"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>

                {submissionStatus && (
                    <div className={`mt-8 p-4 rounded-md text-white ${submissionStatus.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
                        {submissionStatus.message}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContactForm;