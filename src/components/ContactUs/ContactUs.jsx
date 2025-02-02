'use client';
import React from 'react';
import { FaRegEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

function ContactUs() {
    return (
        <>
            <div className='bg-gray-900 h-20'></div>
        <section 
            id="contact" 
            className="relative bg-white text-gray-900 py-24 sm:py-36"
        >
            <div className="container mx-auto max-w-7xl px-6 lg:px-12">
                {/* Header Section */}
                <div className="text-center mb-12 mt-4 lg:mt-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">Get in Touch</h2>
                    <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
                        We’re here to help you 24/7. Reach out to us anytime with any inquiries.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-start">
                    {/* Contact Information */}
                    <div>
                        <ul className="space-y-8">
                            <li className="group flex items-start space-x-6 p-4 hover:bg-gray-50 transition-all rounded-lg">
                                <div className="bg-blue-600 p-4 rounded-lg shadow-lg">
                                    <FaMapMarkerAlt className="text-white text-xl sm:text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-blue-600 text-gray-900 transition-all">Address</h3>
                                    <p className="text-gray-600 group-hover:text-blue-600 transition-all">
                                        2048 Canyon Creek Ct,<br /> Aurora, IL 60503, USA
                                    </p>
                                    <a
                                        href="https://maps.google.com?q=2048+Canyon+Creek+Ct,+Aurora,+IL+60503"
                                        target="_blank"
                                        className="text-blue-600 hover:text-blue-500 mt-2 inline-block"
                                    >
                                        View on Google Maps
                                    </a>
                                </div>
                            </li>
                            <li className="group flex items-start space-x-6 p-4 hover:bg-gray-50 transition-all rounded-lg">
                                <div className="bg-blue-600 p-4 rounded-lg shadow-lg">
                                    <FaPhoneAlt className="text-white text-xl sm:text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-blue-600 text-gray-900 transition-all">Phone</h3>
                                    <p className="text-gray-600 group-hover:text-blue-600 transition-all">+1-336-493-9643</p>
                                </div>
                            </li>
                            <li className="group flex items-start space-x-6 p-4 hover:bg-gray-50 transition-all rounded-lg">
                                <div className="bg-blue-600 p-4 rounded-lg shadow-lg">
                                    <FaRegEnvelope className="text-white text-xl sm:text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-blue-600 text-gray-900 transition-all">Email</h3>
                                    <p className="text-gray-600 group-hover:text-blue-600 transition-all">contactus@mttf.in</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 sm:p-10 rounded-lg shadow-xl border border-gray-200">
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-900">Ready to Get Started?</h3>
                        <form id="contactForm" className="space-y-6">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name"
                                    placeholder=" "
                                    className="w-full bg-white text-gray-900 py-3 sm:py-4 px-6 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-hidden border border-gray-300"
                                />
                                <label htmlFor="name" className="absolute text-gray-500 text-sm sm:text-base top-2 left-6 transition-all">
                                    Your Name
                                </label>
                            </div>
                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder=" "
                                    className="w-full bg-white text-gray-900 py-3 sm:py-4 px-6 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-hidden border border-gray-300"
                                />
                                <label htmlFor="email" className="absolute text-gray-500 text-sm sm:text-base top-2 left-6 transition-all">
                                    Your Email Address
                                </label>
                            </div>
                            <div className="relative">
                                <textarea
                                    id="message"
                                    placeholder=" "
                                    rows="5"
                                    className="w-full bg-white text-gray-900 py-3 sm:py-4 px-6 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-hidden border border-gray-300"
                                ></textarea>
                                <label htmlFor="message" className="absolute text-gray-500 text-sm sm:text-base top-2 left-6 transition-all">
                                    Your Message
                                </label>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default ContactUs;