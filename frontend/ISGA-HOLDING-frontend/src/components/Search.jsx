// import React, { useState, useEffect } from "react";
// import { GrLocation } from "react-icons/gr";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Footer from "./Footer/Footer";

// export default function Search() {
//   const [service, setService] = useState("");
//   const [location, setLocation] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = async (e) => {
//     e.preventDefault();

//     try {
//       // Make an Axios request to your API to perform the search
//       const response = await axios.get(
//         `http://localhost:8080/api/v1/sp/city/${location}/service/${service}`
//       );
//       // Set the search results in state
//       setSearchResults(response.data);
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error searching for services:", error);
//     }
//   };

//   return (
//     <div className="rounded-full p-2 m-2 bg-slate-800 max-h-24 justify-center max-w-full ">
//       <div>
//       <form
//         className="flex items-center justify-between"
//         onSubmit={handleSearch}
//       >
//         <select
//           className="rounded-full p-3 m-2  border-t mr-0 border-b border-l text-gray-800 border-gray-200  "
//           value={service}
//           onChange={(e) => setService(e.target.value)}
//         >
//           <option value="">Select a service</option>
//           <option value="Electrician">Electrician</option>
//           <option value="Plumber">Plumber</option>
//           <option value="Painter">Painter</option>
//           <option value="Carpenter">Carpenter</option>
//           <option value="Gardener">Gardener</option>
//           <option value="Mechanic">Mechanic</option>
//           <option value="Cleaner">Cleaner</option>
//           <option value="Cook">Cook</option>
          

//           {/* Add more service options as needed */}
//         </select>
//         <div className="flex items-center bg-white rounded-full m-2 pl-3  outline-none ">
//           <GrLocation />
//           <select
//             className="focus:outline-none rounded-full p-3 pl-2 max-w-sm  ml-0 text-gray-800 border-gray-200 bg-white"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//           >
//             <option value="">Select a location</option>
//             <option value="Galle">Galle</option>
//             <option value="Trincomalee">Trincomalee</option>
//             <option value="Kilinochchi">Kilinochchi</option>
//             <option value="Colombo">Colombo</option>
//             <option value="Badulla">Badulla</option>
//             <option value="Kandy">Kandy</option>
//             <option value="Matara">Matara</option>
//             {/* Add more location options as needed */}
//           </select>
//         </div>
//         <button
//           type="submit"
//           className="px-8 rounded-full m-2 bg-yellow-300   hover:text-white hover:right-5 hover:ring-white hover:bg-slate-600  font-bold p-3 uppercase  border-t border-b "
//         >
//           Search
//         </button>
//       </form>

//       {searchResults.length > 0 && (
//         <div className="flex flex-col items-center bg-[#f8ebd1] mt-5 ">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center " style={{ marginTop: '30px' }}>
//           Search Results:
//         </h2>

//           <ul className="divide-y divide-gray-300 flex flex-wrap ">
//             {searchResults.map((result) => (
//               <li key={result.id} className="py- flex-1">
//                 <ServiceProviderCard provider={result} />
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//       </div>
      
      
//     </div>
//   );
// }

// const ServiceProviderCard = ({ provider }) => {
//   const [isBookingOpen, setBookingOpen] = useState(false);

//   const toggleBooking = () => {
//     setBookingOpen(!isBookingOpen);
//   };

