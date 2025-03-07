import Signup from "./SignupForm/Signup";
import { useState } from "react";
import { FaTimes } from "react-icons/fa"; // Importing the close icon from react-icons
import Login from "./LoginForm/Login.jsx";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function AuthPage({ setAuth, auth }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [resetPass, setResetPass] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen p-4 w-full absolute top-5 z-50">
      <div className="relative w-full max-w-xl p-6 bg-white rounded-xl shadow-lg border border-gray-200">
        {/* Close Button */}
        <button 
          onClick={() => setAuth(false)}
          className="absolute top-3 right-3 text-gray-600 hover:text-black transition"
        >
          <FaTimes size={24} />
        </button>

        {resetPass && <button onClick={() => setResetPass(false)} className="text-blue-600 font-large ml-1 hover:underline">
        <AiOutlineArrowLeft className="text-2xl" />
          </button>}

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          {resetPass? "Reset Password" : isSignUp ? "Create an Account" : "Welcome Back"}
        </h2>

        {resetPass? <ForgotPassword setResetPass={setResetPass} /> : isSignUp ? <Signup setAuth={setAuth} /> : <Login setAuth={setAuth} setReset={setResetPass}/>}

        {!resetPass && <p className="text-sm text-center text-gray-600 mt-4">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-600 font-medium ml-1 hover:underline">
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p> }
        
      </div>
    </div>
  );
}
