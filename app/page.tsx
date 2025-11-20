import HeroHeader from '@/components/home/HeroHeader';
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
