// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const AdminRegister = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         userId: '',
//         email: '',
//         password: '',
//         adminCode: '',
//     });

//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5000/api/admin/register', formData);
//             alert(response.data.message);
//             navigate('/admin-login');
//         } catch (error) {
//             alert(error.response.data.message || 'Registration failed');
//         }
//     };

//     return (
//         <div
//           className="flex items-center justify-center min-h-screen bg-cover bg-center"
//           style={{
//             backgroundImage: "url('https://images.unsplash.com/photo-1441148345475-03a2e82f9719?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
//             backgroundColor: "#fafafa",
//             backgroundBlendMode: "darken",
//           }}
//         >
//           <div className="flex flex-col items-center w-96 p-5 bg-gradient-to-b from-[#000000ee] to-[#666666a] rounded-2xl shadow-lg">
//           <h2 className="text-2xl font-bold mb-4 text-center"> Admin Login</h2>
//             <form
//               className="flex flex-col items-center w-full"
//               onSubmit={handleSubmit}
//             >
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="border-2 border-gray-400 rounded-lg m-2 p-2 w-full bg-[#f5f5f5] text-black placeholder:text-slate-500"
//                 required
//               />
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="User ID"
//                 value={formData.userId}
//                 onChange={handleChange}
//                 className="border-2 border-gray-400 rounded-lg m-2 p-2 w-full bg-[#f5f5f5] text-black placeholder:text-slate-500"
//                 required
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="border-2 border-gray-400 rounded-lg m-2 p-2 w-full bg-[#f5f5f5] text-black placeholder:text-slate-500"
//                 required
//               />

//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="border-2 border-gray-400 rounded-lg m-2 p-2 w-full bg-[#f5f5f5] text-black placeholder:text-slate-500"
//                 required
//               />
//               <input
//                 type="text"
//                 name="adminCode"
//                 placeholder="Admin Code"
//                 value={formData.adminCode}
//                 onChange={handleChange}
//                 className="border-2 border-gray-400 rounded-lg m-2 p-2 w-full bg-[#f5f5f5] text-black placeholder:text-slate-500"
//                 required
//               />
//               <button
//                 type="submit"
//                 className="bg-[#004080] text-white hover:underline font-bold py-2 px-4 rounded-lg w-80 mt-2"
//               >
//                 Register
//               </button>
//             </form>
//           </div>
//         </div>
//       );
// };

// export default AdminRegister;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Key, UserCircle } from "lucide-react";

const AdminRegister = () => {
    const [formData, setFormData] = useState({
        name: '',
        userId: '',
        email: '',
        password: '',
        adminCode: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/admin/register', formData);
            alert(response.data.message);
            navigate('/admin-login');
        } catch (error) {
            alert(error.response.data.message || 'Registration failed');
        }
    };

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-cover bg-center "
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1441148345475-03a2e82f9719?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                backgroundColor: "#fafafa",
                backgroundBlendMode: "darken",
            }}
        >
            

                <div className="w-full max-w-md p-8 bg-white backdrop-blur-sm rounded-2xl shadow-2xl m-4">
                    <div className="mb-8 text-center">
                        <div className="flex justify-center mb-4">
                            <UserCircle className="h-16 w-16 text-blue-500" />
                        </div>
                        <h2 className="text-3xl font-bold text-black mb-2">Admin Registration</h2>
                        <p className="text-gray-700">Create your administrative account</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative">
                            <User className="absolute left-3 top-3 h-5 w-5 text-gray-600" />
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-2.5 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-400"
                                required
                            />
                        </div>

                        <div className="relative">
                            <UserCircle className="absolute left-3 top-3 h-5 w-5 text-gray-600" />
                            <input
                                type="text"
                                name="userId"
                                placeholder="User ID"
                                value={formData.userId}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-2.5 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-400"
                                required
                            />
                        </div>

                        <div className="relative">
                            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-600" />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-2.5 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-400"
                                required
                            />
                        </div>

                        <div className="relative">
                            <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-600" />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-2.5 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-400"
                                required
                            />
                        </div>

                        <div className="relative">
                            <Key className="absolute left-3 top-3 h-5 w-5 text-gray-600" />
                            <input
                                type="text"
                                name="adminCode"
                                placeholder="Admin Code"
                                value={formData.adminCode}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-2.5 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-400"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2.5 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] mt-6"
                        >
                            Create Account
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            Already have an account?{' '}
                            <a
                                href="/admin-login"
                                className="text-blue-500 hover:text-blue-300 transition-colors duration-200"
                            >
                                Sign in
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            );
};

            export default AdminRegister;