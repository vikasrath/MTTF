"use client";

import React, { useState } from "react";
import { 
  FaLinkedin, FaUserCircle, FaGoogle, FaEdit, 
  FaUser, FaEnvelope, FaGraduationCap, FaBriefcase 
} from "react-icons/fa";

const Profile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    education: "Bachelor of Computer Science",
    profession: "Software Developer",
    linkedin: "https://www.linkedin.com/in/johndoe",
    google: "https://plus.google.com/johndoe",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);

  const handleChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    setUser(updatedUser);
    setIsEditing(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className='bg-gray-900 h-20'></div>

      <div className="min-h-screen flex flex-col bg-gray-100 p-10">
        {/* Header */}
        <header className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white p-5 text-center text-2xl font-bold shadow-lg border-b-4 border-purple-900 flex items-center justify-center gap-3 rounded-b-xl">
          <FaUserCircle className="text-4xl text-gray-300" />
          <span className="tracking-wide">Profile Dashboard</span>
        </header>

        <div className="flex flex-1 p-6">
          {/* Sidebar */}
          <aside className="w-1/4 bg-white p-6 shadow-xl rounded-lg border border-gray-300 glassmorphism">
            <h2 className="text-xl font-semibold text-gray-800 border-b-2 pb-3">User Info</h2>
            <ul className="mt-5 space-y-4 text-gray-700">
              <li className="flex items-center gap-3 text-lg">
                <FaUser className="text-indigo-600" />
                <span>{user.name}</span>
              </li>
              <li className="flex items-center gap-3 text-lg">
                <FaEnvelope className="text-indigo-600" />
                <span>{user.email}</span>
              </li>
              <li className="flex items-center gap-3 text-lg">
                <FaGraduationCap className="text-indigo-600" />
                <span>{user.education}</span>
              </li>
              <li className="flex items-center gap-3 text-lg">
                <FaBriefcase className="text-indigo-600" />
                <span>{user.profession}</span>
              </li>
              <li className="flex items-center gap-3 text-lg">
                <FaLinkedin className="text-blue-600" />
                <a href={user.linkedin} target="_blank" className="hover:underline text-blue-700 font-medium">
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-3 text-lg">
                <FaGoogle className="text-red-500" />
                <a href={user.google} target="_blank" className="hover:underline text-red-600 font-medium">
                  Google
                </a>
              </li>
            </ul>
            <button
              onClick={() => setIsEditing(true)}
              className="mt-5 bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 w-full flex items-center justify-center gap-2 border border-yellow-700 transition-all"
            >
              <FaEdit /> Edit Profile
            </button>
          </aside>

          {/* Main Section */}
          <main className="flex-1 ml-6 bg-white p-6 shadow-lg rounded-lg border border-gray-300 glassmorphism">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b-2 pb-3">Update Profile</h2>
            {isEditing ? (
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={updatedUser.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-gray-50"
                  placeholder="Name"
                />
                <input
                  type="email"
                  name="email"
                  value={updatedUser.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-gray-50"
                  placeholder="Email"
                />
                <input
                  type="text"
                  name="education"
                  value={updatedUser.education}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-gray-50"
                  placeholder="Education"
                />
                <input
                  type="text"
                  name="profession"
                  value={updatedUser.profession}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-gray-50"
                  placeholder="Profession"
                />
                <input
                  type="text"
                  name="linkedin"
                  value={updatedUser.linkedin}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-gray-50"
                  placeholder="LinkedIn Profile"
                />
                <input
                  type="text"
                  name="google"
                  value={updatedUser.google}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-gray-50"
                  placeholder="Google Profile"
                />
                <button
                  onClick={handleUpdate}
                  className="col-span-2 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition border border-green-800 text-lg"
                >
                  Save Changes
                </button>
              </div>
            ) : (
              <p className="text-gray-500 text-lg">
                Click the edit button to update your profile.
              </p>
            )}
          </main>
        </div>
      </div>
    </>
  );
};

export default Profile;