//   return (
//     <div className="bg-white shadow-md rounded-lg p-4 m-2 w-80">
//        <div className="flex items-center mb-4">
//       <img 
//         src={"https://th.bing.com/th/id/R.c11b6f38dffc24a4508217513b0e50bd?rik=Pt%2bkITlukiMkWg&riu=http%3a%2f%2fwww.emmegi.co.uk%2fwp-content%2fuploads%2f2019%2f01%2fUser-Icon.jpg&ehk=zjS04fF4nxx%2bpkvRPsSezyic3Z7Yfu%2fuoT75KnbNv1Y%3d&risl=&pid=ImgRaw&r=0"} //provider.imageUrl
//         alt={`${provider.firstname} ${provider.lastname}`} 
//         className="w-12 h-12 rounded-full mr-4"
//       />
//       <div className="text-xl font-bold text-gray-800">
//         {provider.firstname} {provider.lastname}
//       </div>
//     </div>
//       <div className="text-sm text-gray-500 mb-2">{provider.service}</div>
//       <div className="text-sm text-gray-500 mb-2">
//         <span className="text-blue-900">Location: {provider.city}</span>
//       </div>
//       <div className="text-sm text-gray-500 mb-2">
//         Contact: {provider.phoneNumber}
//       </div>
//       {/* <div className="text-sm text-gray-500 mb-4">
//         <span className="text-yellow-600">Rating:</span> {provider.rating}
//       </div> */}
//       <button
//         className="bg-[#431261]   hover:bg-yellow-300 text-white font-semibold py-2 px-4 rounded-full mt-2 focus:outline-none hover:text-black"
//         onClick={toggleBooking}
//       >
//         Book Now
//       </button>

//       {isBookingOpen && <BookingForm serviceProvider={provider.nic} />}
//     </div>
//   );
// };

// const BookingForm = ({ serviceProvider }) => {
//   const currentUser = useSelector((state) => state.user.user);
//   const navigate = useNavigate;

//   const [formData, setFormData] = useState({
//     serviceDescription: "", // Capture service short description
//   });

//   useEffect(() => {
//     if (!currentUser) {
//       navigate("/login");
//     }
//   }, [currentUser, history]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const bookingRequest = {
//       serviceDescription: formData.serviceDescription,
//       serviceProvider: serviceProvider, // Use the service provider from props
//       user: currentUser.username, // You can change this if needed
//       status: "Pending",
//       date: new Date().toISOString(),
//       address: currentUser.address,
//       city: currentUser.city,
//     };

//     try {
//       const userResponse = await axios.get(`http://localhost:8080/api/v1/user/${currentUser.username}`);
//       bookingRequest.address = userResponse.data.address;
//       bookingRequest.city = userResponse.data.city;

//       //const spResponse = await axios.get(`http://localhost:8080/api/v1/sp/${serviceProvider.nic}`);
//       //bookingRequest.serviceProvider = spResponse.data.username;

//       console.log(bookingRequest);
//       const bookingResponse = await axios.post("http://localhost:8080/api/v1/request/", bookingRequest);
//       alert("Succesfuly booked");
//     } catch (error) {
//       alert("Booking fail");
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <h2>Create Booking</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label
//             htmlFor="serviceDescription"
//             className="block text-gray-700 text-sm font-bold mb-2"
//           >
//             Service Short Description
//           </label>
//           <input
//             type="text"
//             id="serviceDescription"
//             name="serviceDescription"
//             value={formData.serviceDescription}
//             onChange={(e) =>
//               setFormData({ ...formData, serviceDescription: e.target.value })
//             }
//             className="border rounded w-full py-2 px-3"
//             placeholder="Enter service description"
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Submit Booking Request
//         </button>
//       </form>
//     </div>
//   );
// };


