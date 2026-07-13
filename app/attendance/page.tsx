"use client";
import { useAttendance } from "@/hook/useAttendance";
import { useState } from "react";

// Data Dummy untuk Attendance History
// const attendanceData = [
//   {
//     date: "March 08, 2023",
//     status: "On Time",
//     checkIn: "08:53",
//     checkOut: "17:15",
//     statusColor: "text-[#22c55e] bg-[#22c55e]/10",
//   },
//   {
//     date: "March 07, 2023",
//     status: "Late",
//     checkIn: "08:27",
//     checkOut: "17:09",
//     statusColor: "text-[#eab308] bg-[#eab308]/10",
//   },
//   {
//     date: "March 06, 2023",
//     status: "Absent",
//     checkIn: "-",
//     checkOut: "-",
//     statusColor: "text-gray-400 bg-gray-400/10",
//   },
//   {
//     date: "March 05, 2023",
//     status: "On Time",
//     checkIn: "08:55",
//     checkOut: "17:10",
//     statusColor: "text-[#22c55e] bg-[#22c55e]/10",
//   },
//   {
//     date: "March 04, 2023",
//     status: "On Time",
//     checkIn: "08:58",
//     checkOut: "17:06",
//     statusColor: "text-[#22c55e] bg-[#22c55e]/10",
//   },
//   {
//     date: "March 03, 2023",
//     status: "Late",
//     checkIn: "08:40",
//     checkOut: "17:02",
//     statusColor: "text-[#eab308] bg-[#eab308]/10",
//   },
// ];
export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
};
export const formatTime = (dateTime: string) => {
  return new Date(dateTime).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};
