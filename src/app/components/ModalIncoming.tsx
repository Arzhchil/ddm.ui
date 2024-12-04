import React from "react";

interface ModalIncomingProps {
  isOpen: boolean;
  onClose: () => void;
}

const tableHeaders = [
  "Этап",
  "Вид",
  "Организация",
  "Сотрудник",
  "Действие",
  "Статус",
  "Создан",
  "Получен",
  "Открыт",
  "Рассмотрененно",
  "Заметка",
  "Прикрепленные файлы",
] as const;

type TableHeader = (typeof tableHeaders)[number];

type TableRowData = {
  [key in TableHeader]: React.ReactNode;
};

const ModalIncoming: React.FC<ModalIncomingProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const tableData: TableRowData[] = [
    {
      Этап: "0",
      Вид: "4027005123",
      Организация: "длинный ТФОМС 40",
      Сотрудник: "Контроль",
      Действие: "09.10.24 16:55",
      Статус: <span className="text-blue-500">Контроль</span>,
      Создан: "09.10.24 16:55",
      Получен: "-",
      Открыт: "-",
      Рассмотрененно: "-",
      Заметка: "-",
      "Прикрепленные файлы": "-",
    },
    {
      Этап: "1",
      Вид: "402700523",
      Организация: "Длинный ТФОМС 40",
      Сотрудник: "В работе",
      Действие: <span className="text-yellow-500">В работе</span>,
      Статус: "09.10.24 16:58",
      Создан: "10.10.24 16:01",
      Получен: "-",
      Открыт: "-",
      Рассмотрененно: "-",
      Заметка: "-",
      "Прикрепленные файлы": "-",
    },
    {
      Этап: "2",
      Вид: "СМО 40002",
      Организация: "Руковод. СМО 40002",
      Сотрудник: <span className="text-green-500">Новый</span>,
      Действие: "-",
      Статус: "-",
      Создан: "-",
      Получен: "-",
      Открыт: "-",
      Рассмотрененно: "-",
      Заметка: "-",
      "Прикрепленные файлы": "-",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
      <div className="w-full max-w-4xl mx-auto my-8 bg-gray-800 text-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center p-4 border-b border-gray-600">
          <h2 className="text-lg font-semibold">
            Карточка документа: Договор № от 09.10.2024г.
          </h2>
          <button
            onClick={onClose}
            className="text-2xl leading-none hover:text-gray-300"
          >
            &times;
          </button>
        </div>

        <div className="p-4 overflow-auto max-h-[70vh]">
          <table className="w-full text-left table-auto">
            <thead className="bg-gray-700">
              <tr>
                {tableHeaders.map((header) => (
                  <th key={header} className="p-2">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((rowData, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-700 ${
                    index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"
                  }`}
                >
                  {tableHeaders.map((header) => (
                    <td key={header} className="p-2 text-center">
                      {rowData[header] || "-"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap justify-between p-4 border-t border-gray-600 space-y-2 sm:space-y-0">
          <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded w-full sm:w-auto sm:mr-2">
            Подписать
          </button>
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white p-2 rounded w-full sm:w-auto sm:mr-2">
            Комментарий
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded w-full sm:w-auto sm:mr-2">
            Прикрепить файлы
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded w-full sm:w-auto sm:mr-2">
            Добавить участников
          </button>
          <button className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded w-full sm:w-auto">
            Отклонить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalIncoming;
