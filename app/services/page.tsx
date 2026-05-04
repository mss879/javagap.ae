import React from 'react';
import ServicesHero from '@/components/services/ServicesHero';
import ComprehensiveServices from '@/components/services/ComprehensiveServices';
import RiskManagement from '@/components/services/RiskManagement';
import ServicesClosing from '@/components/services/ServicesClosing';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Services | Java Global Access Platform FZ-LLC',
    description: 'Professional services and managed services delivered cross-border to overseas clients, supported by standardized workflows and secure digital infrastructure.',
    openGraph: {
        title: "Services | Java Global Access Platform FZ-LLC",
        description: "Professional services and managed services delivered cross-border to overseas clients, supported by standardized workflows and secure digital infrastructure.",
        url: "https://javaglobalaccess.com/services",
        siteName: "Java Global Access Platform FZ-LLC",
        images: [
            {
                url: "/new-shareable-img.jpg",
                width: 1200,
                height: 630,
                alt: "Java Global Access Platform FZ-LLC",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Services | Java Global Access Platform FZ-LLC",
        description: "Professional services and managed services delivered cross-border to overseas clients, supported by standardized workflows and secure digital infrastructure.",
        images: ["/new-shareable-img.jpg"],
    },
};

export default function ServicesPage() {
    return (
        <main id="main-content" className="min-h-screen bg-white">
            <ServicesHero />
            <ComprehensiveServices />
            <RiskManagement />
            <ServicesClosing />
            <Footer />
        </main>
    );
}
