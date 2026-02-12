"use client";

import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { BackgroundVideo } from "@/components/common/BackgroundVideo";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col relative selection:bg-purple-500/30">
            <BackgroundVideo />
            <Navbar />

            <main className="flex-1 relative z-10 pt-32 pb-20 px-6 md:px-[60px] lg:px-[120px]">
                <div className="max-w-[1440px] mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16 space-y-4">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-semibold tracking-wider uppercase">
                            Get in Touch
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            We&apos;d Love to Hear From You
                        </h1>
                        <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                            Whether you have a question about courses, pricing, or anything else, our team is ready to answer all your questions.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Contact Form */}
                        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative">
                            <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-20 -z-10"></div>

                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Email</label>
                                        <input
                                            type="email"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Subject</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                                        placeholder="How can we help?"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Message</label>
                                    <textarea
                                        rows={5}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                                        placeholder="Your message..."
                                    ></textarea>
                                </div>

                                <button className="w-full bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300">
                                    <Send className="w-5 h-5" />
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Info & Info Cards */}
                        <div className="space-y-8">
                            <div className="grid gap-6">
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:border-purple-500/50 transition-colors group">
                                    <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">Visit Us</h3>
                                        <p className="text-gray-400">123 Innovation Drive, Tech Valley</p>
                                        <p className="text-gray-400">San Francisco, CA 94107</p>
                                    </div>
                                </div>

                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:border-blue-500/50 transition-colors group">
                                    <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">Email Us</h3>
                                        <p className="text-gray-400">support@facade.academy</p>
                                        <p className="text-gray-400">careers@facade.academy</p>
                                    </div>
                                </div>

                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:border-green-500/50 transition-colors group">
                                    <div className="p-3 bg-green-500/10 rounded-xl text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">Call Us</h3>
                                        <p className="text-gray-400">+1 (555) 123-4567</p>
                                        <p className="text-gray-400">Mon-Fri from 8am to 5pm</p>
                                    </div>
                                </div>
                            </div>

                            {/* FAQ Snippet */}
                            <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
                                <h3 className="text-xl font-bold text-white mb-4">Frequently Asked Questions</h3>
                                <p className="text-gray-400 mb-6">
                                    Find quick answers to common questions about enrollment, payments, and course access in our Help Center.
                                </p>
                                <button className="text-purple-400 font-medium hover:text-purple-300 transition-colors flex items-center gap-2">
                                    Visit Help Center <span className="text-lg">→</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
