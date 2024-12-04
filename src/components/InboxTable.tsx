"use client";

import React, { useState } from "react";
import Modal from "@/app/components/ModalIncoming";

interface DocumentData {
  id: number;
  action: string;
  stage: string;
  type: string;
  number: string;
  date: string;
  name: string;
  recipient: string;
}

const mockData: DocumentData[] = [
  {
    id: 1,
    action: "Подписание",
    stage: "1 из 2",
    type: "Договор",
    number: "333",
    date: "2023-10-01",
    name: "123_123_123123DOMP",
    recipient: "",
  },
  {
    id: 2,
    action: "Подписание",
    stage: "1 из 3",
    type: "Договор",
    number: "555",
    date: "2024-10-01",
    name: "321_321_321321DOMP",
    recipient: "",
  },
];

const InboxTable: React.FC = () => {
  const [selectedDocuments, setSelectedDocuments] = useState<number[]>([]);
  const [isAllSelected, setIsAllSelected] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<DocumentData | null>(
    null
  );
  const [searchText, setSearchText] = useState("");

  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedDocuments([]);
    } else {
      setSelectedDocuments(mockData.map((doc) => doc.id));
    }
    setIsAllSelected(!isAllSelected);
  };

  const handleCheckboxChange = (id: number) => {
    if (selectedDocuments.includes(id)) {
      setSelectedDocuments(selectedDocuments.filter((docId) => docId !== id));
    } else {
      setSelectedDocuments([...selectedDocuments, id]);
    }
  };

  const handleRowClick = (doc: DocumentData) => {
    setSelectedDocument(doc);
  };

  // Фильтрация данных на основе поискового запроса
  const filteredData = mockData.filter((doc) =>
    doc.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      {/* Заголовок */}
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
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>

      <table className="w-full text-left table-auto">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="p-2">
              <input
                type="checkbox"
                checked={isAllSelected}
                onChange={handleSelectAll}
              />
            </th>
            <th className="p-2">ID</th>
            <th className="p-2">Действие</th>
            <th className="p-2">Этап</th>
            <th className="p-2">Вид</th>
            <th className="p-2">Номер</th>
            <th className="p-2">Дата</th>
            <th className="p-2">Наименование</th>
            <th className="p-2">Получатель</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((doc) => (
            <tr
              key={doc.id}
              className="border-b border-gray-800 hover:bg-gray-800 cursor-pointer"
              onClick={() => handleRowClick(doc)}
            >
              <td className="p-2" onClick={(e) => e.stopPropagation()}>
                <input
                  type="checkbox"
                  checked={selectedDocuments.includes(doc.id)}
                  onChange={() => handleCheckboxChange(doc.id)}
                />
              </td>
              <td className="p-2">{doc.id}</td>
              <td className="p-2">{doc.action}</td>
              <td className="p-2">{doc.stage}</td>
              <td className="p-2">{doc.type}</td>
              <td className="p-2">{doc.number}</td>
              <td className="p-2">{doc.date}</td>
              <td className="p-2">{doc.name}</td>
              <td className="p-2">{doc.recipient}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedDocument && (
        <Modal
          isOpen={Boolean(selectedDocument)}
          onClose={() => setSelectedDocument(null)}
        />
      )}

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

export default InboxTable;
