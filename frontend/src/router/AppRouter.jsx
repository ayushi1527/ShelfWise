import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Retailer from "../pages/Retailer";
import Consumer from "../pages/Consumer";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/retailer" element={<Retailer />} />
        <Route path="/consumer" element={<Consumer />} />
      </Routes>
    </BrowserRouter>
  );
}
