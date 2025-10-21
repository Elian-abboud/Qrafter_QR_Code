// src/components/FAQ/FAQ.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "Is Qrafter completely free?",
      answer:
        "Yes! Qrafter is 100% free with no hidden costs, no watermarks, and no usage limitations.",
      icon: "💸",
    },
    {
      question: "Do I need to create an account?",
      answer:
        "No account required! You can start generating QR codes immediately without any registration.",
      icon: "🚀",
    },
    {
      question: "What types of QR codes can I create?",
      answer:
        "You can create 13+ different types including URLs, text, email, phone, SMS, WhatsApp, social media, apps, vCards, Wi-Fi, locations, images, and videos.",
      icon: "🎨",
    },
    {
      question: "Can I change the size of my QR code?",
      answer:
        "No. To avoid errors in the process of reading the QR code, this option is not available. But don't worry, we use a standard size so that the logo is easily readable and doesn't compromise the scan.",
      icon: "📏",
    },
    {
      question: "Can I check that my QR code is working correctly?",
      answer:
        "Yes. We recommend that you always scan the QR code preview with your mobile device to check that it's working.",
      icon: "✅",
    },
    {
      question: "How do I print my QR code?",
      answer:
        "Once you have downloaded your QR code in the desired format, you can print it from your computer. Always make sure to test your QR before printing it to avoid any mishaps.",
      icon: "🖨️",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            {/* Header Section */}
            <div className="text-center mb-6">
              <div className="faq-badge">FAQ</div>
              <h1 className="faq-main-title gradient-text">
                Frequently Asked Questions{" "}
              </h1>
              <p className="faq-subtitle">
                Everything you need to know about Qrafter. Can't find the answer
                you're looking for?
                <Link to="/contact" className="contact-link">
                  {" "}
                  Contact our team
                </Link>
                .
              </p>
            </div>

            {/* FAQ Grid */}
            <div className="faq-grid">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={`faq-card ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="faq-card-header">
                    <div className="faq-icon-wrapper">
                      <span className="faq-emoji">{item.icon}</span>
                    </div>
                    <h5 className="faq-question">{item.question}</h5>
                    <div className="faq-toggle">
                      <div
                        className={`toggle-icon ${
                          activeIndex === index ? "active" : ""
                        }`}
                      >
                        <div className="line horizontal"></div>
                        <div className="line vertical"></div>
                      </div>
                    </div>
                  </div>

                  <div className="faq-answer">
                    <p>{item.answer}</p>
                    <div className="answer-decoration"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="faq-cta text-center mt-6">
              <div className="cta-card">
                <h3>Still have questions?</h3>
                <p>We're here to help you get the most out of Qrafter</p>
                <div className="cta-buttons">
                  <Link to="/contact" className="btn btn-primary">
                    Contact Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
