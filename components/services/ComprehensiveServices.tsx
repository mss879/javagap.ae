'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const services = [
    {
        id: '01',
        title: 'IT Solutions & Consulting',
        tags: ['#ITStrategy', '#TechConsulting'],
        description: 'Comprehensive IT strategies and consulting to align technology with your business objectives and drive digital transformation.',
        primaryImage: '/services/it_team_collaboration_1777868519484.png',
        secondaryImage: '/services/fiber_optic_network_1777868536282.png',
    },
    {
        id: '02',
        title: 'E-Commerce & Digital Business',
        tags: ['#Ecommerce', '#DigitalBusiness'],
        description: 'Building robust e-commerce platforms and comprehensive digital business models for sustainable online growth.',
        primaryImage: '/services/ecommerce_tablet_1777868552059.png',
        secondaryImage: '/services/automated_logistics_1777868567223.png',
    },
    {
        id: '03',
        title: 'Cloud & Cybersecurity',
        tags: ['#CloudComputing', '#Cybersecurity'],
        description: 'Secure, scalable cloud infrastructure coupled with advanced cybersecurity measures to protect your digital assets.',
        primaryImage: '/services/cloud_server_room_1777868620182.png',
        secondaryImage: '/services/digital_padlock_1777868639471.png',
    },
    {
        id: '04',
        title: 'AI & Innovation',
        tags: ['#ArtificialIntelligence', '#Innovation'],
        description: 'Leveraging artificial intelligence to drive innovation, automate complex processes, and gain competitive advantage.',
        primaryImage: '/services/ai_holographic_team_1777868671772.png',
        secondaryImage: '/services/ai_neural_network_1777868655183.png',
    },
    {
        id: '05',
        title: 'Digital Marketing & Branding',
        tags: ['#DigitalMarketing', '#BrandStrategy'],
        description: 'Data-driven digital marketing and cohesive branding strategies to enhance your online presence and audience engagement.',
        primaryImage: '/services/digital_marketing_team_1777868739203.png',
        secondaryImage: '/services/marketing_analytics_1777868756648.png',
    },
    {
        id: '06',
        title: 'Business Process Outsourcing (BPO)',
        tags: ['#BPO', '#Efficiency'],
        description: 'Strategic outsourcing of non-core business processes to optimize operational efficiency and reduce overhead costs.',
        primaryImage: '/services/bpo_operations_floor_1777868773092.png',
        secondaryImage: '/services/professional_handshake_1777868788797.png',
    },
    {
        id: '07',
        title: 'Entertainment & Gaming',
        tags: ['#Entertainment', '#Gaming'],
        description: 'Innovative solutions, engaging experiences, and custom development for the modern entertainment and gaming industries.',
        primaryImage: '/services/game_dev_studio_1777868876792.png',
        secondaryImage: '/services/vr_experience_1777868893488.png',
    },
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
    // Pre-calculated top offsets for Tailwind so they only apply on md (768px) and above
    const topClasses = [
        'md:top-[100px]',
        'md:top-[120px]',
        'md:top-[140px]',
        'md:top-[160px]',
        'md:top-[180px]',
        'md:top-[200px]',
        'md:top-[220px]',
    ];

    return (
        <div className={`w-full relative md:sticky ${topClasses[index] || 'md:top-[240px]'}`}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row bg-white border border-zinc-200 rounded-[2rem] overflow-hidden shadow-2xl mb-12 md:mb-24 h-auto md:h-[500px]"
            >
                {/* Image Section */}
                <div className="relative w-full md:w-1/2 h-64 md:h-full overflow-hidden">
                    <Image
                        src={service.primaryImage}
                        alt={`${service.title} primary image`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/40 to-transparent opacity-80" />
                </div>
                
                {/* Text Section */}
                <div className="p-8 sm:p-12 md:p-16 flex flex-col justify-center w-full md:w-1/2 bg-white relative">
                    <span className="text-[#00AEEF] font-mono text-sm tracking-widest mb-4 font-semibold">
                        /{service.id}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 mb-6">
                        {service.title}
                    </h3>
                    <p className="text-lg text-zinc-600 leading-relaxed mb-10">
                        {service.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 mt-auto">
                        {service.tags.map((tag, i) => (
                            <span key={i} className="text-sm font-mono font-medium text-[#00AEEF] bg-[#00AEEF]/5 border border-[#00AEEF]/10 px-4 py-2 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default function ComprehensiveServices() {
    return (
        <section className="bg-zinc-50 py-24 sm:py-32 relative">
            {/* Background Accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#00AEEF]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-32 text-center relative z-10">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-zinc-900 font-tech"
                >
                    Our Expertise
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-6 text-lg sm:text-xl text-zinc-500 max-w-3xl mx-auto leading-relaxed"
                >
                    Delivering world-class technological solutions and professional services to drive your business forward.
                </motion.p>
            </div>

            {/* Stacking Cards Container */}
            <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 pb-32">
                {services.map((service, index) => (
                    <ServiceCard key={service.id} service={service} index={index} />
                ))}
            </div>
        </section>
    );
}
