import { api } from "@/lib/api";

export interface CheckInPayload {
  user_id: number;
  latitude: number;
  longitude: number;
}

export interface CheckOutPayload {
  user_id: number;
  latitude: number;
  longitude: number;
}

export interface Attendance {
  id: number;
  userID: number;
  date: string;
  checkIn: string;
  checkOut: string;
  status: string;
}
export interface Pagination {
  current_page: number;
  per_page: number;
  total_data: number;
  total_pages: number;
  has_next: boolean;
  has_prev: boolean;
}

export interface AttendanceResponse {
  success: boolean;
  message: string;
  data: Attendance[];
  pagination: Pagination;
}


export const attendanceService = {
  /**
   * Ambil semua data absensi
   */
  getAll: async (page = 1, limit = 6): Promise<AttendanceResponse> => {
    const { data } = await api.get("/attendance", {
      params: {
        page,
        limit,
      },
    });

    return data;
  },

  /**
   * Ambil detail absensi berdasarkan ID
   */
  getById: async (id: number) => {
    const { data } = await api.get(`/attendance/${id}`);
    return data;
  },

  /**
   * Check In
   */
  checkIn: async (payload: CheckInPayload) => {
    const { data } = await api.post("/attendance/checkin", payload);

    return data;
  },

  /**
   * Check Out
   */
  checkOut: async (payload: CheckOutPayload) => {
    const { data } = await api.post("/attendance/checkout", payload);

    return data;
  },
};
