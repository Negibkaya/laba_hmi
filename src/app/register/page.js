import React from "react";

export default function page() {
  return (
    <main class="flex flex-col items-center justify-center h-screen">
      <div class="bg-white p-8 rounded-lg shadow-lg">
        <h1 class="text-3xl font-bold mb-6">Регистрация</h1>

        <form>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="login">
              Логин
            </label>
            <input class="border p-2 w-full" id="login" />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="email">
              Почта
            </label>
            <input class="border p-2 w-full" type="email" id="email" />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="password">
              Пароль
            </label>
            <input class="border p-2 w-full" type="password" id="password" />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="password">
              Подтвердить пароль
            </label>
            <input class="border p-2 w-full" type="password" id="password" />
          </div>

          <button class="bg-blue-500 text-white px-4 py-2 rounded font-medium w-full">
            Зарегистироваться
          </button>
        </form>

        <div class="mt-4 text-center">
          Уже есть аккаунт?{" "}
          <a href="/login" class="text-blue-500 hover:underline">
            Войти
          </a>
        </div>
      </div>
    </main>
  );
}
