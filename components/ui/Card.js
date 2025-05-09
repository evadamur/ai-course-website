import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div className={`p-6 rounded-lg shadow-lg bg-gray-800 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div className="p-4">{children}</div>;
}
