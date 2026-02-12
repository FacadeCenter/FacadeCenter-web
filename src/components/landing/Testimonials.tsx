"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

import { ChevronLeft, ChevronRight, ThumbsUp } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Ryan Wyman",
        role: "Lead Markets Architect",
        image: "/ryan_wyman.png",
        text: "Ipsum vel nobis doloremque est aut non accusantium vero molestias. Et est minima dolorem eum modi atque sint nobis. Enim quod facere. Reiciendis necessitatibus ipsam non aspernatur voluptate id.",
    },
    {
        id: 2,
        name: "Sarah Jenkins",
        role: "Senior Data Scientist",
        image: "/professional_woman.png",
        text: "Explicabo sit repellendus non. Magnam eveniet minus natus. Dolores porro nisi natus. Laboriosam et et. Quisquam ut et. Sit cupiditate optio. Doloremque ut et.",
    },
    {
        id: 3,
        name: "Michael Ross",
        role: "Principal Product Manager",
        image: "/professional_man_2.png",
        text: "Doloremque ut et. Sit cupiditate optio. Dolores porro nisi natus. Laboriosam et et. Quisquam ut et. Ipsum vel nobis doloremque est aut non accusantium.",
    },
    {
        id: 4,
        name: "Linda Wong",
        role: "Strategic Analyst",
        image: "/professional_woman_2.png",
        text: "Laboriosam et et. Quisquam ut et. Sit cupiditate optio. Doloremque ut et. Ipsum vel nobis doloremque est aut non accusantium vero molestias.",
    },
];

export function Testimonials() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    return (
        <section className="w-full flex flex-col items-center py-24 px-6 md:px-[60px] lg:px-[120px] bg-transparent">
            {/* Title Section */}
            <div className="flex flex-col items-center gap-4 text-center mb-16">
                <h2 className="text-white font-bold text-3xl md:text-5xl tracking-tight">
                    What people says
                </h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
            </div>

            <div className="w-full max-w-[600px] relative">
                {/* Main Card Container */}
                <div className="overflow-hidden rounded-[32px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] border border-white/10" ref={emblaRef}>
                    <div className="flex">
                        {testimonials.map((item, index) => (
                            <div key={item.id} className="flex-[0_0_100%] min-w-0 relative h-[250px] md:h-[310px]">
                                {/* Background Gradient Layer */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#8ba7e7] via-[#94a1d4] to-[#7b8bc2] opacity-90" />

                                {/* Large Background Quote Mark */}
                                <div className="absolute right-[-2%] bottom-[-5%] z-0 select-none opacity-20 hidden md:block">
                                    <svg width="200" height="180" viewBox="0 0 111 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M43.5 0.5C43.5 12.3333 39.5 24.3333 31.5 36.5C23.5 48.6667 13 58.6667 0 66.5V90.5H53.5V66.5C64.6667 58 74 48 81.5 36.5C89 25 93 13 93.5 0.5H43.5ZM110.5 0.5C110.5 12.3333 106.5 24.3333 98.5 36.5C90.5 48.6667 80 58.6667 67 66.5V90.5H120.5V66.5C131.667 58 141 48 148.5 36.5C156 25 160 13 160.5 0.5H110.5" fill="url(#paint0_linear_testimonial)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_testimonial" x1="80" y1="0" x2="80" y2="100" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#0047FF" />
                                                <stop offset="1" stopColor="#00A3FF" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>

                                {/* Content Layout */}
                                <div className="relative z-10 w-full h-full flex flex-col md:flex-row overflow-hidden">

                                    {/* Left Section: Info and Quote */}
                                    <div className="flex-1 flex flex-col justify-between p-4 md:p-6 md:max-w-[65%] z-20">
                                        <div>
                                            {/* Identity */}
                                            <div className="mb-3 md:mb-5">
                                                <h3 className="text-white text-xl md:text-2xl font-bold leading-tight">
                                                    {item.name}
                                                </h3>
                                                <p className="text-white/70 text-sm md:text-base font-light">
                                                    {item.role}
                                                </p>
                                            </div>

                                            {/* Small Quote Icon */}
                                            <div className="mb-2 md:mb-3">
                                                <svg width="16" height="14" viewBox="0 0 24 20" fill="white">
                                                    <path d="M9.6 15.6H5.4V11.4C5.4 7.2 8.4 4.2 12.6 4.2V0C6 0 0 4.2 0 11.4V20H9.6V15.6ZM24 15.6H19.8V11.4C19.8 7.2 22.8 4.2 27 4.2V0C20.4 0 14.4 4.2 14.4 11.4V20H24V15.6Z" />
                                                </svg>
                                            </div>

                                            {/* Testimonial Text */}
                                            <p className="text-white text-xs md:text-sm lg:text-base font-normal leading-relaxed tracking-tight max-w-[300px]">
                                                {item.text}
                                            </p>
                                        </div>

                                        {/* Desktop Navigation Controls */}
                                        <div className="hidden md:flex items-center gap-4 mt-2">
                                            <div className="flex items-center gap-3">
                                                <button onClick={scrollPrev} className="text-white hover:text-white/70 transition-colors">
                                                    <ChevronLeft className="w-6 h-6" />
                                                </button>
                                                <div className="flex items-baseline gap-1 font-mono">
                                                    <span className="text-white text-2xl">{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                                                    <span className="text-white/40 text-base">/{testimonials.length < 10 ? `0${testimonials.length}` : testimonials.length}</span>
                                                </div>
                                                <button onClick={scrollNext} className="text-white hover:text-white/70 transition-colors">
                                                    <ChevronRight className="w-6 h-6" />
                                                </button>
                                            </div>

                                            <ThumbsUp className="w-5 h-5 text-white ml-2" />
                                        </div>
                                    </div>

                                    {/* Right Section: Large Portrait (Full Height & Clipped) */}
                                    <div className="absolute right-0 top-0 h-full w-full md:w-[55%] pointer-events-none z-10">
                                        <div className="relative w-full h-full overflow-hidden">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover object-center md:object-right-top transition-transform duration-700"
                                                priority={index === 0}
                                            />
                                            {/* Gradient Overlay for Text Readability on Mobile */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
                                        </div>

                                        {/* Testimonial Badge (Floating on right side) */}
                                        <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 hidden md:flex">
                                            <div className="w-6 h-6 rounded-full bg-[#6366f1] flex items-center justify-center">
                                                <ThumbsUp className="w-3 h-3 text-white" fill="white" />
                                            </div>
                                            <span className="text-white font-bold text-xs uppercase tracking-widest">Testimonial</span>
                                        </div>
                                    </div>

                                    {/* Mobile Navigation Controls */}
                                    <div className="md:hidden flex items-center justify-between p-4 z-30">
                                        <div className="flex items-center gap-4">
                                            <button onClick={scrollPrev} className="text-white">
                                                <ChevronLeft className="w-6 h-6" />
                                            </button>
                                            <div className="flex items-baseline gap-1 font-mono">
                                                <span className="text-white text-xl">{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                                                <span className="text-white/40 text-sm">/{testimonials.length < 10 ? `0${testimonials.length}` : testimonials.length}</span>
                                            </div>
                                            <button onClick={scrollNext} className="text-white">
                                                <ChevronRight className="w-6 h-6" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Description Paragraph */}
            <div className="w-full max-w-[985px] px-6 text-center mt-12">
                <p className="text-white/40 text-[12px] leading-relaxed tracking-tight">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
            </div>
        </section>
    );
}
