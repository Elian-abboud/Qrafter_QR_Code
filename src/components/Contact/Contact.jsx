// src/pages/Contact.jsx
import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

// You'll need to install EmailJS: npm install @emailjs/browser
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS configuration - You need to get these from https://www.emailjs.com/
    const serviceID = "service_utur958";
    const templateID = "template_vn9bczc";
    const publicKey = "0NieUCfzgMRwZNT7Y";

    // Using EmailJS to send the email
    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending email:", error.text);
        setSubmitStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const contactInfo = {
    name: "Elian Abboud",
    title: "Front-End Developer",
    email: "elianabboud5@gmail.com",
    linkedin: "http://www.linkedin.com/in/elian-abboud/",
    github: "https://github.com/Elian-abboud",
    location: "Damascus, Syria",
    website: "https://elian-abboud.github.io/new_portfolio/",
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="contact-card card shadow-lg border-0">
              <div className="card-body p-4 p-md-5">
                {/* Header Section */}
                <div className="text-center mb-5">
                  <h1 className="contact-title ">Get In Touch</h1>
                  <p className="contact-subtitle lead">
                    I'd love to hear from you. Let's create something amazing
                    together!
                  </p>
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div
                    className="alert alert-success alert-dismissible fade show"
                    role="alert"
                  >
                    <strong>Success!</strong> Your message has been sent
                    successfully.
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => setSubmitStatus(null)}
                    ></button>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div
                    className="alert alert-danger alert-dismissible fade show"
                    role="alert"
                  >
                    <strong>Error!</strong> There was a problem sending your
                    message. Please try again.
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => setSubmitStatus(null)}
                    ></button>
                  </div>
                )}

                <div className="row">
                  {/* Contact Information */}
                  <div className="col-lg-5 mb-4 mb-lg-0">
                    <div className="contact-info-section">
                      <div className="profile-section text-center mb-4">
                        <div className="profile-image-container mb-3">
                          <div className="profile-image">
                            <span>
                              {contactInfo.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                        </div>
                        <h3 className="profile-name">{contactInfo.name}</h3>
                        <p className="profile-title">{contactInfo.title}</p>
                      </div>

                      <div className="contact-details">
                        <div className="contact-item">
                          <div className="contact-icon">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="contact-content">
                            <h6>Email</h6>
                            <a href={`mailto:${contactInfo.email}`}>
                              {contactInfo.email}
                            </a>
                          </div>
                        </div>

                        <div className="contact-item">
                          <div className="contact-icon">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="contact-content">
                            <h6>Location</h6>
                            <span>{contactInfo.location}</span>
                          </div>
                        </div>

                        <div className="contact-item">
                          <div className="contact-icon">
                            <i className="bi bi-globe"></i>
                          </div>
                          <div className="contact-content">
                            <h6>Website</h6>
                            <a
                              href={contactInfo.website}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Visit Portfolio
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="social-links text-center mt-4">
                        <h6 className="mb-3">Follow Me</h6>
                        <div className="d-flex justify-content-center gap-3">
                          <a
                            href={contactInfo.linkedin}
                            className="social-link linkedin"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="bi bi-linkedin"></i>
                          </a>
                          <a
                            href={contactInfo.github}
                            className="social-link github"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="bi bi-github"></i>
                          </a>
                          <a
                            href={`mailto:${contactInfo.email}`}
                            className="social-link email"
                          >
                            <i className="bi bi-envelope"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div className="col-lg-7">
                    <div className="contact-form-section">
                      <h4 className="form-title mb-4">Send Me a Message</h4>
                      <form ref={form} onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <div className="form-group">
                              <label htmlFor="name" className="form-label">
                                Full Name *
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                disabled={isSubmitting}
                              />
                            </div>
                          </div>
                          <div className="col-md-6 mb-3">
                            <div className="form-group">
                              <label htmlFor="email" className="form-label">
                                Email Address *
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                disabled={isSubmitting}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="form-group">
                            <label htmlFor="subject" className="form-label">
                              Subject *
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              required
                              disabled={isSubmitting}
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="form-group">
                            <label htmlFor="message" className="form-label">
                              Message *
                            </label>
                            <textarea
                              className="form-control"
                              id="message"
                              name="message"
                              rows="5"
                              value={formData.message}
                              onChange={handleChange}
                              required
                              disabled={isSubmitting}
                              placeholder="Tell me about your project or how I can help you..."
                            ></textarea>
                          </div>
                        </div>
                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn btn-send-message"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <span
                                  className="spinner-border spinner-border-sm me-2"
                                  role="status"
                                ></span>
                                Sending...
                              </>
                            ) : (
                              <>
                                Send Message
                                <i className="bi bi-send ms-2"></i>
                              </>
                            )}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
