"use client";

import { cn } from "@/lib/utils";

const statsData = [
    { value: "250+", label: "Courses by our best mentors" },
    { value: "1000+", label: "Courses by our best mentors" },
    { value: "15+", label: "Courses by our best mentors" },
    { value: "2400+", label: "Courses by our best mentors" },
];

export function Stats() {
    return (
        <section className="w-full flex justify-center bg-transparent backdrop-blur-sm">
            <div
                className={cn(
                    "w-full max-w-[1280px] px-6 md:px-[60px] lg:px-[120px] py-10 md:py-[40px] flex flex-wrap items-center justify-around gap-8 md:gap-4 relative overflow-hidden border-y border-white/5"
                )}
            >
                {statsData.map((stat, index) => (
                    <div key={index} className="flex flex-col md:flex-row items-center gap-4 md:gap-[45px] flex-1 min-w-[150px]">
                        <div className="flex flex-col items-center justify-center gap-[6px]">
                            <span
                                className="text-white font-semibold text-2xl md:text-[32px] leading-none"
                                style={{ fontFamily: "Inter, sans-serif" }}
                            >
                                {stat.value}
                            </span>
                            <span
                                className="text-white/80 font-normal text-xs md:text-[14px] leading-none text-center"
                                style={{ fontFamily: "Inter, sans-serif" }}
                            >
                                {stat.label}
                            </span>
                        </div>
                        {index < statsData.length - 1 && (
                            <div
                                className="hidden xl:block w-[55px] h-0 border-t-[4px] border-[#E2E8F0] opacity-50"
                            />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
