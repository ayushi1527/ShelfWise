import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Signup() {
  const navigate = useNavigate();
  const handleSignup = (e) => { e.preventDefault(); navigate("/retailer"); };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex items-center justify-center mt-12">
        <form onSubmit={handleSignup} className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Create Account</h2>
          <input type="text" placeholder="Full Name" required className="w-full p-3 border rounded-lg mb-4" />
          <input type="email" placeholder="Email" required className="w-full p-3 border rounded-lg mb-4" />
          <select className="w-full p-3 border rounded-lg mb-4 text-gray-600 bg-white">
            <option value="consumer">I am a Consumer</option>
            <option value="retailer">I am a Retailer</option>
          </select>
          <input type="password" placeholder="Create Password" required className="w-full p-3 border rounded-lg mb-6" />
          <button className="w-full py-3 bg-blue-900 text-white rounded-lg font-bold">Get Started</button>
          <p className="mt-4 text-center text-sm text-gray-600">Already have an account? <Link to="/login" className="text-blue-600 underline">Login</Link></p>
        </form>
      </div>
    </div>
  );
}