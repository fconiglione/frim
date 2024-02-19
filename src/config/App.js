import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../pages/index";

function App() {
  return (
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
  );
}
export default App;