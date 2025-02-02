

import { FaTimes, FaLink } from 'react-icons/fa';
import { motion } from "motion/react"
import Link from 'next/link';
import { useEffect } from 'react';
import { useScroll } from "motion/react"

const NavbarPopup = ({ popupContent, closePopup, navItems }) => {
  const { scrollYProgress } = useScroll()

  const selectedNavItems = navItems[popupContent];
  if (!selectedNavItems) return null;

  useEffect(() => {
    if (selectedNavItems) {
      document.body.style.overflow = 'hidden';  // Disable scroll
    } else {
      document.body.style.overflow = '';  // Re-enable scroll
    }

    // Clean up on component unmount
    return () => {
      document.body.style.overflow = '';  // Re-enable scroll
    };
  }, [selectedNavItems]);

  return (


    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.4 }}

        className="fixed inset-0 bg-[#0707079c] bg-opacity-70 z-40 transition-opacity duration-300">
        <div className="flex justify-center items-end min-h-screen relative">
          {/* Close Button with Hover Effect */}

          {/* Popup Content */}
          <div
            className="bg-white p-8 rounded-lg shadow-2xl w-4/5 lg:w-2/3 overflow-y-auto transition-transform transform  h-[80vh] mb-12">
            <h2 className="text-4xl font-semibold text-center text-gray-800 mb-6 tracking-wide">
              {popupContent === 'whatWeDo' && 'What We Do'}
              {popupContent === 'whatWeThink' && 'What We Think'}
              {popupContent === 'whoWeAre' && 'Who We Are'}
            </h2>

            <button onClick={closePopup} className="absolute top-6 right-6 text-black text-3xl transition-transform transform hover:scale-110">
              <FaTimes />
            </button>
            {/* Render Links in a Professional Layout */}
            {selectedNavItems.map((section, index) => (
              <div key={index} className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">{section.heading}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.links.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.path}
                      className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-all duration-200"
                      onClick={closePopup}
                    >
                      <motion.div

                        className="p-6 rounded-lg border-2 shadow-md hover:shadow-2xl transition-all transform hover:scale-105"
                      >
                        <div className="flex items-center space-x-3">
                          <FaLink className="text-gray-600 mr-4" />
                          {link.linkName}
                        </div>
                      </motion.div>
                    </Link>
                  ))}

                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>


    </>


  );
};

export default NavbarPopup;
