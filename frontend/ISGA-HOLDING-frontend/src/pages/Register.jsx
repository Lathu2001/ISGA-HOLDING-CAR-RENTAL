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
    <div className="flex flex-col m-20 mt-2 items-center bg-white rounded">
      <div className="text-2xl font-bold m-5 text-black">Register</div>
      <div className="flex flex-col items-center">
        <form
          className="flex flex-col items-center w-96 p-3 bg-gradient-to-b from-[#431261] to-[#890487] rounded-2xl"
          onSubmit={handleRegistration}
        >
          <input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="border-2 border-black rounded-lg m-2 p-2 w-full bg-[#ddbdf2] text-black placeholder:text-slate-500"
            type="text"
            placeholder="Name"
          />
          <input
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="border-2 border-black rounded-lg m-2 p-2 w-full bg-[#ddbdf2] text-black placeholder:text-slate-500"
            type="text"
            placeholder="Username"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="border-2 border-black rounded-lg m-2 p-2 w-full bg-[#ddbdf2] text-black placeholder:text-slate-500"
            type="text"
            placeholder="Email"
          />
          <input
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="border-2 border-black rounded-lg m-2 p-2 w-full bg-[#ddbdf2] text-black placeholder:text-slate-500"
            type="text"
            placeholder="City"
          />
          <input
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="border-2 border-black rounded-lg m-2 p-2 w-full bg-[#ddbdf2] text-black placeholder:text-slate-500"
            type="text"
            placeholder="Address"
          />
          <input
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="border-2 border-black rounded-lg m-2 p-2 w-full bg-[#ddbdf2] text-black placeholder:text-slate-500"
            type="text"
            placeholder="Phone Number"
          />
          <input
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="border-2 border-black rounded-lg m-2 p-2 w-full bg-[#ddbdf2] text-black placeholder:text-slate-500"
            type="password"
            placeholder="Password"
          />
          <button
            type="submit"
            className="bg-black text-white hover:underline font-bold py-2 px-4 rounded-lg w-80"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
