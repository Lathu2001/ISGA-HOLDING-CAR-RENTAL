import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    city: "",
    address: "",
    phoneNumber: "",
    NICNumber: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegistration = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    try {
      // Sending the formData to the backend (registration API endpoint)
      const response = await axios.post("http://localhost:5000/api/auth/register", formData, {
        headers: {
          'Content-Type': 'application/json',  // Ensure Content-Type is set as JSON
        },
      });

      console.log(response.status); // Log the HTTP status code
      console.log(response.data);   // Log the response data (message)

      // Show success message
      alert(response.data.message);

      // If registration is successful, navigate to the sign-in page
      navigate('/signin');

    } catch (error) {
      // Handle errors such as network issues or validation errors from backend
      if (error.response) {
        // If there's a response error (from backend)
        console.error("Backend error: ", error.response.data);
        alert(error.response.data.message || 'Registration failed. Please try again.');
      } else if (error.request) {
        // If the request was made but no response was received
        console.error("Network error: ", error.request);
        alert('Network error. Please check your connection and try again.');
      } else {
        // For other errors like setup issues
        console.error("Error during registration: ", error.message);
        alert('Registration failed. Please try again.');
      }
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://img.freepik.com/free-vector/car-led-lights-realistic-composition-with-dark-silhouette-automobile-with-dimmed-headlights-shadows-illustration_1284-28532.jpg?ga=GA1.1.1088011668.1713541224&semt=ais_hybrid.jpg')",
        backgroundColor: "#fafafa",
        backgroundBlendMode: "darken",
      }}
    >
      <div className="flex flex-col items-center w-96 p-5 bg-gradient-to-b from-[#000000ee] to-[#666666a] rounded-2xl shadow-lg">
        <form
          className="flex flex-col items-center w-full"
          onSubmit={handleRegistration}
        >
          <input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="border-2 border-gray-400 rounded-lg m-2 p-2 w-full bg-[#f5f5f5] text-black placeholder:text-slate-500"
            type="text"
            placeholder="Name"
          />
          <input
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="border-2 border-gray-400 rounded-lg m-2 p-2 w-full bg-[#f5f5f5] text-black placeholder:text-slate-500"
            type="text"
            placeholder="Username"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="border-2 border-gray-400 rounded-lg m-2 p-2 w-full bg-[#f5f5f5] text-black placeholder:text-slate-500"
            type="text"
            placeholder="Email"
          />
          <input
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="border-2 border-gray-400 rounded-lg m-2 p-2 w-full bg-[#f5f5f5] text-black placeholder:text-slate-500"
            type="text"
            placeholder="City"
          />
          <input
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="border-2 border-gray-400 rounded-lg m-2 p-2 w-full bg-[#f5f5f5] text-black placeholder:text-slate-500"
            type="text"
            placeholder="Address"
          />
          <input
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="border-2 border-gray-400 rounded-lg m-2 p-2 w-full bg-[#f5f5f5] text-black placeholder:text-slate-500"
            type="text"
            placeholder="Phone Number"
          />
          <input
            name="NIC Number"
            value={formData.NICNumber}
            onChange={handleInputChange}
            className="border-2 border-gray-400 rounded-lg m-2 p-2 w-full bg-[#f5f5f5] text-black placeholder:text-slate-500"
            type="text"
            placeholder="NIC Number"
          />
          <input
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="border-2 border-gray-400 rounded-lg m-2 p-2 w-full bg-[#f5f5f5] text-black placeholder:text-slate-500"
            type="password"
            placeholder="Password"
          />
          <button
            type="submit"
            className="bg-[#004080] text-white hover:underline font-bold py-2 px-4 rounded-lg w-80 mt-2"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

