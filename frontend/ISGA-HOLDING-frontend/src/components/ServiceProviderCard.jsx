


import React, { useState } from "react";
import BookingForm from "./BookingForm";

const ServiceProviderCard = ({ provider }) => {
  const [isBookingOpen, setBookingOpen] = useState(false);

  const toggleBooking = () => {
    setBookingOpen(!isBookingOpen);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2 w-full max-w-sm">
      <div className="flex items-center mb-4">
        <img
          src={
            provider.profileImage
              ? `data:image/jpeg;base64,${provider.profileImage}` // Assuming it's base64 encoded
              : "https://th.bing.com/th/id/R.c11b6f38dffc24a4508217513b0e50bd?rik=Pt%2bkITlukiMkWg&riu=http%3a%2f%2fwww.emmegi.co.uk%2fwp-content%2fuploads%2f2019%2f01%2fUser-Icon.jpg&ehk=zjS04fF4nxx%2bpkvRPsSezyic3Z7Yfu%2fuoT75KnbNv1Y%3d&risl=&pid=ImgRaw&r=0"
          }
          alt={`${provider.firstname} ${provider.lastname}`}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div className="text-xl font-bold text-gray-800">
          {provider.firstname} {provider.lastname}
      </div>
      </div>
      
      <div className="text-sm text-gray-500 mb-2">{provider.service}</div>
      <div className="text-sm text-gray-500 mb-2">
        <span className="text-blue-900">Location: {provider.city}</span>
      </div>
      <div className="text-sm text-gray-500 mb-2">
        Contact: {provider.phoneNumber}
      </div>
      <div className="text-sm text-gray-500 mb-4">
        <span className="text-yellow-600">Price:</span> {provider.price}
      </div>
      <button
        className="bg-[#431261] hover:bg-yellow-300 text-white font-semibold py-2 px-4 rounded-full mt-2 focus:outline-none hover:text-black w-full"
        onClick={toggleBooking}
      >
        Book Now
      </button>

      {isBookingOpen && <BookingForm serviceProvider={provider} />}
    </div>
  );
};

export default ServiceProviderCard;
