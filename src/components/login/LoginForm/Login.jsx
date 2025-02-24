"use client"
import { useAuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

function Login({setAuth, setReset}) {
  const router = useRouter();
  const {setAuthUser} = useAuthContext();
  const [loading,setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }
      localStorage.setItem("user", JSON.stringify(data.user));
      setFormData({ email: "", password: "" });
      setAuthUser(data.user)
      toast.success("Logged in Successfully")
      router.push("/profile")
      
    } catch (error) {
      toast.error(error.message);
    }finally{
      setLoading(false)
      setAuth(false)
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4 max-h-[65vh] overflow-auto px-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="example@email.com"
            required
            value={formData.email}
            onChange={handleChange("email")}
            className="w-full p-1 border border-gray-300 rounded-lg shadow-xs focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 transition placeholder-gray-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            required
            value={formData.password}
            onChange={handleChange("password")}
            className="w-full p-1 border border-gray-300 rounded-lg shadow-xs focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 transition placeholder-gray-400"
          />
        </div>
        <div className="text-center">
            <button
              type="button"
              onClick={() => setReset(true)}
              className="text-sm text-blue-600 hover:underline focus:outline-none"
            >
              Forgot Password?
            </button>
          </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-900 transition-all">
          {loading ? "Loading...":"Log In"}
        </button>
      </form>
    </>
  );
}

export default Login;
