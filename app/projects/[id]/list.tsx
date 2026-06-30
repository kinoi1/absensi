"use client";

import React, { useState } from "react";
import {
  Columns,
  List,
  GitBranch,
  User,
  Users,
  MoreVertical,
  CheckCircle2,
  Circle,
} from "lucide-react"; // Menggunakan lucide-react untuk ikon

// 1. Mock Data sesuai dengan gambar asli
const INITIAL_TASKS = [
  {
    id: 1,
    title: "Icon design",
    status: "New tasks",
    date: "Monday",
    assignees: ["#FF5733", "#FFC300", "#33FF57"],
  },
  {
    id: 2,
    title: "Wireframing",
    status: "New tasks",
    date: "Tuesday",
    assignees: ["#FF5733", "#33FFBB", "#3357FF"],
  },
  {
    id: 3,
    title: "Design system",
    status: "In progress",
    date: "Wednesday",
    assignees: ["#33FFBB"],
  },
  {
    id: 4,
    title: "Onboarding screens",
    status: "Completed",
    date: "03/24",
    assignees: ["#FF5733"],
  },
  {
    id: 5,
    title: "Wireframing",
    status: "Completed",
    date: "05/24",
    assignees: ["#FF5733", "#33FFBB"],
  },
];

const SECTIONS = [
  {
    id: "New tasks",
    label: "New tasks",
    badgeColor: "bg-[#1a1d20] text-gray-400",
    countColor: "bg-gray-800 text-gray-400",
  },
  {
    id: "In progress",
    label: "In progress",
    badgeColor: "bg-[#1a1d20] text-gray-400",
    countColor: "bg-gray-800 text-gray-400",
  },
  {
    id: "Completed",
    label: "Completed",
    badgeColor: "bg-[#16251d] text-[#4ade80]",
    countColor: "bg-[#162c20] text-[#4ade80]",
  },
];
interface BoardProps {
  onCreateTask: () => void;
}
export default function ListTask({ onCreateTask }: BoardProps) {
  return (
    <div className="min-h-screen bg-[#0d0e11] text-white p-8 font-sans">
      <div className="space-y-1 max-w-5xl">
        <button
          onClick={onCreateTask}
          className="text-xs text-gray-400 hover:text-white transition-colors font-medium"
        >
          + Tambah data
        </button>
        {SECTIONS.map((section) => {
          const sectionTasks = INITIAL_TASKS.filter(
            (task) => task.status === section.id
          );

          return (
            <>
              {sectionTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between bg-[#131418] border border-white/[0.03] hover:border-white/[0.08] p-4 rounded-xl transition group"
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <button className="text-gray-500 hover:text-gray-300 flex-shrink-0">
                      {section.id === "Completed" ? (
                        <CheckCircle2 size={20} className="text-[#4ade80]" />
                      ) : (
                        <Circle
                          size={20}
                          className="text-gray-600 group-hover:text-gray-400"
                        />
                      )}
                    </button>

                    <p
                      className={`text-sm font-medium truncate ${
                        section.id === "Completed"
                          ? "line-through text-gray-500"
                          : "text-gray-200"
                      }`}
                    >
                      {task.title}
                    </p>
                  </div>

                  <div className="flex items-center gap-6 flex-shrink-0 ml-4">
                    <div className="flex -space-x-1.5">
                      {task.assignees.map((color, idx) => (
                        <div
                          key={idx}
                          className="w-5 h-5 rounded-full border border-[#131418]"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>

                    <span className="text-xs text-gray-500 w-20 text-right">
                      {task.date}
                    </span>

                    <button className="text-gray-600 hover:text-gray-400 transition">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </div>
              ))}

              {sectionTasks.length === 0 && (
                <p className="text-xs text-gray-600 italic pl-2">
                  No tasks in this stage
                </p>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}
