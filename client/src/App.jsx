import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookCall from "./components/BookCall";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import { useState, useRef } from "react";
import IntroLoader from "./components/IntroLoader";
import Footer from "./components/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);
  const logoRef = useRef(null);

  return (
    <>
      {loading && (
        <IntroLoader
          onFinish={() => setLoading(false)}
          targetRef={logoRef}
        />
      )}

      {/* ✅ IMPORTANT FIX */}
      <Navbar logoRef={logoRef} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-call" element={<BookCall />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;