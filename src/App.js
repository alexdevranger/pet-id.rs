import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Blog from "./pages/Blog";
import Home from "./pages/Home";
import BlogUdomi from "./pagesUdomi/BlogUdomi";
import HomeUdomi from "./pagesUdomi/HomeUdomi";
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
import UsloviKoriscenja from "./components/UsloviKoriscenja";
import Galerija from "./components/Galerija";
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
          <Route exact path="/kontakt" element={<ContactUs />} />
          <Route exact path="/kontakt-udomi" element={<KontaktUdomi />} />
          <Route exact path="/blog/:id" element={<Blog />} />
          <Route exact path="/blog" element={<Home />} />
          <Route exact path="/udomi/:id" element={<BlogUdomi />} />
          <Route exact path="/udomi" element={<HomeUdomi />} />
          <Route exact path="/moj-ljubimac" element={<MojLjubimac />} />
          <Route exact path="/uputstvo" element={<Uputstvo />} />
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
