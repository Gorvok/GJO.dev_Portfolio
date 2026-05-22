import HeroHeader from "../components/HeroHeader";
import HeroCarousel from "../components/HeroCarousel";
import HeroServices from "../components/HeroServices";
import HeroStudioSection from "../components/HomeStudioSection.jsx"

function Index() {
  return (
    <div className="grid gap-4">
      <HeroHeader />
        <HeroStudioSection />
      <HeroCarousel />
      <HeroServices />
    </div>
  );
}

export default Index;
