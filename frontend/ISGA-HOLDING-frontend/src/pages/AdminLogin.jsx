import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock } from "lucide-react";

const AdminLogin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/admin/login', formData);
            alert('Login successful');
            localStorage.setItem('adminToken', response.data.token);
            navigate('/admin-dashboard');
        } catch (error) {
            alert(error.response.data.message || 'Login failed');
        }
    };

    return (
        <div 
            className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('https://t4.ftcdn.net/jpg/07/99/64/49/240_F_799644929_O9YyLUAjwbrr91RKLorIEc7AqkneeNyz.jpg')",
                backgroundBlendMode: "darken",
                backgroundColor: "rgba(255, 255, 255, 0.5)"
            }}
        >
            <div className="w-full max-w-md bg-white bg-opacity-80 backdrop-blur-sm rounded-xl shadow-lg p-8">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-center text-black">
                        Admin Login
                    </h2>
                    <p className="text-sm text-center text-gray-700 mt-2">
                        Welcome back! Please enter your credentials
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-700" />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-2 border border-gray-700 rounded-lg focus:ring-2 focus:ring-grey-500 focus:border-transparent bg-white/10 text-black placeholder-gray-400"
                                required
                            />
                        </div>

                        <div className="relative">
                            <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-700" />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-2 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/10 text-white placeholder-gray-400"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-gray-500 transition-colors duration-200 font-medium shadow-sm"
                    >
                        Sign In
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-gray-800">
                        Don't have an admin account?{' '}
                        <a 
                            href="/admin-register" 
                            className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
                        >
                            Register here
                        </a>
                    </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-700">
                    <p className="text-xs text-center text-gray-400">
                        Protected by enterprise-grade security
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;