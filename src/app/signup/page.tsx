"use client";

import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { BackgroundVideo } from "@/components/common/BackgroundVideo";

export default function SignupPage() {
    return (
        <div className="min-h-screen flex flex-col relative">
            <BackgroundVideo />
            <Navbar />

            <main className="flex-1 flex items-center justify-center relative z-10">
                <div className="w-full max-w-[1280px] h-auto md:h-[895px] flex flex-col md:flex-row items-center justify-end py-10 md:py-0">
                    {/* Left Section - Empty/Decorative */}
                    <div className="hidden md:block flex-1 h-full" />

                    {/* Right Section - Signup Form */}
                    <div className="w-full md:w-[522px] h-full flex flex-col items-end justify-center p-5 md:p-0">
                        <div className="w-full h-auto md:h-[895px] bg-black/[0.004] backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.5)] flex items-center justify-center px-6 md:px-12 py-8 md:py-5">
                            <div className="w-full max-w-[425px] flex flex-col gap-5">
                                {/* Title */}
                                <h1 className="text-white font-semibold text-[28px] md:text-[32px] leading-tight text-center">
                                    Create Your Account
                                </h1>

                                {/* Form */}
                                <div className="flex flex-col gap-5">
                                    {/* Full Name Row */}
                                    <div className="flex flex-col md:flex-row gap-4">
                                        {/* First Name */}
                                        <div className="flex-1 flex flex-col gap-1.5">
                                            <label className="text-white font-semibold text-lg">
                                                Full Name
                                            </label>
                                            <div className="w-full h-[58px] bg-black/[0.004] backdrop-blur-xl border border-white/20 rounded-lg px-4 flex items-center">
                                                <input
                                                    type="text"
                                                    placeholder="First Name"
                                                    className="w-full bg-transparent text-white/90 placeholder:text-white/60 outline-none text-base"
                                                />
                                            </div>
                                        </div>

                                        {/* Last Name */}
                                        <div className="flex-1 flex flex-col gap-1.5">
                                            <label className="text-white font-semibold text-lg opacity-0 pointer-events-none">
                                                Last
                                            </label>
                                            <div className="w-full h-[58px] bg-black/[0.004] backdrop-blur-xl border border-white/20 rounded-lg px-4 flex items-center">
                                                <input
                                                    type="text"
                                                    placeholder="Last Name"
                                                    className="w-full bg-transparent text-white/90 placeholder:text-white/60 outline-none text-base"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Username Field */}
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-white font-semibold text-lg">
                                            Username
                                        </label>
                                        <div className="w-full h-[58px] bg-black/[0.004] backdrop-blur-xl border border-white/20 rounded-lg px-4 flex items-center">
                                            <input
                                                type="text"
                                                placeholder="Username"
                                                className="w-full bg-transparent text-white/90 placeholder:text-white/60 outline-none text-base"
                                            />
                                        </div>
                                    </div>

                                    {/* Email Field */}
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-white font-semibold text-lg">
                                            Email
                                        </label>
                                        <div className="w-full h-[58px] bg-black/[0.004] backdrop-blur-xl border border-white/20 rounded-lg px-4 flex items-center">
                                            <input
                                                type="email"
                                                placeholder="Email ID"
                                                className="w-full bg-transparent text-white/90 placeholder:text-white/60 outline-none text-base"
                                            />
                                        </div>
                                    </div>

                                    {/* Password Row */}
                                    <div className="flex flex-col md:flex-row gap-4">
                                        {/* Password */}
                                        <div className="flex-1 flex flex-col gap-1.5">
                                            <label className="text-white font-semibold text-lg">
                                                Password
                                            </label>
                                            <div className="w-full h-[58px] bg-black/[0.004] backdrop-blur-xl border border-white/20 rounded-lg px-4 flex items-center">
                                                <input
                                                    type="password"
                                                    placeholder="Enter Password"
                                                    className="w-full bg-transparent text-white/90 placeholder:text-white/60 outline-none text-base"
                                                />
                                            </div>
                                        </div>

                                        {/* Confirm Password */}
                                        <div className="flex-1 flex flex-col gap-1.5">
                                            <label className="text-white font-semibold text-lg">
                                                Confirm Password
                                            </label>
                                            <div className="w-full h-[58px] bg-black/[0.004] backdrop-blur-xl border border-white/20 rounded-lg px-4 flex items-center">
                                                <input
                                                    type="password"
                                                    placeholder="Confirm Password"
                                                    className="w-full bg-transparent text-white/90 placeholder:text-white/60 outline-none text-base"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Create Account Button */}
                                    <button className="w-full h-[48px] bg-white rounded-lg flex items-center justify-center gap-1.5 hover:bg-white/90 transition-all duration-300 hover:scale-[1.02] mt-2">
                                        <span className="text-black font-medium text-sm">Create Account</span>
                                        <ArrowRight className="w-6 h-6 text-black" strokeWidth={2} />
                                    </button>
                                </div>

                                {/* Divider */}
                                <div className="flex items-center gap-3.5">
                                    <div className="flex-1 h-px bg-white/20" />
                                    <span className="text-white/60 text-sm">Sign up with</span>
                                    <div className="flex-1 h-px bg-white/20" />
                                </div>

                                {/* Social Login Buttons */}
                                <div className="flex items-center gap-3 justify-between">
                                    {/* Facebook */}
                                    <button className="flex-1 h-[50px] bg-white/5 backdrop-blur-md border border-white/20 rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300">
                                        <div className="w-6 h-6 relative">
                                            <svg viewBox="0 0 24 24" fill="#0866FF">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                        </div>
                                        <span className="text-[#0866FF] text-sm">Facebook</span>
                                    </button>

                                    {/* Google */}
                                    <button className="flex-1 h-[50px] bg-white/5 backdrop-blur-md border border-white/20 rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300">
                                        <div className="w-6 h-6 relative">
                                            <svg viewBox="0 0 24 24">
                                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                            </svg>
                                        </div>
                                        <span className="text-[#EA4335] text-sm">Google</span>
                                    </button>

                                    {/* Microsoft */}
                                    <button className="flex-1 h-[50px] bg-white/5 backdrop-blur-md border border-white/20 rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300">
                                        <div className="w-6 h-6 relative grid grid-cols-2 gap-0.5">
                                            <div className="bg-[#F25022]" />
                                            <div className="bg-[#7FBA00]" />
                                            <div className="bg-[#00A4EF]" />
                                            <div className="bg-[#FFB900]" />
                                        </div>
                                        <span className="text-black text-sm">Microsoft</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
