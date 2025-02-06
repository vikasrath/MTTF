import { loginUser } from '@/controller/userController';
import React, { useState } from 'react'

function Login() {

    const [resMassage, setResMassage] = useState({
        error: "",
        message: "",
    })

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

    
      const response =  await loginUser({ email: formData.email, password: formData.password });

        const data = await response.json();

        if (data.error) {
             setResMassage({ error: data.error });
        } else {
             setResMassage({ message: data.message });
            console.log(data.user);
        }
    }
  return (
    <>
        <form onSubmit={handleSubmit} className="space-y-4 max-h-[65vh] overflow-auto px-2">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" placeholder="example@email.com" required className="w-full p-1 border border-gray-300 rounded-lg shadow-xs focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 transition placeholder-gray-400" onChange={handleChange("email")} />
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
                <button type='submit' className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                    Log In
                </button>
                {resMassage.error && <div className="text-red-500">{resMassage.error}</div>}
                {resMassage.message && <div className="text-green-500">{resMassage.message}</div>}
            </form>
    </>
  )
}

export default Login