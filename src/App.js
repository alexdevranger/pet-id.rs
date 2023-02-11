import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dostava from "./components/Dostava";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Main1 from "./components/Main1";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import Korak2 from "./components/Korak2";
import ContactUs from "./components/ContactUs";
import MojLjubimac from "./components/MojLjubimac";
import Uputstvo from "./components/Uputstvo";
import "./App.css";
import "./fonts/IndieFlower-Regular.ttf";

function App() {
  return (
    <div className="h-screen w-full bg-[#fff]">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main1 />} />
          <Route exact path="/proizvodi" element={<Shop />} />
          <Route exact path="/proizvodi/:id" element={<Korak2 />} />
          <Route exact path="/proizvodi/:id/dostava" element={<Dostava />} />
          <Route exact path="/kontakt" element={<ContactUs />} />
          <Route exact path="/moj-ljubimac" element={<MojLjubimac />} />
          <Route exact path="/uputstvo" element={<Uputstvo />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
