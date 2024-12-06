

import React from "react";
import { useLocation } from "react-router-dom";
import ServiceProviderCard from "./ServiceProviderCard";

const ResultsPage = () => {
  const location = useLocation();
  const { searchResults } = location.state || { searchResults: [] };

  return (
    <div className="flex flex-col items-center bg-[#f8ebd1] py-4 px-2">
      <h2
        className="text-2xl md:text-3xl text-gray-800 mb-4 text-center font-bold"
        style={{ marginTop: "30px" }}
      >
        Search Results:
      </h2>

      {searchResults.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {searchResults.map((result) => (
            <li 
              key={result.id} 
              className="p-2" // Added padding for spacing around cards
            >
              <div className="bg-white rounded-lg shadow-md">
                <ServiceProviderCard provider={result} />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No results found.</p>
      )}
    </div>
  );
};

export default ResultsPage;
