import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Docs from "./pages/Docs.jsx";
import Demo from "./pages/Demo.jsx";
import Install from "./pages/Install.jsx";
import API from "./pages/API.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";

const Nav = () => (
  <nav className="container nav">
    <a className="brand" href="/">
      <img src="/logo.svg" width="28" height="28" alt="logo" />
      <span>FlowOpsAI</span>
    </a>
    <div className="navlinks">
      <NavLink to="/" end className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
      <NavLink to="/docs" className={({isActive}) => isActive ? "active" : ""}>Docs</NavLink>
      <NavLink to="/demo" className={({isActive}) => isActive ? "active" : ""}>Demo</NavLink>
      <NavLink to="/install" className={({isActive}) => isActive ? "active" : ""}>Install</NavLink>
      <NavLink to="/api" className={({isActive}) => isActive ? "active" : ""}>API</NavLink>
      <NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>Contact</NavLink>
      <a className="cta" href="https://github.com/Ayub-shaik/flowopsai" target="_blank" rel="noreferrer">GitHub</a>
    </div>
  </nav>
);

export default function App(){
  return (
    <>
      <Nav/>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/docs" element={<Docs/>} />
          <Route path="/demo" element={<Demo/>} />
          <Route path="/install" element={<Install/>} />
          <Route path="/api" element={<API/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
      <Footer/>
    </>
  );
}
