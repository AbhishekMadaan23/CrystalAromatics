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

function App() {
  return (
    <div className="App">
      <Header />
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
            path="/aromatic-chemicals"
            element={<AromaticChemicalsPage />}
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
