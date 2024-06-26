import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import AbsolutesPage from "./Pages/AbsolutesPage";
import EssentialOilPage from "./Pages/EssentialOilPage";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import AromatherapyOilPage from "./Pages/AromatherapyOilPage";
import CarrierOilPage from "./Pages/CarrierOilPage";
import FlowerOilPage from "./Pages/FlowerOilPage";
import SpiceOilPage from "./Pages/SpiceOilPage";
import FragrancesAndFlavoursPage from "./Pages/FragrancesAndFlavoursPage";
import AromaticChemicalsPage from "./Pages/AromaticChemicalsPage";
import GetInTouchPage from "./Pages/GetInTouchPage";
import ProductsPage from "./Pages/ProductsPage";
import FragrancesForHairOilPage from "./Pages/FragrancesPages/FragrancesForHairOilPage";
import FragrancesForCreamAndLotionPage from "./Pages/FragrancesPages/FragrancesForCreamAndLotionPage";
import FragrancesForFacePackPage from "./Pages/FragrancesPages/FragrancesForFacePackPage";
import FragrancesForSoapsPage from "./Pages/FragrancesPages/FragrancesForSoapsPage";
import FragrancesForTalcumPage from "./Pages/FragrancesPages/FragrancesForTalcumPage";
import FragrancesForCandlesAndIncenseSticks from "./Pages/FragrancesPages/FragrancesForCandlesAndIncenseSticks";
import FragrancesForPersonalFragrancesAerosolsAirFreshnersPage from "./Pages/FragrancesPages/FragrancesForPersonalFragrancesAerosolsAirFreshnersPage";
import ProductPage from "./Pages/ProductPage";

function App() {
  const pathName = window.location.pathname;
  return (
    <div className="App">
      {/* Header not shown on homepage */}
      {pathName === "/" ? null : <Header />}
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/get-in-touch" element={<GetInTouchPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/absolutes" element={<AbsolutesPage />} />
          <Route path="/essential-oils" element={<EssentialOilPage />} />
          <Route path="/aromatherapy-oils" element={<AromatherapyOilPage />} />
          <Route path="/carrier-oils" element={<CarrierOilPage />} />
          <Route path="/flower-oils" element={<FlowerOilPage />} />
          <Route path="/spice-oils" element={<SpiceOilPage />} />
          <Route
            path="/fragrances-flavours"
            element={<FragrancesAndFlavoursPage />}
          />
          <Route
            path="/fragrances-flavours/hair-oil"
            element={<FragrancesForHairOilPage />}
          />
          <Route
            path="/fragrances-flavours/cream-lotion"
            element={<FragrancesForCreamAndLotionPage />}
          />
          <Route
            path="/fragrances-flavours/face-pack"
            element={<FragrancesForFacePackPage />}
          />
          <Route
            path="/fragrances-flavours/soaps"
            element={<FragrancesForSoapsPage />}
          />
          <Route
            path="/fragrances-flavours/talcum"
            element={<FragrancesForTalcumPage />}
          />
          <Route
            path="/fragrances-flavours/candles-incense-sticks"
            element={<FragrancesForCandlesAndIncenseSticks />}
          />
          <Route
            path="/fragrances-flavours/personal-fragrances-aerosols-air-freshners"
            element={
              <FragrancesForPersonalFragrancesAerosolsAirFreshnersPage />
            }
          />
          <Route
            path="/aromatic-chemicals"
            element={<AromaticChemicalsPage />}
          />
          <Route path="/essential-oils/:name" element={<ProductPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
