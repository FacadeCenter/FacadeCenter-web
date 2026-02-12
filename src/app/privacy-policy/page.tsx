"use client";

import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { BackgroundVideo } from "@/components/common/BackgroundVideo";
import { Shield, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen flex flex-col relative selection:bg-purple-500/30">
            <BackgroundVideo />
            <Navbar />

            <main className="flex-1 relative z-10 pt-32 pb-20 px-6 md:px-[60px] lg:px-[120px]">
                <div className="max-w-[800px] mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16 space-y-4">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 mb-4">
                            <Shield className="w-8 h-8 text-purple-400" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            Privacy Policy
                        </h1>
                        <p className="text-gray-400 text-lg">
                            Last updated: February 12, 2026
                        </p>
                    </div>

                    {/* Content */}
                    <div className="space-y-12 text-gray-300 leading-relaxed">
                        <section className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-colors">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <FileText className="w-6 h-6 text-purple-400" />
                                1. Introduction
                            </h2>
                            <p className="mb-4">
                                Welcome to Facade (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us at privacy@facade.com.
                            </p>
                            <p>
                                When you visit our website and use our comprehensive learning services, you trust us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it.
                            </p>
                        </section>

                        <section className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-colors">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <Eye className="w-6 h-6 text-blue-400" />
                                2. Information We Collect
                            </h2>
                            <p className="mb-4">
                                We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website (such as posting messages in our online forums or entering competitions, contests or giveaways) or otherwise when you contact us.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-gray-400">
                                <li>Name and Contact Data (Email, Phone number)</li>
                                <li>Credentials (Passwords, Security questions)</li>
                                <li>Payment Data (Credit card number, billing address)</li>
                                <li>Social Media Login Data (Google, GitHub, etc.)</li>
                            </ul>
                        </section>

                        <section className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-colors">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <Lock className="w-6 h-6 text-green-400" />
                                3. How We Use Your Information
                            </h2>
                            <p className="mb-4">
                                We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-gray-400">
                                <li>To facilitate account creation and logon process.</li>
                                <li>To post testimonials with your consent.</li>
                                <li>To request feedback and contact you about your use of our website.</li>
                                <li>To enable user-to-user communications.</li>
                                <li>To manage user accounts and orders.</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
