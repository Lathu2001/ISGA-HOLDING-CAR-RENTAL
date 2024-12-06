import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BookingForm = ({ serviceProvider }) => {
  const currentUser = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    serviceDescription: "",
    appointmentDate: "", // Added field for appointment date
  });

  useEffect(() => {
    console.log("Current User:", currentUser); // Debugging log
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingRequest = {
      serviceDescription: formData.serviceDescription,
      date1: formData.appointmentDate, // Use the selected appointment date
      serviceProvider: serviceProvider.nic,
      serviceType: serviceProvider.service,
      user: currentUser.username,
      status: "Pending",
      date: new Date().toISOString(),
      address: currentUser.address,
      city: currentUser.city,
      spContactNo: serviceProvider.phoneNumber,
      userContactNo: currentUser.phoneNumber,
      reqUserName: currentUser.name,
      userEmail: currentUser.email,
      spEmail: serviceProvider.email,
    };

    try {
      const userResponse = await axios.get(
        "http://localhost:8080/api/v1/user/"+currentUser.username
      );
      bookingRequest.address = userResponse.data.address;
      bookingRequest.city = userResponse.data.city;
      bookingRequest.userContactNo = userResponse.data.phoneNumber;
      bookingRequest.reqUserName = userResponse.data.name;
      bookingRequest.userEmail = userResponse.data.email;

      const bookingResponse = await axios.post(
        "http://localhost:8080/api/v1/request/", bookingRequest
      );
      alert("Successfully booked");
    } catch (error) {
      alert("Booking failed");
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Create Booking</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="serviceDescription"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Service Short Description
          </label>
          <input
            type="text"
            id="serviceDescription"
            name="serviceDescription"
            value={formData.serviceDescription}
            onChange={(e) =>
              setFormData({ ...formData, serviceDescription: e.target.value })
            }
            className="border rounded w-full py-2 px-3"
            placeholder="Enter service description"
          />
        </div>

        {/* Date Picker for Appointment Date */}
        <div className="mb-4">
          <label
            htmlFor="appointmentDate"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Appointment Date
          </label>
          <input
            type="date"
            id="appointmentDate"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={(e) =>
              setFormData({ ...formData, appointmentDate: e.target.value })
            }
            className="border rounded w-full py-2 px-3"
          />
        </div>

        <button
          type="submit"
          className="bg-[#431261] hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded"
        >
          Submit Booking Request
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
