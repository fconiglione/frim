import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/index";
import PrivacyPolicy from "../pages/privacy-policy";
import TermsOfUse from "../pages/terms-of-use";
import Legal from "../pages/legal";
import Error404 from "../pages/error";
import Careers from "../pages/careers";
import Login from "../pages/login";
import Register from "../pages/register";
import ScrollToTopButton from "../components/ScrollToTopButton";
import CookieBanner from '../components/CookieBanner';

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();

  const displaySelectItems = () => {
    return !location.pathname.startsWith("/login") && !location.pathname.startsWith("/get-started");
  };

  return (
    <div>
      {displaySelectItems() && <Header />}
      <Routes>
        <Route path="/careers" element={<Careers />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/get-started" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      {displaySelectItems() && <ScrollToTopButton />}
      {displaySelectItems() && <Footer />}
      {displaySelectItems() && <CookieBanner />}
    </div>
  );
}

export default App;