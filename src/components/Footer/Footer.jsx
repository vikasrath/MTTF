"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from "../Logo/Logo";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-br from-blue-700 to-indigo-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-br from-cyan-700 to-teal-900 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 md:px-12 lg:px-24">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Logo and Tagline */}
          <div className="md:col-span-2">
            <Logo theme={"light"} />
            <p className="mt-6 text-lg text-gray-400 max-w-md leading-relaxed">
              Empowering through knowledge, skills, and innovation. Together, we drive progress and success.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Our Company</h3>
            <ul className="space-y-3">
              {["About Us", "Mission & Vision", "Leadership", "Life at MTTF", "MoU/Collaboration"].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-white transition duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {["Conferences", "Workshops", "Skill Development", "Internships & Training"].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-white transition duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {["contactus@mttf.in","2048 Canyon Creek Ct, Aurora, IL 60503, USA", "+1-336-493-9643"].map((item, idx) => (
                <li key={idx}>
                  {item.includes("@") ? (
                    <a href={`mailto:${item}`} className="hover:text-white transition duration-300">
                      {item}
                    </a>
                  ) : (
                    <a href={`tel:${item}`} className="hover:text-white transition duration-300">
                      {item}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright Text */}
            <p className="text-sm text-gray-400">&copy; 2024 MTTF. All Rights Reserved.</p>

            {/* Social Icons */}
            <div className="flex space-x-6 mt-6 md:mt-0">
              {[
                { icon: <FaFacebookF />, link: "https://www.facebook.com/p/MTTF-100064038192483/" },
                { icon: <FaTwitter />, link: "https://twitter.com/mttf14" },
                { icon: <FaInstagram />, link: "https://www.instagram.com/mathtechthinking/" },
                { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/company/mttf" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
