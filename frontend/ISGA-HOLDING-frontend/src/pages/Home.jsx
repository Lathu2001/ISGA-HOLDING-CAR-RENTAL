import React from 'react';
import Slider from "react-slick";
import Footer from "../components/Footer/Footer";

// Import images directly
import car1 from '../assets/Images/car1.jpg';
import car2 from '../assets/Images/car2.jpg';
import car3 from '../assets/Images/car3.jpg';
import car4 from '../assets/Images/car4.jpg';
import car5 from '../assets/Images/car5.jpg';
import wedding1 from '../assets/Images/wedding1.jpg';
import wedding2 from '../assets/Images/wedding2.jpg';
import wedding3 from '../assets/Images/wedding3.jpg';

// Image Arrays
const carImages = [car1, car2, car3, car4, car5];
const weddingImages = [wedding1, wedding2, wedding3];

export default function Home() {
  // Slider settings for both carousels
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="flex flex-col items-center bg-[#f5f5f5] min-h-screen">
      {/* Available Cars Section */}
      <div className="text-4xl font-bold m-8 text-[#1e3a8a]">Available Cars</div>
      <div className="w-full max-w-5xl px-4">
        <Slider {...settings1}>
          {carImages.map((image, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={image}
                alt={`Car ${index + 1}`}
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Wedding Cars Section */}
      <div className="text-4xl font-bold m-8 text-[#1e3a8a]">Wedding Cars</div>
      <div className="w-full max-w-5xl px-4">
        <Slider {...settings2}>
          {weddingImages.map((image, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={image}
                alt={`Wedding Car ${index + 1}`}
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Footer */}
      
    </div>
  );
}
