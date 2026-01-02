import React, { useState } from "react";
import { Link } from "react-router-dom";
import FeatureCard from "../components/FeatureCard";
export default function Consumer() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [showScanner, setShowScanner] = useState(false);
  // Complete List of Consumer Features
  const consumerFeatures = [
    {
      icon: "🎯",
      text: "Personalized Recommendations",
      color: "border-blue-500",
    },
    { icon: "🤖", text: "AI Shopping Assistant", color: "border-blue-500" },
    { icon: "📱", text: "Smart QR Education", color: "border-blue-500" },
    {
      icon: "♻️",
      text: "Sustainability Tracker",
      color: "border-blue-500"
    },
    { icon: "🔥", text: "Flash Deal Alerts", color: "border-blue-500" },
    { icon: "👕", text: "3D Try On", color: "border-blue-500" },
  ];

  // Dummy data for Recent Activity
  const activities = [
    {
      id: 1,
      task: "AI Assistant Chat",
      status: "Completed",
      date: "Today, 2:45 PM",
    },
    {
      id: 2,
      task: "QR Product Scan",
      status: "Viewed",
      date: "Yesterday, 11:20 AM",
    },
    {
      id: 3,
      task: "Flash Deal Claimed",
      status: "Success",
      date: "Oct 24, 2023",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* SIDEBAR */}
      <aside
        className={`bg-blue-600 text-white w-72 fixed h-full transition-transform duration-300 z-50 shadow-2xl 
        ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-72"
        } lg:translate-x-0`}
      >
        <Link
          to="/"
          className="p-6 text-2xl font-bold border-b border-slate-800 flex items-center gap-2"
        >
          <img src="/logo.png" alt="ShelfWise Logo" className="w-10 h-10" />
          ShelfWise
        </Link>

        <nav className="p-4 flex flex-col h-[calc(100%-80px)] justify-between">
          <ul className="space-y-2">
            <p className="text-xs font-semibold text-blue-200 uppercase tracking-wider mb-2 px-2">
              Main Menu
            </p>
            {consumerFeatures.map((f, i) => (
              <li
                key={i}
                className="flex items-center gap-3 p-3 hover:bg-blue-700 rounded-xl cursor-pointer transition-colors group"
                onClick={() => setSidebarOpen(false)}
              >
                <span className="text-xl group-hover:scale-120 transition-transform">
                  {f.icon}
                </span>
                <span className="font-medium">{f.text}</span>
              </li>
            ))}
          </ul>

          <div className="p-4 bg-blue-700 rounded-2xl mb-4">
            <p className="text-xs text-blue-100">Logged in as</p>
            <p className="font-bold">Consumer User</p>
            <Link
              to="/login"
              className="text-xs underline mt-2 block opacity-70 hover:opacity-100"
            >
              Logout
            </Link>
          </div>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 lg:ml-72 flex flex-col">
        {/* DASHBOARD NAVBAR */}
        <nav className="bg-white border-b border-gray-200 p-4 sticky top-0 flex justify-between items-center z-40">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg text-2xl"
            >
              ☰
            </button>
            <h2 className="text-xl font-bold text-gray-800 hidden sm:block">
              Consumer Dashboard
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="px-5 py-2 bg-gray-900 text-white rounded-lg font-bold hover:bg-gray-800 transition shadow-sm text-sm"
            >
              Home
            </Link>
          </div>
        </nav>

        <main className="p-6 lg:p-10 max-w-7xl mx-auto w-full">
          {/* WELCOME HEADER */}
          <div className="mb-10">
            <h1 className="text-3xl font-extrabold text-gray-900">
              Welcome back! 👋
            </h1>
            <p className="text-gray-500 mt-1">
              Here is what’s happening with your smart shopping experience.
            </p>
          </div>

          {/* RECENT ACTIVITY TABLE */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800">
                Recent Activity
              </h3>
              <span className="text-sm text-blue-600 font-medium cursor-pointer hover:underline">
                View All
              </span>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 border-b text-gray-500 text-sm">
                    <tr>
                      <th className="p-5 font-semibold">Feature / Task</th>
                      <th className="p-5 font-semibold">Status</th>
                      <th className="p-5 font-semibold">Last Used On</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {activities.map((item) => (
                      <tr
                        key={item.id}
                        className="hover:bg-gray-50/50 transition-colors"
                      >
                        <td className="p-5 font-medium text-gray-700">
                          {item.task}
                        </td>
                        <td className="p-5">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold 
                            ${
                              item.status === "Completed"
                                ? "bg-green-100 text-green-700"
                                : item.status === "Success"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td className="p-5 text-gray-500 text-sm">
                          {item.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* FEATURE GRID */}
          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Explore AI Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {consumerFeatures.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  text={feature.text}
                  borderColor={feature.color}
                  onClick={
                    feature.onClick
                      ? feature.onClick
                      : () => alert(`Starting ${feature.text}...`)
                  }
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
