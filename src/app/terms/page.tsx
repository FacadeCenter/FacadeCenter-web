"use client";

import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { BackgroundVideo } from "@/components/common/BackgroundVideo";
import { Scale, FileText, AlertCircle, Handshake } from "lucide-react";

export default function TermsPage() {
    return (
        <div className="min-h-screen flex flex-col relative selection:bg-purple-500/30">
            <BackgroundVideo />
            <Navbar />

            <main className="flex-1 relative z-10 pt-32 pb-20 px-6 md:px-[60px] lg:px-[120px]">
                <div className="max-w-[800px] mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16 space-y-4">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 mb-4">
                            <Scale className="w-8 h-8 text-purple-400" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            Terms of Service
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
                                1. Agreement to Terms
                            </h2>
                            <p className="mb-4">
                                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&quot;you&quot;) and Facade (&quot;we,&quot; &quot;us&quot; or &quot;our&quot;), concerning your access to and use of the Facade website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
                            </p>
                            <p>
                                You agree that by accessing the site, you have read, understood, and agreed to be bound by all of these Terms of Service. If you do not agree with all of these terms of service, then you are expressly prohibited from using the site and you must discontinue use immediately.
                            </p>
                        </section>

                        <section className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-colors">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <AlertCircle className="w-6 h-6 text-yellow-500" />
                                2. Intellectual Property Rights
                            </h2>
                            <p className="mb-4">
                                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the &quot;Content&quot;) and the trademarks, service marks, and logos contained therein (the &quot;Marks&quot;) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                            </p>
                            <p>
                                The Content and the Marks are provided on the Site &quot;AS IS&quot; for your information and personal use only. Except as expressly provided in these Terms of Service, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
                            </p>
                        </section>

                        <section className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-colors">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <Handshake className="w-6 h-6 text-green-400" />
                                3. User Representations
                            </h2>
                            <p className="mb-4">
                                By using the Site, you represent and warrant that:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-gray-400">
                                <li>All registration information you submit will be true, accurate, current, and complete.</li>
                                <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                                <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                                <li>You are not a minor in the jurisdiction in which you reside.</li>
                                <li>You will not use the Site for any illegal or unauthorized purpose.</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
