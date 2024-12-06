// import Search from "../components/Search";
// import ServiceCard from "../components/ServiceCard";
// import TaskRequsts from "../components/TaskRequsts";
// import { Link } from "react-router-dom";

// const props = {
//   img: "https://cdn.vectorstock.com/i/500p/35/09/electrician-makes-the-connection-vector-43663509.jpg",
//   title: "Electrician",
  
// };
// const props2 = {
//   img: "https://cdn.langeek.co/photo/21064/original/",
//   title: "Plumber",
// };
// const props3 = {
//   img: "https://cdn.langeek.co/photo/22317/original/",
//   title: "Painter",
// };
// const props4 = {
//   img: "https://img.freepik.com/free-vector/construction-worker-cutting-wood_1308-99133.jpg",  
//   title: "Carpenter",
// };
// const props5 = {
//   img: "https://static.vecteezy.com/system/resources/previews/005/425/571/non_2x/man-planting-a-tree-in-garden-vector.jpg",  
//   title: "Gardener",
  
// };
// const props6 = {
//   img: "https://cdn.pixabay.com/photo/2020/07/08/14/29/mechanic-5384089_1280.png",  
//   title: "Mechanic",
// };
// const props7 = {
//   img: "https://img.lovepik.com/free_png/32/40/09/01i58PICPa95AMH400bqh_PIC2018.png_860.png",  
//   title: "Cleaner",
// };
// const props8 = {
//   img: "https://p1.hiclipart.com/preview/816/703/806/chef-cooking-cartoon-kitchen-drawing-food-chief-cook-meal-png-clipart.jpg",  
//   title: "Cook",
// };




// export default function Home() {
//   return (
//     <div className="flex flex-col items-center bg-[#f8ebd1]">
     
//       {/* <TaskRequsts /> */}
//       <div className="text-3xl font-bold m-5 text-black">
//         Popular Services
//       </div>
//       <div className="flex flex-wrap justify-center">
//         {/* <Link to="/profile"> */}
//           <ServiceCard post={props} />
//         {/* </Link> */}
//         <ServiceCard post={props2} />
//         <ServiceCard post={props3} />
//         <ServiceCard post={props4} />
//         <ServiceCard post={props5} />
//         <ServiceCard post={props6} />
//         <ServiceCard post={props7} />
//         <ServiceCard post={props8} />

//       </div >
//       <Search />
      
//     </div>
//   );
// }

// import React, { useState } from "react";
// import axios from "axios";
// import ServiceCard from "../components/ServiceCard";
// import ServiceProviderList from "../components/ServiceProviderList";
// import Search from "../components/Search"; // Make sure this import is correct
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// const serviceData = [
//   { img: "https://cdn.vectorstock.com/i/500p/35/09/electrician-makes-the-connection-vector-43663509.jpg", title: "Electrician" },
//   { img: "https://cdn.langeek.co/photo/21064/original/", title: "Plumber" },
//   { img: "https://cdn.langeek.co/photo/22317/original/", title: "Painter" },
//   { img: "https://img.freepik.com/free-vector/construction-worker-cutting-wood_1308-99133.jpg", title: "Carpenter" },
//   { img: "https://static.vecteezy.com/system/resources/previews/005/425/571/non_2x/man-planting-a-tree-in-garden-vector.jpg", title: "Gardener" },
//   { img: "https://cdn.pixabay.com/photo/2020/07/08/14/29/mechanic-5384089_1280.png", title: "Mechanic" },
//   { img: "https://img.lovepik.com/free_png/32/40/09/01i58PICPa95AMH400bqh_PIC2018.png_860.png", title: "Cleaner" },
//   { img: "https://p1.hiclipart.com/preview/816/703/806/chef-cooking-cartoon-kitchen-drawing-food-chief-cook-meal-png-clipart.jpg", title: "Cook" },
//   { img: "https://img.lovepik.com/free_png/32/40/09/01i58PICPa95AMH400bqh_PIC2018.png_860.png", title: "Cleaner" },
// ];

