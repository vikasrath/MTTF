import React, { useState } from 'react';
import Link from 'next/link';
import { IoClose } from 'react-icons/io5';
import { motion } from "motion/react"
import AuthPage from '@/components/login/Login';

function PopupBox({ linkBox, closeIcon }) {

    const [auth, setAuth] = useState(false)
    const handelAuth = () => {
        setAuth((prev) => !prev)
    }

    return (
        <motion.div

            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto', }}
            transition={{ duration: 0.5 }}

            className="fixed inset-0 z-40 flex items-start pt-20 bg-black bg-opacity-50 transition-opacity animate-fadeIn ">
            <div className={`w-full max-w-6xl mx-auto bg-[#121826] shadow-2xl border-t-4 border-white-500 py-12 px-6 lg:px-16 relative rounded-lg ${auth && "opacity-0"}`}>

                {/* Close Button */}
                <button
                    className="absolute top-5 right-5 text-white text-4xl hover:text-gray-300 transition duration-200"
                    onClick={() => closeIcon(null)}
                >
                    <IoClose />
                </button>

                {/* Links Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-white">
                    {linkBox.map((category, index) => (
                        <div key={index} className="space-y-4">

                            {/* Category Heading */}
                            {category.heading && (
                                <h3 className="text-xl font-semibold  font-mono text-white-400 uppercase border-b-2 border-gray-600 pb-2">
                                    {category.heading}
                                </h3>
                            )}

                            {/* Links */}
                            <ul className="space-y-3">
                                {category.links !== "Login" ? (
                                    category.links.map((link, linkIndex) => (
                                        link.linkName == "Login" ? 
                                        <li key={linkIndex}>
                                            <div
                                                href={link.path ? link.path : '#'}
                                                className="block text-lg text-white-300 hover:text-blue-400 hover:translate-x-1 transition duration-200"
                                                onClick={handelAuth}
                                            >
                                                {link.linkName}
                                            </div>
                                        </li> 
                                        :
                                            <li key={linkIndex}>
                                                <Link
                                                    href={link.path ? link.path : '#'}
                                                    className="block text-lg text-white-300 hover:text-blue-400 hover:translate-x-1 transition duration-200"
                                                    onClick={() => closeIcon(null)}
                                                >
                                                    {link.linkName}
                                                </Link>
                                            </li>
                                    ))
                                ) : (
                                    <li>
                                        <div
                                            className="block text-lg text-gray-300 hover:text-white hover:translate-x-1 transition duration-200"
                                            onClick={() => closeIcon({ whatWeDo: false, whatWeThink: false, whoWeAre: false })}
                                        >
                                            {category.heading && category.heading}
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            {auth && <AuthPage setAuth={setAuth} />}
        </motion.div>
    );
}

export default PopupBox;
