'use client'

import React from "react";
import { Poppins, Inter } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
    weight: ["400"],
    style: "normal",
    subsets: ["latin"],
});

const inter = Inter({
    weight: ["300"],
    style: "normal",
    subsets: ["latin"],
});

const testimonials = [
    {
        name: "Alice Johnson",
        role: "Student",
        feedback:
            "EverLMS has completely transformed my learning experience. Exams feel secure and fair!",
    },
    {
        name: "John Doe",
        role: "Instructor",
        feedback:
            "The AI-powered monitoring gives me confidence that exams are conducted properly.",
    },
    {
        name: "Mary Smith",
        role: "Admin",
        feedback:
            "Setting up courses and managing exams has never been easier. Love it!",
    },
];

const Hero: React.FC = () => {
    return (
        <div className={`w-screen ${poppins.className} flex flex-col`}>
            {/* Hero Section */}
            <main className="w-full box-border flex flex-col items-start sm:items-center justify-center min-h-screen px-6 sm:px-12 lg:px-24 py-12 bg-[#222831] text-white">
                <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-snug">
                    Smart Learning. <span className="text-[#00ADB5]">Secure Exams.</span>
                </h1>
                <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
                    Anytime, Anywhere
                </h2>
                <p className={`${inter.className} mt-6 mb-8 text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide max-w-full sm:max-w-xl md:max-w-2xl`}>
                    EverLMS is the next-generation learning management system with AI-powered exam monitoring that ensures fairness and integrity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <button className="bg-[#393E46] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-lg sm:text-xl hover:bg-[#2e3136] transition">
                        <Link href={"/"}>Get Started</Link>
                    </button>
                    <button className="bg-[#00ADB5] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-lg sm:text-xl hover:bg-[#009cae] transition">
                        <Link href={"/"}>Request Demo</Link>
                    </button>
                </div>
            </main>


            {/* Testimonials Carousel */}
            <section className="my-28 px-6 sm:px-20 bg-[#222831] py-16">
                <h2 className="text-4xl sm:text-5xl text-center font-bold mb-12 text-[#222831]">
                    What Our Users Say
                </h2>
                <div className="flex overflow-x-auto space-x-8 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#393E46] scrollbar-track-[#F5F5F5] scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                    {testimonials.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="min-w-[320px] sm:min-w-[450px] bg-[#393E46] text-white p-8 rounded-3xl flex-shrink-0 snap-center shadow-xl"
                        >
                            <p className={`${inter.className} text-lg mb-6`}>“{testimonial.feedback}”</p>
                            <h3 className="font-bold text-xl">{testimonial.name}</h3>
                            <p className="text-sm text-gray-300">{testimonial.role}</p>
                        </div>
                    ))}
                </div>
            </section>


            {/* Footer */}
            <footer className="bg-slate-900 text-white py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 mb-12">
                        <div className="md:col-span-2">
                            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                                EverLMS
                            </h2>
                            <p className="text-gray-400 text-lg mb-6 max-w-md">
                                Secure, AI-powered exams for modern learning. Empowering educators and students worldwide.
                            </p>
                            <div className="flex space-x-4">
                                {['📧', '📱', '🌐'].map((icon, idx) => (
                                    <div key={idx} className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors duration-300 cursor-pointer">
                                        <span className="text-xl">{icon}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
                            <div className="space-y-3">
                                {['Home', 'About', 'Features', 'Pricing'].map(link => (
                                    <div key={link} className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">
                                        {link}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-6">Support</h3>
                            <div className="space-y-3">
                                {['Help Center', 'Contact', 'Documentation', 'API'].map(link => (
                                    <div key={link} className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">
                                        {link}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-800 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 EverLMS. All rights reserved. Built with ❤️ for better learning.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Hero;
