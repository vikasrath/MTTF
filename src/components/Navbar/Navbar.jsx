'use client';
import { Toaster } from "react-hot-toast";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import Logo from '../Logo/Logo';
import NavbarMobileMenu from './NavbarMobileMenu';
import PopupBox from '../Navbar/PopupBox/PopupBox';
import navItems from './../../../public/assets/navitems';
import AuthPage from '../login/Login';
import { useAuthContext } from '@/context/authContext';




const Navbar = () => {
    const { authUser } = useAuthContext()  // Access context
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupContent, setPopupContent] = useState(null);
    const [auth1, setAuth1] = useState(false)

    const handelAuth = () => {
        setAuth1((prev) => !prev)
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const openPopup = (contentKey) => {
        setPopupContent(navItems[contentKey]); // Pass correct data
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setPopupContent(null);
    };

    return (
        <>
        <div className='h-fit block'>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-[#1C2330] shadow-lg' : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between py-4">
                    {/* Logo */}
                    <div>
                        <Logo theme="light" />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex space-x-8  items-center">
                        <Link
                            href="/"
                            className="text-white text-lg font-medium hover:text-blue-400 transition"
                            onClick={() => setIsPopupOpen(false)}
                        >
                            Home
                        </Link>
                        <button
                            onClick={() => openPopup('whatWeDo')}
                            className="text-white text-lg font-medium hover:text-blue-400 transition"
                        >
                            What We Do
                        </button>
                        <button
                            onClick={() => openPopup('whatWeThink')}
                            className="text-white text-lg font-medium hover:text-blue-400 transition"
                        >
                            What We Think
                        </button>
                        <button
                            onClick={() => openPopup('whoWeAre')}
                            className="text-white text-lg font-medium hover:text-blue-400 transition"
                        >
                            Who We Are
                        </button>
                        <Link
                            href="/contact"
                            className="text-white text-lg font-medium hover:text-blue-400 transition"
                            onClick={() => setIsPopupOpen(false)}
                        >
                            Contact
                        </Link>


                        {authUser ? (
                            <Link
                                href="/profile"
                                className="flex items-center gap-1 text-white text-lg font-medium hover:text-blue-400 transition"
                            >
                                <FaUserCircle className="text-2xl" />
                                <span>Account</span>
                            </Link>
                        ) : (
                            <button
                                onClick={handelAuth}
                                className="px-4 py-1 text-white font-bold border-2 border-white rounded-lg"
                            >
                                Register
                            </button>
                        )}


                    </div>

                    {/* Hamburger Menu */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white text-2xl focus:outline-none"
                        >
                            {isMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <NavbarMobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} navItems={navItems} />
            </nav>

            {/* PopupBox - Replacing NavbarPopup */}
            {isPopupOpen && <PopupBox linkBox={popupContent} closeIcon={closePopup} />}
            {auth1 && <AuthPage setAuth={setAuth1} />}

        </div>
        <Toaster position="top-center" />
        </>
    );
};

export default Navbar;
