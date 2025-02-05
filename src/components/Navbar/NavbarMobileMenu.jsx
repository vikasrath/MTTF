import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import dropdown icons
import AuthPage from '../login/Login';

const NavbarMobileMenu = ({ isMenuOpen, setIsMenuOpen, navItems }) => {
  const [auth, setAuth] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);

  // Function to toggle the expansion of sections
  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handelAuth = () => {
    setAuth((prev) => !prev);
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';  // Disable scroll
    } else {
      document.body.style.overflow = '';  // Re-enable scroll
    }

    // Clean up on component unmount
    return () => {
      document.body.style.overflow = '';  // Re-enable scroll
    };
  }, [isMenuOpen]);

  if (!isMenuOpen) return null;

  return (
    <div className={`lg:hidden absolute top-full left-0 w-full bg-gray-900 py-6 max-h-[88vh] overflow-y-auto ${auth && "bg-black/30"}`}>
      <div className={`flex flex-col px-4 space-y-4 ${auth && "opacity-0"}`}>
        <Link
          href="/"
          onClick={() => setIsMenuOpen(false)}
          className="text-white text-lg font-medium hover:text-blue-400 transition"
        >
          Home
        </Link>

        {/* Dynamically render expandable sections from navItems */}
        {Object.keys(navItems).map((sectionKey) => {
          const section = navItems[sectionKey];

          return (
            <div key={sectionKey} className="w-full">
              <button
                onClick={() => toggleSection(sectionKey)}
                className="text-white text-lg font-medium hover:text-blue-400 transition w-full text-left flex items-center justify-between"
              >
                {sectionKey.replace(/([A-Z])/g, ' $1').toUpperCase()} {/* Formatting the section title */}
                {expandedSection === sectionKey ? (
                  <FaChevronUp className="text-gray-300 ml-2 text-base" />
                ) : (
                  <FaChevronDown className="text-gray-300 ml-2 text-base" />
                )}
              </button>

              {expandedSection === sectionKey && (
                <div className="mt-2 space-y-2">
                  {section.map((sectionItem, index) => (
                    <div key={index} className='ml-12'>
                      <h3 className="text-white font-semibold text-lg mb-2">
                        {sectionItem.heading}
                      </h3>
                      {sectionItem.links.map((link, idx) => (
                        link.linkName == "Login" ? <>
                        <div
                            key={idx}
                            onClick={() => handelAuth()}
                            className="text-gray-200 text-lg font-medium hover:text-blue-400 transition block ml-10"
                          >
                            {link.linkName}
                          </div>
                        </> : <>
                          <Link
                            key={idx}
                            href={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-gray-200 text-lg font-medium hover:text-blue-400 transition block ml-10"
                          >
                            {link.linkName}
                          </Link>
                        </>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        <Link
          href="/contact"
          onClick={() => setIsMenuOpen(false)}
          className="text-white text-lg font-medium hover:text-blue-400 transition"
        >
          Contact
        </Link>
      </div>
      {auth && <AuthPage setAuth={setAuth} />}
    </div>
  );
};

export default NavbarMobileMenu;
