

///////////////////////////////////////////////////////////////////////////
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUser } from "../components/Redux/userSlice";
import axios from "axios";

export default function Dashboard() {
  window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = '';  
  });

  const user = useSelector((state) => state.user.user);
  const [newRequests, setNewRequests] = useState([]);
  const [acceptedRequests, setAcceptedRequests] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log("User data:", user);

  // Fetch current user details
  useEffect(() => {
    if (user?.username) {
      axios
        .get("http://localhost:8080/api/v1/sp/" + user.username)
        .then((res) => {
          console.log("User details response:", res.data);
          setCurrentUser(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user?.username]);

  // Fetch requests from backend
  useEffect(() => {
    if (user?.username) {
      axios
        .get("http://localhost:8080/api/v1/request/sp/" + user.username)
        .then((res) => {
          console.log("Requests response:", res.data);
          setNewRequests(res.data.filter((request) => request.status === "Pending"));
          setAcceptedRequests(res.data.filter((request) => request.status === "accepted"));
        })
        .catch((err) => console.log(err));
    }
  }, [user?.username]);

  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleDeleteAccount = () => {
    setDeleteModalOpen(true);
  };

  const confirmDeleteAccount = () => {
    axios
      .delete("http://localhost:8080/api/v1/sp/" + user.username)
      .then((res) => {
        console.log(res);
        dispatch(clearUser());
        navigate("/");
      })
      .catch((err) => console.log(err));
    setDeleteModalOpen(false); // Close the modal after confirming
  };

  const handleEditAccount = () => {
    console.log("Navigating to /edit/" + user.username); 
    navigate("/edit/" + user.username);  // Navigate to the edit page
  };

  // Function to send email
  const sendEmail = async (email, subject, message) => {
    try {
      await axios.post("http://localhost:8080/api/mail/sendEmail", {
        email,
        subject,
        message,
      });
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Failed to send email", error);
    }
  };



  // Handle Accept Request
  const handleAcceptRequest = async (reqId) => {
    try {
      // Find the request object in the newRequests array
      const request = newRequests.find((request) => request.reqId === reqId);

      // Update the status of the request in the backend
      await axios.put(`http://localhost:8080/api/v1/request/${reqId}`, {
        status: "accepted",
      });

      // Update the UI without a page refresh
      setNewRequests((prevRequests) =>
        prevRequests.filter((request) => request.reqId !== reqId)
      );

      setAcceptedRequests((prevRequests) => [
        ...prevRequests,
        { ...request, status: "accepted" }, // Make sure to update the status locally too
      ]);

      // Send email to the user
      const subject = "Booking Accepted";
      const message = `Dear ${request.reqUserName}, your request for ${request.serviceType} has been accepted by the service provider. Contact: ${request.spContactNo}`;
      await sendEmail(request.userEmail, subject, message);

      alert("Booking accepted successfully!");
    } catch (err) {
      console.log(err);
      alert("Failed to accept the booking. Please try again.");
    }
  };


  // Handle Reject Request
  const handleRejectRequest = async (reqId) => {
    try {
      const request = newRequests.find((request) => request.reqId === reqId);
      await axios.put(`http://localhost:8080/api/v1/request/${reqId}`, {
        status: "rejected",
      });

      setNewRequests((prevRequests) =>
        prevRequests.filter((request) => request.reqId !== reqId)
      );

      // Send email to the user
      const subject = "Booking Rejected";
      const message = `Dear ${request.reqUserName}, your request for ${request.serviceType} has been rejected by the service provider. Contact: ${request.spContactNo}`;
      await sendEmail(request.userEmail, subject, message);

      alert("Booking rejected successfully!");
    } catch (err) {
      console.log(err);
      alert("Failed to reject the booking. Please try again.");
    }
  };





  return (
<div className="p-4">

<h2 className="text-2xl font-bold mb-4">
    Your Profile
  </h2>

  <div className="flex items-center mb-6">
    <img
      src={
        currentUser?.profileImage
          ? `data:image/jpeg;base64,${currentUser.profileImage}`
          : "https://th.bing.com/th/id/R.c11b6f38dffc24a4508217513b0e50bd?rik=Pt%2bkITlukiMkWg&riu=http%3a%2f%2fwww.emmegi.co.uk%2fwp-content%2fuploads%2f2019%2f01%2fUser-Icon.jpg&ehk=zjS04fF4nxx%2bpkvRPsSezyic3Z7Yfu%2fuoT75KnbNv1Y%3d&risl=&pid=ImgRaw&r=0"
      }
      alt={`${currentUser?.firstname || ""} ${currentUser?.lastname || ""}`}
      className="w-64 h-64 rounded-full mr-4 object-cover shadow-md"
    />
    <div className="text-gray-800">
      <div className="text-2xl font-bold">
        {currentUser?.firstname} {currentUser?.lastname}
      </div>
      <div className="text-2xl font-semibold text-gray-500 mb-1">{currentUser?.service}</div>
      <div className="text-sm text-gray-800 mb-2">
        <span className="text-2xl font-semibold text-gray-500 mb-1">Location: {currentUser?.city}</span>
      </div>
      <div className="text-2xl font-semibold text-gray-500 mb-1">
        Contact: {currentUser?.phoneNumber}
      </div>
      <div className="text-2xl font-semibold text-gray-500 mb-1">
        <span className="text-2xl font-semibold text-gray-500 mb-1">Price: RS </span> {currentUser?.price}<span className="text-2xl font-semibold text-gray-500 mb-1">.00</span> 
      </div>
    </div>
  </div>



      {/* Edit and Delete Account Buttons */}
      <div className="mb-4">
        <button
          onClick={handleEditAccount}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded-full"
        >
          Edit Account
        </button>
    
        <button
          onClick={handleDeleteAccount}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Delete Account
        </button>
      </div>

      {isDeleteModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md shadow-md">
            <p>Are you sure you want to delete your account?</p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mr-2 rounded-full"
                onClick={() => setDeleteModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={confirmDeleteAccount}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}


      <div className="flex flex-wrap ">
        {/* New Requests Section */}
        <div className="mb-4 w-full md:w-1/2 p-2">
          <div className="bg-[#431261] p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-white">New Requests</h3>
            
            <ul>
              {newRequests.length > 0 ? (
                newRequests.map((request) => (
                  <li key={request.reqId} className="mb-2 mt-4 bg-yellow-50 border border-gray-300 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                    <div className="grid grid-cols-10 gap-x-0 gap-y-1 w-full">

                      <p className="text-gray-600 font-semibold  col-span-2 ">Customer Name </p>
                      <p className="text-gray-600 ml-12 col-span-2">-</p>
                      <p className="text-gray-600   col-span-6">{request.reqUserName} </p>

                      <p className="text-gray-600 font-semibold col-span-2">Service </p>
                      <p className="text-gray-600 ml-12 col-span-2">-</p>
                      <p className="text-gray-600 col-span-6">{request.serviceType}</p>

                      <p className="text-gray-600 font-semibold col-span-2">Contact Number</p>
                      <p className="text-gray-600 ml-12 col-span-2">-</p>
                      <p className="text-gray-600 col-span-6">{request.userContactNo}</p>

                      <p className="text-gray-600 font-semibold col-span-2">Customer Description </p>
                      <p className="text-gray-600 ml-12 col-span-2">-</p>
                      <p className="text-gray-600 col-span-6">{request.serviceDescription}</p>

                      <p className="text-gray-600 font-semibold col-span-2">Date </p>
                      <p className="text-gray-600 ml-12 col-span-2">-</p>
                      <p className="text-gray-600 col-span-6">{new Date(request.date).toLocaleDateString()}</p>

                      <p className="text-gray-600 font-semibold col-span-2">Appointment Date </p>
                      <p className="text-gray-600 ml-12 col-span-2">-</p>
                      <p className="text-gray-600 col-span-6">{new Date(request.date1).toLocaleDateString()}</p>

                      <p className="text-gray-600 font-semibold col-span-2">Status </p>
                      <p className="text-gray-600 ml-12 col-span-2">-</p>
                      <p className={`col-span-2 text-sm ${
                          request.status === 'Pending' ? 'text-yellow-500' :
                          request.status === 'accepted' ? 'text-green-500' :
                          request.status === 'rejected' ? 'text-red-500' : ''
                        }`}>
                          {request.status}
                      </p>
                      
  
                    </div>

                    <button
                      className="bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded mt-4 mr-2 "
                      onClick={() => handleAcceptRequest(request.reqId)}
                    >
                      Accept
                    </button>
                    <button
                      className="bg-red-700 hover:bg-red-800 text-white py-2 px-4 rounded mt-4"
                      onClick={() => handleRejectRequest(request.reqId)}
                    >
                      Reject 
                    </button>
                  </li>
                ))
              ) : (
                <p className="text-white">No new requests available.</p>
              )}
            </ul>
          </div>
        </div>

        {/* Accepted Requests Section */}
        <div className="w-full md:w-1/2 p-2">
          <div className="bg-[#431261] p-6 rounded-lg shadow-md">  
            <h3 className="text-lg font-semibold mb-2 text-white">Accepted Requests</h3>
            
            <ul>
              {acceptedRequests.length > 0 ? (
                acceptedRequests.map((request) => (
                  <li key={request.reqId} className="mb-2 mt-4 bg-green-100 border border-gray-300 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                   <div className="grid grid-cols-10 gap-x-0 gap-y-1 w-full">
                    <p className="text-gray-600 col-span-2">Customer Name</p>
                    <p className="text-gray-600 ml-12 col-span-2">-</p>
                    <p className="text-gray-600  col-span-6">{request.reqUserName}</p>

                    <p className="text-gray-600 col-span-2 ">Service </p>
                    <p className="text-gray-600 ml-12 col-span-2">-</p>
                    <p className="text-gray-600  col-span-6">{request.serviceType}</p>

                    <p className="text-gray-600 col-span-2">Contact Number </p>
                    <p className="text-gray-600 ml-12 col-span-2">-</p>
                    <p className="text-gray-600  col-span-6">{request.userContactNo}</p>

                    <p className="text-gray-600 col-span-2">Customer Description</p>
                    <p className="text-gray-600 ml-12 col-span-2">-</p>
                    <p className="text-gray-600  col-span-6">{request.serviceDescription}</p>

                    <p className="text-gray-600 col-span-2">Date </p>
                    <p className="text-gray-600 ml-12 col-span-2">-</p>
                    <p className="text-gray-600  col-span-6">{new Date(request.date).toLocaleDateString()}</p>

                    <p className="text-gray-600 col-span-2">Appointment Date </p>
                    <p className="text-gray-600 ml-12 col-span-2">-</p>
                    <p className="text-gray-600  col-span-6">{new Date(request.date1).toLocaleDateString()}</p>

                    <p className="text-gray-600 font-semibold col-span-2">Status </p>
                    <p className="text-gray-600 ml-12 col-span-2">-</p>
                    {/* <p className={`col-span-6 text-sm ${request.status === 'Pending' ? 'text-yellow-500' : 'text-green-500'}`}>
                     {request.status}
                    </p> */}
                    <p className={`col-span-2 text-sm ${
                          request.status === 'Pending' ? 'text-yellow-500':
                          request.status === 'accepted' ? 'text-green-500' :
                          request.status === 'rejected' ? 'text-red-500' : ''
                        }`}>
                          {request.status}
                      </p>
                    </div>
                  </li>
                 
                  
                ))
              ) : (
                <p className="text-white">No accepted requests available.</p>
              )}
              
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  );
}