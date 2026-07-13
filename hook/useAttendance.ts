"use client";

import { useQuery } from "@tanstack/react-query";
import { attendanceService } from "@/services/attendance.service";

export const useAttendance = (
  page = 1,
  limit = 6
) => {
  return useQuery({
    queryKey: ["attendance", page, limit],
    queryFn: () => attendanceService.getAll(page, limit),
  });
};