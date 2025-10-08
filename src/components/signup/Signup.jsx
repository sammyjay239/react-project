  // import React, { useState } from "react";
  // import { useNavigate } from "react-router-dom";
  // import api from "../../utils/api"; // axios instance
  // import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

  // const Auth = () => {
  //   const [isLogin, setIsLogin] = useState(false);
  //   const [showPassword, setShowPassword] = useState(false);
  //   const [showLoginPassword, setShowLoginPassword] = useState(false);
  //   const navigate = useNavigate();

  //   // 🔹 Validate password strength
  //   const validatePassword = (password) => {
  //     const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
  //     return regex.test(password);
  //   };

  //   // 🔹 Handle Signup
  //   const handleSignup = async (e) => {
  //     e.preventDefault();
  //     const form = new FormData(e.target);
  //     const firstName = form.get("firstName");
  //     const lastName = form.get("lastName");
  //     const email = form.get("email");
  //     const password = form.get("password");
  //     const confirmPassword = form.get("confirmPassword");

  //     if (!validatePassword(password)) {
  //       alert(
  //         "Password must be at least 8 characters long and include a number and special character."
  //       );
  //       return;
  //     }

  //     if (password !== confirmPassword) {
  //       alert("Passwords do not match!");
  //       return;
  //     }

  //     try {
  //       const { data } = await api.post("/auth/signup", {
  //         firstName,
  //         lastName,
  //         email,
  //         password,
  //         confirmPassword,
  //       });

  //       // ✅ Store user + token
  //       localStorage.setItem("token", data.token);
  //       localStorage.setItem("user", JSON.stringify(data.user));

  //       alert("Signup successful!");
  //       navigate("/"); // redirect to landing page
  //     } catch (error) {
  //       console.error("Signup error:", error.response?.data || error.message);
  //       alert(error.response?.data?.message || "Signup failed!");
  //     }
  //   };

  //   // 🔹 Handle Login
  //   const handleLogin = async (e) => {
  //     e.preventDefault();
  //     const form = new FormData(e.target);
  //     const email = form.get("email");
  //     const password = form.get("password");

  //     try {
  //       const { data } = await api.post("/auth/login", { email, password });

  //       // ✅ Save user and token
  //       localStorage.setItem("token", data.token);
  //       localStorage.setItem("user", JSON.stringify(data.user));

  //       alert(`Welcome back, ${data.user.firstName}!`);
  //       navigate("/"); // redirect to landing page
  //     } catch (error) {
  //       console.error("Login error:", error.response?.data || error.message);
  //       alert(error.response?.data?.message || "Login failed!");
  //     }
  //   };

  //   return (
  //     <div className="flex justify-center items-center min-h-screen bg-gray-100">
  //       <div className="w-[400px] bg-gray-600 rounded-2xl p-8 shadow-lg">
  //         {!isLogin ? (
  //           <>
  //             <h1 className="text-2xl font-bold text-blue-600 text-center mb-4">
  //               Sign Up
  //             </h1>
  //             <form onSubmit={handleSignup} className="flex flex-col space-y-4">
  //               <input
  //                 type="text"
  //                 name="firstName"
  //                 placeholder="First Name"
  //                 required
  //                 className="p-2 rounded-lg w-full"
  //               />
  //               <input
  //                 type="text"
  //                 name="lastName"
  //                 placeholder="Last Name"
  //                 required
  //                 className="p-2 rounded-lg w-full"
  //               />
  //               <input
  //                 type="email"
  //                 name="email"
  //                 placeholder="Email"
  //                 required
  //                 className="p-2 rounded-lg w-full"
  //               />

  //               {/* Password with toggle 👁️ */}
  //               <div className="relative w-full">
  //                 <input
  //                   type={showPassword ? "text" : "password"}
  //                   name="password"
  //                   placeholder="Password"
  //                   required
  //                   className="p-2 rounded-lg w-full pr-10"
  //                 />
  //                 <button
  //                   type="button"
  //                   onClick={() => setShowPassword(!showPassword)}
  //                   className="absolute inset-y-0 right-3 flex items-center text-gray-300"
  //                 >
  //                   {showPassword ? (
  //                     <EyeSlashIcon className="h-5 w-5" />
  //                   ) : (
  //                     <EyeIcon className="h-5 w-5" />
  //                   )}
  //                 </button>
  //               </div>

  //               <input
  //                 type="password"
  //                 name="confirmPassword"
  //                 placeholder="Confirm Password"
  //                 required
  //                 className="p-2 rounded-lg w-full"
  //               />

  //               <button
  //                 type="submit"
  //                 className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
  //               >
  //                 Sign Up
  //               </button>
  //             </form>
  //             <p className="text-center mt-4">
  //               Already have an account?{" "}
  //               <button
  //                 onClick={() => setIsLogin(true)}
  //                 className="text-blue-300 hover:underline"
  //               >
  //                 Log In
  //               </button>
  //             </p>
  //           </>
  //         ) : (
  //           <>
  //             <h1 className="text-2xl font-bold text-blue-600 text-center mb-4">
  //               Log In
  //             </h1>
  //             <form onSubmit={handleLogin} className="flex flex-col space-y-4">
  //               <input
  //                 type="email"
  //                 name="email"
  //                 placeholder="Email Address"
  //                 required
  //                 className="p-2 rounded-lg w-full"
  //               />

  //               {/* Password with toggle 👁️ */}
  //               <div className="relative w-full">
  //                 <input
  //                   type={showLoginPassword ? "text" : "password"}
  //                   name="password"
  //                   placeholder="Password"
  //                   required
  //                   className="p-2 rounded-lg w-full pr-10"
  //                 />
  //                 <button
  //                   type="button"
  //                   onClick={() => setShowLoginPassword(!showLoginPassword)}
  //                   className="absolute inset-y-0 right-3 flex items-center text-gray-300"
  //                 >
  //                   {showLoginPassword ? (
  //                     <EyeSlashIcon className="h-5 w-5" />
  //                   ) : (
  //                     <EyeIcon className="h-5 w-5" />
  //                   )}
  //                 </button>
  //               </div>

  //               <button
  //                 type="submit"
  //                 className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
  //               >
  //                 Log In
  //               </button>
  //             </form>
  //             <p className="text-center mt-4">
  //               Don’t have an account?{" "}
  //               <button
  //                 onClick={() => setIsLogin(false)}
  //                 className="text-blue-300 hover:underline"
  //               >
  //                 Sign Up
  //               </button>
  //             </p>
  //           </>
  //         )}
  //       </div>
  //     </div>
  //   );
  // };

  // export default Auth;
