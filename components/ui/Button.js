import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
