"use client";

import React from "react";

const AdminAvatar: React.FC = () => {
  return (
    <div className="flex items-center mb-6">
      <div className="bg-red-500 rounded-full h-12 w-12 flex items-center justify-center">
        <span className="text-xl">Д</span>
      </div>
      <div className="ml-4">
        <div className="text-sm">ТФОМС 40</div>
        <div className="text-xs text-gray-400">АДМИН</div>
      </div>
    </div>
  );
};

export default AdminAvatar;
