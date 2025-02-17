"use client";
import LogoutBtn from "@/components/LogoutBtn/LogoutBtn";
import { useAuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { FaUserCircle, FaLinkedin, FaGoogle, FaEdit } from "react-icons/fa";

const Profile = () => {
  const { authUser, setAuthUser } = useAuthContext();
  const router = useRouter();
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
    linkedin: "",
    googleScholar: "",
    researchGate: "",
    otherProfile: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);
  const [loading, setLoading] = useState(false);

  // Populate user state with authUser data when component mounts
  useEffect(() => {
    if(!authUser){
       router.push("/")
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
        toast.success("Profile Updated Successfully")
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (

    <>
      <div className="bg-gray-900 h-16 md:h-20"></div>
      <div className="min-h-screen flex flex-col bg-gray-100 p-4 md:p-10">
        <header className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white p-4 md:p-5 text-center text-xl md:text-2xl font-bold shadow-lg border-b-4 border-purple-900 flex items-center justify-center gap-2 md:gap-3 rounded-b-xl">
          <FaUserCircle className="text-3xl md:text-4xl text-gray-300" />
          <span className="tracking-wide">Profile Dashboard</span>
        </header>
        <div className="flex flex-col md:flex-row flex-1 p-4 md:p-6 gap-6">
          {/* User Info */}
          <aside className="w-full md:w-1/3 bg-white p-4 md:p-6 shadow-xl rounded-lg border border-gray-300">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 border-b-2 pb-3">User Info</h2>
            <ul className="mt-5 space-y-4 text-gray-700">
              <li><strong>Name:</strong> {user.name || ""}</li>
              <li><strong>Email:</strong> {user.email || ""}</li>
              <li><strong>Member ID:</strong> {user.memberId || ""}</li>
              <li><strong>Registration Date:</strong> {user.registrationDate || ""}</li>
              <li><strong>Phone:</strong> {user.phone || ""}</li>
              <li><strong>Department:</strong> {user.department || ""}</li>
              <li><strong>University:</strong> {user.university || ""}</li>
              <li><strong>Job Title:</strong> {user.jobTitle || ""}</li>
              <li><strong>Research Field:</strong> {user.researchField || ""}</li>
              <li><strong>Technical Experience:</strong> {user.technicalExperience || ""}</li>
              <li><strong>Teaching Experience:</strong> {user.teachingExperience || ""}</li>
              <li><strong>Research Experience:</strong> {user.researchExperience || ""}</li>
              <li className=" mt-20 ml-4 inline">
                <FaLinkedin size={30} className="inline text-blue-600" />
                {user.linkedin ? (
                  <a href={user.linkedin} target="_blank" className="hover:underline text-blue-700">LinkedIn</a>
                ) : ""}
              </li>
              <li className=" ml-4 inline" >
                <FaGoogle size={30} className="inline text-red-500" />
                {user.googleScholar ? (
                  <a href={user.googleScholar} target="_blank" className="hover:underline text-red-600">Google Scholar</a>
                ) : ""}
              </li>
              <li>
                <strong>ResearchGate:</strong>
                {user.researchGate ? (
                  <a href={user.researchGate} target="_blank" className="hover:underline text-blue-700">Profile</a>
                ) : ""}
              </li>
              <li>
                <strong>Other Profile:</strong>
                {user.otherProfile ? (
                  <a href={user.otherProfile} target="_blank" className="hover:underline text-blue-700">Profile</a>
                ) : ""}
              </li>
            </ul>

          

            <button onClick={() => setIsEditing(true)} className="mt-5 bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 w-full flex items-center justify-center gap-2 border border-yellow-700 transition-all">
              <FaEdit /> Edit Profile
            </button>
            <div className=" p-4 pl-0">
            <LogoutBtn />
            </div>
          </aside>

          {/* Update Profile */}
          <main className="w-full md:flex-1 bg-white p-4 md:p-6 shadow-lg rounded-lg border border-gray-300">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 border-b-2 pb-3">Update Profile</h2>
            {isEditing ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.keys(user).map((key) => (
                 <div key={key}>
                 <label className="block text-gray-600 mb-1">
                   {key.replace(/([A-Z])/g, " $1").trim()}
                 </label>
                 <input
                   disabled={["email", "memberId", "registrationDate", "phone"].includes(key)}
                   type="text"
                   name={key}
                   value={updatedUser[key] || ""}
                   onChange={handleChange}
                   className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 
                     ${["email", "memberId", "registrationDate", "phone"].includes(key) 
                       ? "bg-gray-200 text-gray-500 cursor-not-allowed border-gray-300"
                       : "bg-gray-50 border-gray-400"}`}
                   placeholder={key.replace(/([A-Z])/g, " $1").trim()}
                 />
               </div>
               
                ))}
                <button
                  onClick={handleUpdate}
                  className="col-span-1 md:col-span-2 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition border border-green-800 text-lg w-full">
                  {loading ? "Saving..." : "Save Changes"}
                </button>
              </div>
            ) : (
              <p className="text-gray-500 text-lg">Click the edit button to update your profile.</p>
            )}
          </main>
        </div>
      </div>
     
    </>
  );
};

export default Profile;
