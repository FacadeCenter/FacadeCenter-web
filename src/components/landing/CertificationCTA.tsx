"use client";

import Image from "next/image";


export function CertificationCTA() {
    return (
        <section className="w-full bg-transparent py-16 md:py-24 flex justify-center">
            <div className="w-full max-w-[1280px] px-6 md:px-[60px] lg:px-[120px] flex flex-col md:flex-row items-center gap-12 md:gap-24">
                {/* Visual Section */}
                <div className="flex-1 w-full max-w-[500px] aspect-square relative order-2 md:order-1 animate-in fade-in slide-in-from-left-8 duration-1000">
                    <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full" />
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                        <Image
                            src="/student_3.png"
                            alt="Certification and Learning"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    </div>
                    {/* Floating Badge (Visual Decoration) */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-48 md:h-48 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center p-4">
                        <div className="w-full h-full border-2 border-dashed border-white/20 rounded-full flex items-center justify-center">
                            <span className="text-white text-[10px] md:text-sm font-bold text-center uppercase tracking-tighter">Certified Excellence</span>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col gap-6 order-1 md:order-2 animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
                    <h2 className="text-white font-bold text-3xl md:text-[40px] leading-tight">
                        Learn & get certification from our institute
                    </h2>
                    <p className="text-white/70 text-base md:text-lg leading-relaxed">
                        Validate your skills and expertise with recognized certifications.
                        Our comprehensive programs are designed to provide you with the knowledge
                        needed to excel in your career and earn credentials that stand out.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-4">
                        <button className="px-8 py-4 rounded-lg bg-white text-black font-semibold hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                            Get Certification
                        </button>
                        <button className="px-8 py-4 rounded-lg bg-transparent text-white border border-white/20 font-semibold hover:bg-white/5 hover:border-white/40 transition-all duration-300">
                            View Programs
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
