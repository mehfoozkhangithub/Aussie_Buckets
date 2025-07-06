import { useState } from "react";
import "./App.css";
import { Navbar } from "./Nav/Navbar";
import { Route, Routes } from "react-router-dom";
import { Testimonial } from "./testi/Testimonial";
import Footer from "./Footer_Component/Footer";

import { Whyab } from "./Whyab_Component/whyab";
import { Breadcrumb } from "./BreadCrumb/Breadcrumb";
import { Industries } from "./Industry/Industries";
import { CardDetail } from "./SinglePages/CardDetail";


function App() {
  return (
    <>
      <Navbar />
      <Breadcrumb />
      <Routes>
        <Route path="/testi" element={<Testimonial />} />
        <Route path="/why-ab" element={<Whyab />} />
        <Route path="/industries" element={<Industries />} />
          <Route path="/card/:cardId" element={<CardDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
