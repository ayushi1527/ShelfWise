import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gray-50 flex-grow">
      <h1 className="text-6xl font-extrabold text-blue-900 mb-6">ShelfWise</h1>
      <p className="text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
        Empowering retailers with AI-driven insights and providing consumers with a smarter, personalized shopping journey.
      </p>
      <button 
        onClick={() => navigate("/login")}
        className="px-10 py-4 bg-blue-900 text-white rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition-transform"
      >
        Continue to Login
      </button>
    </section>
  );
}