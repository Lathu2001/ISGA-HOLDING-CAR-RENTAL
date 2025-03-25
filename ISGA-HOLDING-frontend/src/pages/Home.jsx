// import React from 'react';
// import Slider from 'react-slick';
// import Footer from '../components/Footer/Footer';
// import { Link } from "react-router-dom";

// // Import images directly
// import car1 from '../assets/Images/car1.jpg';
// import car2 from '../assets/Images/car2.jpg';
// import car3 from '../assets/Images/car3.jpg';
// import car4 from '../assets/Images/car4.jpg';
// import car5 from '../assets/Images/car5.jpg';
// import car6 from '../assets/Images/car6.jpg'; // New image
// import wedding1 from '../assets/Images/wedding1.jpg';
// import wedding2 from '../assets/Images/wedding2.jpg';
// import wedding3 from '../assets/Images/wedding3.jpg';

// // Image Arrays
// const carImages = [car1, car2, car3, car4, car5];
// const weddingImages = [wedding1, wedding2, wedding3];

// export default function Home() {
//   // Slider settings for both carousels
//   const settings1 = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   };
//   const settings2 = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <div className="flex flex-col items-center bg-white min-h-screen">
//       {/* Top Section with the new image */}
//       <div className="w-full flex justify-center bg-[#0779ec]">
//         <img src={car6} alt="ISGA Holdings" className="max-w-full max-h-[90vh] object-contain" />
//       </div>
//         <div className="w-full py-8 text-center text-blue bg-white">
//           <p className="text-4xl mb-14 ">Drive Your Dreams with Us Reliable Vehicles for Every Journey</p>
//           <Link to="/Booking">
//             <button className="justify-center items-center px-6 py-2 text-4xl bg-blue-700 text-white font-semibold rounded-full hover:bg-blue-800">
//               Book Now
//             </button>
//           </Link>
//         </div>
    

//       {/* Available Cars Section */}
//       <div className="text-4xl font-bold m-8 text-[#1e3a8a]">Available Cars</div>
//       <div className="w-full max-w-5xl px-4">
//         <Slider {...settings1}>
//           {carImages.map((image, index) => (
//             <div key={index} className="flex justify-center items-center">
//               <img
//                 src={image}
//                 alt={`Car ${index + 1}`}
//                 className="w-full h-[500px] object-cover rounded-lg shadow-lg"
//               />
//             </div>
//           ))}
//         </Slider>
//       </div>

//       {/* Wedding Cars Section */}
//       <div className="text-4xl font-bold m-8 text-[#1e3a8a]">Wedding Cars</div>
//       <div className="w-full max-w-5xl px-4">
//         <Slider {...settings2}>
//           {weddingImages.map((image, index) => (
//             <div key={index} className="flex justify-center items-center">
//               <img
//                 src={image}
//                 alt={`Wedding Car ${index + 1}`}
//                 className="w-full h-[500px] object-cover rounded-lg shadow-lg"
//               />
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// }




import React from 'react';
import Slider from 'react-slick';
import { Link } from "react-router-dom";
import { 
  CarIcon, 
  CalendarIcon, 
  ShieldCheckIcon, 
  MapPinIcon, 
  StarIcon 
} from 'lucide-react';

// Import images directly
import car1 from '../assets/Images/car1.jpg';
import car2 from '../assets/Images/car2.jpg';
import car3 from '../assets/Images/car3.jpg';
import car4 from '../assets/Images/car4.jpg';
import car5 from '../assets/Images/car5.jpg';
import car6 from '../assets/Images/car6.jpg';
import wedding1 from '../assets/Images/wedding1.jpg';
import wedding2 from '../assets/Images/wedding2.jpg';
import wedding3 from '../assets/Images/wedding3.jpg';

