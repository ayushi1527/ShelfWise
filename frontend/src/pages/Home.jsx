import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

/**
 * Home Component
 * This is the landing page that users see first.
 * It contains the Navbar and the Hero section.
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* The Global Navbar with Login/Signup buttons */}
      <Navbar />

      {/* Main content area */}
      <main className="flex-grow flex flex-col">
        {/* The Hero section with the "Continue to Login" button */}
        <Hero />

        {/* Optional: Simple Features Overview Section */}
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-900">For Retailers</h3>
              <p className="text-gray-600">
                Unlock AI-driven demand forecasting, real-time inventory optimization, 
                and automated alerts to reduce waste and boost efficiency.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-500">For Consumers</h3>
              <p className="text-gray-600">
                Experience a personalized shopping journey with AI assistants, 
                sustainability tracking, and instant access to the best deals.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} ShelfWise. All rights reserved.
        </p>
      </footer>
    </div>
  );
}