"use client";
import React from "react";
import { FaEdit, FaCheck, FaTimes } from "react-icons/fa";

const ProfileActions = ({ isEditing, setIsEditing, handleUpdate, loading }) => {
  return (
    <div className="flex justify-center mt-6 gap-4">
      {isEditing ? (
        <>
          <button
            onClick={handleUpdate}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center gap-2"
          >
            <FaCheck /> {loading ? "Saving..." : "Save"}
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition flex items-center gap-2"
          >
            <FaTimes /> Cancel
          </button>
        </>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
        >
          <FaEdit /> Edit Profile
        </button>
      )}
    </div>
  );
};

export default ProfileActions;
