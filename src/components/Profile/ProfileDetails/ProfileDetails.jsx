"use client";
import React from "react";

const ProfileDetails = ({ user, updatedUser, setUpdatedUser, isEditing }) => {
  const handleChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {Object.keys(user).map((key) => {
        // Skip rendering the "image" key
        if (key === "image") return null;

        return (
          <div key={key} className="flex flex-col">
            <label className="text-gray-600 font-medium mb-1">
              {key.replace(/([A-Z])/g, " $1").trim()}
            </label>
            {isEditing ? (
              <input
                disabled={["email", "memberId", "registrationDate", "phone"].includes(key)}
                type="text"
                name={key}
                value={updatedUser[key] || ""}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 
                  ${["email", "memberId", "registrationDate", "phone"].includes(key)
                    ? "bg-gray-100 text-gray-500 cursor-not-allowed border-gray-300"
                    : "bg-white border-gray-400"}`}
              />
            ) : (
              <div className="p-3 bg-gray-50 border rounded-lg text-gray-700">
                {user[key] || "N/A"}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProfileDetails;
