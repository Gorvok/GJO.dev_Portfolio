import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import React from "react";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    metadataBase: new URL('https://gjo.dev'),
    title: {
        default: 'GJO Studio | Full Stack Developer & Builder',
        template: '%s | GJO Studio',
    },
    description: 'GJO Studio, Full stack developer building apps, tools, and digital products across web, mobile, and AI. Based in Michigan.',
    keywords: [
        'GJO', 'GJO Studio', 'Gjovani Gorvokaj', 'Full Stack Developer', 'Web Developer Michigan',
        'React Developer', 'Next.js Developer', 'TypeScript', 'Mobile App Developer',
        'UI/UX Design', 'Software Engineer', 'Freelance Developer', 'Portfolio',
        'LumoraVerse', 'Jayobe', 'NautiTrail',
    ],
    authors: [{ name: 'Gjovani Gorvokaj', url: 'https://gjo.dev' }],
    creator: 'Gjovani Gorvokaj',
    publisher: 'GJO Studio',
    category: 'technology',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://gjo.dev',
        siteName: 'GJO Studio',
        title: 'GJO Studio | Full Stack Developer & Builder',
        description: 'Full stack developer building apps, tools, and digital products across web, mobile, and AI. Based in Michigan.',
        images: [{ url: '/images/gg-logo.png', width: 1200, height: 630, alt: 'GJO Studio' }],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@gorvok_5',
        creator: '@gorvok_5',
        title: 'GJO Studio | Full Stack Developer & Builder',
        description: 'Full stack developer building apps, tools, and digital products across web, mobile, and AI.',
        images: ['/images/gg-logo.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: { canonical: 'https://gjo.dev' },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-scroll-behavior="smooth">
        <head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            '@context': 'https://schema.org',
                            '@type': 'Person',
                            name: 'Gjovani Gorvokaj',
                            alternateName: 'GJO',
                            url: 'https://gjo.dev',
                            image: 'https://gjo.dev/images/gg-logo.png',
                            jobTitle: 'Full Stack Developer',
                            description: 'Full stack developer building web, mobile, and AI-powered digital products from Michigan.',
                            email: 'hello@gjo.dev',
                            sameAs: [
                                'https://github.com/Gorvok',
                                'https://www.linkedin.com/in/gjovanigorvokaj/',
                                'https://twitter.com/gorvok_5',
                                'https://instagram.com/gorvok_5',
                            ],
                            worksFor: {
                                '@type': 'Organization',
                                name: 'GJO Dev Studio',
                                url: 'https://gjo.dev',
                            },
                        },
                        {
                            '@context': 'https://schema.org',
                            '@type': 'WebSite',
                            name: 'GJO Studio',
                            url: 'https://gjo.dev',
                            description: 'Portfolio and studio of GJO, full stack developer building digital products across web, mobile, and AI.',
                            author: { '@type': 'Person', name: 'Gjovani Gorvokaj' },
                        },
                    ]),
                }}
            />
        </head>
        <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen">
            {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        </body>
        </html>
    );
}
