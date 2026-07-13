// lib/api-client.ts
import axios from "axios";
import { getSession, signOut } from "next-auth/react";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Inject JWT Token sebelum request dikirim
apiClient.interceptors.request.use(
  async (config) => {
    const session = await getSession();
    
    // Jika NextAuth mendeteksi error refresh token, paksa user logout
    if (session?.error === "RefreshAccessTokenError") {
      signOut({ callbackUrl: "/login" });
    }

    if (session?.accessToken) {
      config.headers.Authorization = `Bearer ${session.accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;