import React, { useState, useEffect } from "react";
import Homepage from "./pages/homepage";
import ContactPage from "./pages/contact";
import Footer from "./components/footer";
import DarkMode from "./components/DarkMode";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const getcurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [Dark, setDark] = useState(getcurrentTheme());
  const changeMode = (e) => {
    setDark(e.matches);
  };

  useEffect(() => {
    const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    darkTheme.addListener(changeMode);

    return () => darkTheme.removeListener(changeMode);
  }, []);

  return (
    <div id={Dark ? "dark" : "light"} className="light general">
      <BrowserRouter>
        <DarkMode handleClick={changeMode} dark={Dark} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
