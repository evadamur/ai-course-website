import React from "react";
import dynamic from "next/dynamic";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

// Используем динамический импорт для Motion
const MotionH1 = dynamic(() => import("framer-motion").then((mod) => mod.motion.h1), { ssr: false });
const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false });

export default function HomePage() {
  return (
    <div className="relative w-full h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/cyber-connection.png')" }}>
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-70 px-6"
      >
        <MotionH1
          className="text-6xl font-extrabold text-white mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          KI – Zeit für Panik!
        </MotionH1>
        <p className="text-xl text-gray-300 text-center max-w-xl mb-8 drop-shadow-md">
          Быстрый старт в мир ИИ. Освой ChatGPT и другие инструменты без лишних сложностей. Присоединяйся к курсу и стань экспертом!
        </p>
        <Card className="max-w-sm w-full mb-6 bg-gradient-to-r from-teal-700 to-cyan-800 rounded-2xl shadow-2xl">
          <CardContent>
            <p className="text-base mb-4 text-gray-100 text-center px-4 py-3">
              Запишись на курс, узнай больше и начни своё путешествие в мир ИИ.
            </p>
            <Button className="w-full py-3 text-base bg-teal-700 text-white rounded-xl hover:bg-cyan-800 transition duration-300 shadow-md">
              Попробовать курс
            </Button>
          </CardContent>
        </Card>
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-sm text-gray-400 mt-6 drop-shadow-md"
        >
          © 2025 KI – Zeit für Panik. Все права защищены.
        </MotionDiv>
      </MotionDiv>
    </div>
  );
}