export default function Home() {
  // Slider settings for carousels
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    className: "w-full",
    dotsClass: "slick-dots custom-dots",
  };

  // Image arrays
  const carImages = [car1, car2, car3, car4, car5];
  const weddingImages = [wedding1, wedding2, wedding3];

  // Services data
  const services = [
    {
      icon: <CarIcon className="w-12 h-12 text-blue-600" />,
      title: "Wide Range of Vehicles",
      description: "From compact cars to luxury sedans, we have the perfect vehicle for every occasion."
    },
    {
      icon: <CalendarIcon className="w-12 h-12 text-blue-600" />,
      title: "Flexible Bookings",
      description: "Easy online booking with flexible dates and instant confirmation."
    },
    {
      icon: <ShieldCheckIcon className="w-12 h-12 text-blue-600" />,
      title: "Safety First",
      description: "All our vehicles are meticulously maintained and regularly serviced."
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      quote: "Amazing service! The car was clean, comfortable, and perfect for our wedding day.",
      location: "Los Angeles, CA"
    },
    {
      name: "Michael Chen",
      quote: "Smooth booking process and incredible customer support. Highly recommended!",
      location: "San Francisco, CA"
    },
    {
      name: "Emily Rodriguez",
      quote: "Great prices and a fantastic selection of vehicles. Will definitely rent again!",
      location: "New York, NY"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-5xl font-extrabold leading-tight font-serif">
              Drive Your Dreams with Exceptional Vehicles
            </h1>
            <p className="text-xl text-blue-100 mb-16 font-serif">
              Discover comfort, reliability, and luxury in every journey.
            </p>
            <Link to="/Booking">
              <button className="font-serif px-8 py-2.5 bg-white text-blue-800 font-bold rounded-full 
                hover:bg-blue-50 mt-8 transition duration-300 transform hover:scale-105 shadow-lg">
                Book Your Ride Now
              </button>
            </Link>
          </div>
          <div className="hidden md:block">
            <img 
              src={car6} 
              alt="ISGA Holdings" 
              className="w-full rounded-xl shadow-2xl transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* new section


<section className='py-16 bg-gray-200'>
  <div className="grid grid-cols-2 gap-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">
            Available Cars
          </h2>
          <div className="max-w-4xl mx-auto">
            <Slider {...sliderSettings}>
              {carImages.map((image, index) => (
                <div key={index} className="px-2">
                  <img
                    src={image}
                    alt={`Car ${index + 1}`}
                    className="w-full h-[500px] object-cover rounded-xl shadow-lg"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">
            Wedding Cars
          </h2>
          <div className="max-w-4xl mx-auto">
            <Slider {...sliderSettings}>
              {weddingImages.map((image, index) => (
                <div key={index} className="px-2">
                  <img
                    src={image}
                    alt={`Wedding Car ${index + 1}`}
                    className="w-full h-[500px] object-cover rounded-xl shadow-lg"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

  </div>
</section> */}


<section className='py-16 bg-gray-50'>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-2 gap-12">
      {/* Available Cars Column */}
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-blue-900 text-center">
          Available Cars
        </h2>
        <div className="max-w-xl mx-auto">
          <Slider {...sliderSettings}>
            {carImages.map((image, index) => (
              <div key={index} className="px-2">
                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <img
                    src={image}
                    alt={`Car ${index + 1}`}
                    className="w-full h-[400px] object-cover rounded-xl"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-semibold text-blue-800">
                      Luxury Sedan
                    </h3>
                    <p className="text-gray-600">
                      Perfect for business and leisure
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Wedding Cars Column */}
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-blue-900 text-center">
          Wedding Cars
        </h2>
        <div className="max-w-xl mx-auto">
          <Slider {...sliderSettings}>
            {weddingImages.map((image, index) => (
              <div key={index} className="px-2">
                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <img
                    src={image}
                    alt={`Wedding Car ${index + 1}`}
                    className="w-full h-[400px] object-cover "
                  />
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-semibold text-blue-800">
                      Wedding Special
                    </h3>
                    <p className="text-gray-600">
                      Elegant rides for your special day
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="flex items-center mb-4">
                  <StarIcon className="w-5 h-5 text-yellow-500 mr-1" />
                  <StarIcon className="w-5 h-5 text-yellow-500 mr-1" />
                  <StarIcon className="w-5 h-5 text-yellow-500 mr-1" />
                  <StarIcon className="w-5 h-5 text-yellow-500 mr-1" />
                  <StarIcon className="w-5 h-5 text-yellow-500" />
                </div>
                <p className="text-gray-700 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <MapPinIcon className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="font-semibold text-blue-800">
                    {testimonial.name}, {testimonial.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Book your perfect ride today and experience the difference.
          </p>
          <Link to="/Booking">
            <button className="px-10 py-4 bg-white text-blue-800 font-bold rounded-full 
              hover:bg-blue-50 transition duration-300 transform hover:scale-105 shadow-lg">
              Book Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}