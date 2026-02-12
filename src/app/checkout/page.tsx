"use client";

import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { BackgroundVideo } from "@/components/common/BackgroundVideo";
import { Lock, CheckCircle2 } from "lucide-react";
import { useState } from "react";


// Reusable Input Component with Glassmorphism
const GlassInput = ({
    label,
    placeholder,
    type = "text",
    fullWidth = false,
    className = ""
}: {
    label: string;
    placeholder: string;
    type?: string;
    fullWidth?: boolean;
    className?: string;
}) => (
    <div className={`flex flex-col gap-2 ${fullWidth ? "col-span-1 md:col-span-2" : "col-span-1"} ${className}`}>
        <label className="text-white/90 font-semibold text-sm md:text-base tracking-wide">
            {label}
        </label>
        <div className="w-full h-[58px] bg-black/[0.004] backdrop-blur-xl border border-white/20 rounded-xl px-4 flex items-center hover:border-white/40 focus-within:border-purple-500/50 transition-all duration-300 shadow-sm">
            <input
                type={type}
                placeholder={placeholder}
                className="w-full bg-transparent text-white placeholder:text-gray-500/80 outline-none text-base font-medium"
            />
        </div>
    </div>
);

// Payment Method Card
const PaymentMethod = ({
    name,
    active,
    onClick,
    children
}: {
    name: string;
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
}) => (
    <button
        onClick={onClick}
        className={`h-16 px-6 rounded-xl border flex items-center gap-3 transition-all duration-300 ${active
            ? "bg-white/10 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.2)] scale-[1.02]"
            : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/30"
            }`}
    >
        {children}
        <span className={`font-semibold ${active ? "text-white" : "text-gray-400"}`}>{name}</span>
        {active && <CheckCircle2 className="w-5 h-5 text-purple-400 ml-auto" />}
    </button>
);

export default function CheckoutPage() {
    const [paymentMethod, setPaymentMethod] = useState<"visa" | "stripe" | "paypal">("visa");

    return (
        <div className="min-h-screen flex flex-col relative selection:bg-purple-500/30">
            <BackgroundVideo />
            <Navbar />

            <main className="flex-1 pt-32 pb-20 relative z-10 px-6 md:px-[60px] lg:px-[120px]">
                <div className="max-w-[1280px] mx-auto">
                    {/* Header */}
                    <div className="flex flex-col items-center text-center mb-16 space-y-4">
                        <span className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-semibold tracking-wider uppercase">
                            Secure Checkout
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            Complete registration payment
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl">
                            Finalize your enrollment and start learning immediately. secure payment powered by industry leaders.
                        </p>
                    </div>

                    <div className="w-full max-w-[850px] mx-auto bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                        {/* Personal Details Section */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm">1</span>
                                Personal Details
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <GlassInput label="Address line" placeholder="P.o.Box 1223" />
                                <GlassInput label="City" placeholder="Arusha" />
                                <GlassInput label="State" placeholder="Arusha, Tanzania" />
                                <GlassInput label="Postal code" placeholder="9090" />
                            </div>
                        </section>

                        {/* Payment Methods Section */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm">2</span>
                                Payment Methods
                            </h2>
                            <div className="flex flex-wrap gap-4">
                                <PaymentMethod
                                    name="Visa"
                                    active={paymentMethod === "visa"}
                                    onClick={() => setPaymentMethod("visa")}
                                >
                                    <div className="w-10 h-6 bg-white rounded flex items-center justify-center">
                                        <span className="text-blue-900 font-bold text-xs italic">VISA</span>
                                    </div>
                                </PaymentMethod>
                                <PaymentMethod
                                    name="Stripe"
                                    active={paymentMethod === "stripe"}
                                    onClick={() => setPaymentMethod("stripe")}
                                >
                                    <div className="w-10 h-6 bg-[#635BFF] rounded flex items-center justify-center">
                                        <span className="text-white font-bold text-xs">S</span>
                                    </div>
                                </PaymentMethod>
                                <PaymentMethod
                                    name="PayPal"
                                    active={paymentMethod === "paypal"}
                                    onClick={() => setPaymentMethod("paypal")}
                                >
                                    <div className="w-10 h-6 bg-[#003087] rounded flex items-center justify-center">
                                        <span className="text-white font-bold text-[10px] italic">Pay</span>
                                    </div>
                                </PaymentMethod>
                            </div>
                        </section>

                        {/* Card Details Section */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm">3</span>
                                Card Details
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="col-span-1 md:col-span-2">
                                    <GlassInput
                                        label="Card number"
                                        placeholder="Seen on your card"
                                        fullWidth
                                    />
                                </div>
                                <div className="col-span-1 md:col-span-2">
                                    <GlassInput
                                        label="Cardholder's name"
                                        placeholder="Seen on your card"
                                        fullWidth
                                    />
                                </div>
                                <GlassInput label="Expiry date" placeholder="20/23" />
                                <GlassInput label="CVC" placeholder="654" />
                            </div>
                        </section>

                        {/* Submit Button */}
                        <button className="w-full bg-white hover:bg-gray-100 text-black font-bold text-lg py-5 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all transform hover:-translate-y-1 active:scale-[0.99] flex items-center justify-center gap-3">
                            <Lock className="w-5 h-5" />
                            Complete Payment
                        </button>

                        <p className="text-center text-gray-500 text-sm mt-6 flex items-center justify-center gap-2">
                            <CheckCircle2 className="w-4 h-4" />
                            Payments are secure and encrypted
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
