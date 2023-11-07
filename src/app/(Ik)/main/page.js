import React from "react";

export default function MainForm() {
  return (
    <main className="max-w-7xl mx-auto p-4">
      <h1 className="text-center text-4xl font-bold my-4">
        Распознавание дорожных знаков
      </h1>

      <p className="text-gray-700 mb-8">
        Этот проект использует компьютерное зрение для распознавания дорожных
        знаков на изображениях и видео. Просто загрузите фото или видео, и наш
        алгоритм определит все дорожные знаки, присутствующие на нем.
      </p>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="divide-y divide-gray-200">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg leading-6 font-medium text-gray-900">
              О проекте
            </h2>
            <div className="mt-2 text-sm text-gray-500">
              <p>
                Мы стремимся сделать распознавание дорожных знаков максимально
                точным и удобным. Для этого используем последние достижения
                компьютерного зрения и машинного обучения.
              </p>
            </div>
          </div>

          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg leading-6 font-medium text-gray-900">
              Возможности
            </h2>
            <div className="mt-2 text-sm text-gray-500">
              <ul className="list-disc ml-5 space-y-1">
                <li>Распознавание знаков на фотографиях</li>
                <li>Распознавание знаков на видео в реальном времени</li>
                <li>Высокая точность благодаря нейросетям</li>
                <li>Удобный интерфейс для загрузки медиа</li>
                <li>Экспорт результатов в CSV</li>
              </ul>
            </div>
          </div>

          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg leading-6 font-medium text-gray-900">
              Применение
            </h2>
            <div className="mt-2 text-sm text-gray-500">
              <p>Система может использоваться для:</p>

              <ul className="list-disc ml-5 space-y-1">
                <li>Анализа дорожной ситуации в городах</li>
                <li>Сбора данных для навигационных сервисов</li>
                <li>Разработки систем помощи водителю</li>
                <li>Тестирования беспилотных автомобилей</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="my-8 text-center">
        <button className="bg-indigo-500 text-white py-2 px-4 rounded-full hover:bg-indigo-400">
          Начать анализ
        </button>
      </div>
    </main>
  );
}