//////////////////////////////////////////////////////////////
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Search() {
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      // Make an Axios request to your API to perform the search
      const response = await axios.get(
        `http://localhost:8080/api/v1/sp/city/${location}/service/${service}`
      );

      // Navigate to the results page with the search results as state
      navigate("/results", { state: { searchResults: response.data } });
    } catch (error) {
      console.error("Error searching for services:", error);
    }
  };

  return (
    // <div className="rounded-full p-2 m-2 bg-slate-800 max-h-24 justify-center max-w-full">
    //   <form
    //     className="flex items-center justify-between"
    //     onSubmit={handleSearch}
    //   >
    //     <select
    //       className="rounded-full p-3 m-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200"
    //       value={service}
    //       onChange={(e) => setService(e.target.value)}
    //     >
    //       <option value="">Select a service</option>
    //       <option value="Electrician">Electrician</option>
    //       <option value="Plumber">Plumber</option>
    //       <option value="Painter">Painter</option>
    //       <option value="Carpenter">Carpenter</option>
    //       <option value="Gardener">Gardener</option>
    //       <option value="Mechanic">Mechanic</option>
    //       <option value="Cleaner">Cleaner</option>
    //       <option value="Cook">Cook</option>
    //     </select>
    //     <div className="flex items-center bg-white rounded-full m-2 pl-3">
    //       <select
    //         className="focus:outline-none rounded-full p-3 pl-2 max-w-sm text-gray-800 border-gray-200 bg-white"
    //         value={location}
    //         onChange={(e) => setLocation(e.target.value)}
    //       >
    //         <option value="">Select a location</option>
    //         <option value="Galle">Galle</option>
    //         <option value="Trincomalee">Trincomalee</option>
    //         <option value="Kilinochchi">Kilinochchi</option>
    //         <option value="Colombo">Colombo</option>
    //         <option value="Badulla">Badulla</option>
    //         <option value="Kandy">Kandy</option>
    //         <option value="Matara">Matara</option>
    //       </select>
    //     </div>
    //     <button
    //       type="submit"
    //       className="px-8 rounded-full m-2 bg-yellow-300 hover:text-white hover:ring-white hover:bg-slate-600 font-bold p-3 uppercase border-t border-b"
    //     >
    //       Search
    //     </button>
    //   </form>
    // </div>
    <div className="rounded-3xl  p-2 m-2 bg-slate-800 max-h-auto sm:max-h-24 justify-center max-w-full">
  <form
    className="flex flex-col sm:flex-row items-center justify-between"
    onSubmit={handleSearch}
  >
    <select
      className="rounded-full p-2 sm:p-3 m-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 w-full"
      value={service}
      onChange={(e) => setService(e.target.value)}
    >
      <option value="">Select a service</option>
      <option value="Electrician">Electrician</option>
      <option value="Plumber">Plumber</option>
      <option value="Painter">Painter</option>
      <option value="Carpenter">Carpenter</option>
      <option value="Gardener">Gardener</option>
      <option value="Mechanic">Mechanic</option>
      <option value="Cleaner">Cleaner</option>
      <option value="Cook">Cook</option>
    </select>
    <div className="flex items-center bg-white rounded-full m-2 pl-3 w-full sm:w-auto">
    <select
  className="focus:outline-none rounded-full p-2 sm:p-3 pl-2 max-w-full text-gray-800 border-gray-200 bg-white"
  value={location}
  onChange={(e) => setLocation(e.target.value)}
>
  <option value="">Select a location</option>
  <option value="Ampara">Ampara</option>
  <option value="Anuradhapura">Anuradhapura</option>
  <option value="Badulla">Badulla</option>
  <option value="Batticaloa">Batticaloa</option>
  <option value="Colombo">Colombo</option>
  <option value="Galle">Galle</option>
  <option value="Gampaha">Gampaha</option>
  <option value="Hambantota">Hambantota</option>
  <option value="Jaffna">Jaffna</option>
  <option value="Kalutara">Kalutara</option>
  <option value="Kandy">Kandy</option>
  <option value="Kegalle">Kegalle</option>
  <option value="Kilinochchi">Kilinochchi</option>
  <option value="Kurunegala">Kurunegala</option>
  <option value="Mannar">Mannar</option>
  <option value="Matale">Matale</option>
  <option value="Matara">Matara</option>
  <option value="Monaragala">Monaragala</option>
  <option value="Mullaitivu">Mullaitivu</option>
  <option value="Nuwara Eliya">Nuwara Eliya</option>
  <option value="Polonnaruwa">Polonnaruwa</option>
  <option value="Puttalam">Puttalam</option>
  <option value="Ratnapura">Ratnapura</option>
  <option value="Trincomalee">Trincomalee</option>
  <option value="Vavuniya">Vavuniya</option>
</select>

    </div>
    <button
      type="submit"
      className="px-6 sm:px-8 rounded-full m-2 bg-yellow-300 hover:text-white hover:ring-white hover:bg-slate-600 font-bold p-2 sm:p-3 uppercase border-t border-b w-full sm:w-auto"
    >
      Search
    </button>
  </form>
</div>

  );
}


