"use client";
import React, { useEffect, useState } from 'react';
import { MdOutlineVerifiedUser } from "react-icons/md";
import SendOTP from './sendOTP';
import usePayment from './payNow';

function Signup() {
    const [passwordsMatch, setPasswordsMatch] = useState(true); // manages whether password and confirm password matches
    const [verified, setVerified] = useState("pending"); // marks the current state for Email verification
    const [OTP, setOTP] = useState("") // stores OTP entered by user
    const [verifiedOTP, setVerifiedOTP] = useState(undefined) // stores otp send to gmail
    const { payLoading, payNow, error } = usePayment() // custom hook to initiate payment
    const [loading, setLoading] = useState(false) // handels loading for resend OTP button
    const [timeLeft, setTimeLeft] = useState(120) // handel timer for resend OTP
    const [disabled, setDisabled] = useState(true) // handels state for resend OTP button

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        membershipType: "individual",
        institutionalamount: 2000,
        country: ""
    }); // manages all the form data

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const res = await fetch("https://ipinfo.io/json?token=77eb4a3b509978");

                
                const data = await res.json();
                console.log(data);
                if (!data.country) throw new alert("Failed to fetch country");

                setFormData((prev) => ({ ...prev, country: data.countryCode, institutionalamount: data.countryCode == "IN" ? 2000 : 17558 }));
            } catch (error) {
                alert("Error fetching country");
            }
        };

        fetchCountry();
    }, []); // detect the country of user

    useEffect(() => {
        let timer;
        if (timeLeft > 0) {
          timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
          }, 1000);
        } else if (timeLeft === 0 && disabled) {
          setDisabled(false); // Re-enable button when timer ends
        }
    
        return () => clearInterval(timer);
      }, [timeLeft, disabled]);

    const handelVarified = async (status) => {
        if (status === "pending" && formData.email.includes("@gmail.com")) {
            setTimeLeft(120)
            setDisabled(true)
            // if OTP verification is pending mark it to in progress and send OTP
            try {
                setLoading(true)
                const opt = await SendOTP(setVerified, formData.email);
                setVerifiedOTP(opt);
            } catch (error) {
                alert("Failed to send OTP");
            } finally {
                setLoading(false)
            }
        } else if (status === "processing") {
            // if OPT verification is already processing mark it to pending which mean user is editing email
            setVerified("pending");
        } else if (status === "verified" && OTP.toString() === verifiedOTP.toString()) {
            // if user wants to verify OTP it will compare OTP and mark verification to verified
            setVerified("verified");
        } else if (status === "verified" && OTP.toString() !== verifiedOTP.toString()) {
            // if user wants to verify OTP it will compare OTP and mark verification to verified
            setVerified("not");
        } else {
            //invalid gamil entered or posibally some error occured
            alert("Enter a valid Gmail");
        }
    }; // check whats the current status for OTP verification

    const handlePasswordChange = (field)=> (e) => {
        const value = e.target.value;
        setFormData((prev) => {
            const updatedFormData = { ...prev, [field]: value };
            setPasswordsMatch(updatedFormData.confirmPassword === updatedFormData.password);
            return updatedFormData;
        });
    }; // checks if password and confirm password matches

    const handleChange = (field) => (e) => {
        setFormData((prev) => ({
            ...prev,
            [field]: e.target.value,
        }));
    }; // handel change in any input field

    const handelMembershipType = (type) => {
        if (type === "individual") {
            setFormData({ ...formData, membershipType: "individual", institutionalamount: 2000 });
        } else {
            setFormData({ ...formData, membershipType: "institutional", institutionalamount: 50000 });
        }
    }; // manages membership type

    const handelSubmit = () => {
        if (verified !== "verified" || formData.fullName == "" || formData.phone == "" || !passwordsMatch || formData.password !== "") {
            alert("All fields are required")
            return
        } else {
            payNow(formData)
        }
    } // handels form submission

    if (error) {
        alert(error)
    } // alert if any error

    return (
        <>
            <div className="space-y-4 max-h-[65vh] overflow-auto px-2 [scrollbar-width:thin] [scrollbar-color:#d1d5db_#f3f4f6]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* full name */}
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
                    {/* phone number */}
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

                {/* email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <div className='flex rounded-lg shadow-sm  focus:border-transparent'>
                        <input
                            type="email"
                            placeholder="example@gmail.com"
                            required
                            className="w-full p-1 hover:border-gray-400 focus:outline-none border border-gray-300 focus:border-blue-500 rounded-l-lg transition placeholder-gray-400"
                            onChange={handleChange("email")}
                            disabled={!["pending", "not", "notAvailable"].includes(verified)}
                        />

                        <button className={`bg-blue-500 text-white rounded-r-lg px-5 border-gray-200 ${verified == "verified" && "bg-green-600"}`} disabled={verified == "verified"} onClick={() => handelVarified(verified == "pending" || verified == "not" || verified == "notAvailable" ? "pending" : "processing")}>
                            {(verified === "pending" && loading) || (verified === "notAvailable" && loading) || (verified === "not" && loading) ? <div className="h-5 w-5 rounded-full border-4 border-t-gray-300  border-gray-50 animate-spin"></div> : verified == "pending" || verified == "notAvailable" || verified == "not" ? "verify" : verified === "verified" ? <MdOutlineVerifiedUser /> : "Edit"}
                        </button>
                    </div>
                </div>

                {/* OTP verification */}
                {verified === "processing" &&
                    <div>
                        <p className='text-green-700 text-sm'>OTP sent to your email address</p>
                        <label className="block text-sm font-medium text-gray-700">OTP</label>
                        <div className='flex rounded-lg shadow-sm  focus:border-transparent'>
                            <input
                                value={OTP}
                                type="number"
                                placeholder="Enter 4 digit OTP"
                                required
                                className="w-full p-1 hover:border-gray-400 focus:outline-none border border-gray-300  focus:border-blue-500 rounded-l-lg transition placeholder-gray-400 mr-0"
                                onChange={(e) => setOTP(e.target.value)}
                            />
                            <button className='px-5 bg-green-600 text-white' onClick={() => handelVarified("verified")}>
                                check
                            </button>
                            <button
                                className={`bg-blue-500 text-white rounded-r-lg px-5 border-l border-gray-200 transition ${disabled ? "bg-gray-400 cursor-not-allowed" : "hover:bg-blue-600"
                                    }`}
                                disabled={disabled}
                                onClick={()=> {handelVarified("pending")}}
                            >
                                {disabled ? `${timeLeft}s` : "Resend"}
                            </button>

                        </div>
                    </div>
                }
                <p className='text-sm text-red-600'> {verified == "not" ? "OTP entered is not Correct" : verified == "notAvailable" ? "email already in use" : ""}</p>

                {/* membership type */}
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

                {/* password and confirm password */}
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

                {/* submit button */}
                <button disabled={verified !== "verified" || formData.fullName == "" || formData.phone == "" || !passwordsMatch || formData.password !== ""} className={`w-full text-white p-3 rounded-lg font-semibold transition-all ${verified !== "verified" || formData.fullName == "" || formData.phone == "" || !passwordsMatch || formData.password !== "" ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`} onClick={handelSubmit} >
                    {payLoading ? "Loading...." : `Pay ${formData.institutionalamount}`}
                </button>
            </div>
        </>
    );
}

export default Signup;