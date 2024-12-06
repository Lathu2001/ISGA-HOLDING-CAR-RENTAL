

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import EditUser from "../components/EditUser";
import { clearUser } from "../components/Redux/userSlice";
import { CgProfile } from "react-icons/cg";

function UserDashboard() {
  const [userData, setUserData] = useState({});
  const [bookings, setBookings] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for the dropdown menu
  const [selectedBooking, setSelectedBooking] = useState(null); // For tracking the selected booking to edit
  const [isEditBookingModalOpen, setIsEditBookingModalOpen] = useState(false); // State for the edit booking modal

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    fetchUserData();
    fetchBookings();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/user/" + user.username);
      setUserData(response.data);
    } catch (error) {
      setError("Failed to fetch user data.");
      console.error("Error fetching user data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchBookings = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/request/user/" + user.username);
      setBookings(response.data);
    } catch (error) {
      setError("Failed to fetch bookings.");
      console.error("Error fetching bookings:", error);
    }
  };

  const openEditProfileModal = () => {
    setIsEditMode(true);
    setIsDropdownOpen(false); // Close the dropdown
  };

  const closeEditProfileModal = () => {
    setIsEditMode(false);
  };

  const handleDeleteAccount = () => {
    setDeleteModalOpen(true);
    setIsDropdownOpen(false); // Close the dropdown
  };

  const confirmDeleteAccount = () => {
    axios
      .delete("http://localhost:8080/api/v1/user/" + user.username)
      .then(() => {
        dispatch(clearUser());
        navigate("/");
      })
      .catch((error) => {
        setError("Failed to delete account.");
        console.error("Error deleting account:", error);
      });
    setDeleteModalOpen(false);
  };

  const deleteBooking = async (reqId) => {
    try {
      await axios.delete("http://localhost:8080/api/v1/request/" + reqId);
      setBookings(bookings.filter((booking) => booking.reqId !== reqId));
    } catch (error) {
      setError("Failed to delete booking.");
      console.error("Error deleting booking:", error);
    }
  };

  const openEditBookingModal = (booking) => {
    if (booking.status === "Pending") {
      setSelectedBooking(booking);
      setIsEditBookingModalOpen(true);
    } else {
      alert("You can only edit pending bookings.");
    }
  };

  const closeEditBookingModal = () => {
    setIsEditBookingModalOpen(false);
    setSelectedBooking(null);
  };

  const updateBooking = async (updatedBooking) => {
    try {
      await axios.put("http://localhost:8080/api/v1/request/" + updatedBooking.reqId, updatedBooking);
      setBookings(
        bookings.map((booking) => (booking.reqId === updatedBooking.reqId ? updatedBooking : booking))
      );
      closeEditBookingModal();
    } catch (error) {
      setError("Failed to update booking.");
      console.error("Error updating booking:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header with Profile Image Dropdown */}
      <header className="text-white py-4 flex justify-end items-center rounded-2xl px-4 md:px-6 lg:px-8">
        <div className="relative">
          {/* Profile logo */}
          <CgProfile onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="text-black cursor-pointer" size={30} />
          {/* Dropdown */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-20">
              <button
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={openEditProfileModal}
              >
                Edit Profile
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-red-700 hover:bg-gray-100"
                onClick={handleDeleteAccount}
              >
                Delete Account
              </button>
            </div>
          )}
        </div>
      </header>

      <main className="container mx-auto py-8 px-4 md:px-6 lg:px-8">
        {/* Booking List */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl">
            <div className="bg-[#431261] p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-white text-center">Your Bookings</h2>
              <div className="space-y-4">
                {bookings.map((booking) => (
                  <div
                    key={booking.reqId}
                    className="bg-pink-100 border border-gray-300 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
                      {/* Booking Info */}
                      <div>
                        <p className="font-semibold">Provider ID:</p>
                        <p className="text-gray-600">{booking.serviceProvider}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Service:</p>
                        <p className="text-gray-600">{booking.serviceType}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Date:</p>
                        <p className="text-gray-600">{new Date(booking.date).toLocaleDateString()}</p>
                      </div>
                     
                      
                      
                      <div>
                        <p className="font-semibold">Status:</p>
                        <p
                          className={`${
                            booking.status === "Pending"
                              ? "text-yellow-500"
                              : booking.status === "accepted"
                              ? "text-green-500"
                              : booking.status === "rejected"
                              ? "text-red-500"
                              : ""
                          }`}
                        >
                          {booking.status}
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold">Description:</p>
                        <p className="text-gray-600">{booking.serviceDescription}</p>
                      </div>

                      <div>
                        <p className="font-semibold">Apointment Date:</p>
                        <p className="text-gray-600">{booking.date1}</p>
                      </div>


                    </div>
                    {/* Edit and Delete Booking Buttons */}
                    <div className="mt-4 flex space-x-4">
                      <button
                        className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-sm sm:text-base ${
                          booking.status !== "Pending" ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        onClick={() => openEditBookingModal(booking)}
                        disabled={booking.status !== "Pending"}
                      >
                        Edit Booking
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded text-sm sm:text-base"
                        onClick={() => deleteBooking(booking.reqId)}
                      >
                        Delete Booking
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Edit Profile Modal */}
      {isEditMode && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-purple-200 p-8 rounded-lg shadow-lg relative max-w-3xl w-full mx-4">
            <EditUser user={userData} />
            <button
              onClick={closeEditProfileModal}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-full"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

     {/* Edit Booking Modal */}
{isEditBookingModalOpen && selectedBooking && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-lg mx-4">
      <h3 className="text-xl font-semibold mb-4">Edit Booking</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateBooking(selectedBooking);
        }}
      >
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Service Type:</label>
         <input
                type="text"
                id="serviceType"
               name="serviceType"
               value={selectedBooking.serviceType}
               readOnly // This makes the input field uneditable
               className="mt-1 p-2 border rounded w-full bg-gray-200 text-gray-500 cursor-not-allowed"
                // bg-gray-200 for background color and text-gray-500 for text color
              />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description:</label>
          <textarea
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            value={selectedBooking.serviceDescription}
            onChange={(e) => setSelectedBooking({ ...selectedBooking, serviceDescription: e.target.value })}
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2"
          >
            Save Changes
          </button>
          <button
            type="button"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded"
            onClick={closeEditBookingModal}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
)}


      {/* Delete Account Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg mx-4">
            <p>Are you sure you want to delete your account?</p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 mr-2 rounded-full"
                onClick={() => setDeleteModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-full"
                onClick={confirmDeleteAccount}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserDashboard;



