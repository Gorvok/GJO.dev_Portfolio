import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from "./pages/index.jsx";
import HeroContact from "./components/HeroContact";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<HeroContact />} />
        </Routes>
          <Footer />
      </Router>
  );
}

export default App;