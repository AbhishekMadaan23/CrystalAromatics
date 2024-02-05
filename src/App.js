import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import AbsolutesPage from "./Pages/AbsolutesPage";
import EssentialOilPage from "./Pages/EssentialOilPage";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/absolutes" element={<AbsolutesPage />} />
          <Route path="/essential-oils" element={<EssentialOilPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
