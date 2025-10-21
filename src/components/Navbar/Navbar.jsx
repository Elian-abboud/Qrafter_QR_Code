// src/components/Navbar/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "/assets/images/logo.png";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // تحديد الصفحة النشطة
  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top ${
        scrolled ? "navbar-scrolled" : "navbar-transparent"
      } ${mobileMenuOpen ? "mobile-menu-open" : ""}`}
    >
      <div className="container">
        {/* الشعار والاسم على اليسار */}
        <Link
          className="navbar-brand d-flex align-items-center"
          to="/"
          onClick={closeMobileMenu}
        >
          <img
            src={logo}
            alt="Qrafter Logo"
            width="150"
            height="60"
            className="d-inline-block align-top me-2 logo-image"
          />
        </Link>

        {/* زر القائمة للموبايل */}
        <button
          className={`navbar-toggler ${mobileMenuOpen ? "toggler-open" : ""}`}
          type="button"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
          <span className="toggler-close">✕</span>
        </button>

        {/* قائمة التنقل على اليمين */}
        <div
          className={`collapse navbar-collapse ${mobileMenuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/") ? "active" : ""}`}
                to="/"
                onClick={closeMobileMenu}
              >
                {/* <i className="nav-icon">🏠</i> */}
                Home
                <span className="nav-underline"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/about") ? "active" : ""}`}
                to="/about"
                onClick={closeMobileMenu}
              >
                {/* <i className="nav-icon">ℹ️</i> */}
                About
                <span className="nav-underline"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/faq") ? "active" : ""}`}
                to="/faq"
                onClick={closeMobileMenu}
              >
                {/* <i className="nav-icon">❓</i> */}
                FAQ
                <span className="nav-underline"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/blog") ? "active" : ""}`}
                to="/blog"
                onClick={closeMobileMenu}
              >
                {/* <i className="nav-icon">📝</i> */}
                Blog
                <span className="nav-underline"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/contact") ? "active" : ""}`}
                to="/contact"
                onClick={closeMobileMenu}
              >
                {/* <i className="nav-icon">📞</i> */}
                Contact Us
                <span className="nav-underline"></span>
              </Link>
            </li>
            <li className="nav-item nav-cta">
              <Link
                className="nav-link cta-button"
                to="/"
                onClick={closeMobileMenu}
              >
                {/* <i className="nav-icon">🚀</i> */}
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
