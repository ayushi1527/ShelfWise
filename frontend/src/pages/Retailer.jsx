import React, { useState } from "react";
import { Link } from "react-router-dom";
import FeatureCard from "../components/FeatureCard";

// The "export default" must be exactly like this
export default function Retailer() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const retailerFeatures = [
    { icon: "📈", text: "Demand Forecasting", color: "border-blue-900" },
    { icon: "📦", text: "Inventory Optimization", color: "border-blue-900" },
    { icon: "⏰", text: "Near-Expiry Alerts", color: "border-blue-900" },
    { icon: "📊", text: "Sales Analytics", color: "border-blue-900" },
  ];

  const recentLogs = [
    { id: 1, task: "Stock Level Sync", status: "Completed", date: "Today, 10:20 AM" },
    { id: 2, task: "Demand Forecast", status: "Updated", date: "Yesterday, 4:15 PM" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className={`bg-slate-900 text-white w-64 fixed h-full transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-64'} lg:translate-x-0 z-50 shadow-2xl`}>
        <div className="p-6 text-2xl font-bold border-b border-slate-800 flex items-center gap-2">
          <div className="h-8 w-8 bg-blue-500 rounded flex items-center justify-center text-sm">R</div>
          ShelfWise
        </div>
        <ul className="p-4 space-y-2">
          <li className="p-3 hover:bg-slate-800 rounded-lg cursor-pointer flex items-center gap-3"><span>📋</span> Inventory List</li>
          <li className="p-3 hover:bg-slate-800 rounded-lg cursor-pointer flex items-center gap-3"><span>📉</span> Forecast Reports</li>
          <li className="p-3 hover:bg-slate-800 rounded-lg cursor-pointer flex items-center gap-3"><span>⚙️</span> Store Settings</li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        <nav className="bg-white p-4 shadow-sm border-b flex justify-between items-center sticky top-0 z-40">
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="lg:hidden text-2xl p-2">☰</button>
          <div className="font-bold text-slate-800">Retailer Management Portal</div>
          <div className="flex gap-4">
            <Link to="/" className="text-sm font-bold bg-blue-900 text-white px-4 py-2 rounded-lg">Home</Link>
          </div>
        </nav>

        <main className="p-8 max-w-7xl mx-auto">
          {/* Recent Activity Table */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Recent Activity</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-gray-50 border-b text-gray-600 text-xs font-semibold uppercase">
                  <tr>
                    <th className="p-4">Process</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Last Used On</th>
                  </tr>
                </thead>
                <tbody>
                  {recentLogs.map((log) => (
                    <tr key={log.id} className="border-b hover:bg-gray-50">
                      <td className="p-4 font-medium">{log.task}</td>
                      <td className="p-4">
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">{log.status}</span>
                      </td>
                      <td className="p-4 text-gray-500">{log.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Feature Grid */}
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {retailerFeatures.map((f, i) => (
              <FeatureCard 
                key={i}
                icon={f.icon} 
                text={f.text} 
                borderColor={f.color} 
                onClick={() => alert(`Launching ${f.text}`)} 
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}