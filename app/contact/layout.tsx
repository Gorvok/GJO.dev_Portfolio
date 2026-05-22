import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Get in touch with GJO — available for web development, mobile app development, UI/UX design, and technical consulting projects.',
    keywords: ['Contact', 'Hire Developer', 'Web Development', 'Freelance', 'GJO Studio', 'Full Stack Developer Michigan'],
    openGraph: {
        title: 'Contact | GJO Studio',
        description: 'Get in touch with GJO — available for web development, mobile, UI/UX, and consulting.',
        url: 'https://gjo.dev/contact',
        images: [{ url: '/images/gg-logo.png', width: 1200, height: 630, alt: 'GJO Studio' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact | GJO Studio',
        description: 'Get in touch with GJO — available for web development, mobile, UI/UX, and consulting.',
        images: ['/images/gg-logo.png'],
    },
    alternates: { canonical: 'https://gjo.dev/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children;
}
