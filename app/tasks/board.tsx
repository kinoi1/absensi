import React from "react";
import {
  ChevronDown,
  List,
  KanbanSquare,
  GitBranch,
  User,
  Users,
  MoreVertical,
  CheckCircle2,
} from "lucide-react";
interface BoardProps {
  onCreateTask: () => void;
}
export default function Board({ onCreateTask }: BoardProps) {
  const boardColumns = [
    {
      id: "new",
      title: "New tasks",
      tasks: [
        {
          id: 1,
          title: "Icon design",
          label: "Monday",
          assignees: ["red", "orange", "+2"],
          isCompleted: false,
        },
        {
          id: 2,
          title: "Wireframing",
          label: "Tuesday",
          assignees: ["red", "green", "+2"],
          isCompleted: false,
        },
      ],
    },
    {
      id: "progress",
      title: "In progress",
      tasks: [
        {
          id: 3,
          title: "Design system",
          label: "Wednesday",
          assignees: ["green"],
          isCompleted: false,
        },
      ],
    },
    {
      id: "completed",
      title: "Completed",
      tasks: [
        {
          id: 4,
          title: "Onboarding screens",
          label: "03/24",
          assignees: ["red"],
          isCompleted: true,
        },
        {
          id: 5,
          title: "Wireframing",
          label: "05/24",
          assignees: ["red", "green"],
          isCompleted: true,
        },
      ],
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
      {boardColumns.map((column) => {
        const isCompletedCol = column.id === "completed";

        return (
          <section key={column.id} className="w-full">
            {/* COLUMN HEADER */}
            <div className="flex items-center justify-between mb-4 px-1">
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-medium text-white">
                  {column.title}
                </h2>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-mono border ${
                    isCompletedCol
                      ? "bg-[#142920] text-[#4ade80] border-[#1f3d2f]"
                      : "bg-[#222222] text-gray-400 border-transparent"
                  }`}
                >
                  {column.tasks.length}
                </span>
              </div>

              {/* Tombol Add hanya muncul di kolom non-completed */}
              {!isCompletedCol && (
                <button
                  onClick={onCreateTask}
                  className="text-xs text-gray-400 hover:text-white transition-colors font-medium"
                >
                  + Add
                </button>
              )}
            </div>

            {/* TASKS CONTAINER */}
            <div className="space-y-3">
              {column.tasks.map((task) => (
                <div
                  key={task.id}
                  className={`bg-[#1a1a1a] border border-[#262626] rounded-xl p-4 flex flex-col justify-between min-h-[110px] hover:border-[#363636] transition-all cursor-pointer ${
                    isCompletedCol ? "opacity-85" : ""
                  }`}
                >
                  {/* Task Title & Action */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-3">
                      {isCompletedCol ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 fill-emerald-950/30" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-gray-500 flex items-center justify-center flex-shrink-0" />
                      )}

                      <span
                        className={`text-sm font-medium ${
                          isCompletedCol
                            ? "text-gray-400 line-through decoration-gray-600"
                            : "text-gray-200"
                        }`}
                      >
                        {task.title}
                      </span>
                    </div>

                    {!isCompletedCol && (
                      <button className="text-gray-500 hover:text-white transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {/* Task Footer (Assignees & Date/Day) */}
                  <div className="flex items-center justify-between mt-4">
                    {/* Assignees Avatars */}
                    <div className="flex -space-x-1.5 items-center">
                      {task.assignees.map((avatar, idx) => (
                        <div
                          key={idx}
                          className={`w-5 h-5 rounded-full border border-[#1a1a1a] flex items-center justify-center text-[9px] font-bold text-white
                        ${avatar === "red" ? "bg-red-500" : ""}
                        ${avatar === "orange" ? "bg-amber-500" : ""}
                        ${avatar === "green" ? "bg-emerald-500" : ""}
                        ${
                          avatar.startsWith("+")
                            ? "bg-[#2d2d2d] text-gray-400"
                            : ""
                        }
                      `}
                        >
                          {!["red", "orange", "green"].includes(avatar) &&
                            avatar}
                        </div>
                      ))}
                    </div>

                    {task.label && (
                      <span className="text-xs text-gray-500">
                        {task.label}
                      </span>
                    )}
                  </div>
                </div>
              ))}

              {/* Placeholder jika kolom kosong */}
              {column.tasks.length === 0 && (
                <div className="border border-dashed border-[#262626] rounded-xl p-4 text-center text-xs text-gray-600 py-8">
                  No tasks
                </div>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}
