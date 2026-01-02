import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Login() {
  const navigate = useNavigate();
  const [isRetailer, setIsRetailer] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (isRetailer) {
      navigate("/retailer");
    } else {
      navigate("/consumer");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex items-center justify-center mt-20">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md border border-gray-100">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Login</h2>
          <input type="email" placeholder="Email ID" required className="w-full p-3 border rounded-lg mb-4 outline-none focus:ring-2 focus:ring-blue-900/20" />
          <input type="password" placeholder="Password" required className="w-full p-3 border rounded-lg mb-6 outline-none focus:ring-2 focus:ring-blue-900/20" />
          <div className="flex items-center mb-6">
            <input 
              type="checkbox" 
              id="role-toggle" 
              className="h-5 w-5 text-blue-900 border-gray-300 rounded focus:ring-blue-900"
              checked={isRetailer}
              onChange={(e) => setIsRetailer(e.target.checked)}
            />
            <label htmlFor="role-toggle" className="ml-3 text-gray-700 font-medium">
              {isRetailer ? "Logging in as Retailer" : "Logging in as Consumer"}
            </label>
          </div>
          <button className="w-full py-3 bg-blue-900 text-white rounded-lg font-bold">Sign In</button>
          <p className="mt-4 text-center text-sm">New here? <Link to="/signup" className="text-blue-600 underline">Sign Up</Link></p>
        </form>
      </div>
    </div>
  );
}