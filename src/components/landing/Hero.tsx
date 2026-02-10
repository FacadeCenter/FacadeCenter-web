"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export function Hero() {
    return (
        <section className="w-full min-h-[526px] bg-transparent flex items-center justify-center overflow-hidden py-12 md:py-0">
            <div className="w-full max-w-[1280px] flex flex-col md:flex-row items-center justify-between px-6 md:px-[120px] gap-12 relative">
                {/* Left Content */}
                <div className="flex-1 max-w-[542px] flex flex-col gap-[17px] z-10 w-full">
                    {/* Logo Area */}
                    <div className="w-full max-w-[302px] h-[95px] relative">
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10" />
                        <div className="relative h-full flex items-center justify-center">
                            <span className="text-white/20 font-bold text-4xl tracking-widest">LOGO</span>
                        </div>
                    </div>

                    {/* Text Content */}
                    <p
                        className="w-full max-w-[302px] text-white text-[12px] md:text-[14px] leading-relaxed"
                        style={{ fontFamily: "'Century Gothic', sans-serif" }}
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only
                    </p>

                    {/* CTA Button Container */}
                    <div className="w-full max-w-[302px]">
                        <button
                            className={cn(
                                "w-full py-4 rounded-[10px] bg-white flex items-center justify-center relative group overflow-hidden transition-all",
                                "hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] shadow-lg"
                            )}
                        >
                            <div
                                className="absolute inset-0 rounded-[10px] border-[0.38px] opacity-50"
                                style={{
                                    borderImageSource: "radial-gradient(circle at center, #b76ea0 0%, #662525 100%)",
                                    borderImageSlice: 1,
                                    backdropFilter: "blur(4px)"
                                }}
                            />
                            <span
                                className="text-[#2e2e2e] font-bold text-[15px] relative z-10"
                                style={{
                                    fontFamily: "'Century Gothic', sans-serif",
                                    textShadow: "0 0 12.18px rgba(255, 255, 255, 1)"
                                }}
                            >
                                Get started
                            </span>
                        </button>
                    </div>
                </div>

                {/* Right Content - Visuals */}
                <div className="flex-1 w-full max-w-[598px] flex flex-col md:flex-row items-center gap-6 relative">
                    <div className="w-full aspect-[2/1] md:h-[276px] rounded-[12px] overflow-hidden border border-white/10 bg-white/5 relative group shrink-0">
                        <Image
                            src="/student_1.png"
                            alt="University Students Collaborative Learning"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent pointer-events-none" />
                    </div>

                    {/* Decorative Frame for Desktop */}
                    <div className="hidden lg:block w-[150px] h-[276px] rounded-[12px] overflow-hidden border border-white/10 bg-white/5 relative opacity-30 shrink-0">
                        <Image
                            src="/student_2.png"
                            alt="Campus Life"
                            fill
                            className="object-cover blur-[2px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
