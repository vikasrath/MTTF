'use client';
import React from 'react';
import { FaRegEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

function ContactUs() {
    return (
        <section 
    id="contact" 
    className="relative bg-gradient-to-b from-gray-900  60% via-gray-500 80% to-gray-200 text-white py-24 sm:py-36"
>

            <div className="container mx-auto max-w-7xl px-6 lg:px-12">
                {/* Header Section */}
                <div className="text-center mb-12 mt-4 lg:mt-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white">Get in Touch</h2>
                    <p className="text-[#cfd8e3] text-lg sm:text-xl max-w-3xl mx-auto">
                        We’re here to help you 24/7. Reach out to us anytime with any inquiries.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-start">
                    {/* Contact Information */}
                    <div>
                        <ul className="space-y-8">
                            <li className="group flex items-start space-x-6 p-4 hover:bg-[#cce0ff] transition-all rounded-lg">
                                <div className="bg-[#0073e6] p-4 rounded-lg shadow-lg">
                                    <FaMapMarkerAlt className="text-white text-xl sm:text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-[#003366] text-white transition-all">Address</h3>
                                    <p className="text-[#cfd8e3] group-hover:text-[#003366] transition-all">
                                        2048 Canyon Creek Ct,<br /> Aurora, IL 60503, USA
                                    </p>
                                    <a
                                        href="https://maps.google.com?q=2048+Canyon+Creek+Ct,+Aurora,+IL+60503"
                                        target="_blank"
                                        className="text-[#0073e6] hover:text-[#005bb5] mt-2 inline-block"
                                    >
                                        View on Google Maps
                                    </a>
                                </div>
                            </li>
                            <li className="group flex items-start space-x-6 p-4 hover:bg-[#cce0ff] transition-all rounded-lg">
                                <div className="bg-[#0073e6] p-4 rounded-lg shadow-lg">
                                    <FaPhoneAlt className="text-white text-xl sm:text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-[#003366] text-white transition-all">Phone</h3>
                                    <p className="text-[#cfd8e3] group-hover:text-[#003366] transition-all">+1-336-493-9643</p>
                                </div>
                            </li>
                            <li className="group flex items-start space-x-6 p-4 hover:bg-[#cce0ff] transition-all rounded-lg">
                                <div className="bg-[#0073e6] p-4 rounded-lg shadow-lg">
                                    <FaRegEnvelope className="text-white text-xl sm:text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-[#003366] text-white transition-all">Email</h3>
                                    <p className="text-[#cfd8e3] group-hover:text-[#003366] transition-all">contactus@mttf.in</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-[#FFFFFF] p-8 sm:p-10 rounded-lg shadow-xl">
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#003366]">Ready to Get Started?</h3>
                        <form id="contactForm" className="space-y-6">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name"
                                    placeholder=" "
                                    className="w-full bg-[#F0F7FF] text-[#003366] py-3 sm:py-4 px-6 rounded-lg focus:ring-2 focus:ring-[#0073e6] focus:outline-none border border-[#DBEAFE]"
                                />
                                <label htmlFor="name" className="absolute text-[#64748B] text-sm sm:text-base top-2 left-6 transition-all">
                                    Your Name
                                </label>
                            </div>
                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder=" "
                                    className="w-full bg-[#F0F7FF] text-[#003366] py-3 sm:py-4 px-6 rounded-lg focus:ring-2 focus:ring-[#0073e6] focus:outline-none border border-[#DBEAFE]"
                                />
                                <label htmlFor="email" className="absolute text-[#64748B] text-sm sm:text-base top-2 left-6 transition-all">
                                    Your Email Address
                                </label>
                            </div>
                            <div className="relative">
                                <textarea
                                    id="message"
                                    placeholder=" "
                                    rows="5"
                                    className="w-full bg-[#F0F7FF] text-[#003366] py-3 sm:py-4 px-6 rounded-lg focus:ring-2 focus:ring-[#0073e6] focus:outline-none border border-[#DBEAFE]"
                                ></textarea>
                                <label htmlFor="message" className="absolute text-[#64748B] text-sm sm:text-base top-2 left-6 transition-all">
                                    Your Message
                                </label>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[#0073e6] to-[#005bb5] text-white py-3 sm:py-4 rounded-lg font-semibold hover:opacity-90 transition-all"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;
