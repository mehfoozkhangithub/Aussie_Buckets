import { useState } from "react";
import "./App.css";
import { Navbar } from "./Nav/Navbar";
import { Route, Routes } from "react-router-dom";
import { Testimonial } from "./testi/Testimonial";
import Footer from "./Footer_Component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/testi" element={<Testimonial />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
