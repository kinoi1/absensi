// lib/auth.ts
import { AuthService } from "@/services/auth.service";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username/Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error("Kredensial tidak lengkap");
        }

        try {
          // Memanggil AuthService untuk memvalidasi login ke API Backend
          const data = await AuthService.login(credentials);
          
          if (data && data.accessToken) {
            // Data yang dikembalikan di sini akan diteruskan ke callback jwt() sebagai 'user'
            return data as any;
          }
          return null;
        } catch (error: any) {
          // Melempar error pesan dari backend agar bisa ditangkap oleh client-side (TanStack Query)
          throw new Error(error.message || "Gagal masuk, periksa kembali akun Anda");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // 1. Jalankan ini HANYA saat user pertama kali sukses login
      if (user) {
        return {
          accessToken: (user as any).accessToken,
          refreshToken: (user as any).refreshToken,
          // Menghitung waktu absolut kapan token kedaluwarsa (dalam milidetik)
          accessTokenExpires: Date.now() + (user as any).expiresIn * 1000,
          user: (user as any).profile,
        };
      }

      // 2. Jika waktu sekarang BELUM melewati batas kedaluwarsa, gunakan token yang ada
      if (Date.now() < (token as any).accessTokenExpires) {
        return token;
      }

      // 3. Jika accessToken sudah kedaluwarsa, lakukan rotasi menggunakan Refresh Token
      try {
        console.log("Access token kedaluwarsa, mencoba merotasi token...");
        const refreshedTokens = await AuthService.refreshAccessToken((token as any).refreshToken);

        return {
          ...token,
          accessToken: refreshedTokens.accessToken,
          accessTokenExpires: Date.now() + refreshedTokens.expiresIn * 1000,
          // Gunakan refresh token baru jika backend menyediakannya, jika tidak gunakan yang lama
          refreshToken: refreshedTokens.refreshToken ?? (token as any).refreshToken,
        };
      } catch (error) {
        console.error("Gagal memperbarui token:", error);
        return {
          ...token,
          error: "RefreshAccessTokenError", // Flag indikator error untuk sisi klien
        };
      }
    },

    async session({ session, token }) {
      // Memetakan data dari JWT NextAuth ke objek Session agar bisa diakses komponen React via useSession()
      (session as any).user = token.user;
      (session as any).accessToken = token.accessToken;
      (session as any).error = token.error; // Diteruskan agar klien tahu jika token gagal di-refresh
      
      return session;
    },
  },
  pages: {
    signIn: "/login", // Mengarahkan ke halaman login kustom yang kita buat di awal
  },
  session: {
    strategy: "jwt", // Wajib menggunakan strategi JWT untuk arsitektur ini
  },
};