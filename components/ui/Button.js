import React from "react";

export function Button({ children, className, ...props }) {
  return (
    <button
      className={`py-2 px-4 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
