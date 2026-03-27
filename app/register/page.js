"use client";
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Swal from "sweetalert2";
import { useRouter } from "next/navigation"; 



export default function SignUpForm() {
  const router = useRouter(); 
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password match validation with SweetAlert
     if (formData.password !== formData.confirmPassword) {
      return Swal.fire({
        title: "Password Mismatch",
        text: "Password and Confirm Password do not match.",
        icon: "warning",
        confirmButtonColor: "#F59E0B"
      });
    }

    // Success alert
    Swal.fire({
      title: "Registered Successfully!",
      text: "Your account has been created.",
      icon: "success",
      confirmButtonColor: "#7C3AED"
    }).then(() => {
      router.push("/login");  // ⬅️ REDIRECT AFTER CLICKING OK
    });
  };


  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{backgroundImage: "url('registerbg.png')"}}>
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

      <div className="relative bg-white/95 backdrop-blur-sm px-10 py-12 rounded-3xl shadow-2xl w-[90%] max-w-md transform transition-all duration-500 hover:shadow-purple-500/20 hover:shadow-3xl animate-scale-in my-8">
        <h2 className="text-center text-4xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-8 animate-fade-in-up">
          Sign up
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name*"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-6 py-3.5 bg-gray-50 border border-gray-200 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 animate-fade-in-up"
            style={{animationDelay: '0.1s'}}
            required
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name*"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-6 py-3.5 bg-gray-50 border border-gray-200 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 animate-fade-in-up"
            style={{animationDelay: '0.2s'}}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address*"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-6 py-3.5 bg-gray-50 border border-gray-200 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 animate-fade-in-up"
            style={{animationDelay: '0.3s'}}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number*"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-6 py-3.5 bg-gray-50 border border-gray-200 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 animate-fade-in-up"
            style={{animationDelay: '0.4s'}}
            required
          />

          <div className="relative animate-fade-in-up" style={{animationDelay: '0.5s'}}>
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

          <div className="relative animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password*"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-6 py-3.5 bg-gray-50 border border-gray-200 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white py-3.5 rounded-full font-semibold shadow-lg hover:shadow-purple-500/50 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 mt-6 animate-fade-in-up"
            style={{animationDelay: '0.7s'}}
          >
            Sign Up
          </button>
        </div>

        <p className="text-center text-sm mt-6 text-gray-600 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          Already have an account?{" "}
          <a href="/login" className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
            Login!
          </a>
        </p>
      </div>
    </div>
  );
}
