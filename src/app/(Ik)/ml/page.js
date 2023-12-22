"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Chart } from "chart.js";

export default function Training() {
  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Знак 1",
          "Знак 2",
          "Знак 3",
          "Знак 4",
          "Знак 5",
          "Знак 6",
          "Знак 7",
          "Знак 8",
          "Знак 9",
          "Знак 10",
        ], // Replace with your actual sign classes
        datasets: [
          {
            label: "Количество изображений",
            data: [30, 20, 15, 33, 15, 25, 26, 11, 16, 30], // Replace with your actual image counts
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

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
          Диаграмма количество изображений по классам
        </h2>
        <canvas ref={chartRef}></canvas>
      </div>
    </main>
  );
}
