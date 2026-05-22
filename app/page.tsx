import type { Metadata } from 'next';
import HeroHeader from '@/components/home/HeroHeader';

export const metadata: Metadata = {
    title: 'GJO Studio | Full Stack Developer & Builder',
    description: 'GJO Studio, full stack developer building apps, tools, and digital products across web, mobile, and AI. Based in Michigan.',
    keywords: ['GJO Studio', 'Full Stack Developer Michigan', 'React Developer', 'Next.js', 'TypeScript', 'Web Developer for Hire'],
    alternates: { canonical: 'https://gjo.dev' },
    openGraph: {
        title: 'GJO Studio | Full Stack Developer & Builder',
        description: 'Building apps, tools, and digital products across web, mobile, and AI. Based in Michigan.',
        url: 'https://gjo.dev',
    },
};
import HeroCarousel from '@/components/home/HeroCarousel';
import HomeStudioSection from '@/components/home/HomeStudioSection';
import HeroServices from '@/components/home/HeroServices';

export default function HomePage() {
    return (
        <>
            <HeroHeader />
            <HeroCarousel />
            <HomeStudioSection />
            <HeroServices />
        </>
    );
}
