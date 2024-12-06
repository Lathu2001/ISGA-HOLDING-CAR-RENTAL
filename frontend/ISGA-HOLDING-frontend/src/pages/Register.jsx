import { useState } from "react";
import axios from "axios";
import{useNavigate} from 'react-router-dom';
import Footer from "../components/Footer/Footer";

export default function register() {
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
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/v1/user/", formData);
      console.log(response);
      alert('Registration was successful!');
      navigate('/signin');
      // Handle success (e.g., show a success message or redirect to login page)
    } catch (error) {
      alert('Registration failed. Please try again.');
      // Handle registration error (e.g., show an error message)
    }
  };
  return (
    <div className="flex flex-col m-20 mt-2 items-center bg-white rounded">
      {/* bg-[#eff6d3] */}
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
            className=" bg-black  text-white hover:underline font-bold py-2 px-4 rounded-lg w-80"
          >
            Register
          </button>
        </form>
        
      </div>
      
    </div>
  );
}
