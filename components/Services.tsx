'use client';

import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
    {
        title: 'IT Solutions & Consulting',
        tags: ['#ITStrategy', '#TechConsulting'],
        description: 'Comprehensive IT strategies and consulting to align technology with your business objectives and drive digital transformation.'
    },
    {
        title: 'E-Commerce & Digital Business',
        tags: ['#Ecommerce', '#DigitalBusiness'],
        description: 'Building robust e-commerce platforms and comprehensive digital business models for sustainable online growth.'
    },
    {
        title: 'Cloud & Cybersecurity',
        tags: ['#CloudComputing', '#Cybersecurity'],
        description: 'Secure, scalable cloud infrastructure coupled with advanced cybersecurity measures to protect your digital assets.'
    },
    {
        title: 'AI & Innovation',
        tags: ['#ArtificialIntelligence', '#Innovation'],
        description: 'Leveraging artificial intelligence to drive innovation, automate complex processes, and gain competitive advantage.'
    },
    {
        title: 'Digital Marketing & Branding',
        tags: ['#DigitalMarketing', '#BrandStrategy'],
        description: 'Data-driven digital marketing and cohesive branding strategies to enhance your online presence and audience engagement.'
    },
    {
        title: 'Business Process Outsourcing (BPO)',
        tags: ['#BPO', '#Efficiency'],
        description: 'Strategic outsourcing of non-core business processes to optimize operational efficiency and reduce overhead costs.'
    },
    {
        title: 'Entertainment & Gaming',
        tags: ['#Entertainment', '#Gaming'],
        description: 'Innovative solutions, engaging experiences, and custom development for the modern entertainment and gaming industries.'
    },
];

export default function Services() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="relative w-full bg-zinc-950 text-zinc-100 py-24 sm:py-32 px-6 sm:px-12 lg:px-20 overflow-hidden" id="services">
            {/* Subtle Blue Glow Background */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#00AEEF]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative max-w-7xl mx-auto flex flex-col gap-16 lg:gap-24">

                {/* Header Section */}
                <div className="w-full space-y-8">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-wide leading-[1.1] text-white font-tech font-semibold">
                        Comprehensive <span className="text-[#00AEEF]">Services</span>
                    </h2>
                    <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
                        Digital systems and automation tools engineered to ensure consistency, quality control, and unparalleled reporting accuracy.
                    </p>
                </div>

                {/* Accordion List */}
                <div className="w-full border-t border-zinc-800">
                    {services.map((service, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <div
                                key={index}
                                className="group relative border-b border-zinc-800"
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex items-center justify-between py-10 text-left focus:outline-none transition-colors"
                                    aria-expanded={isActive}
                                >
                                    <div className="flex items-center gap-8 md:gap-12">
                                        <span className={`text-xl font-mono transition-colors duration-300 ${isActive ? 'text-[#00AEEF]' : 'text-zinc-600 group-hover:text-[#00AEEF]/70'}`}>
                                            /{String(index + 1).padStart(3, '0')}
                                        </span>
                                        <h3 className={`text-xl sm:text-2xl md:text-3xl font-tech font-bold tracking-wide transition-colors duration-300 ${isActive ? 'text-[#00AEEF]' : 'text-zinc-300 group-hover:text-white'}`}>
                                            {service.title}
                                        </h3>
                                    </div>

                                    <div className={`relative flex items-center justify-center w-10 h-10 transition-all duration-500 rounded-full border ${isActive ? 'border-[#00AEEF] bg-[#00AEEF]/10 rotate-45' : 'border-zinc-700 group-hover:border-[#00AEEF]/50 group-hover:rotate-90'}`}>
                                        <Plus className={`w-6 h-6 transition-colors duration-300 ${isActive ? 'text-[#00AEEF]' : 'text-zinc-500 group-hover:text-[#00AEEF]'}`} strokeWidth={1.5} />
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pl-0 md:pl-[calc(3ch+3rem)] pb-10 pr-4 md:pr-12">
                                                <div className="pt-2 space-y-6">
                                                    <p className="text-lg text-zinc-400 leading-relaxed">
                                                        {service.description}
                                                    </p>
                                                    <div className="flex flex-wrap gap-3">
                                                        {service.tags.map((tag, i) => (
                                                            <span key={i} className="text-sm font-mono text-[#00AEEF] bg-[#00AEEF]/10 border border-[#00AEEF]/20 px-3 py-1 rounded-full shadow-[0_0_10px_rgba(0,174,239,0.1)]">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
