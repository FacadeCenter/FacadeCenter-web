"use client";

import * as React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        image: "/student_1.png",
        title: "Unlock Your Potential with Byway",
        description: "Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success.",
    },
    {
        image: "/student_2.png",
        title: "Collaborative Excellence",
        description: "Join a community of learners dedicated to mutual growth and success. Our platforms facilitate peer-to-peer interaction and expert mentorship.",
    },
    {
        image: "/student_3.png",
        title: "Flexible Learning Paths",
        description: "Whether you're a student, professional, or lifelong learner, our cutting-edge Learning Management System is designed to elevate your learning experience.",
    },
];

export function InstructorCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section className="w-full bg-transparent py-16 flex justify-center">
            <div className="w-full max-w-[1280px] px-6 md:px-[60px] lg:px-[120px] relative">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0c051e] to-black transition-all duration-500" ref={emblaRef}>
                    <div className="flex">
                        {slides.map((slide, index) => (
                            <div key={index} className="flex-[0_0_100%] min-w-0 relative flex flex-col md:flex-row items-center gap-8 md:gap-12 min-h-[400px] md:h-[535px]">
                                {/* Text Content */}
                                <div className="flex-1 p-8 md:p-16 flex flex-col gap-6 order-2 md:order-1">
                                    <h2 className="text-white font-bold text-3xl md:text-[40px] leading-tight tracking-tight">
                                        {slide.title}
                                    </h2>
                                    <p className="text-white/80 text-sm md:text-base leading-relaxed">
                                        {slide.description}
                                    </p>
                                    <button className="w-fit px-8 py-4 rounded-lg bg-white text-black font-semibold shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:bg-white/90 hover:scale-105 transition-all duration-300">
                                        Start your instructor journey
                                    </button>
                                </div>

                                {/* Image Section */}
                                <div className="flex-1 h-[300px] md:h-full w-full relative order-1 md:order-2">
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/40 hidden md:block" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={scrollPrev}
                    className="absolute left-8 md:left-[80px] lg:left-[140px] top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 border border-white/20 text-white hover:bg-black/80 transition-all opacity-0 md:opacity-100 group-hover:opacity-100"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={scrollNext}
                    className="absolute right-8 md:right-[80px] lg:right-[140px] top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 border border-white/20 text-white hover:bg-black/80 transition-all opacity-0 md:opacity-100 group-hover:opacity-100"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-6">
                    {slides.map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-white/20" />
                    ))}
                </div>
            </div>
        </section>
    );
}
