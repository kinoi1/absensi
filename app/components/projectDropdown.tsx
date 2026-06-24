"use client";

import { useState } from "react";
import { ChevronDown, Folder } from "lucide-react"; // Sesuaikan dengan library ikon Anda
interface ProjectDropdownProps {
  collapsed: boolean;
}
export default function ProjectDropdown({
  collapsed,
}: ProjectDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Contoh 5 data dropdown untuk menu sidebar
  const projects = [
    { id: 1, name: "E-Commerce App", href: "#", count: 2 },
    { id: 2, name: "Company Profile", href: "#", count: 1 },
    { id: 3, name: "Marketing Campaign", href: "#", count: 0 },
    { id: 4, name: "UI/UX Redesign", href: "#", count: 3 },
    { id: 5, name: "Mobile Banking", href: "#", count: 0 },
  ];

  return (
    <div className="w-full">
      {/* Trigger Menu Utama */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-2 text-xs text-gray-400 hover:text-gray-200 transition-colors focus:outline-none"
      >
        <div className="flex items-center gap-3">
          <Folder className="w-4 h-4" />
          <span className="font-medium">{!collapsed && "Project"}</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Badge Total Item */}
          <span className="bg-[#e94a4a] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
            6
          </span>
          {/* Ikon Panah dengan Efek Rotasi */}
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      {/* Konten Dropdown Menu */}
      <div
        className={`mt-1 pl-6 space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.href}
            className="flex items-center justify-between px-3 py-1.5 text-[11px] text-gray-500 hover:text-gray-300 hover:bg-gray-800/50 rounded transition-colors"
          >
            <div className="flex items-center gap-2">
              <Folder className="w-3.5 h-3.5 opacity-60" />
              {project.name}
            </div>
            {project.count > 0 && !collapsed && (
              <span className="bg-gray-700 text-gray-300 text-[9px] px-1.5 py-0.2 rounded">
                {project.count}
              </span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
