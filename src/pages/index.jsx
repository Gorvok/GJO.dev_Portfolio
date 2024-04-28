import HeroHeader from "../components/HeroHeader";
import HeroCarousel from "../components/HeroCarousel";
import HeroCard from "../components/HeroCard";
import HeroServices from "../components/HeroServices";

function Index() {
  return (
    <div className="grid gap-4">
      <HeroHeader />
      <HeroCarousel />
      <HeroCard />
      <HeroServices />
    </div>
  );
}

export default Index;
