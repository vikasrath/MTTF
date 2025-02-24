"use client";
import { useAuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import LogoutBtn from "@/components/LogoutBtn/LogoutBtn";
import ProfilePicture from "@/components/Profile/ProfilePicture/ProfilePicture";
import ProfileDetails from "@/components/Profile/ProfileDetails/ProfileDetails";
import ProfileActions from "@/components/Profile/ProfileAction/ProfileActions";

const Profile = () => {
  const { authUser, setAuthUser } = useAuthContext();
  const router = useRouter();

  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(""); 
  const [loading, setLoading] = useState(false);
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

  useEffect(() => {
    if (!authUser) {
      router.push("/");
    }
    if (authUser) {
      setUser(authUser);
      setUpdatedUser(authUser);
      setProfileImage(authUser.image || "");
    }
  }, [authUser]);

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/user/updateprofile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...updatedUser, profileImage }),
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-gray-900 h-20"></div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-xl p-8 max-w-6xl w-full">
          <div className="flex flex-col items-center">
            <ProfilePicture profileImage={profileImage} setProfileImage={setProfileImage} />
            <h2 className="text-2xl font-semibold text-gray-800">{user.name || "User Name"}</h2>
            <p className="text-gray-500">{user.email}</p>
          </div>

          <ProfileDetails user={user} updatedUser={updatedUser} setUpdatedUser={setUpdatedUser} isEditing={isEditing} />
          <ProfileActions isEditing={isEditing} setIsEditing={setIsEditing} handleUpdate={handleUpdate} loading={loading} />
          <div className="mt-6 text-center">
            <LogoutBtn />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
