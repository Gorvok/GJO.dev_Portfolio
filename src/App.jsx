import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from "./pages/index.jsx";
import About from "./components/About.jsx";
import HeroContact from "./components/HeroContact";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Services from "./components/Services.jsx";

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />}  />
            <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<HeroContact />} />
        </Routes>
          <Footer />
      </Router>
  );
}

export default App;
