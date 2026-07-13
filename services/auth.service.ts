// lib/services/auth.service.ts

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number; // Durasi dalam detik, misal: 3600 (1 jam)
  profile: {
    id: string;
    name: string;
    email: string;
  };
}

interface RefreshResponse {
  accessToken: string;
  refreshToken?: string;
  expiresIn: number;
}

export const AuthService = {
  /**
   * Mengirim kredensial login ke backend utama
   */
  async login(credentials: Record<string, string>): Promise<LoginResponse> {
    const res = await fetch("https://api.yourservice.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || "Gagal melakukan autentikasi");
    }

    return res.json();
  },

  /**
   * Melakukan rotasi token ketika accessToken lama kedaluwarsa
   */
  async refreshAccessToken(refreshToken: string): Promise<RefreshResponse> {
    const res = await fetch("https://api.yourservice.com/auth/refresh", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || "Refresh Token Invalid/Expired");
    }

    return res.json();
  },
};