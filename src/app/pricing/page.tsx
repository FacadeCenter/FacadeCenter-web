"use client";

import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { BackgroundVideo } from "@/components/common/BackgroundVideo";
import { Check, X } from "lucide-react";
import Link from "next/link";

const plans = [
    {
        name: "Starter",
        price: "Free",
        description: "Perfect for exploring our platform and free courses.",
        features: [
            "Access to free courses",
            "Community support",
            "Mobile app access",
            "Basic course materials",
        ],
        notIncluded: [
            "Certificate of completion",
            "Direct mentor support",
            "Offline downloads",
            "Project reviews"
        ],
        cta: "Get Started",
        href: "/signup",
        popular: false
    },
    {
        name: "Pro",
        price: "RS 5,000",
        period: "/month",
        description: "For serious learners who want to master new skills.",
        features: [
            "Access to all courses",
            "Certificate of completion",
            "Priority support",
            "Offline downloads",
            "Project reviews",
            "Exclusive workshops"
        ],
        notIncluded: [
            "1-on-1 Mentorship session"
        ],
        cta: "Start Free Trial",
        href: "/checkout?plan=pro",
        popular: true
    },
    {
        name: "Lifetime",
        price: "RS 45,000",
        period: "/one-time",
        description: "One-time payment for lifetime access to everything.",
        features: [
            "Lifetime access to all courses",
            "Future course updates included",
            "Certificate of completion",
            "VIP support",
            "Offline downloads",
            "Project reviews",
            "1-on-1 Mentorship session"
        ],
        notIncluded: [],
        cta: "Get Lifetime Access",
        href: "/checkout?plan=lifetime",
        popular: false
    }
];

export default function PricingPage() {
    return (
        <div className="min-h-screen flex flex-col relative selection:bg-purple-500/30">
            <BackgroundVideo />
            <Navbar />

            <main className="flex-1 relative z-10 pt-32 pb-20 px-6 md:px-[60px] lg:px-[120px]">
                <div className="max-w-[1280px] mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16 space-y-4">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-semibold tracking-wider uppercase">
                            Flexible Pricing
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            Choose the plan that fits your goal
                        </h1>
                        <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                            Unlock your potential with our flexible pricing plans. No hidden fees. Cancel anytime.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 items-start">
                        {plans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`relative p-8 rounded-3xl border backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 ${plan.popular
                                    ? "bg-gradient-to-b from-purple-900/40 to-black/60 border-purple-500/50 shadow-2xl shadow-purple-500/10 z-10 scale-105"
                                    : "bg-black/40 border-white/10 hover:border-white/20"
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                    <div className="flex items-baseline gap-1 mb-4">
                                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                                        {plan.period && <span className="text-gray-400 text-sm font-medium">{plan.period}</span>}
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">{plan.description}</p>
                                </div>

                                <div className="space-y-4 mb-8">
                                    {plan.features.map((feature) => (
                                        <div key={feature} className="flex items-start gap-3">
                                            <div className="p-0.5 rounded-full bg-green-500/20 mt-0.5">
                                                <Check className="w-3 h-3 text-green-400" />
                                            </div>
                                            <span className="text-gray-300 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                    {plan.notIncluded.map((feature) => (
                                        <div key={feature} className="flex items-start gap-3 opacity-50">
                                            <div className="p-0.5 rounded-full bg-gray-500/20 mt-0.5">
                                                <X className="w-3 h-3 text-gray-400" />
                                            </div>
                                            <span className="text-gray-500 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href={plan.href}
                                    className={`block w-full py-4 rounded-xl font-bold text-center transition-all ${plan.popular
                                        ? "bg-white text-black hover:bg-gray-100 shadow-lg shadow-white/10"
                                        : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                                        }`}
                                >
                                    {plan.cta}
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* FAQ Snippet */}
                    <div className="mt-20 text-center">
                        <p className="text-gray-400 mb-4">Have more questions?</p>
                        <Link href="/contact" className="text-purple-400 font-semibold hover:text-purple-300 transition-colors border-b border-purple-400/30 hover:border-purple-300 pb-0.5">
                            Check our FAQ or Contact Sales
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
