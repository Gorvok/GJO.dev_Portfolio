import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Portfolio',
    description: 'Browse projects built by GJO, web apps, mobile experiences, client work, and experiments across React, Next.js, TypeScript, and more.',
    keywords: ['Portfolio', 'Projects', 'Web Development', 'React', 'Next.js', 'TypeScript', 'Client Work', 'GJO Studio'],
    openGraph: {
        title: 'Portfolio | GJO Studio',
        description: 'Browse projects built by GJO, web apps, mobile experiences, client work, and experiments.',
        url: 'https://gjo.dev/portfolio',
        images: [{ url: '/images/gg-logo.png', width: 1200, height: 630, alt: 'GJO Studio Portfolio' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Portfolio | GJO Studio',
        description: 'Browse projects built by GJO, web apps, mobile experiences, client work, and experiments.',
        images: ['/images/gg-logo.png'],
    },
    alternates: { canonical: 'https://gjo.dev/portfolio' },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
    return children;
}
