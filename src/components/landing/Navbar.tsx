"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "Courses", href: "/courses" },
    { label: "Contact", href: "/contact" },
    // { label: "Pricing", href: "/pricing" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                scrolled
                    ? "bg-black/60 backdrop-blur-xl border-b border-white/5 h-[80px]"
                    : "bg-transparent h-[100px]"
            )}
        >
            <div className="max-w-[1440px] mx-auto px-6 md:px-[60px] lg:px-[120px] h-full flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2 group"
                >
                    <Image 
                        src="/logo.png" 
                        alt="Facade Logo" 
                        width={40} 
                        height={40} 
                        className="object-contain group-hover:scale-105 transition-transform" 
                    />
                    <span className="text-white font-bold text-2xl tracking-tight group-hover:text-purple-300 transition-colors">
                        FACADE
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={cn(
                                    "relative text-sm font-bold tracking-wide transition-colors py-2 group",
                                    isActive ? "text-white" : "text-white/70 hover:text-white"
                                )}
                            >
                                {link.label}
                                <span className={cn(
                                    "absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 transform transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100",
                                    isActive && "scale-x-100"
                                )} />
                            </Link>
                        );
                    })}
                </div>

                {/* Buttons - Temporarily disabled
                <div className="hidden md:flex items-center gap-4">
                    <Link
                        href="/login"
                        className="text-white font-semibold text-sm hover:text-purple-300 transition-colors"
                    >
                        Log In
                    </Link>
                    <Link
                        href="/signup"
                        className={cn(
                            "px-6 py-2.5 rounded-full bg-white text-black font-bold text-sm transition-all duration-300",
                            "hover:bg-purple-50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:scale-105 active:scale-95",
                            "flex items-center gap-2"
                        )}
                    >
                        Get Started
                    </Link>
                </div>
                */}

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "md:hidden fixed inset-x-0 top-[var(--nav-height,80px)] bg-black/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden",
                    isOpen ? "h-auto py-6 opacity-100" : "h-0 py-0 opacity-0"
                )}
            >
                <div className="px-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className={cn(
                                "text-lg font-bold py-2 border-b border-white/5",
                                pathname === link.href ? "text-purple-400 pl-4" : "text-white hover:text-purple-300 hover:pl-2"
                            )}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    {/* Temporarily disabled
                    <div className="flex flex-col gap-3 pt-4 mt-2">
                        <Link
                            href="/login"
                            onClick={() => setIsOpen(false)}
                            className="w-full py-3 rounded-lg bg-white/5 text-white font-bold border border-white/10 text-center hover:bg-white/10 transition-colors"
                        >
                            Log In
                        </Link>
                        <Link
                            href="/signup"
                            onClick={() => setIsOpen(false)}
                            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-center hover:shadow-lg transition-all"
                        >
                            Get Started
                        </Link>
                    </div>
                    */}
                </div>
            </div>
        </nav>
    );
}
