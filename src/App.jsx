import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Projects from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path= "/" element={<Intro/>} />
            <Route path= "/About" element={<About/>} />
            < Route path="/Projects" element={<Projects/>} />
            <Route path= "/Contact" element={<Contact/>} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
};

export default App;
