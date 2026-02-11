"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Play, Users, BookOpen, Award } from "lucide-react";

export function Hero() {
    return (
        <section className="w-full min-h-[600px] bg-transparent flex items-center justify-center overflow-hidden py-16 md:py-24">
            <div className="w-full max-w-[1280px] flex flex-col md:flex-row items-center justify-between px-6 md:px-[60px] lg:px-[120px] gap-12 relative">
                {/* Left Content */}
                <div className="flex-1 flex flex-col gap-8 z-10 w-full animate-in fade-in slide-in-from-left-8 duration-1000">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 w-fit">
                        <Award className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-300 text-sm font-medium">Top Rated Learning Platform</span>
                    </div>

                    {/* Heading */}
                    <div className="flex flex-col gap-4">
                        <h1 className="text-white font-bold text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
                            Learn Without
                            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                Limits
                            </span>
                        </h1>
                        <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-[500px]">
                            Access world-class courses from industry experts. Build skills that matter with interactive learning experiences designed for your success.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-8">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                                <Users className="w-6 h-6 text-purple-400" />
                            </div>
                            <div>
                                <p className="text-white font-bold text-2xl">50K+</p>
                                <p className="text-white/60 text-sm">Active Learners</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                                <BookOpen className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                                <p className="text-white font-bold text-2xl">1000+</p>
                                <p className="text-white/60 text-sm">Expert Courses</p>
                            </div>
                        </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4">
                        <Link href="/courses" className="group px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                            <span>Start Learning</span>
                            <Play className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/courses" className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm">
                            Explore Courses
                        </Link>
                    </div>
                </div>

                {/* Right Content - Course Preview */}
                <div className="flex-1 w-full max-w-[600px] relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
                    {/* Main Course Card */}
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-xl shadow-2xl group">
                        <Image
                            src="/student_1.png"
                            alt="Learning Experience"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Link href="/courses/2" className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 group">
                                <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" fill="white" />
                            </Link>
                        </div>

                        {/* Course Info Badge */}
                        <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10">
                            <p className="text-white font-semibold text-sm mb-1">Featured Course</p>
                            <p className="text-white/70 text-xs">Advanced Web Development Masterclass</p>
                        </div>
                    </div>

                    {/* Floating Stats Card */}
                    <div className="absolute -bottom-6 -right-6 p-4 rounded-xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-xl hidden md:block animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                                <Award className="w-5 h-5 text-green-400" />
                            </div>
                            <div>
                                <p className="text-white font-bold text-lg">98%</p>
                                <p className="text-white/60 text-xs">Success Rate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
