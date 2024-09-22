
import { ContentPage} from "./components/ContentPage";
import { HeroSection } from "./components/HeroSection";
import { NavBar } from "./components/Navbar";
import { useState, useEffect, useRef } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { FaImage, FaPalette, FaWrench, FaDollarSign, FaMoneyBillWave } from 'react-icons/fa';
import { OverviewPage } from "./components/Overview";



const App = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroBottom = heroRef.current.offsetTop + heroRef.current.offsetHeight;
      const scrollPosition = window.scrollY;
      setIsNavbarVisible(scrollPosition >= heroBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-orange-700 selection:text-white">
    <div className="fixed top-0 -z-10 h-full w-full">
      <div className="relative h-full w-full bg-black"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div></div>
    </div><Router>
      <div className="relative">
        <div ref={heroRef}>
          <HeroSection />
        </div>
        <NavBar isVisible={isNavbarVisible} />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<OverviewPage />} />
            <Route path="/highlights" element={<ContentPage title="Highlights" content="Key features of the Thar." icon={FaWrench} />} />
            <Route path="/gallery" element={<ContentPage title="Gallery & Colors" content="Images and color options for the Thar." icon={FaImage} />} />
            <Route path="/interior-exterior" element={<ContentPage title="Interior & Exterior" content="Inside and outside details of the Thar." icon={FaPalette} />} />
            <Route path="/variants-pricing" element={<ContentPage title="Variants & Pricing" content="Different Thar models and their prices." icon={FaDollarSign} />} />
            <Route path="/finance" element={<ContentPage title="Finance" content="Financing options for your new Thar." icon={FaMoneyBillWave} />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
    </div>
  );
};

export default App;