const getStatusClass = (status: string) => {
  switch (status.toLowerCase()) {
    case "present":
      return "text-[#22c55e] bg-[#22c55e]/10";

    case "late":
      return "text-[#eab308] bg-[#eab308]/10";

    case "absent":
      return "text-gray-400 bg-gray-400/10";

    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function AttendanceDashboard() {
  const [page, setPage] = useState(1);
  const limit = 6;
  const { data, isLoading, isError, error } = useAttendance(page, limit);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{String(error)}</div>;
  }

  const attendanceData = data?.data ?? [];
  const totalPages = data?.pagination?.total_pages ?? 1;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-[#0d0e11] p-6 flex flex-col justify-center items-center text-white font-sans selection:bg-[#00ffd1]/30">
      <div className="w-full max-w-5xl space-y-6">
        {/* ================= CARD 1: DETAIL EMPLOYEE ================= */}
        <div className="bg-[#121316] rounded-3xl p-6 md:p-8 border border-white/5 shadow-xl">
          {/* Header Card 1 */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-6 bg-[#00ffd1] rounded-full inline-block"></span>
              <h2 className="text-xl font-semibold tracking-wide text-gray-100">
                Detail Employee
              </h2>
            </div>
            <div className="flex items-center gap-3 self-end sm:self-auto">
              <div className="relative">
                <select className="bg-[#1c1d22] text-sm text-gray-300 px-4 py-2.5 rounded-xl border border-white/5 appearance-none pr-10 focus:outline-none focus:border-[#00ffd1]/50 cursor-pointer">
                  <option>This Year</option>
                  <option>This Month</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">
                  ▼
                </div>
              </div>
              <button className="bg-[#00ffd1] text-[#121316] text-sm font-semibold px-4 py-2.5 rounded-xl flex items-center gap-2 hover:bg-[#00e5bc] transition-all shadow-lg shadow-[#00ffd1]/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                Download Info
              </button>
            </div>
          </div>

          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8 border-b border-white/5 pb-8">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#00ffd1]/20 bg-gray-700 flex-shrink-0">
              {/* Ganti src dengan URL foto asli atau gunakan placeholder */}
              <div className="w-full h-full bg-gradient-to-tr from-orange-400 to-amber-200 flex items-center justify-center text-3xl">
                👩‍💼
              </div>
            </div>
            <div className="flex flex-col text-center md:text-left justify-center h-full pt-2">
              <h3 className="text-2xl font-bold tracking-wide">
                Natashia Khaleira
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 gap-x-12 mt-4 text-sm">
                <div>
                  <p className="text-gray-500 font-medium mb-1">Role</p>
                  <p className="text-gray-200 font-semibold text-base">
                    Head of UX Design
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 font-medium mb-1">Phone Number</p>
                  <p className="text-gray-200 font-semibold text-base">
                    (+62) 812 3456-7890
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 font-medium mb-1">
                    Email Address
                  </p>
                  <p className="text-gray-200 font-semibold text-base">
                    natasiakhaleira@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mini Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Stat 1 */}
            <div className="bg-[#1c1d22] p-4 rounded-2xl flex items-center gap-4 border border-white/[0.02]">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xl font-bold">309</p>
                <p className="text-xs text-gray-500 mt-0.5">Total Attendance</p>
              </div>
            </div>
            {/* Stat 2 */}
            <div className="bg-[#1c1d22] p-4 rounded-2xl flex items-center gap-4 border border-white/[0.02]">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xl font-bold">08:46</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Avg Check In Time
                </p>
              </div>
            </div>
            {/* Stat 3 */}
            <div className="bg-[#1c1d22] p-4 rounded-2xl flex items-center gap-4 border border-white/[0.02]">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l3 3m0 0l-3 3m3-3H2.25"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xl font-bold">17:04</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Avg Check Out Time
                </p>
              </div>
            </div>
            {/* Stat 4 */}
            <div className="bg-[#1c1d22] p-4 rounded-2xl flex items-center gap-4 border border-white/[0.02]">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-base font-bold truncate max-w-[130px] sm:max-w-none">
                  Role Model
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Employee Predicate
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CARD 2: ATTENDANCE HISTORY ================= */}
        <div className="bg-[#121316] rounded-3xl p-6 md:p-8 border border-white/5 shadow-xl">
          {/* Header Card 2 */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-6 bg-[#00ffd1] rounded-full inline-block"></span>
              <h2 className="text-xl font-semibold tracking-wide text-gray-100">
                Attendance History
              </h2>
            </div>

            {/* Toolbar Fitur */}
            <div className="flex items-center gap-2 self-end sm:self-auto text-sm">
              {/* Grid/List View Buttons */}
              <div className="bg-[#1c1d22] p-1 rounded-xl flex border border-white/5">
                <button className="bg-[#292a30] text-white p-2 rounded-lg">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button className="text-gray-500 p-2 rounded-lg hover:text-gray-300">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
              {/* Sort Button */}
              <button className="bg-[#1c1d22] hover:bg-[#25262c] text-gray-300 border border-white/5 px-4 py-2 rounded-xl flex items-center gap-1.5 transition-colors">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                  />
                </svg>
                Sort
              </button>
              {/* Filter Button */}
              <button className="bg-[#1c1d22] hover:bg-[#25262c] text-gray-300 border border-white/5 px-4 py-2 rounded-xl flex items-center gap-1.5 transition-colors">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
                Filter
              </button>
            </div>
          </div>

          {/* Grid History Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {attendanceData.map((item, index) => (
              <div
                key={index}
                className="bg-[#1c1d22] p-5 rounded-2xl border border-white/[0.02] space-y-4"
              >
                {/* Atas Card Item */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-medium">{formatDate(item.date)}</span>
                  </div>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${getStatusClass(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </div>

                {/* Waktu Check In & Out */}
                <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-3">
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">
                      Check In Time
                    </p>
                    <p className="text-base font-bold text-gray-200">
                      {formatTime(item.checkIn)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">
                      Check Out Time
                    </p>
                    <p className="text-base font-bold text-gray-200">
                      {formatTime(item.checkOut)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-1 text-sm">
            {pages.map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                  page === p
                    ? "bg-[#292a30] text-white font-semibold"
                    : "text-gray-400 hover:bg-white/5"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
