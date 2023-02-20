import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blog from './pages/Blog';
import Home from './pages/Home';
import BlogUdomi from './pagesUdomi/BlogUdomi';
import HomeUdomi from './pagesUdomi/HomeUdomi';

import Dostava from "./components/Dostava";
import Header from "./components/Header";
import Main1 from "./components/Main1";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import Korak2 from "./components/Korak2";
import ContactUs from "./components/ContactUs";
import MojLjubimac from "./components/MojLjubimac";
import Uputstvo from "./components/Uputstvo";
import KontaktUdomi from "./components/KontaktUdomi";
import PolitikaPrivatnosti from "./components/PolitikaPrivatnosti";
import Dresura from "./components/Dresura";
import Higijena from "./components/Higijena";
import Ishrana from "./components/Ishrana";
import Ponasanje from "./components/Ponasanje";
import RazneTeme from "./components/RazneTeme";
import Vezbe from "./components/Vezbe";
import UsloviKoriscenja from "./components/UsloviKoriscenja";
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
          <Route exact path="/kontakt-udomi" element={<KontaktUdomi />} />
          <Route exact path="/blog/:id" element={<Blog />} />
          <Route exact path="/blog" element={<Home />} />
          <Route exact path="/udomi/:id" element={<BlogUdomi />} />
          <Route exact path="/udomi" element={<HomeUdomi />} />
          <Route exact path="/dresura-i-obuka" element={<Dresura />} />
          <Route exact path="/higijena-i-zdravlje" element={<Higijena />} />
          <Route exact path="/ishrana-i-prehrana" element={<Ishrana />} />
          <Route exact path="/psiholosko-stanje-i-ponasanje" element={<Ponasanje />} />
          <Route exact path="/razne-teme" element={<RazneTeme />} />
          <Route exact path="/vezbe-i-aktivnosti" element={<Vezbe />} />
          <Route exact path="/moj-ljubimac" element={<MojLjubimac />} />
          <Route exact path="/uputstvo" element={<Uputstvo />} />
          <Route exact path="/politika-privatnosti" element={<PolitikaPrivatnosti />} />
          <Route exact path="/uslovi-koriscenja" element={<UsloviKoriscenja />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
