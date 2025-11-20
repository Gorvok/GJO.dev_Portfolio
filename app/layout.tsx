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
    title: {
        default: 'GJO Studio | Full Stack Developer & Builder',
        template: '%s | GJO Studio',
    },
    description: 'GJO Studio - Building apps, tools, and digital experiences across web, mobile, and AI. One developer, multiple products.',
    keywords: ['GJO', 'GJO Studio', 'Full Stack Developer', 'Web Development', 'Mobile Development', 'UI/UX Design', 'Portfolio'],
    authors: [{ name: 'GJO' }],
    creator: 'GJO',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://gjo.dev',
        siteName: 'GJO Studio',
        title: 'GJO Studio | Full Stack Developer & Builder',
        description: 'Building apps, tools, and digital experiences across web, mobile, and AI.',
        images: [
            {
                url: '/images/gg-logo.png',
                width: 1200,
                height: 630,
                alt: 'GJO Studio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'GJO Studio | Full Stack Developer & Builder',
        description: 'Building apps, tools, and digital experiences across web, mobile, and AI.',
        creator: '@gorvok_5',
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
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
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
