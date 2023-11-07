import React from "react";

export default function ImageUpload() {
  return (
    <main className="max-w-4xl mx-auto p-4 mt-16">
      <h1 className="text-3xl font-bold text-center">
        Загрузите изображение или видео
      </h1>

      <p className="text-gray-600 text-center mt-4 mb-8">
        Загрузите файл с дорожными знаками для их автоматического распознавания
        системой
      </p>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex items-center space-x-2">
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span className="text-gray-700 text-sm">
                Файлы должны быть в форматах JPG, PNG или MP4
              </span>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg mt-6">
            <div className="flex items-center space-x-2">
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                ></path>
              </svg>
              <span className="text-gray-700 text-sm">
                Размер изображений не более 5 Мб
              </span>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg mt-6">
            <div className="flex items-center space-x-2">
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                ></path>
              </svg>
              <span className="text-gray-700 text-sm">
                Видео должны быть не более 60 секунд
              </span>
            </div>
          </div>

          <label className="block mt-4">
            <input
              type="file"
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:cursor-pointer hover:file:bg-green-100"
            />
          </label>

          <div className="flex justify-center mt-4">
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <svg
                className="-ml-0.5 mr-2 h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                ></path>
              </svg>
              Загрузить
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
