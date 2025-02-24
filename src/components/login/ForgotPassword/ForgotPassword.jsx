"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ImSpinner8 } from "react-icons/im";
import { MdOutlineVerifiedUser } from "react-icons/md";
import resetOTP from "./SendOTP";

function ForgotPassword({setResetPass}) {
    const [email, setEmail] = useState("");
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    });
    const [passwordsMatch, setPasswordsMatch] = useState(true); // manages whether password and confirm password matches
    const [loading, setLoading] = useState(false);
    const [OTP, setOTP] = useState("");
    const [verified, setVerified] = useState("pending");
    const [OTPloading, setOTPloading] = useState(false);
    const [verifiedOTP, setVerifiedOTP] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch("/api/auth/reset", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, newPassword: formData.password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to update password");
            }

            toast.success(data.message);
            setResetPass(false);

        } catch (error) {
            toast.error(error.message);
        } finally{
            setLoading(false);
        }
    };

    const handelOTP = async () => {
        setOTPloading(true);
        const opt = await resetOTP(email, setVerified);
        console.log(opt);
        setVerifiedOTP(opt)
        setOTPloading(false);
    }

    const verify = () => {
        if (OTP == verifiedOTP) {
            setVerified("verified")
            toast.success("Email verified")
        } else {
            toast.error("Invalid OTP")
            setVerified("pending")
        }
    }

    const handlePasswordChange = (field) => (e) => {
        const value = e.target.value;
        setFormData((prev) => {
            const updatedFormData = { ...prev, [field]: value };
            setPasswordsMatch(updatedFormData.confirmPassword == updatedFormData.password);
            return updatedFormData;
        });
    }; // checks if password and confirm password matches

    return (
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <div className='flex rounded-lg shadow-sm  focus:border-transparent'>
                    <input
                        type="email"
                        placeholder="example@gmail.com"
                        required
                        value={email}
                        className="w-full p-1 hover:border-gray-400 focus:outline-none border border-gray-300 focus:border-blue-500 rounded-l-lg transition placeholder-gray-400"
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={false}
                    />
                    <button className={`bg-blue-500 text-white rounded-r-lg px-5 border-gray-200 ${verified == "verified" && "bg-green-600"}`} disabled={verified == "verified"} onClick={verified == "pending" || verified == "notAvalable" ? handelOTP : () => setVerified("pending")} >
                        {OTPloading ? <ImSpinner8 className="text-gray-600 animate-spin text-3xl" /> : verified == "notAvailable" || verified == "pending" ? "send" : verified == "processing" ? "Edit" : <MdOutlineVerifiedUser />}
                    </button>

                </div>
                {verified == "notAvailable" && <p className="text-red-500 text-sm">Email not found</p>}
            </div>

            {verifiedOTP && verified == "processing" &&
                <div className='flex rounded-lg shadow-sm  focus:border-transparent'>
                    <input
                        value={OTP}
                        type="number"
                        placeholder="Enter 4 digit OTP"
                        required
                        className="w-full p-1 hover:border-gray-400 focus:outline-none border border-gray-300  focus:border-blue-500 rounded-l-lg transition placeholder-gray-400 mr-0"
                        onChange={(e) => setOTP(e.target.value)}
                    />
                    <button className='px-5 bg-green-600 text-white' onClick={verify}>
                        check
                    </button>
                    <button
                        className={`bg-blue-500 text-white rounded-r-lg px-5 border-l border-gray-200 transition ${"hover:bg-blue-600"}`}
                        onClick={handelOTP}
                    >
                        {!OTPloading ? "Resend" : <ImSpinner8 className="text-gray-600 animate-spin text-3xl" />}
                    </button>

                </div>
            }

            <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                    type="password"
                    placeholder="••••••••"
                    required
                    value={formData.password}
                    onChange={handlePasswordChange("password")}
                    className="w-full p-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 transition placeholder-gray-400"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                    type="password"
                    placeholder="••••••••"
                    required
                    value={formData.confirmPassword}
                    onChange={handlePasswordChange("confirmPassword")}
                    className={`w-full p-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 transition placeholder-gray-400 ${passwordsMatch ? "border-gray-300" : "border-red-500"
                        }`}
                />
            </div>

            <button
                type="submit"
                className={`w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-900 transition-all${verified == "verified" && passwordsMatch && formData.password.length > 8 ? "" : " bg-gray-400"}`}
                disabled={verified !== "verified" || !passwordsMatch || formData.password.length < 8}
            >
                {loading ? "Loading...." : "Change Password"}
            </button>
        </form>
    );
}

export default ForgotPassword;
