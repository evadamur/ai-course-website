import React from "react";

export function Card({ children, className }) {
  return (
    <div className={`p-6 rounded-xl shadow-lg bg-white ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div className="text-gray-800">{children}</div>;
}
