"use client";
import { useAuthContext } from "@/context/authContext";
import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { CldImage } from "next-cloudinary";
import toast from "react-hot-toast";
import { ImSpinner8 } from "react-icons/im";

const ProfilePicture = ({ profileImage, setProfileImage }) => {
  const { authUser, setAuthUser } = useAuthContext();
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    setUploading(true);
    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setProfileImage(data.publicId);

        // Update authUser context with new profile image
        const updatedUser = { ...authUser, image: data.publicId };
        setAuthUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));

        toast.success("Profile picture updated!");
      } else {
        toast.error(data.error || "Upload failed");
      }
    } catch (error) {
      toast.error("An error occurred while uploading.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="relative w-32 h-32 mb-6">
      {uploading ? (
        <div className="w-32 h-32 flex items-center justify-center rounded-full border-4 border-gray-300 bg-gray-100">
          <ImSpinner8 className="text-gray-600 animate-spin text-3xl" />
        </div>
      ) : profileImage ? (
        <CldImage
          width="128"
          height="128"
          src={authUser?.image || ""}
          alt="Profile"
          className="w-full h-full rounded-full border-4 border-gray-300 object-cover"
        />
      ) : (
        <div className="w-32 h-32 bg-gray-200 rounded-full"></div>
      )}

      {/* Upload Button */}
      <label className="absolute bottom-2 right-2 bg-gray-800 text-white p-2 rounded-full cursor-pointer hover:bg-gray-700">
        <FaCamera />
        <input type="file" className="hidden" accept="image/*" onChange={handleUpload} />
      </label>
    </div>
  );
};

export default ProfilePicture;
