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

// Data Dummy untuk Task
const newTasks = [
  {
    id: 1,
    title: "Icon design",
    day: "Monday",
    assignees: ["red", "orange", "+2"],
  },
  {
    id: 2,
    title: "Wireframing",
    day: "Tuesday",
    assignees: ["red", "green", "+2"],
  },
  { id: 3, title: "Design system", day: "", assignees: [] },
];

const completedTasks = [
  { id: 4, title: "Onboarding screens", date: "03/24", assignees: ["red"] },
  { id: 5, title: "Wireframing", date: "05/24", assignees: ["red", "green"] },
  { id: 6, title: "Design system", date: "", assignees: [] },
];

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

export default function Schedule() {
  return (
    <main className="min-h-screen w-full bg-[#121212] text-[#e0e0e0] font-sans antialiased p-6">
      {/* HEADER SECTION */}
      <header className="border-b border-[#222222] pb-4 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Title dropdown */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <h1 className="text-2xl font-semibold text-white tracking-tight">
              My Tasks
            </h1>
            <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors mt-1" />
          </div>

          {/* View Toggle (List / Board) */}
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <button className="flex items-center gap-1.5 hover:text-white transition-colors py-1 px-2">
              <List className="w-4 h-4" />
              <span>List</span>
            </button>
            <button className="flex items-center gap-1.5 text-[#4f46e5] border-b-2 border-[#4f46e5] py-1 px-2 font-medium">
              <KanbanSquare className="w-4 h-4" />
              <span>Board</span>
            </button>
          </div>
        </div>

        {/* FILTERS BAR */}
        <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-gray-400">
          <button className="flex items-center gap-1.5 bg-[#1a1a1a] hover:bg-[#252525] px-3 py-1.5 rounded-md transition-colors border border-[#262626]">
            <GitBranch className="w-3.5 h-3.5" />
            <span>Subtasks</span>
          </button>
          <button className="flex items-center gap-1.5 bg-[#1a1a1a] hover:bg-[#252525] px-3 py-1.5 rounded-md transition-colors border border-[#262626]">
            <User className="w-3.5 h-3.5" />
            <span>Me</span>
          </button>
          <button className="flex items-center gap-1.5 bg-[#1a1a1a] hover:bg-[#252525] px-3 py-1.5 rounded-md transition-colors border border-[#262626]">
            <Users className="w-3.5 h-3.5" />
            <span>Assigness</span>
          </button>
        </div>
      </header>

      {/* KANBAN BOARD GRID */}
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
                  <button className="text-xs text-gray-400 hover:text-white transition-colors font-medium">
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
    </main>
  );
}
