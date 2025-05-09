import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-blue-200 flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold mb-4 text-gray-800">KI – Zeit für Panik!</h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Быстрый старт в мир ИИ. Освой ChatGPT и другие инструменты без лишних сложностей.
      </p>
      <button className="mt-8 py-4 px-8 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300">
        Записаться сейчас
      </button>
      <footer className="mt-12 text-sm text-gray-500">© 2025 KI – Zeit für Panik. Все права защищены.</footer>
    </div>
  );
}
