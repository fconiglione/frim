import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../pages/index";
import PrivacyPolicy from "../pages/privacy-policy";
import TermsOfUse from "../pages/terms-of-use";
import ScrollToTopButton from "../components/ScrollToTopButton";

function App() {
  return (
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/" element={<Home />} />
          </Routes>
            <ScrollToTopButton />
          <Footer />
        </div>
      </BrowserRouter>
  );
}
export default App;