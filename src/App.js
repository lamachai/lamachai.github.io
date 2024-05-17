import  "./App.css";
import Header from "./components/Header.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home.js";
import Services from "./components/pages/Services.js";
import Portfolio from "./components/pages/Portfolio.js";
import About from "./components/pages/About.js";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
