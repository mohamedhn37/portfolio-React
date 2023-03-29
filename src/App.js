import React from "react";
import {Routes, Route} from 'react-router-dom'
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <>
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Contact" element={<Contact/>}/>
      </Routes>   
      <Footer/>
    </>
  );
}

export default App;
