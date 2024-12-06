

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setUser } from "../components/Redux/userSlice";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";


// export default function Login() {
//   const [form, setForm] = useState({ username: "", password: "" });
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { username, password } = form;

 

//   const login = async () => {
//     axios
//       .post("http://localhost:8080/api/v1/auth/login", form)
//       .then((response) => {
//         if (response.data.success) {
//           dispatch(setUser(response.data));
//           const redirect = response.data.role === "USER" ? "/UserHome" : "/dashboard";
//           navigate(redirect);
//         } else {
//           const message = response.data.message;
//           console.error(message);
//         }
//       })
//       .catch((error) => {
//         alert("Invalid Username or Password");
//         console.log(error);
//       });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     login();
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   return (
//     <section className="vh-100 bg-white" >
//       <div className="container py-5 h-full">
//         <div className="row d-flex justify-center align-items-center h-full">
//           <div className="col-12 col-md-8 col-lg-6 col-xl-5">
//             <div className="card bg-gradient-to-b from-[#431261] to-[#890487] rounded-lg shadow-lg ">
//               <div className="card-body p-5 text-white">
//                 <form onSubmit={handleSubmit}>
//                   <div className="text-center mb-5">
//                     <h1 className="fw-bold text-3xl">Sign In</h1>
//                     <p className="fw-normal text-lg">
//                       Sign into your account
//                     </p>
//                   </div>

//                   {/* Username Input */}
//                   <div className="mb-4">
//                     <input
//                       onChange={handleChange}
//                       name="username"
//                       value={username}
//                       placeholder="Enter your user name"
//                       type="username"
//                       id="form2Example17"
//                       className="form-control form-control-lg bg-gray-300 w-full py-2 px-3 rounded-md"
//                     />
//                     <label className="form-label text-white" htmlFor="form2Example17">
//                       User name
//                     </label>
//                   </div>

//                   {/* Password Input */}
//                   <div className="mb-4">
//                     <input
//                       onChange={handleChange}
//                       name="password"
//                       value={password}
//                       placeholder="Enter your password"
//                       type="password"
//                       id="form2Example27"
//                       className="form-control form-control-lg bg-gray-300 w-full py-2 px-3 rounded-md"
//                     />
//                     <label className="form-label text-white" htmlFor="form2Example27">
//                       Password
//                     </label>
//                   </div>

//                   {/* Login Button */}
//                   <div className="mb-4">
//                     <button
//                       className="w-full py-3 rounded-lg bg-black text-white font-bold hover:bg-white hover:text-black hover:ring-2 hover:ring-black transition duration-200"
//                       type="submit"
//                     >
//                       Login
//                     </button>
//                   </div>

//                 </form>

//                 {/* Register Link */}
//                 <div className="text-center mt-4">
//                   <p className="text-white">
//                     Don't have an account?{" "}
//                     <Link to="/register">
//                       <span className="text-yellow-500 underline">Register here</span>
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../components/Redux/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { username, password } = form;

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in milliseconds)
    });
  }, []);

  const login = async () => {
    axios
      .post("http://localhost:8080/api/v1/auth/login", form)
      .then((response) => {
        if (response.data.success) {
          dispatch(setUser(response.data));
          const redirect =
            response.data.role === "USER" ? "/UserHome" : "/dashboard";
          navigate(redirect);
        } else {
          const message = response.data.message;
          console.error(message);
        }
      })
      .catch((error) => {
        alert("Invalid Username or Password");
        console.log(error);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    login();
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="vh-100 bg-white" data-aos="fade-up">
      <div className="container py-5 h-full">
        <div className="row d-flex justify-center align-items-center h-full">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-gradient-to-b from-[#431261] to-[#890487] rounded-lg shadow-lg " data-aos="fade-in">
              <div className="card-body p-5 text-white">
                <form onSubmit={handleSubmit}>
                  <div className="text-center mb-5">
                    <h1 className="fw-bold text-3xl">Sign In</h1>
                    <p className="fw-normal text-lg">
                      Sign into your account
                    </p>
                  </div>

                  {/* Username Input */}
                  <div className="mb-4">
                    <input
                      onChange={handleChange}
                      name="username"
                      value={username}
                      placeholder="Enter your user name"
                      type="username"
                      id="form2Example17"
                      className="form-control form-control-lg bg-gray-300 w-full py-2 px-3 rounded-md"
                    />
                    <label className="form-label text-white" htmlFor="form2Example17">
                      User name
                    </label>
                  </div>

                  {/* Password Input */}
                  <div className="mb-4">
                    <input
                      onChange={handleChange}
                      name="password"
                      value={password}
                      placeholder="Enter your password"
                      type="password"
                      id="form2Example27"
                      className="form-control form-control-lg bg-gray-300 w-full py-2 px-3 rounded-md"
                    />
                    <label className="form-label text-white" htmlFor="form2Example27">
                      Password
                    </label>
                  </div>

                  {/* Login Button */}
                  <div className="mb-4">
                    <button
                      className="w-full py-3 rounded-lg bg-black text-white font-bold hover:bg-white hover:text-black hover:ring-2 hover:ring-black transition duration-200"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>

                </form>

                {/* Register Link */}
                <div className="text-center mt-4">
                  <p className="text-white">
                    Don't have an account?{" "}
                    <Link to="/register">
                      <span className="text-yellow-500 underline">Register here</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
