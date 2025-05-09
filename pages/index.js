import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center px-6 relative">
      <div className="text-center mb-12 z-10">
        <motion.h1
          className="text-6xl font-extrabold mb-4 text-white drop-shadow-lg tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          KI – Zeit für Panik!
        </motion.h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto drop-shadow-md">
          Быстрый старт в мир ИИ. Освой ChatGPT и другие инструменты без лишних сложностей. Присоединяйся к курсу и стань экспертом!
        </p>
      </div>

      {/* Добавляем изображение робота */}
      <img
        src="/robot-face-optimized.png"
        alt="AI Robot Face"
        className="absolute right-0 bottom-0 w-1/3 lg:w-1/4 z-0 opacity-80"
      />

      <Card className="max-w-xl w-full mb-8 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-2xl z-10">
        <CardContent>
          <p className="text-lg mb-4 text-gray-100">
            Запишись на курс, узнай больше и начни своё путешествие в мир искусственного интеллекта.
          </p>
          <Button className="w-full py-4 text-lg bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300 shadow-md">
            Записаться сейчас
          </Button>
        </CardContent>
      </Card>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-sm text-gray-400 mt-8 drop-shadow-md z-10"
      >
        © 2025 KI – Zeit für Panik. Все права защищены.
      </motion.div>
    </div>
  );
}
