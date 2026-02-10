"use client";

import { cn } from "@/lib/utils";

const features = [
    {
        title: "Interactive Videos",
        description: "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    },
    {
        title: "Secure Payments",
        description: "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    },
    {
        title: "Real-time Support",
        description: "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    },
];

export function Features() {
    return (
        <section className="w-full bg-transparent py-16 md:py-[73px] flex flex-col items-center gap-8 md:gap-[33px]">
            <div className="max-w-[1280px] px-6 md:px-[120px] w-full flex flex-col items-center gap-8 md:gap-[33px]">
                <h2 className="text-white font-semibold text-2xl md:text-[32px] tracking-tight">
                    Features
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full place-items-center">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={cn(
                                "w-full max-w-[317px] aspect-[1.46/1] md:h-[217px] rounded-lg p-6 flex flex-col justify-end gap-2 relative overflow-hidden group transition-all",
                                "bg-white/[0.02] border border-white/10 backdrop-blur-md",
                                "hover:bg-white/[0.05] hover:border-white/20 shadow-lg shadow-black/25"
                            )}
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#000017] opacity-80 pointer-events-none" />

                            <div className="relative z-10 flex flex-col gap-2">
                                <h3 className="text-white font-semibold text-[16px] tracking-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-white/85 text-[12px] leading-tight">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
