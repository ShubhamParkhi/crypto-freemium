import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Home from "./component/Home";
import Footer from "./component/Footer";
import Sources from "./component/Sources";
import Services from "./component/Services";
import Publicvip from "./component/Publicvip";
import Donate from "./component/Donate";
import Blog from "./component/Blog";
import Findus from "./component/blog/Findus";
import Buyersbeware from "./component/blog/Buyerbeware";
import Faq2 from "./component/blog/Faq2";
import Faq1 from "./component/blog/Faq1";
import Basics from "./component/blog/Basics";
import Peoplebehind from "./component/blog/Peoplebehind";

class App extends Component {
  render() {
    document.addEventListener(
      "touchmove",
      function (event) {
        if (event.scale !== 1) {
          event.preventDefault();
        }
      },
      false
    );
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/sources" element={<Sources />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/publicvip" element={<Publicvip />} />
          <Route exact path="/donate" element={<Donate />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/findus" element={<Findus />} />
          <Route exact path="/faq2" element={<Faq2 />} />
          <Route exact path="/faq1" element={<Faq1 />} />
          <Route
            exact
            path="/about-crypto-freemium-and-the-people-behind-it"
            element={<Peoplebehind />}
          />
          <Route
            exact
            path="/basics-to-trading-freemium-family-academy"
            element={<Basics />}
          />
          <Route exact path="/buyersbeware" element={<Buyersbeware />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
}

export default App;