// export default function Home() {
//   const [serviceProviders, setServiceProviders] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [searchPerformed, setSearchPerformed] = useState(false); // Added state for search tracking
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleSearch = async (title) => {
//     console.log("Searching for service:", title);
//     setLoading(true); // Show loading state
//     setSearchPerformed(true); // Indicate that a search has been performed
  
//     try {
//       const response = await axios.get("http://localhost:8080/api/v1/sp/service/"+title);
//       console.log("API response:", response.data);
  
//       // Navigate to the new service page and pass the data as state
//       navigate("/service/"+title, { state: { providers: response.data } });
//     } catch (error) {
//       console.error("Error fetching service providers:", error);
//       navigate("/service/"+title, { state: { providers: [] } }); // Pass empty data on error
//     } finally {
//       setLoading(false); // Hide loading state
//     }
//   };

//   return (
//     <div className="flex flex-col items-center bg-[#f8ebd1] min-h-screen">
//       <div className="text-3xl font-bold m-5 text-black">
//         Popular Services
//       </div>
//       <div className="flex flex-wrap justify-center">
//         {serviceData.map((serviceProp, index) => (
//           <ServiceCard key={index} post={serviceProp} handleSearch={handleSearch} />
//         ))}
//       </div>
//       <Search />
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import axios from "axios";
import ServiceCard from "../components/ServiceCard";
import { useNavigate } from "react-router-dom"; 
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import Search from "../components/Search";

const serviceData = [
  { img: "https://cdn.vectorstock.com/i/500p/35/09/electrician-makes-the-connection-vector-43663509.jpg", title: "Electrician" },
  { img: "https://cdn.langeek.co/photo/21064/original/", title: "Plumber" },
  { img: "https://cdn.langeek.co/photo/22317/original/", title: "Painter" },
  { img: "https://img.freepik.com/free-vector/construction-worker-cutting-wood_1308-99133.jpg", title: "Carpenter" },
  { img: "https://static.vecteezy.com/system/resources/previews/005/425/571/non_2x/man-planting-a-tree-in-garden-vector.jpg", title: "Gardener" },
  { img: "https://cdn.pixabay.com/photo/2020/07/08/14/29/mechanic-5384089_1280.png", title: "Mechanic" },
  { img: "https://img.lovepik.com/free_png/32/40/09/01i58PICPa95AMH400bqh_PIC2018.png_860.png", title: "Cleaner" },
  { img: "https://p1.hiclipart.com/preview/816/703/806/chef-cooking-cartoon-kitchen-drawing-food-chief-cook-meal-png-clipart.jpg", title: "Cook" },
];

export default function Home() {
  const [serviceProviders, setServiceProviders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1-second animation duration
  }, []);

  const handleSearch = async (title) => {
    console.log("Searching for service:", title);
    setLoading(true); 
    setSearchPerformed(true); 
  
    try {
      const response = await axios.get("http://localhost:8080/api/v1/sp/service/"+title);
      console.log("API response:", response.data);
  
      navigate("/service/"+title, { state: { providers: response.data } });
    } catch (error) {
      console.error("Error fetching service providers:", error);
      navigate("/service/"+title, { state: { providers: [] } }); 
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="flex flex-col items-center bg-[#f8ebd1] min-h-screen">
      <div className="text-3xl font-bold m-5 text-black" data-aos="fade-right">
        Popular Services
      </div>
      <div className="flex flex-wrap justify-center">
        {serviceData.map((serviceProp, index) => (
          <div key={index} data-aos="fade-right" data-aos-delay="100" data-aos-duration="1200"> {/* Add AOS animation */}
            <ServiceCard post={serviceProp} handleSearch={handleSearch} />
          </div>
        ))}
      </div>
      <Search />
    </div>
  );
}
