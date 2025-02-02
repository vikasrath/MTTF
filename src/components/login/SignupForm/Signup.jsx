"use client";

import axios from 'axios';
import React, { useState } from 'react';

function Signup() {
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        membershipType: "individual",
        institutionalamount: undefined,
    });


    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setFormData((prev) => {
            const updatedFormData = { ...prev, confirmPassword: value };
            setPasswordsMatch(updatedFormData.confirmPassword === updatedFormData.password);
            return updatedFormData;
        });
    };

    const handleChange = (field) => (e) => {
        setFormData((prev) => ({
            ...prev,
            [field]: e.target.value,
        }));
    };

    const handelMembershipType = (type) => {
        if (type === "individual") {
            setFormData({ ...formData, membershipType: "individual", institutionalamount: undefined });
        } else {
            setFormData({ ...formData, membershipType: "institutional", institutionalamount: 50000 });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {

            let response = await fetch('/api/initiate-payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json();

            if (data.paymentUrl) {
                window.location.href = data.paymentUrl; // Redirect to Cashfree payment link
            } else {
                alert(data.message || "Payment initiation failed");
            }

        } catch (error) {
            console.log("Error submitting form", error);
        } finally {
            setLoading(false);
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-4 max-h-[65vh] overflow-auto px-2 [scrollbar-width:thin] [scrollbar-color:#d1d5db_#f3f4f6]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            required
                            className="w-full p-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 transition placeholder-gray-400"
                            onChange={handleChange("fullName")}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                        <input
                            type="tel"
                            placeholder="+1234567890"
                            required
                            className="w-full p-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 transition placeholder-gray-400"
                            onChange={handleChange("phone")}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        placeholder="example@email.com"
                        required
                        className="w-full p-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 transition placeholder-gray-400"
                        onChange={handleChange("email")}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Membership Type</label>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div
                            className={`flex flex-col justify-center items-center p-2 border-2 rounded-xl cursor-pointer transition-all ${formData.membershipType === "individual"
                                ? "border-blue-500 bg-blue-50"
                                : "border-gray-200 hover:border-blue-300"
                                }`}
                            onClick={() => handelMembershipType("individual")}
                        >
                            <h3 className="font-semibold text-lg text-gray-800">Individual</h3>
                            <p className="text-sm text-gray-600 mt-1">For personal use</p>
                        </div>
                        <div
                            className={`flex flex-col justify-center items-center p-2 border-2 rounded-xl cursor-pointer transition-all ${formData.membershipType === "institutional"
                                ? "border-blue-500 bg-blue-50"
                                : "border-gray-200 hover:border-blue-300"
                                }`}
                            onClick={() => handelMembershipType("institutional")}
                        >
                            <h3 className="font-semibold text-lg text-gray-800">Institutional</h3>
                            <p className="text-sm text-gray-600 mt-1">For organizations</p>
                        </div>
                    </div>
                </div>

                {formData.membershipType === "institutional" && (
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Institution Size</label>
                        <select
                            className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={formData.institutionalamount}
                            onChange={handleChange("institutionalamount")}
                        >
                            <option value=" 50000">Small - Up to 100 members</option>
                            <option value=" 100000">Medium - Up to 500 members</option>
                            <option value=" 200000">Large - 500+ members</option>
                        </select>
                    </div>
                )}

                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        required
                        value={formData.password}
                        onChange={handleChange("password")}
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
                        onChange={handleConfirmPasswordChange}
                        className={`w-full p-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 transition placeholder-gray-400 ${passwordsMatch ? "border-gray-300" : "border-red-500"
                            }`}
                    />
                    {!passwordsMatch && <p className="text-sm text-red-500">Passwords do not match.</p>}
                </div>

                <button type='submit' className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                    {formData.membershipType === "individual" ? 2000 : formData.institutionalamount}  Pay Now
                </button>
            </form>
        </>
    );
}

export default Signup;