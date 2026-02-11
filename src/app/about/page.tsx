"use client";

import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { BackgroundVideo } from "@/components/common/BackgroundVideo";
import { Award, Globe, Users, Zap, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col relative selection:bg-purple-500/30">
            <BackgroundVideo />
            <Navbar />

            <main className="flex-1 relative z-10">
                {/* Hero Section */}
                <section className="pt-32 pb-20 px-6 md:px-[60px] lg:px-[120px] bg-gradient-to-t from-purple-900/20 via-transparent to-transparent text-center">
                    <div className="max-w-4xl mx-auto space-y-6">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-semibold tracking-wider uppercase">
                            Our Story
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                            Redefining the Future of <br />
                            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Online Learning</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            We are building a global community where knowledge flows freely, empowering individuals to master the skills of tomorrow, today.
                        </p>
                    </div>
                </section>

                {/* Mission & Vision Grid */}
                <section className="py-20 px-6 md:px-[60px] lg:px-[120px]">
                    <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-12">
                        {/* Mission */}
                        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-purple-500/30 transition-all group">
                            <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center mb-6 border border-purple-500/30 group-hover:scale-110 transition-transform">
                                <Zap className="w-7 h-7 text-purple-400" />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                To democratize education by providing high-quality, accessible, and affordable learning resources to everyone, everywhere. We believe that curiosity should never be limited by geography or financial means.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-pink-500/30 transition-all group">
                            <div className="w-14 h-14 rounded-full bg-pink-500/20 flex items-center justify-center mb-6 border border-pink-500/30 group-hover:scale-110 transition-transform">
                                <Globe className="w-7 h-7 text-pink-400" />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                To become the world's leading platform for futuristic education, fostering a generation of innovators, creators, and leaders who are equipped to solve the challenges of the next century.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-12 bg-white/5 border-y border-white/5">
                    <div className="max-w-[1440px] mx-auto px-6 md:px-[60px] lg:px-[120px]">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {[
                                { number: "50K+", label: "Active Students" },
                                { number: "1000+", label: "Premium Courses" },
                                { number: "200+", label: "Expert Instructors" },
                                { number: "150+", label: "Countries Reached" }
                            ].map((stat, i) => (
                                <div key={i} className="space-y-2">
                                    <h3 className="text-4xl md:text-5xl font-bold text-white">{stat.number}</h3>
                                    <p className="text-purple-300 font-medium">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-20 px-6 md:px-[60px] lg:px-[120px]">
                    <div className="max-w-[1440px] mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Us?</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Experience the difference of a platform built with passion, precision, and a focus on your success.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Award className="w-8 h-8 text-yellow-400" />,
                                    title: "Industry Recognition",
                                    desc: "Our certificates are recognized by top tech companies worldwide."
                                },
                                {
                                    icon: <Users className="w-8 h-8 text-blue-400" />,
                                    title: "Global Community",
                                    desc: "Connect with learners and mentors from diverse backgrounds."
                                },
                                {
                                    icon: <CheckCircle2 className="w-8 h-8 text-green-400" />,
                                    title: "Lifetime Access",
                                    desc: "Pay once and own the course content forever, with free updates."
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center text-center p-8 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                                    <div className="mb-6 p-4 bg-black/30 rounded-full">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
