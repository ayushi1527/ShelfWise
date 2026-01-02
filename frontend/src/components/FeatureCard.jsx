import React from "react";

/**
 * FeatureCard Component
 * @param {string} icon - The emoji or icon to display
 * @param {string} text - The title of the feature
 * @param {string} borderColor - Tailwind class for the left border color (e.g., 'border-blue-500')
 * @param {function} onClick - The function to run when the card is clicked
 */
export default function FeatureCard({ icon, text, borderColor, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center gap-4 p-6 
        bg-white rounded-2xl shadow-sm border-l-4 
        transition-all duration-200 
        hover:shadow-md hover:scale-[1.02] 
        active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-100
        ${borderColor}
      `}
    >
      {/* Icon Container */}
      <div className="text-3xl flex-shrink-0">
        {icon}
      </div>

      {/* Text Container */}
      <div className="text-left">
        <h4 className="font-bold text-gray-800 text-lg leading-tight">
          {text}
        </h4>
        <p className="text-xs text-gray-400 mt-1 font-medium uppercase tracking-wider">
          Tap to Launch
        </p>
      </div>
    </button>
  );
}