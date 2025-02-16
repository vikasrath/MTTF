"use client"
import { useAuthContext } from "@/context/authContext";
import React from "react";
import { FiLogOut } from "react-icons/fi";

function LogoutBtn() {
  const { setAuthUser } = useAuthContext();

  const handleClick = async () => {
    try {
      const response = await fetch("/api/auth/logout", { method: "GET" });

      if (response.ok) {
        localStorage.removeItem("user");
        setAuthUser({})
        console.log("Logout Successfully");

      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500 text-white text-lg font-semibold shadow-md transition-all duration-300 
               hover:bg-red-600 active:scale-95 hover:shadow-lg border border-red-700"
    >
      <FiLogOut className="text-xl" />
      Logout
    </button>
  );
}

export default LogoutBtn;
