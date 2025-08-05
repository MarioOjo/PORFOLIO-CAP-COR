import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import ProductsSection from "./components/ProductsSection";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />

        {/* Push content below fixed NavBar if needed */}
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/store" element={<ProductsSection />} />
            <Route path="/about" element={<About />} />
            {/* Add other routes/pages here */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
