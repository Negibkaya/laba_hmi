"use client";

import React from "react";
import Image from "next/image";

export default function Training() {
  return (
    <main className="max-w-4xl p-4 mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">
        Статистика обучения
      </h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold">Прогресс обучения</h2>

        <div className="flex items-center mt-2">
          <div className="w-3/4 mr-2">
            <div className="h-3 relative max-w-xl rounded-full overflow-hidden">
              <div className="w-full h-full bg-gray-200 absolute"></div>
              <div
                className="h-full bg-indigo-500 absolute"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
          <div>
            <span className="text-xl font-bold">80% </span>
            <span className="text-sm text-gray-500"> (8000 из 10000 эпох)</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Метрики качества</h2>
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="p-3 bg-gray-100">Метрика</th>
                <th className="p-3 bg-gray-100">Значение</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border">Точность</td>
                <td className="p-3 border">92%</td>
              </tr>
              <tr>
                <td className="p-3 border">Полнота</td>
                <td className="p-3 border">89%</td>
              </tr>
              <tr>
                <td className="p-3 border">F1-мера</td>
                <td className="p-3 border">90%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Параметры обучения</h2>
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="p-3 bg-gray-100">Параметр</th>
                <th className="p-3 bg-gray-100">Значение</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border">Скорость обучения</td>
                <td className="p-3 border">0.001</td>
              </tr>
              <tr>
                <td className="p-3 border">Размер батча</td>
                <td className="p-3 border">32</td>
              </tr>
              <tr>
                <td className="p-3 border">Кол-во эпох</td>
                <td className="p-3 border">10 000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">
          Диаграмма точности по классам
        </h2>

        <div className="flex justify-center">
          <Image src="/diagrama.png" width={1000} height={850} alt="Diagrama" />
        </div>
      </div>
    </main>
  );
}
