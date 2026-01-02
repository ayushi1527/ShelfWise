import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Consumer from "./pages/Consumer";
import Retailer from "./pages/Retailer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/consumer" element={<Consumer />} />
        <Route path="/retailer" element={<Retailer />} />
      </Routes>
    </BrowserRouter>
  );
}