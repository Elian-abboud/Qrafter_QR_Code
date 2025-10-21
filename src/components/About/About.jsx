// src/components/About/About.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

const About = () => {
  // مسارات الأيقونات الجديدة
  const iconPaths = {
    link: "/assets/images/link.png",
    text: "/assets/images/text.png",
    email: "/assets/images/email.png",
    call: "/assets/images/call.png",
    sms: "/assets/images/sms.png",
    whatsapp: "/assets/images/whatsapp.png",
    social: "/assets/images/social.png",
    app: "/assets/images/mobileapp.png",
    vcard: "/assets/images/cvv.png",
    wifi: "/assets/images/wifi.png",
    location: "/assets/images/location.jpg",
    images: "/assets/images/image.png",
    video: "/assets/images/video.png",
  };

  const features = [
    {
      icon: iconPaths.link,
      title: "Links & URLs",
      description:
        "Generate QR codes for any website, landing page, or online resource",
    },
    {
      icon: iconPaths.text,
      title: "Text Content",
      description:
        "Convert plain text, messages, or notes into scannable QR codes",
    },
    {
      icon: iconPaths.email,
      title: "Email",
      description:
        "Create QR codes that automatically open email with pre-filled content",
    },
    {
      icon: iconPaths.call,
      title: "Phone Calls",
      description: "Generate QR codes that instantly dial phone numbers",
    },
    {
      icon: iconPaths.sms,
      title: "SMS Messages",
      description: "QR codes that open messaging apps with pre-written texts",
    },
    {
      icon: iconPaths.whatsapp,
      title: "WhatsApp",
      description: "Direct WhatsApp messaging with pre-filled messages",
    },
    {
      icon: iconPaths.social,
      title: "Social Media",
      description:
        "Facebook, Instagram, Twitter, LinkedIn, TikTok, YouTube profiles",
    },
    {
      icon: iconPaths.app,
      title: "App Downloads",
      description: "App Store, Google Play, and Huawei AppGallery links",
    },
    {
      icon: iconPaths.vcard,
      title: "vCard Contacts",
      description: "Digital business cards with contact information",
    },
    {
      icon: iconPaths.wifi,
      title: "Wi-Fi Access",
      description: "Share Wi-Fi credentials with automatic connection",
    },
    {
      icon: iconPaths.location,
      title: "Locations",
      description: "Google Maps and Apple Maps locations with GPS coordinates",
    },
    {
      icon: iconPaths.images,
      title: "Images & Videos",
      description: "QR codes linking directly to images and video content",
    },
  ];

  const designFeatures = [
    {
      icon: "🎨",
      title: "Custom Colors",
      description:
        "Choose from beautiful themes or create your own color combinations",
    },
    {
      icon: "🖼️",
      title: "Logo Integration",
      description: "Add your brand logo to the center of QR codes",
    },
    {
      icon: "📐",
      title: "Multiple Frames",
      description: "Choose from different frame styles to match your design",
    },
    {
      icon: "⚡",
      title: "Instant Preview",
      description: "See your QR code changes in real-time as you design",
    },
  ];

  const benefits = [
    {
      icon: "🚀",
      title: "Lightning Fast",
      description:
        "Generate high-quality QR codes in seconds with real-time preview",
    },
    {
      icon: "🎯",
      title: "User Friendly",
      description: "Intuitive interface that requires no technical skills",
    },
    {
      icon: "💎",
      title: "Premium Quality",
      description: "High-resolution QR codes that scan perfectly every time",
    },
    {
      icon: "🔒",
      title: "Complete Privacy",
      description: "Your data never leaves your browser - 100% secure",
    },
    {
      icon: "📱",
      title: "Mobile Optimized",
      description: "Works perfectly on all devices and screen sizes",
    },
    {
      icon: "🌐",
      title: "No Registration",
      description: "Start creating immediately without any sign-up required",
    },
  ];

  return (
    <section className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="hero-content">
                <h1 className="hero-title">
                  About <span className="gradient-text">Qrafter</span>
                </h1>
                <p className="hero-subtitle">
                  The Ultimate QR Code Generator - Crafting Digital Connections
                </p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <div className="stat-number">13+</div>
                    <div className="stat-label">Data Types</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">100%</div>
                    <div className="stat-label">Free</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">∞</div>
                    <div className="stat-label">Possibilities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="about-content  ">
        <div className="container  ">
          {/* Brand Story Section */}
          <div className="section-wrapper ">
            <div className="row align-items-center">
              <div className="col-lg">
                <div className="story-content">
                  <h2 className="section-title">What is Qrafter?</h2>
                  <p className="story-text">
                    <strong>Qrafter</strong> is a powerful, all-in-one QR code
                    generator that transforms how you share digital information.
                    We empower businesses, marketers, educators, and everyday
                    users to create stunning, functional QR codes for any
                    purpose.
                  </p>

                  <div className="name-origin">
                    <h4>The Name Origin</h4>
                    <p>
                      <strong className="Color">QR</strong> (Quick Response) +{" "}
                      <strong className="Color">Crafter</strong> (Skilled
                      Creator)
                      <br />
                      We don't just generate - we <em>craft</em> digital
                      connections with precision and care.
                    </p>
                  </div>

                  <div className="mission-vision">
                    <div className="mv-item">
                      <h5>🎯 Our Mission</h5>
                      <p>
                        Make QR code creation accessible, beautiful, and
                        powerful for everyone.
                      </p>
                    </div>
                    <div className="mv-item">
                      <h5>🚀 Our Vision</h5>
                      <p>
                        Become the world's most trusted QR code platform,
                        bridging physical and digital worlds.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid Section */}
          <div className="section-wrapper features-section">
            <div className="text-center mb-5">
              <h2 className="section-title">Everything You Can Create</h2>
              <p className="section-subtitle">
                Support for <strong>13+ data types</strong> - The most versatile
                QR code generator available
              </p>
            </div>

            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="feature-content">
                    <h4 className="feature-title">{feature.title}</h4>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Design Features */}
          <div className="section-wrapper design-section">
            <div className="text-center mb-5">
              <h2 className="section-title">Powerful Design Features</h2>
              <p className="section-subtitle">
                Create QR codes that match your brand and style perfectly
              </p>
            </div>

            <div className="design-features-grid">
              {designFeatures.map((feature, index) => (
                <div key={index} className="design-feature-card">
                  <div className="design-feature-icon">{feature.icon}</div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="section-wrapper benefits-section">
            <div className="text-center mb-5">
              <h2 className="section-title">Why Choose Qrafter?</h2>
              <p className="section-subtitle">
                Experience the difference with our premium features
              </p>
            </div>

            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <div className="benefit-icon">{benefit.icon}</div>
                  <h4>{benefit.title}</h4>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="section-wrapper cta-section">
            <div className="cta-card">
              <div className="cta-content">
                <h2>Ready to Start Crafting?</h2>
                <p>
                  Join thousands of users who trust Qrafter for their QR code
                  needs. Create your first QR code now - it's free and always
                  will be!
                </p>
                <a href="/" className="cta-button">
                  Start Creating QR Codes
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
