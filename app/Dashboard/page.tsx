import React from "react";
import {
  Search,
  Target,
  LayoutDashboard,
  CheckSquare,
  Calendar,
  Inbox,
  BarChart3,
  MoreHorizontal,
  Plus,
  MessageSquare,
  Paperclip,
  Clock,
} from "lucide-react";
import DashboardLayout from "./layout";

export default function Dashboard() {
  return (
    <DashboardLayout>
        {/* ================= MAIN CONTENT CONTAINER ================= */}
        <main className="flex-1 bg-[#0d0e11] p-6 lg:p-8 overflow-y-auto">
          {/* Top Header & Submenu */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold tracking-tight mb-4">
              Dashboard
            </h1>
            <div className="flex items-center gap-4 text-xs border-b border-white/[0.03] pb-3">
              <button className="bg-[#1f2026] text-white px-3 py-1.5 rounded-lg font-medium">
                Overview
              </button>
              <button className="text-gray-500 hover:text-gray-300 px-1">
                Team
              </button>
              <button className="text-gray-500 hover:text-gray-300 px-1">
                Projects
              </button>
              <button className="text-gray-500 hover:text-gray-300 px-1">
                Insights
              </button>
            </div>
          </div>

          {/* Dashboard Content Split */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* LEFT & CENTER: Stats & Tasks Grid */}
            <div className="lg:col-span-2 space-y-6">
              {/* Top 3 Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Card 1 */}
                <div className="bg-[#131418] border border-white/[0.03] rounded-2xl p-4 flex flex-col justify-between">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs text-gray-500">
                      Tasks completed
                    </span>
                    <span className="text-[10px] font-semibold text-[#22c55e] bg-[#22c55e]/10 px-1.5 py-0.5 rounded-md">
                      +3.2%
                    </span>
                  </div>
                  <div className="flex items-end justify-between mt-2">
                    <span className="text-3xl font-bold tracking-tight">
                      158
                    </span>
                    {/* Mock Mini Sparkline */}
                    <div className="flex items-end gap-0.5 h-8">
                      <span className="w-1 bg-[#a855f7]/30 h-3 rounded-t"></span>
                      <span className="w-1 bg-[#a855f7]/50 h-5 rounded-t"></span>
                      <span className="w-1 bg-[#a855f7] h-7 rounded-t"></span>
                      <span className="w-1 bg-[#a855f7]/70 h-4 rounded-t"></span>
                      <span className="w-1 bg-[#a855f7] h-8 rounded-t"></span>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-[#131418] border border-white/[0.03] rounded-2xl p-4 flex flex-col justify-between">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs text-gray-500">
                      Completion rate
                    </span>
                    <span className="text-[10px] font-semibold text-[#22c55e] bg-[#22c55e]/10 px-1.5 py-0.5 rounded-md">
                      +6.5%
                    </span>
                  </div>
                  <div className="flex items-end justify-between mt-2">
                    <span className="text-3xl font-bold tracking-tight">
                      89%
                    </span>
                    {/* Mock Line Graph */}
                    <svg
                      className="w-14 h-6 text-[#a855f7]"
                      viewBox="0 0 50 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M0 15 Q12 5 25 12 T50 2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-[#131418] border border-white/[0.03] rounded-2xl p-4 flex flex-col justify-between">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs text-gray-500">
                      Pending reviews
                    </span>
                  </div>
                  <div className="flex items-end justify-between mt-2">
                    <span className="text-3xl font-bold tracking-tight">7</span>
                    {/* Facepile overlay */}
                    <div className="flex -space-x-2 overflow-hidden mb-1">
                      <div className="w-5 h-5 rounded-full bg-red-400 border border-[#131418]"></div>
                      <div className="w-5 h-5 rounded-full bg-blue-400 border border-[#131418]"></div>
                      <div className="w-5 h-5 rounded-full bg-amber-400 border border-[#131418]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* "My Day" Section Header */}
              <div className="flex justify-between items-center pt-2">
                <h2 className="text-base font-semibold">My day</h2>
                <button className="text-xs text-gray-500 bg-[#131418] border border-white/[0.03] px-2.5 py-1 rounded-lg hover:text-gray-300">
                  View all
                </button>
              </div>

              {/* Task Row List */}
              <div className="space-y-3">
                {/* Task Row 1 */}
                <div className="bg-[#131418] border border-white/[0.03] rounded-2xl p-4 space-y-3 hover:border-white/[0.06] transition-all">
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <div className="flex items-center gap-1.5 bg-[#1b1c21] px-2 py-1 rounded-lg border border-white/[0.02]">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      <span>In 2h 16m</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-3.5 h-3.5" /> 3
                      </span>
                      <span className="flex items-center gap-1">
                        <Paperclip className="w-3.5 h-3.5" /> 0
                      </span>
                    </div>
                  </div>
                  <h3 className="text-sm font-medium text-gray-200">
                    Review final UI assets for marketing website
                  </h3>
                  <div className="flex justify-between items-center pt-1">
                    <div className="flex flex-wrap gap-2 text-[10px] font-semibold">
                      <span className="bg-[#e94a4a]/10 text-[#e94a4a] px-2 py-0.5 rounded-md">
                        High
                      </span>
                      <span className="bg-[#eab308]/10 text-[#eab308] px-2 py-0.5 rounded-md flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-[#eab308] rounded-full inline-block"></span>{" "}
                        In Progress
                      </span>
                      <span className="bg-white/5 text-gray-400 px-2 py-0.5 rounded-md">
                        LumenForge
                      </span>
                    </div>
                    <div className="flex -space-x-1.5">
                      <div className="w-5 h-5 rounded-full bg-blue-400 border border-[#131418]"></div>
                      <div className="w-5 h-5 rounded-full bg-red-400 border border-[#131418]"></div>
                    </div>
                  </div>
                </div>

                {/* Task Row 2 */}
                <div className="bg-[#131418] border border-white/[0.03] rounded-2xl p-4 space-y-3 hover:border-white/[0.06] transition-all">
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <div className="flex items-center gap-1.5 bg-[#1b1c21] px-2 py-1 rounded-lg border border-white/[0.02]">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      <span>In 3h 25m</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-3.5 h-3.5" /> 1
                      </span>
                      <span className="flex items-center gap-1">
                        <Paperclip className="w-3.5 h-3.5" /> 2
                      </span>
                    </div>
                  </div>
                  <h3 className="text-sm font-medium text-gray-200">
                    Oversee copy refinement for integration pages
                  </h3>
                  <div className="flex justify-between items-center pt-1">
                    <div className="flex flex-wrap gap-2 text-[10px] font-semibold">
                      <span className="bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-md">
                        Medium
                      </span>
                      <span className="bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded-md flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full inline-block"></span>{" "}
                        Todo
                      </span>
                      <span className="bg-white/5 text-gray-400 px-2 py-0.5 rounded-md">
                        NebulaCart
                      </span>
                    </div>
                    <div className="w-5 h-5 rounded-full bg-emerald-400 border border-[#131418]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= RIGHT SIDEBAR PANEL ================= */}
            <div className="space-y-6">
              {/* Team Capacity Panel */}
              <div className="bg-[#131418] border border-white/[0.03] rounded-2xl p-4">
                <h2 className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
                  Team capacity
                </h2>
                <div className="space-y-3.5">
                  {[
                    { name: "Olivia Bennett", color: "bg-red-400" },
                    { name: "Daniel Morgan", color: "bg-blue-400" },
                    { name: "Sophie Kim", color: "bg-purple-400" },
                  ].map((member, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-6 h-6 rounded-full ${member.color} text-[10px] text-black font-bold flex items-center justify-center`}
                        >
                          {member.name[0]}
                        </div>
                        <span className="text-xs text-gray-300 font-medium">
                          {member.name}
                        </span>
                      </div>
                      {/* Progress Bar Mini */}
                      <div className="w-24 bg-gray-800 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-[#a855f7] h-full rounded-full"
                          style={{ width: `${85 - i * 15}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Mentions Panel */}
              <div className="bg-[#131418] border border-white/[0.03] rounded-2xl p-4">
                <h2 className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
                  Recent mentions
                </h2>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-red-400 text-[9px] text-black font-bold flex items-center justify-center">
                        O
                      </div>
                      <span className="text-xs font-semibold text-gray-300">
                        Olivia Bennett
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-400 pl-7 leading-relaxed">
                      <span className="text-purple-400 font-medium">
                        @James
                      </span>{" "}
                      Could you review the latest spacing adjustments?
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-blue-400 text-[9px] text-black font-bold flex items-center justify-center">
                        D
                      </div>
                      <span className="text-xs font-semibold text-gray-300">
                        Michael Torres
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-400 pl-7 leading-relaxed">
                      <span className="text-purple-400 font-medium">
                        @James
                      </span>{" "}
                      Added the Figma prototypes to the flow layout.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
    </DashboardLayout>
  );
}
