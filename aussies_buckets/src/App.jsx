import { useState } from "react";
import "./App.css";
import { Navbar } from "./Nav/Navbar";
import { Route, Routes } from "react-router-dom";
import { Testimonial } from "./testi/Testimonial";
import Footer from "./Footer_Component/Footer";

import { Whyab } from "./Whyab_Component/whyab";
import { Contact } from "./Contact_Component/Contact";
import { Home } from "./Home_Compnent/Home";

function App() {
  return (
    <>
    
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/testi" element={<Testimonial />} />
        <Route path="/why-ab" element={<Whyab />} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
     
      <Footer />
    </>
  );
}

export default App;
