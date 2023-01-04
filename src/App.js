import React, { useState } from "react";
import Homepage from "./pages/homepage";
import ContactPage from "./pages/contact";
import Footer from "./components/footer";
import DarkMode from "./components/DarkMode";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [Dark, setDark] = useState(false);
  const changeMode = () => {
    setDark((prev) => !prev);
    console.log("mode changed");
  };

  return (
    <div id={Dark ? "light" : "dark"} className="light">
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
