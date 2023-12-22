import React from "react";
import Image from "next/image";

export default function SignDetails() {
  return (
    <main className="max-w-2xl mx-auto p-4 mt-24 shadow-2xl">
      <a href="/recognition_results" className="mb-4 font-bold">
        ← Вернуться к результатам
      </a>

      <h1 className="text-3xl font-bold mb-4 mt-4">Знак "Стоп"</h1>

      <div className="flex mb-8">
        <div className="mr-4">
          <Image src="/Stop_Sign.png" width={120} height={120} alt="Стоп" />
        </div>

        <div>
          <p className="text-gray-800 font-semibold mb-1">
            Вероятность: <span className="text-green-500">98%</span>
          </p>

          <p className="text-gray-500 text-sm">Дорожный знак 2.4 по ГОСТу</p>
        </div>
      </div>

      <p className="text-gray-800 mb-8">
        Знак "Стоп" обозначает, что водитель должен остановиться и уступить
        дорогу транспортным средствам, движущимся по пересекаемой дороге, а при
        наличии знака 2.5 - по главной дороге. Затем он может продолжить
        движение, лишь убедившись, что это не создаст помех другим транспортным
        средствам.
      </p>

      <h2 className="text-2xl font-bold mb-2">
        Что делать при виде этого знака?
      </h2>

      <ul className="list-disc list-inside">
        <li>Полностью остановиться у знака</li>
        <li>Уступить дорогу другим участникам движения на перекрестке</li>
        <li>Продолжить движение, только убедившись в безопасности</li>
      </ul>
    </main>
  );
}
