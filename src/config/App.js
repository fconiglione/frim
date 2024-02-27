import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../pages/index";
import PrivacyPolicy from "../pages/privacy-policy";
import TermsOfUse from "../pages/terms-of-use";
import Legal from "../pages/legal";
import Error404 from "../pages/error";
import ScrollToTopButton from "../components/ScrollToTopButton";
import CookieBanner from '../components/CookieBanner';

function App() {
  return (
      <BrowserRouter>
        <div>
            <Header />
            <Routes>
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-use" element={<TermsOfUse />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
            <ScrollToTopButton />
            <Footer />
            <CookieBanner />
        </div>
      </BrowserRouter>
  );
}
export default App;