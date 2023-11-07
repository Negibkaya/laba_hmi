import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <div className="flex flex-col w-64 min-h-screen p-4 bg-gray-800 text-white justify-around">
        <Link href="/main">Главная</Link>
        <Link href="/upload_data">Загрузка данных</Link>
        <Link href="/recognition_results">Результат работы</Link>
        <Link href="/ml">Статистика ML</Link>
      </div>

      <div className="flex-1 p-4">{children}</div>
    </div>
  );
}
