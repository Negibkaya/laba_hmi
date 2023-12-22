import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <div className="flex flex-col w-48 min-h-screen px-4 py-8 bg-gray-900">
        <div className="flex items-center">
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>

          <Link href="/register">
            <h2 className="text-xl text-white ml-3">Мой аккаунт</h2>
          </Link>
        </div>

        <ul className="min-h-screen mt-8 text-gray-400 flex flex-col justify-around">
          <li className="flex mb-6 rounded-lg border-white border p-4">
            <svg
              className="w-6 h-6 text-white mr-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>

            <Link href="/main">Главная</Link>
          </li>

          <li className="flex mb-6 rounded-lg border-white border  p-4">
            <svg
              className="w-6 h-6 text-white mr-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
            </svg>

            <Link href="/upload_data">Загрузка данных</Link>
          </li>

          <li className="flex mb-6 rounded-lg border-white border  p-4">
            <svg
              className="w-6 h-6 text-white mr-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>

            <Link href="/recognition_results">Результаты работы</Link>
          </li>

          <li className="flex mb-6 rounded-lg border-white border  p-4">
            <svg
              className="w-6 h-6 text-white mr-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
            </svg>

            <Link href="/ml">Статистика ML</Link>
          </li>
        </ul>
      </div>

      <div className="bg-gray-100 flex-1 p-7">{children}</div>
    </div>
  );
}
