import React from "react";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import dynamic from "next/dynamic";

// Используем динамический импорт для Motion
const MotionH1 = dynamic(() => import("framer-motion").then((mod) => mod.motion.h1), { ssr: false });
const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false });

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center px-6 relative">
      <div className="text-center mb-12 z-10">
        <MotionH1
          className="text-6xl font-extrabold mb-4 text-white drop-shadow-lg tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          KI – Zeit für Panik!
        </MotionH1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto drop-shadow-md">
          Быстрый старт в мир ИИ. Освой ChatGPT и другие инструменты без лишних сложностей. Присоединяйся к курсу и стань экспертом!
        </p>
      </div>

      {/* Добавляем карточку и кнопку */}
      <Card className="max-w-xl w-full mb-8 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-2xl z-10">
        <CardContent>
          <p className="text-lg mb-4 text-gray-100">
            Запишись на курс, узнай больше и начни своё путешествие в мир искусственного интеллекта.
          </p>
          <Button className="w-full py-4 text-lg bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300 shadow-md">
            Попробовать курс
          </Button>
        </CardContent>
      </Card>

      {/* Добавляем фон */}
<div className="relative w-full h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/cyber-connection.png')" }}>
  <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-70">
    <h1 className="text-6xl font-extrabold text-white mb-6 drop-shadow-lg">KI – Zeit für Panik!</h1>
    <p className="text-xl text-gray-300 text-center max-w-2xl mb-12 drop-shadow-md">
      Быстрый старт в мир ИИ. Освой ChatGPT и другие инструменты без лишних сложностей. Присоединяйся к курсу и стань экспертом!
    </p>
    <div className="max-w-md w-full mb-8 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-2xl">
      <p className="text-lg mb-4 text-gray-100 text-center px-6 py-4">
        Запишись на курс, узнай больше и начни своё путешествие в мир искусственного интеллекта.
      </p>
      <button className="w-full py-4 text-lg bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300 shadow-md">
        Попробовать курс
      </button>
    </div>
    <p className="text-sm text-gray-400 mt-8 drop-shadow-md">© 2025 KI – Zeit für Panik. Все права защищены.</p>
  </div>
</div>


      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-sm text-gray-400 mt-8 drop-shadow-md z-10"
      >
        © 2025 KI – Zeit für Panik. Все права защищены.
      </MotionDiv>
    </div>
  );
}
  




