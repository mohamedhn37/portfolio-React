import React from "react";
import {Routes, Route} from 'react-router-dom'
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Skills from "./Pages/Skills/Skills"
import Contact from "./Pages/Contact/Contact";
import Portfolio from "./Pages/Portfolio/Portfolio";

function App() {
  return (
    <>
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Skills" element={<Skills/>}/>
          <Route path="/Portfolio" element={<Portfolio/>}/>
          <Route path="/Contact" element={<Contact/>}/>
      </Routes>   
      <Footer/>
    </>
  );
}

export default App;
