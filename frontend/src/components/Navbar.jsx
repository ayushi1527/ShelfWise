import React from "react";
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="flex items-center gap-2">
        <div className="h-8 w-8 bg-blue-900 rounded-md flex items-center justify-center text-white font-bold">S</div>
        <span className="text-2xl font-bold text-blue-900">ShelfWise</span>
      </Link>
      <div className="flex gap-4">
        <Link to="/login" className="px-4 py-2 text-gray-600 font-medium hover:text-blue-900">Login</Link>
        <Link to="/signup" className="px-6 py-2 bg-blue-900 text-white rounded-lg font-bold hover:bg-blue-800 transition">Sign Up</Link>
      </div>
    </nav>
  );
}