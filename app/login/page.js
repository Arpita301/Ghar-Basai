"use client";

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.username && formData.password) {
      Swal.fire({
        title: "Login Successful!",
        text: "Welcome back!",
        icon: "success",
        confirmButtonColor: "#7C3AED",
      }).then(() => {
        router.push("/home");   // ⭐ Redirect to Home
      });
    } else {
      Swal.fire({
        title: "Invalid Credentials",
        text: "Please enter valid username and password.",
        icon: "error",
        confirmButtonColor: "#EF4444",
      });
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: "url('registerbg.png')" }}
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-10px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float 6s ease-in-out infinite; animation-delay: 3s; }
        .animate-fade-in-up { animation: fadeInUp 0.6s ease-out forwards; }
        .animate-scale-in { animation: scaleIn 0.5s ease-out forwards; }
      `}</style>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -top-20 -left-20 animate-float"></div>
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -bottom-20 -right-20 animate-float-delayed"></div>
      </div>

      <div className="relative bg-white/95 backdrop-blur-sm px-10 py-12 rounded-3xl shadow-2xl w-[90%] max-w-md transform transition-all duration-500 hover:shadow-purple-500/20 hover:shadow-3xl animate-scale-in">
        <h2 className="text-center text-4xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-8 animate-fade-in-up">
          Login
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username or Email Address*"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-6 py-3.5 bg-gray-50 border border-gray-200 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
            required
          />

          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password*"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-6 py-3.5 bg-gray-50 border border-gray-200 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="text-right animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a href="#" className="text-sm text-gray-500 hover:text-purple-600 transition-colors">
              Forgot Password?
            </a>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white py-3.5 rounded-full font-semibold shadow-lg hover:shadow-purple-500/50 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 mt-4 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Login
          </button>

          <div className="mt-6 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <p className="text-center text-sm text-gray-600 mb-4">Or Login with</p>
            <div className="flex justify-center gap-4">
              {/* FB button */}
              <button className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transform hover:scale-110 transition-all duration-200 shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>

              {/* Google button */}
              <button className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white hover:bg-red-700 transform hover:scale-110 transition-all duration-200 shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </button>
            </div>
          </div>

          <p className="text-center text-sm mt-6 text-gray-600 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            Don&apos;t have an account?{" "}
            <a href="/register" className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
              Sign Up!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
