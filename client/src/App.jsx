import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useState, useRef } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import IntroLoader from "./components/IntroLoader";
import PageLoader from "./components/PageLoader";


const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Contact = lazy(() => import("./pages/Contact"));

const BookCall = lazy(() => import("./components/BookCall"));
const LegalPage = lazy(() => import("./pages/LegalPage"));

const App = () => {
  const [loading, setLoading] = useState(true);
  const logoRef = useRef(null);

  return (
    <>
      {loading && (
        <IntroLoader onFinish={() => setLoading(false)} targetRef={logoRef} />
      )}

      <Navbar logoRef={logoRef} />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-call" element={<BookCall />} />

          <Route path="/legal/:slug" element={<LegalPage />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
};

export default App;
