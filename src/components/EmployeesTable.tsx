"use client";

import React, { useState } from "react";
import ModalIncoming from "@/app/components/ModalIncoming";

interface DocumentData {
  id: number;
  code: string;
  description: string;
  name: string;
  date: string;
  state: string;
}

const mockData: DocumentData[] = [
  {
    id: 1,
    code: "chernovik",
    description: "chernovikdescr",
    name: "chernovikname",
    date: "2023-10-01",
    state: "ready",
  },
  {
    id: 2,
    code: "chernovik",
    description: "chernovikdescr",
    name: "chernovikname",
    date: "2023-10-01",
    state: "ready",
  },
  // Добавьте больше моковых данных по необходимости
];

const EmployeesTable: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Входящие</h2>
        <div className="flex items-center space-x-4">
          <button
            className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded"
            onClick={() => {
              // Логика обновления данных
            }}
          >
            Обновить
          </button>
          <input
            type="text"
            placeholder="Поиск по документам"
            className="px-4 py-2 rounded bg-gray-800 text-white"
          />
        </div>
      </div>

      <table className="w-full text-left table-auto">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="p-2">
              <input type="checkbox" />
            </th>
            <th className="p-2">ID</th>
            <th className="p-2">Код</th>
            <th className="p-2">Кратко</th>
            <th className="p-2">Наименование</th>
            <th className="p-2">Дата создания</th>
            <th className="p-2">Состояние</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((doc) => (
            <tr
              key={doc.id}
              className="border-b border-gray-800 hover:bg-gray-800"
              onClick={() => setModalOpen(true)}
            >
              <td className="p-2">
                <input type="checkbox" />
              </td>
              <td className="p-2">{doc.id}</td>
              <td className="p-2">{doc.code}</td>
              <td className="p-2">{doc.description}</td>
              <td className="p-2">{doc.name}</td>
              <td className="p-2">{doc.date}</td>
              <td className="p-2">{doc.state}</td>
            </tr>
          ))}
          <ModalIncoming
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
          />
        </tbody>
      </table>

      <div className="flex justify-center items-center mt-4 space-x-2">
        <button className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded">
          &#171; Первая
        </button>
        <button className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded">
          &#8249; Назад
        </button>
        <span>Страница 1 из 4</span>

        <button className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded">
          Вперед &#8250;
        </button>
        <button className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded">
          Последняя &#187;
        </button>
      </div>
    </div>
  );
};

export default EmployeesTable;
