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
import ScrollToTopButton from "../components/ScrollToTopButton";
import CookieBanner from '../components/CookieBanner';
import Pricing from "../pages/pricing";
import Maintenance from "../pages/maintenance";
import About from "../pages/about";
import CeasarMobileLanding from "../pages/landing/ceasar-mobile-landing";
import FrimCloudSSOBackground from "../assets/images/frim-cloud-sso-bg.jpg";
import FrimCloudSSOLogo from "../assets/images/frim-cloud-sso-logo.svg";

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
    return !location.pathname.startsWith("/login") && !location.pathname.startsWith("/get-started") && !location.pathname.startsWith('/apps/ceasar/download') && !location.pathname.startsWith("/static");
  };

  React.useEffect(() => {
    if (location.pathname.startsWith("/login")) {
      window.location.href = "https://www.cloud.frim.io/login";
    }
    if (location.pathname.startsWith("/register")) {
      window.location.href = "https://www.cloud.frim.io/register";
    }
  }, [location]);

  return (
    <div>
      {displaySelectItems() && <Header />}
      <Routes>
        <Route path="/apps/ceasar/download" element={<CeasarMobileLanding />} />
        <Route path="/about" element={<About />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/" element={<Home />} />
        <Route path="/frim-cloud-sso-logo.svg" element={<img src={FrimCloudSSOLogo} alt="Frim Cloud SSO Logo" />} />
        <Route path="/frim-cloud-sso-bg.jpg" element={<img src={FrimCloudSSOBackground} alt="Frim Cloud SSO Background" />} />
        {location.pathname !== "/login" && location.pathname !== "/register" && <Route path="*" element={<Error404 />} />}
      </Routes>
      {displaySelectItems() && <ScrollToTopButton />}
      {displaySelectItems() && <Footer />}
      {displaySelectItems() && <CookieBanner />}
    </div>
  );
}

export default App;