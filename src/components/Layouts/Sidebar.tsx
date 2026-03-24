"use client";

import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

interface SidebarProps {
  onMenuSelect: (page: string) => void;
}

const Sidebar = ({ onMenuSelect }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="bg-white w-60 h-full overflow-y-auto p-5 border-r border-gray-300">
      <ul className="space-y-3 text-sm font-medium">
        <li className="text-admin uppercase tracking-wide">
          <a onClick={() => onMenuSelect("dashboard")}>GENERAL SETTING</a>
        </li>

        <li>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex justify-between text-admin uppercase tracking-wide"
          >
            MODULE
            <FaAngleDown
              className={`text-admin size-5 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isOpen && (
            <ul className="space-y-2 pl-3 mt-2 transition duration-300 ease-in-out text-admin">
              <li>
                <a
                  onClick={() => onMenuSelect("module")}
                  className="block p-2 rounded hover:bg-gray-100"
                >
                  Penjualan
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 rounded hover:bg-gray-100">
                  Management Stock
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 rounded hover:bg-gray-100">
                  Management Proyek
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 rounded hover:bg-gray-100">
                  Akuntansi
                </a>
              </li>
            </ul>
          )}
        </li>

        <li className="text-admin uppercase tracking-wide">DASHBOARD</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
