import React from "react";
import { useParams, useLocation } from "react-router-dom";
import ServiceProviderList from "../components/ServiceProviderList";

const ServicePage = () => {
  const { title } = useParams();
  const location = useLocation();
  const { providers } = location.state || { providers: [] }; // Default to an empty array

  return (
    <div className="flex flex-col items-center bg-[#f8ebd1] min-h-screen">
      <h1 className="text-4xl font-bold m-5 text-black"> {title} Service</h1>
      {providers.length > 0 ? (
        <ServiceProviderList providers={providers} />
      ) : (
        <p className="text-black">No providers available for {title} service.</p>
      )}
    </div>
  );
};

export default ServicePage;