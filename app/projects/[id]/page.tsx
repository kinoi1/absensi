"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  List,
  KanbanSquare,
  GitBranch,
  User,
  Users,
} from "lucide-react";
import Board from "./board";
import ListTask from "./list";
import CreateTaskModal from "./modal";
import Swal from 'sweetalert2';

const handleCompleteTask = async () => {
  const result = await Swal.fire({
    title: 'Selesaikan Task?',
    text: 'Apakah Anda ingin menyelesaikan task ini?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Ya',
    cancelButtonText: 'Batal',
    confirmButtonColor: '#08c51e',
  });

  if (result.isConfirmed) {
    // Logic menyelesaikan task
    console.log('Task selesai');
  }
};
export default function Schedule() {
  const [viewMode, setViewMode] = useState<"list" | "board">("board");
  const [showCreateTask, setShowCreateTask] = useState(false);

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
            <button
              onClick={() => setViewMode("list")}
              className={`flex items-center gap-1.5 py-1 px-2 transition-colors ${
                viewMode === "list"
                  ? "text-[#4f46e5] border-b-2 border-[#4f46e5] font-medium"
                  : "hover:text-white"
              }`}
            >
              <List className="w-4 h-4" />
              <span>List</span>
            </button>

            <button
              onClick={() => setViewMode("board")}
              className={`flex items-center gap-1.5 py-1 px-2 transition-colors ${
                viewMode === "board"
                  ? "text-[#4f46e5] border-b-2 border-[#4f46e5] font-medium"
                  : "hover:text-white"
              }`}
            >
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

      {viewMode === "board" && (
        <Board onCreateTask={() => setShowCreateTask(true)} onCompleteTask={handleCompleteTask}/>
      )}

      {viewMode === "list" && (
        <ListTask onCreateTask={() => setShowCreateTask(true)} onCompleteTask={handleCompleteTask}/>
      )}

      <CreateTaskModal
        open={showCreateTask}
        onClose={() => setShowCreateTask(false)}
      />
    </main>
  );
}
