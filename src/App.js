import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import BlogDetail from "./pages/BlogDetail";
import Blog from "./pages/Blog";
import Header from "./components/Header";
import Main1 from "./components/Main1";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import Korak2 from "./components/Korak2";
import ContactUs from "./components/ContactUs";
import MojLjubimac from "./components/MojLjubimac";
import Uputstvo from "./components/Uputstvo";
import Poklon from "./components/Poklon";
import Veleprodaja from "./components/Veleprodaja";

import PolitikaPrivatnosti from "./components/PolitikaPrivatnosti";
import UsloviKoriscenja from "./components/UsloviKoriscenja";
import Galerija from "./components/Galerija";
import SveBoje from "./components/SveBoje";
import Udomi from "./components/Udomi";
import "./App.css";
import "./fonts/IndieFlower-Regular.ttf";

function App() {
  return (
    <div className="w-full bg-[#fff]">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main1 />} />
          <Route exact path="/proizvodi" element={<Shop />} />
          <Route exact path="/proizvodi/:id" element={<Korak2 />} />
          <Route exact path="/kontakt" element={<ContactUs />} />
          <Route exact path="/blog/:id" element={<BlogDetail />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/moj-ljubimac" element={<MojLjubimac />} />
          <Route exact path="/uputstvo" element={<Uputstvo />} />
          <Route exact path="/veleprodaja" element={<Veleprodaja />} />
          <Route exact path="/sve-kombinacije" element={<SveBoje />} />
          {/* <Route exact path="/kupi-kao-poklon" element={<Poklon />} /> */}
          {/* <Route exact path="/udomi" element={<Udomi />} /> */}
          <Route
            exact
            path="/politika-privatnosti"
            element={<PolitikaPrivatnosti />}
          />
          <Route
            exact
            path="/uslovi-koriscenja"
            element={<UsloviKoriscenja />}
          />
          <Route exact path="/galerija" element={<Galerija />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
