import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { clearUser } from "../Redux/userSlice";
import { useDispatch } from "react-redux";

// Import logo
import logo from '../../assets/Images/logo.png'; // Adjusted import path


function Header() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = '/';
    dispatch(clearUser());
  };

  return (
    <header>
      {/* Top blue stripe with contact information */}
      <div className="bg-[#0C2E8A] text-white py-3">
        <div className="container mx-auto flex justify-between items-center">
          <div></div>
          <div>
            <Link to="/Login" className="mr-4 text-xl font-bold hover:text-blue-400">Login</Link>
            <Link to="/register" className="text-xl font-bold  hover:text-blue-400">Register</Link>
          </div>
        </div>
      </div>
      
      {/* White middle stripe with logo and main info */}
      <div className="bg-white text-[#0C2E8A] py-2">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-white rounded-full p-2">
              <img src={logo} alt="ISGA Holdings Logo" className="h-[100px] w-[150px]" />
            </div>
            <h1 className="font-bold text-4xl ml-2">ISGA HOLDINGS</h1>
          </div>
          <div className="text-center text-xl">
            <div><i className="fa fa-map-marker"></i> Nuwara Eliya, Sri Lanka</div>
            <div><i className="fa fa-clock"></i> Monday to Saturday, 8am to 8pm</div>
          </div>
          <div> 
            <button className="bg-[#0C2E8A] text-white rounded-full py-2 px-4 text-xl hover:bg-blue-400">
              <a href="tel:+94706300000" style={{ color: '#fff' }}>Request a call</a>
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom blue stripe with navigation */}
      <div className="bg-[#0C2E8A] text-white py-3">
        <div className="container mx-auto flex justify-end">
          <Link to="/" className="px-6 text-xl font-bold hover:text-blue-400">Home</Link>
          <Link to="/cars" className="px-6 text-xl font-bold hover:text-blue-400">Cars</Link>
          <Link to="/blog" className="px-6 text-xl font-bold hover:text-blue-400">Blog</Link>
          <Link to="/about" className="px-6 text-xl font-bold hover:text-blue-400">About</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
