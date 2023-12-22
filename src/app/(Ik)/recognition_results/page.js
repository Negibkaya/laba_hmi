import React from "react";
import Image from "next/image";

export default function Results() {
  return (
    <main className="max-w-4xl mx-auto p-4 mt-16">
      <h1 className="text-3xl font-bold text-center">
        Результаты распознавания
      </h1>

      <p className="text-gray-600 text-center mb-8">
        Ниже представлены дорожные знаки, распознанные на вашем изображении
      </p>

      <div className="bg-white shadow overflow-hidden rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-lg leading-6 font-medium text-gray-900">
            Обнаружено знаков: 2
          </h2>

          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>На вашем изображении было обнаружено 2 дорожных знаков.</p>
          </div>
        </div>

        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Знак No1</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                  <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      <Image
                        src="/Stop_Sign.png"
                        classNameName="h-8 w-8 flex-shrink-0 mx-2"
                        width={100}
                        height={100}
                        alt="Stop Sign"
                      />
                      <span className="ml-2 flex-1 w-0 truncate">
                        Знак "Стоп"
                      </span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a
                        href="/details"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Подробнее
                      </a>
                    </div>
                  </li>
                  <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span className="ml-2 flex-1 w-0 truncate">
                        Вероятность: 98%
                      </span>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Знак No2</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                  <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      <Image
                        src="/Yield_Sign.png"
                        classNameName="h-8 w-8 flex-shrink-0 mx-2"
                        width={100}
                        height={100}
                        alt="Yield Sign"
                      />
                      <span className="ml-2 flex-1 w-0 truncate">
                        Ограничение скорости 40 км/ч
                      </span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a
                        href="/details"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Подробнее
                      </a>
                    </div>
                  </li>
                  <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span className="ml-2 flex-1 w-0 truncate">
                        Вероятность: 97%
                      </span>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <a href="#" className="bg-indigo-600 text-white py-2 px-4 rounded-md">
          Скачать результаты в CSV
        </a>
      </div>
    </main>
  );
}
