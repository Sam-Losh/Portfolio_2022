import * as React from "react";
import  {Routes, Route}  from "react-router-dom";
import "./App.css";
import Portfolio from "./views/portfolio";
import About from "./views/about";
import Sample from "./views/sample";

const Home =() =>{
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/About" element={<About />} />
        <Route path="/Sample" element={<Sample />} />
      </Routes>
    </div>
  );
}
export default Home;