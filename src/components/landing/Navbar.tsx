"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "Cources", href: "#" },
    { label: "For Teachers", href: "#" },
    { label: "Pricing", href: "#" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full bg-black/60 backdrop-blur-md border-b border-white/5">
            <div className="max-w-[1280px] mx-auto px-6 md:px-[60px] lg:px-[120px] h-[94px] flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-white font-bold text-2xl tracking-tighter">
                    FACADE
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-[52px]">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-white font-bold text-[15px] hover:text-white/70 transition-colors"
                            style={{ fontFamily: "'Century Gothic', sans-serif" }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Buttons */}
                <div className="hidden md:flex items-center gap-[10px]">
                    <button
                        className={cn(
                            "px-[27px] py-[13px] rounded-[10px] text-white font-bold text-[15px] transition-all",
                            "bg-white/5 border border-white/10 hover:bg-white/10"
                        )}
                        style={{ fontFamily: "'Century Gothic', sans-serif" }}
                    >
                        Log In
                    </button>
                    <button
                        className={cn(
                            "px-[27px] py-[13px] rounded-[10px] bg-white text-black font-bold text-[15px] transition-all",
                            "hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                        )}
                        style={{ fontFamily: "'Century Gothic', sans-serif" }}
                    >
                        Sign Up
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-[94px] left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-white font-bold text-lg"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                        <button className="w-full py-3 rounded-lg bg-white/5 text-white font-bold border border-white/10">
                            Log In
                        </button>
                        <button className="w-full py-3 rounded-lg bg-white text-black font-bold">
                            Sign Up
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
