// app/login/page.tsx
"use client";

import React, { useState } from "react";
import { User, Eye, EyeOff, Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Menggunakan TanStack Mutation untuk membungkus proses autentikasi NextAuth
  const loginMutation = useMutation({
    mutationFn: async () => {
      setErrorMsg(""); // Reset error state sebelum mencoba login

      // Memicu credentials provider yang ada di lib/auth.ts
      const result = await signIn("credentials", {
        redirect: false, // Jangan otomatis redirect agar bisa di-handle oleh TanStack Query
        username,
        password,
      });

      // Jika NextAuth mengembalikan properti error (melempar dari authorize)
      if (result?.error) {
        throw new Error(result.error || "Username atau password salah.");
      }

      return result;
    },
    onSuccess: () => {
      // Jika sukses, arahkan user ke dashboard dan refresh state halaman
      router.push("/dashboard");
      router.refresh();
    },
    onError: (error: any) => {
      // Menangkap pesan error untuk ditampilkan ke UI
      setErrorMsg(error.message || "Terjadi kesalahan sistem.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate();
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0d0d0d] font-sans text-white selection:bg-white/20">
      
      {/* Background Decorative Blurred Blobs */}
      <div className="absolute top-[-10%] right-[-5%] h-[350px] w-[350px] rounded-full bg-gradient-to-br from-red-600 to-orange-600 opacity-60 blur-[80px] md:h-[450px] md:w-[450px]" />
      <div className="absolute bottom-[-10%] left-[-10%] h-[350px] w-[350px] rounded-full bg-gradient-to-br from-orange-600 to-red-700 opacity-70 blur-[90px] md:h-[450px] md:w-[450px]" />

      {/* Glassmorphism Card Container */}
      <div className="relative z-10 w-full max-w-[420px] rounded-[28px] border border-white/15 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-xl md:p-10">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl font-medium tracking-wide text-white">
            Sign in
          </h1>
          <p className="mt-2 text-sm font-light tracking-wide text-gray-300/80">
            welcome back! please login to your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Error Message Alert */}
          {errorMsg && (
            <div className="text-xs text-red-400 font-light bg-red-500/10 p-3.5 rounded-xl border border-red-500/20 animate-fadeIn">
              {errorMsg}
            </div>
          )}
          
          {/* Username / Email Input */}
          <div className="relative flex items-center">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username or Email"
              className="w-full rounded-xl border border-white/10 bg-white/[0.06] py-3.5 pl-4 pr-11 text-sm text-white placeholder-gray-400/60 outline-none transition-all duration-300 focus:border-white/20 focus:bg-white/[0.09] disabled:opacity-50"
              disabled={loginMutation.isPending}
              required
            />
            <User className="absolute right-4 h-5 w-5 text-gray-400/60" strokeWidth={1.5} />
          </div>

          {/* Password Input */}
          <div className="relative flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full rounded-xl border border-white/10 bg-white/[0.06] py-3.5 pl-4 pr-11 text-sm text-white placeholder-gray-400/60 outline-none transition-all duration-300 focus:border-white/20 focus:bg-white/[0.09] disabled:opacity-50"
              disabled={loginMutation.isPending}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 text-gray-400/60 hover:text-white transition-colors disabled:opacity-50"
              disabled={loginMutation.isPending}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" strokeWidth={1.5} />
              ) : (
                <Eye className="h-5 w-5" strokeWidth={1.5} />
              )}
            </button>
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center space-x-2 pt-1">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 rounded border-white/20 bg-white/5 text-white checked:bg-white focus:ring-0 focus:ring-offset-0 disabled:opacity-50"
              disabled={loginMutation.isPending}
            />
            <label
              htmlFor="remember"
              className="text-sm font-light tracking-wide text-gray-300/90 cursor-pointer select-none"
            >
              Remember me
            </label>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={loginMutation.isPending}
            className="mt-4 flex w-full items-center justify-center rounded-xl bg-white py-3.5 text-center font-serif text-base font-medium text-black transition-all duration-300 hover:bg-gray-100 hover:shadow-lg active:scale-[0.99] disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            {loginMutation.isPending ? (
              <Loader2 className="h-5 w-5 animate-spin text-black" />
            ) : (
              "Sign in"
            )}
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-6 text-center text-xs font-light tracking-wide text-gray-300/80">
          <span>Dont have an account? </span>
          <a href="#" className="font-medium text-white hover:underline">
            Sign up
          </a>
        </div>

        {/* Watermark / Credits */}
        <div className="mt-12 text-center text-[11px] font-light tracking-widest text-gray-400/50">
          Created by <span className="font-normal text-gray-300/70">Temi The Creator</span>
        </div>
        
      </div>
    </div>
  );
}