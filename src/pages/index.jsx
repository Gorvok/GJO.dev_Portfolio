import Navbar from "../components/Navbar";
import HeroHeader from "../components/HeroHeader";
import HeroCarousel from "../components/HeroCarousel";
import HeroCard from "../components/HeroCard";
import HeroServices from "../components/HeroServices";
import Footer from "../components/Footer";

function Index() {
  return (
    <div className="grid gap-4">
      <Navbar />
      <HeroHeader />
      <HeroCarousel />
      <HeroCard />
      <HeroServices />
      <Footer />
    </div>
  );
}

export default Index;
