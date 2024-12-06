// import React from "react";



// const ServiceProviderList = ({ providers }) => {
//   if (providers.length === 0) {
//     return <p className="text-center text-gray-500 mt-4">No service providers found.</p>;
//   }

//   const handleBooking = (providerName) => {
//     alert("Booking service with" +providerName);
//     // You can add logic here to handle the booking process
//   };

//   return (
//     <div className="mt-8 w-full max-w-3xl">
//       <h2 className="text-2xl font-bold text-black mb-4 text-center">Available Service Providers</h2>
//       <ul className="space-y-4">
//         {providers.map((provider, index) => (
//           <li
//             key={index}
//             className="p-4 border rounded-lg shadow-md bg-white flex flex-col sm:flex-row items-center"
//           >
//             <img
//               src={"https://th.bing.com/th/id/R.c11b6f38dffc24a4508217513b0e50bd?rik=Pt%2bkITlukiMkWg&riu=http%3a%2f%2fwww.emmegi.co.uk%2fwp-content%2fuploads%2f2019%2f01%2fUser-Icon.jpg&ehk=zjS04fF4nxx%2bpkvRPsSezyic3Z7Yfu%2fuoT75KnbNv1Y%3d&risl=&pid=ImgRaw&r=0"}
//               alt={`${provider.firstname} ${provider.lastname}`}
//               className="w-24 h-24 object-cover rounded-full mr-4"
//             />
//             <div className="flex-1">
//               <h3 className="text-xl font-semibold text-black">{provider.name}</h3>
//               <p className="text-black">{provider.description}</p>
//               <p className="text-gray-800">{provider.location}</p>
//             </div>
//             <button
//               onClick={() => handleBooking(provider.name)}
//               className="mt-4 sm:mt-0 sm:ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//             >
//               Book Now
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ServiceProviderList;

import React from "react";
import ServiceProviderCard from "./ServiceProviderCard";

const ServiceProviderList = ({ providers }) => {
  if (providers.length === 0) {
    return <p className="text-center text-gray-500 mt-4">No service providers found.</p>;
  }

  return (
    <div className="mt-8 w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-black mb-4 text-center">Available Service Providers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {providers.map((provider, index) => (
          <ServiceProviderCard key={index} provider={provider} />
        ))}
      </div>
    </div>
  );
};

export default ServiceProviderList;



