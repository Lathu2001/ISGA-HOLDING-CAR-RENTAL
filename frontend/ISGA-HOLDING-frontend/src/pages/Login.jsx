import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [formData, setFormData] = useState({
        identifier: "",  // This will be email or username
        password: "",
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", formData);
            alert("Login successful!");
            localStorage.setItem("token", response.data.token); // Store the token in local storage
            navigate('/dashboard'); // Redirect to the dashboard after successful login
        } catch (error) {
            alert('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="flex flex-col items-center m-20 bg-white rounded p-5">
            <div className="text-2xl font-bold mb-5">Sign In</div>
            <form onSubmit={handleSignIn} className="flex flex-col space-y-4">
                <input
                    name="identifier"
                    value={formData.identifier}
                    onChange={handleInputChange}
                    placeholder="Enter Email or Username"
                    className="border-2 p-2 rounded"
                />
                <input
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    type="password"
                    placeholder="Enter Password"
                    className="border-2 p-2 rounded"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                    Sign In
                </button>
            </form>
        </div>
    );
}
