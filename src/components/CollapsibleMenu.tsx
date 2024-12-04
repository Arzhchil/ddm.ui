"use client";

import React, { useState } from "react";

interface MenuItem {
  name: string;
  count?: number;
  onClick?: () => void;
}

interface CollapsibleMenuProps {
  title: string;
  items: MenuItem[];
  initiallyOpen?: boolean;
}

const CollapsibleMenu: React.FC<CollapsibleMenuProps> = ({
  title,
  items,
  initiallyOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left mb-2"
      >
        {title}
      </button>
      {isOpen && (
        <ul className="ml-4 text-sm text-gray-400">
          {items.map((item, index) => (
            <li key={index} className="mb-1">
              <button
                className="w-full text-left hover:text-white"
                onClick={item.onClick}
              >
                {item.name}
                {item.count !== undefined && (
                  <span className="float-right">{item.count}</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CollapsibleMenu;
