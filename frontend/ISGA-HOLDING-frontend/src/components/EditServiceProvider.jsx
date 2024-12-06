import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ServiceProviderForm = () => {
  const { username } = useParams(); 
  const navigate = useNavigate(); // Get username from route parameters
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
    city: '',
    service: '',
    price: 0,
  });

  const [profileImage, setProfileImage] = useState(null); // New state to handle image

  // Fetch service provider data
  useEffect(() => {
    const fetchServiceProvider = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/sp/"+username);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching service provider data', error);
      }
    };
    fetchServiceProvider();
  }, [username]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

// Handle file input (profile image)
const handleFileChange = (e) => {
  setProfileImage(e.target.files[0]); // Capture the selected file
};

// Handle form submission
const handleSubmit = async (e) => {
  e.preventDefault();

  // Create a new FormData object to include both the form data and the image file
  const data = new FormData();
  data.append('firstname', formData.firstname);
  data.append('lastname', formData.lastname);
  data.append('email', formData.email);
  data.append('password', formData.password);
  data.append('phoneNumber', formData.phoneNumber);
  data.append('address', formData.address);
  data.append('city', formData.city);
  data.append('service', formData.service);
  data.append('price', formData.price);
  
  // Append profileImage only if the user selected one
  if (profileImage) {
    data.append('profileImage', profileImage);
  }

  try {
    await axios.put('http://localhost:8080/api/v1/sp/'+username, data, {
      headers: {
        'Content-Type': 'multipart/form-data',  // Important for file uploads
      },
    });
    alert('Service provider updated successfully!');
  } catch (error) {
    console.error('Error updating service provider', error);
    alert('Failed to update service provider. Please check the console for details.');
  }
};

  // Handle form submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.put("http://localhost:8080/api/v1/sp/"+username, formData, {
  //       headers: {
  //         'Content-Type': 'application/json',  // Ensure the server knows the request is JSON
  //       },
  //     });
  //     alert('Service provider updated successfully!');
  //     navigate('/dashboard'); 
  //   } catch (error) {
  //     console.error('Error updating service provider', error);
  //     alert('Failed to update service provider. Please check the console for details.');
  //   }
  // };
  

  return (
    <div className="max-w-4xl mx-auto p-6 bg-purple-300 rounded-lg shadow-md mt-5 mb-5">
      <h2 className="text-2xl font-bold mb-4">Edit Service Provider</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col ">
          <label htmlFor="firstname" className="text-lg font-medium mb-1">First Name:</label>
          <input
            id="firstname"
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md "
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastname" className="text-lg font-medium mb-1">Last Name:</label>
          <input
            id="lastname"
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg font-medium mb-1">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>
        {/* <div className="flex flex-col">
          <label htmlFor="password" className="text-lg font-medium mb-1">Password:</label>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md"
          />
        </div> */}
        <div className="flex flex-col">
          <label htmlFor="phoneNumber" className="text-lg font-medium mb-1">Phone Number:</label>
          <input
            id="phoneNumber"
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="address" className="text-lg font-medium mb-1">Address:</label>
          <input
            id="address"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div className="col-md-6 mb-1 w-full">
        <label htmlFor="City" className="text-lg font-medium mb-1">City:</label>
                      <select className="bg-white select text-black  w-full h-10 rounded-lg " name="city" value={formData.city} onChange={handleChange}>
                        <option value="">Select the City</option>
                        <option value="Galle">Galle</option>
                        <option value="Trincomalee">Trincomalee</option>
                        <option value="Kilinochchi">Kilinochchi</option>
                        <option value="Colombo">Colombo</option>
                        <option value="Badulla">Badulla</option>
                        <option value="Kandy">Kandy</option>
                        <option value="Matara">Matara</option>
                      </select>
        </div>

        <div className="row ">
                    <div className="col-md-6 mb-1 w-full">
                    <label htmlFor="Service" className="text-lg font-medium mb-1">Service:</label>
                      <select className="bg-white select text-black  w-full h-10 rounded-lg" name="service" value={formData.service} onChange={handleChange}>
                        <option value="">Selecte the Service</option>
                        <option value="Electrician">Electrician</option>
                        <option value="Plumber">Plumber</option>
                        <option value="Carpenter">Carpenter</option>
                        <option value="Painter">Painter</option>
                        <option value="Gardener">Gardener</option>
                        <option value="Mechanic">Mechanic</option>
                        <option value="Cleaner">Cleaner</option>
                        <option value="Cook">Cook</option>
                      </select>
                    </div>
          </div>
        <div className="flex flex-col">
          <label htmlFor="price" className="text-lg font-medium mb-1">Price:</label>
          <input
            id="price"
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="profileImage" className="text-lg font-medium mb-1">Profile Image:</label>
          <input
            id="profileImage"
            type="file"
            name="profileImage"
            onChange={handleFileChange}  // Capture file input
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div className="flex justify-center">
            <button
                type="submit"
                className="w-[400px] bg-[#431261] hover:bg-yellow-300 items-center text-white font-bold py-2 px-4 rounded-md">
                Update
            </button>
        </div>
      </form>
    </div>
  );
};

export default ServiceProviderForm;


