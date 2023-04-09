import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { GlobaleStyles, LightTheme,DarkTheme,} from "./DarkMode";
import  { ThemeProvider } from "styled-components";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Skills from "./Pages/Skills/Skills";
import Review from "./Pages/Reviews/Reviews";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";

const  App = () => {
  
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  const themeMode = theme === "light" ? LightTheme : DarkTheme;

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobaleStyles />
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Review" element={<Review />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
