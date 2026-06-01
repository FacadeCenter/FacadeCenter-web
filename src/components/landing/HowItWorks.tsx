"use client";

import { cn } from "@/lib/utils";
import { Search, CreditCard, BookOpen } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Browse courses",
        description: "Explore our wide range of world-class courses designed by industry experts.",
        icon: <Search className="w-8 h-8 text-white" />,
        tech: "Next.js",
        techClass: "from-white/20 to-white/5",
    },
    {
        id: 2,
        title: "Enroll & pay",
        description: "Start your journey with our secure and flexible payment options.",
        icon: <CreditCard className="w-8 h-8 text-white" />,
        tech: "Python",
        techClass: "from-blue-500/20 to-blue-400/5",
    },
    {
        id: 3,
        title: "Start Learning",
        description: "Access high-quality content and start building your future today.",
        icon: <BookOpen className="w-8 h-8 text-white" />,
        tech: "Java",
        techClass: "from-red-500/20 to-red-400/5",
    },
];

export function HowItWorks() {
    return (
        <section className="w-full py-20 flex justify-center relative z-10">
            <div className="w-full max-w-[1280px] px-6 md:px-[60px] lg:px-[120px] flex flex-col items-center gap-16">
                {/* Title */}
                <div className="flex flex-col items-center gap-4 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h2 className="text-white font-bold text-3xl md:text-4xl tracking-tight">
                        How it works?
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="group relative flex flex-col items-center gap-6 p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl transition-all duration-500 hover:bg-white/[0.05] hover:border-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 animate-in fade-in slide-in-from-bottom-8 duration-700"
                            style={{
                                animationDelay: `${step.id * 200}ms`,
                            }}
                        >
                            {/* Step Number Badge */}
                            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold shadow-xl z-20">
                                {step.id}
                            </div>

                            {/* Icon / Tech Visual */}
                            <div className="relative w-24 h-24 flex items-center justify-center animate-pulse">
                                {/* Outer Ring */}
                                <div className="absolute inset-0 rounded-full border-4 border-white/10 group-hover:border-purple-500/30 transition-colors duration-500" />
                                {/* Tech Logo Placeholder */}
                                <div className={cn(
                                    "w-16 h-16 rounded-full bg-gradient-to-br flex items-center justify-center z-10",
                                    step.techClass
                                )}>
                                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-tighter">
                                        {step.tech}
                                    </span>
                                </div>
                                {/* Floating Icon */}
                                <div className="absolute -bottom-2 -right-2 p-2 rounded-lg bg-black border border-white/10 shadow-lg group-hover:scale-110 transition-transform">
                                    {step.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col items-center text-center gap-3">
                                <h3 className="text-white font-bold text-xl md:text-2xl h-[40px] flex items-center">
                                    {step.title}
                                </h3>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>

                            {/* Connector (Desktop only) */}
                            {step.id < steps.length && (
                                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-[2px] bg-gradient-to-r from-white/10 to-transparent" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
