
import React from 'react';
import { 
  Search, Target, LayoutDashboard, CheckSquare, Calendar, 
  Inbox, BarChart3, MoreHorizontal, Plus, MessageSquare, Paperclip, Clock 
} from 'lucide-react';

export default function Sidebar() {
    return (
      <aside className="w-64 bg-[#131418] border-r border-white/[0.03] flex flex-col justify-between p-4 flex-shrink-0 hidden md:flex">
        <div className="space-y-6">
          {/* Logo & Collapse */}
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-[#0d0e11] font-black italic text-sm">
                ⚡
              </div>
            </div>
            <button className="text-gray-500 hover:text-gray-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-[#1b1c21] border border-white/[0.05] rounded-xl pl-9 pr-12 py-2 text-xs focus:outline-none focus:border-white/20 text-gray-300"
            />
            <div className="absolute right-2 top-2 bg-[#25272e] text-[10px] text-gray-400 px-1.5 py-0.5 rounded border border-white/[0.05] flex gap-0.5">
              <span>⌘</span><span>F</span>
            </div>
          </div>

          {/* Main Navigation */}
          <nav className="space-y-1">
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-xs text-gray-400 hover:text-gray-200 transition-colors">
              <Target className="w-4 h-4" /> Focus
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-xs text-gray-200 bg-[#1f2026] rounded-xl font-medium shadow-inner">
              <LayoutDashboard className="w-4 h-4 text-gray-300" /> Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-xs text-gray-400 hover:text-gray-200 transition-colors">
              <CheckSquare className="w-4 h-4" /> Tasks
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-xs text-gray-400 hover:text-gray-200 transition-colors">
              <Calendar className="w-4 h-4" /> Schedule
            </a>
          </nav>

          {/* Secondary Navigation */}
          <div className="pt-4 border-t border-white/[0.03] space-y-1">
            <a href="#" className="flex items-center justify-between px-3 py-2 text-xs text-gray-400 hover:text-gray-200 transition-colors">
              <div className="flex items-center gap-3">
                <Inbox className="w-4 h-4" /> Inbox
              </div>
              <span className="bg-[#e94a4a] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">6</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-xs text-gray-400 hover:text-gray-200 transition-colors">
              <BarChart3 className="w-4 h-4" /> Analytics
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-xs text-gray-400 hover:text-gray-200 transition-colors">
              <MoreHorizontal className="w-4 h-4" /> More
            </a>
          </div>

          {/* My Team Section */}
          <div className="pt-6">
            <div className="flex items-center justify-between px-3 mb-3">
              <span className="text-[10px] font-semibold tracking-wider text-gray-500 uppercase">My team</span>
              <Plus className="w-3.5 h-3.5 text-gray-500 cursor-pointer hover:text-gray-300" />
            </div>
            <div className="space-y-2">
              {[
                { name: 'Olivia Bennett', color: 'bg-red-400', status: 'bg-green-500' },
                { name: 'Daniel Morgan', color: 'bg-blue-400', status: 'bg-yellow-500' },
                { name: 'Ethan Reynolds', color: 'bg-emerald-400', status: 'bg-green-500' }
              ].map((member, i) => (
                <div key={i} className="flex items-center justify-between px-3 py-1">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-6 h-6 rounded-full ${member.color} flex-shrink-0 text-[10px] text-black font-bold flex items-center justify-center`}>
                      {member.name[0]}
                    </div>
                    <span className="text-xs text-gray-300">{member.name}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-1 h-3 bg-gray-700 rounded-full inline-block"></span>
                    <span className={`w-1 h-3.5 ${member.status} rounded-full inline-block`}></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    )
}