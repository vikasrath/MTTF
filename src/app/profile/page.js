"use client";
import { useAuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { FaEdit, FaCheck, FaTimes, FaCamera } from "react-icons/fa";
import LogoutBtn from "@/components/LogoutBtn/LogoutBtn";

const Profile = () => {
  const { authUser, setAuthUser } = useAuthContext();
  const router = useRouter();

  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState("#"); // Default profile picture
  const [user, setUser] = useState({
    name: "",
    email: "",
    memberId: "",
    registrationDate: "",
    phone: "",
    department: "",
    university: "",
    jobTitle: "",
    researchField: "",
    technicalExperience: "",
    teachingExperience: "",
    researchExperience: "",
  });

  const [updatedUser, setUpdatedUser] = useState(user);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!authUser) {
      router.push("/");
    }
    if (authUser) {
      setUser(authUser);
      setUpdatedUser(authUser);
    }
  }, [authUser]);

  const handleChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/user/updateprofile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedUser),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data.user));
        setUser(data.user);
        setAuthUser(data.user);
        setIsEditing(false);
        toast.success("Profile Updated Successfully");
      }
    } catch (error) {
      toast.error("Failed to update profile. Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      toast.success("Profile picture updated!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-6xl w-full">
        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32 mb-6">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full rounded-full border-4 border-gray-300 object-cover"
            />
            {isEditing && (
              <label className="absolute bottom-2 right-2 bg-gray-800 text-white p-2 rounded-full cursor-pointer hover:bg-gray-700">
                <FaCamera />
                <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
              </label>
            )}
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">{user.name || "User Name"}</h2>
          <p className="text-gray-500">{user.email}</p>
        </div>

        {/* Profile Details */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.keys(user).map((key) => (
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
                <div className="p-3 bg-gray-50 border rounded-lg text-gray-700">{user[key] || "N/A"}</div>
              )}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
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
                className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition flex items-center gap-2"
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

        {/* Logout */}
        <div className="mt-6 text-center">
          <LogoutBtn />
        </div>
      </div>
    </div>
  );
};

export default Profile;
