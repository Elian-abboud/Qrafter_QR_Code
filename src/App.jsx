// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import FAQ from "./components/FAQ/FAQ";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

// Home Page Component
const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
    </div>
  );
};

// About Page Component
const AboutPage = () => {
  return (
    <div className="page-container">
      <About />
    </div>
  );
};

// FAQ Page Component
const FAQPage = () => {
  return (
    <div className="page-container">
      <FAQ />
    </div>
  );
};

// Blog Page Component
const BlogPage = () => {
  return (
    <div className="page-container">
      <Blog />
    </div>
  );
};

// Contact Page Component
const ContactPage = () => {
  return (
    <div className="page-container">
      <Contact />
    </div>
  );
};

export default App;
