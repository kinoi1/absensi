export interface Attendance {
  id: number;
  user_id: number;
  date: string;
  check_in: string;
  check_out: string;
  status: string;
}

export interface AttendanceResponse {
  success: boolean;
  message: string;
  data: Attendance[];
}