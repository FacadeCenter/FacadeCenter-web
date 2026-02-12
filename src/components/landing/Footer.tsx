"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full bg-transparent border-t border-white/5 pt-16 pb-8 flex justify-center">
            <div className="w-full max-w-[1280px] px-6 md:px-[60px] lg:px-[120px] flex flex-col gap-12">
                {/* Top Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    {/* Brand Info */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="text-white font-bold text-2xl tracking-tighter">
                            FACADE
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Empowering learners through cutting-edge technology and expert mentorship.
                            Join our community and reshape your future today.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-white/40 hover:text-white transition-colors"><Facebook size={20} /></Link>
                            <Link href="#" className="text-white/40 hover:text-white transition-colors"><Twitter size={20} /></Link>
                            <Link href="#" className="text-white/40 hover:text-white transition-colors"><Instagram size={20} /></Link>
                            <Link href="#" className="text-white/40 hover:text-white transition-colors"><Linkedin size={20} /></Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-white font-semibold text-lg">Quick Links</h3>
                        <ul className="flex flex-col gap-3 text-white/60 text-sm">
                            <li><Link href="/courses" className="hover:text-white transition-colors">Courses</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">For Teachers</Link></li>
                            <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">Success Stories</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-white font-semibold text-lg">Support</h3>
                        <ul className="flex flex-col gap-3 text-white/60 text-sm">
                            <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">Help Center</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-white font-semibold text-lg">Get in Touch</h3>
                        <ul className="flex flex-col gap-4 text-white/60 text-sm">
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-purple-500" />
                                <span>support@facade.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-purple-500" />
                                <span>+1 (234) 567-890</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin size={18} className="text-purple-500" />
                                <span>123 Innovation Drive, Tech City</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Area */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
                    <p>© 2026 FACADE. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Accessibility</Link>
                        <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
