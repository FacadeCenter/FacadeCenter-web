"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

const features = [
    {
        title: "Interactive Videos",
        description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
        image: "/feature_videos.png",
    },
    {
        title: "Secure Payments",
        description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
        image: "/feature_payments.png",
    },
    {
        title: "Real-time Support",
        description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
        image: "/feature_support.png",
    },
];

export function Features() {
    return (
        <section className="w-full bg-transparent py-16 md:py-[73px] flex flex-col items-center gap-8 md:gap-[33px]">
            <div className="max-w-[1280px] px-6 md:px-[60px] lg:px-[120px] w-full flex flex-col items-center gap-8 md:gap-[33px]">
                <h2 className="text-white font-semibold text-2xl md:text-[32px] tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
                    Features
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full place-items-center">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={cn(
                                "w-full max-w-[317px] aspect-[1.46/1] md:h-[217px] rounded-lg p-6 flex flex-col justify-end gap-2 relative overflow-hidden group transition-all duration-500",
                                "bg-white/[0.02] border border-white/10 backdrop-blur-md",
                                "hover:bg-white/[0.05] hover:border-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20",
                                "animate-in fade-in slide-in-from-bottom-8 duration-700"
                            )}
                            style={{
                                animationDelay: `${index * 150}ms`,
                            }}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000017]/50 to-[#000017] opacity-90 pointer-events-none" />

                            <div className="relative z-10 flex flex-col gap-2 transform group-hover:translate-y-[-4px] transition-transform duration-300">
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
