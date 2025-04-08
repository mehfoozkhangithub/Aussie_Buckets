import { useState } from "react";
import "./App.css";
import { Navbar } from "./Nav/Navbar";
import { Route, Routes } from "react-router-dom";
import { Testimonial } from "./testi/Testimonial";
import Footer from "./Footer_Component/Footer";

import { Whyab } from "./Whyab_Component/whyab";
import { Breadcrumb } from "./BreadCrumb/Breadcrumb";

function App() {
  return (
    <>
      <Navbar />
      <Breadcrumb />
      <Routes>
        <Route path="/testi" element={<Testimonial />} />
        <Route path="/why-ab" element={<Whyab />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
