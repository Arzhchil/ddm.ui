"use client";

import AdminAvatar from "@/app/components/adminAvatar";
import React, { useState } from "react";
import CollapsibleMenu from "./CollapsibleMenu";
import InboxTable from "./InboxTable";
import EmployeesTable from "./EmployeesTable";
import RoutesTable from "./RoutesTable";

export default function Sidebar() {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>("home");

  return (
    <div className="bg-gray-900 text-white max-w-full min-h-screen flex">
      <div className="bg-gray-800 w-64 h-screen p-4 flex flex-col">
        <AdminAvatar />

        <div className="flex-1">
          <button className="w-full text-left mb-4">+ Новый документ</button>

          <CollapsibleMenu
            title="Документы"
            items={[
              {
                name: "Входящие",
                count: 3,
                onClick: () => setSelectedMenuItem("inbox"),
              },
              {
                name: "Исходящие",
                count: 4,
                onClick: () => setSelectedMenuItem("outbox"),
              },
              {
                name: "Подписанные",
                count: 5,
                onClick: () => setSelectedMenuItem("signed"),
              },
              {
                name: "Корзина",
                count: 0,
                onClick: () => setSelectedMenuItem("trash"),
              },
            ]}
          />

          <CollapsibleMenu
            title="Организация"
            items={[
              {
                name: "Сотрудники",
                onClick: () => setSelectedMenuItem("employees"),
              },
            ]}
          />

          <CollapsibleMenu
            title="Справочники"
            items={[
              {
                name: "Виды организаций",
                onClick: () => setSelectedMenuItem("organizationTypes"),
              },
              {
                name: "Виды документов",
                onClick: () => setSelectedMenuItem("documentTypes"),
              },
              {
                name: "Маршруты",
                onClick: () => setSelectedMenuItem("routes"),
              },
            ]}
          />

          <button
            className="w-full text-left"
            onClick={() => setSelectedMenuItem("administration")}
          >
            Администрирование
          </button>
        </div>
      </div>

      <div className="flex-1 p-6">
        {selectedMenuItem === "inbox" && <InboxTable />}
        {selectedMenuItem === "employees" && <EmployeesTable />}
        {selectedMenuItem === "routes" && <RoutesTable />}
        {selectedMenuItem === "home" && (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <h1 className="text-4xl mb-4">DDM</h1>
              <p className="text-lg text-gray-400">
                Digital document management
              </p>
            </div>
          </div>
        )}
        {/* Вы можете добавить другие условия для отображения содержимого других пунктов меню */}
      </div>
    </div>
  );
}
