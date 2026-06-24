import Sidebar from "../components/sidebar";

export default function AttendanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0d0e11] text-[#e3e4e6] font-sans flex antialiased">
      <Sidebar />
      {children}
    </div>
  );
}
