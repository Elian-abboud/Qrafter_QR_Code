// src/components/Blog/Blog.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Blog.css";
import Image2 from "../../../public/assets/images/2.jpeg";
import Image3 from "../../../public/assets/images/3.jpeg";
import Image1 from "../../../public/assets/images/1.jpeg";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "What Are QR Codes?",
      excerpt:
        "Learn about QR codes, their history, and how they've evolved from industrial use to everyday applications.",
      category: "Technology",
      readTime: "5 min read",
      date: "Octobar 21, 2025",
      image: Image3, // Local image path
      content: `A QR code, short for Quick Response code, is a two-dimensional barcode developed in 1994 by Masahiro Hara of Denso Wave. Unlike traditional barcodes that store information in a single line, QR codes arrange data within a matrix of black squares on a white background, enhanced with fiducial markers that make them easily detectable by cameras.
      
QR codes can encode information in four standardized modes—numeric, alphanumeric, byte/binary, and kanji—making them highly versatile for different types of data.

Compared to standard barcodes, they support error correction, allowing them to remain scannable even when partially damaged or obscured. They also enable faster reading speeds and greater data capacity, which has led to their widespread adoption in areas such as product tracking, identification, time management, and marketing campaigns.

## History and Development

### Origins of the QR Code
The QR code was invented in 1994 by Denso Wave, a subsidiary of Toyota, to improve efficiency in Japan's automotive industry. At the time, traditional barcodes could only hold a small amount of information, which limited their usefulness in tracking the many parts required for car manufacturing.

QR codes solved this by offering a two-dimensional design capable of storing far more data while also allowing for quicker scanning speeds.

### Expansion and Everyday Use
These advantages soon pushed QR codes beyond the factory floor. As smartphones with built-in cameras and QR scanning apps became mainstream, QR codes transitioned into everyday life—appearing on marketing materials, restaurant menus, event tickets, and even digital contact cards.

Their flexibility was further boosted by Denso Wave's decision not to enforce the QR code patent, which encouraged the development of countless QR code generators and scanners. This openness transformed QR codes into a global standard, widely adopted across industries and daily activities.`,
    },
    {
      id: 2,
      title: "How Do QR Codes Work?",
      excerpt:
        "Discover the technical structure, error correction mechanisms, and scanning technology behind QR codes.",
      category: "Technical",
      readTime: "6 min read",
      date: "Octobar 21, 2025",
      image: Image2, // Local image path
      content: `## Structure and Components
QR codes are built from a grid of black and white squares that represent binary code—black modules signify "on" and white modules signify "off." This binary system allows devices to quickly read and translate the encoded information.

To ensure accurate scanning, QR codes include several key structural elements:

- **Finder patterns**: Located at three of the four corners, these large squares help scanners detect the QR code and determine its orientation.
- **Alignment patterns**: Smaller squares positioned within the code, used to correct for distortion and maintain precise positioning.
- **Timing patterns**: Alternating black and white modules that run between finder patterns, enabling scanners to determine the data grid's scale and module width for accurate interpretation.

Together, these components create a robust design that allows QR codes to be scanned quickly and reliably, even when tilted, partially damaged, or viewed from different angles.

## Error Correction and Data Integrity
One of the key strengths of QR codes is their ability to remain readable even when damaged. This is achieved through error correction, a process that allows scanners to recover lost or obscured data if the code is smudged, scratched, or partially missing.

QR codes use the Reed–Solomon error correction algorithm, which can reconstruct data accurately even if up to 30% of the code's surface is compromised. Depending on the application, different error correction levels can be applied—higher levels provide greater resilience but reduce overall storage capacity, while lower levels maximize data storage but are less resistant to damage.

By combining error correction with standardized encoding modes, QR codes maintain strong data integrity. When you scan a QR code, this ensures reliable scanning and accurate information retrieval across a wide range of environments and conditions.

Modern QR code generators also provide customization options, enabling businesses to add logos, adjust colors, or modify design elements to align with branding while maintaining readability. This balance of function and design has helped QR codes become both practical and visually adaptable across industries.

## Scanning and Reading QR Codes
QR codes are designed for quick and effortless access to information. You can scan a QR code image using dedicated QR code scanners or, more commonly, through the built-in camera apps on mobile devices. When scanned, the unique pattern of black and white modules is decoded and instantly translated into readable information such as website URLs, phone numbers, Wi-Fi credentials, or payment details.`,
    },
    {
      id: 3,
      title: "Creative Uses of QR Codes in Modern Business",
      excerpt:
        "Explore innovative ways businesses are leveraging QR codes beyond traditional applications.",
      category: "Business",
      readTime: "7 min read",
      date: "Octobar 21, 2025",
      image: Image1, // Local image path
      content: `## Beyond Basic Marketing
While QR codes have long been used for simple redirection to websites or promotional content, forward-thinking businesses are finding creative applications that enhance customer experience and streamline operations.

### Interactive Product Packaging
Companies are embedding QR codes directly into product packaging to provide customers with additional value. This might include:
- Recipe tutorials for food products
- Assembly instructions for furniture
- Behind-the-scenes content for collectibles
- Sustainability information and recycling guidelines

This transforms passive packaging into an interactive experience, strengthening brand connection and providing practical utility.

### Contactless Restaurant Experiences
The pandemic accelerated QR code adoption in hospitality, but innovative restaurants are taking this further by:
- Creating dynamic digital menus that update in real-time
- Integrating with loyalty programs for automatic points accumulation
- Enabling tableside ordering and payment without staff interaction
- Collecting feedback immediately after the dining experience

This not only improves efficiency but also creates a seamless, modern customer experience.

### Enhanced Event Management
Event organizers are using QR codes for more than just ticketing. Advanced implementations include:
- Personalized agenda building for conference attendees
- Networking facilitation through digital business card exchanges
- Real-time polling and Q&A sessions during presentations
- Post-event content delivery based on sessions attended

These applications transform one-way events into interactive, personalized experiences.

### Smart Retail Integration
Progressive retailers are blending physical and digital shopping through QR codes by:
- Providing instant access to product reviews and comparisons
- Showing alternative colors or styles not available in-store
- Offering exclusive in-app discounts when scanned
- Enabling virtual try-ons for cosmetics or accessories

This approach bridges the gap between online convenience and in-store immediacy.

## Future Trends
As technology evolves, QR codes are becoming integrated with augmented reality, blockchain verification, and personalized AI interactions. The humble QR code continues to prove its versatility, adapting to new contexts while maintaining its core functionality of bridging physical and digital worlds.`,
    },
  ];

  const handleReadMore = (post) => {
    setSelectedPost(post);
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
  };

  // If a post is selected, show the full article
  if (selectedPost) {
    return (
      <section className="blog-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <button className="btn btn-back mb-4" onClick={handleBackToBlog}>
                <span className="btn-back-icon">←</span> Back to Blog
              </button>

              <article className="blog-article">
                <header className="article-header text-center mb-5">
                  <div className="article-meta mb-3">
                    <span className="article-category">
                      {selectedPost.category}
                    </span>
                    <span className="article-date">{selectedPost.date}</span>
                    <span className="article-read-time">
                      {selectedPost.readTime}
                    </span>
                  </div>
                  <h1 className="article-title">{selectedPost.title}</h1>
                  <p className="article-excerpt lead">{selectedPost.excerpt}</p>
                </header>

                <div className="article-hero mb-5">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="article-image"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.target.src = "/assets/images/default-blog-image.jpg";
                    }}
                  />
                </div>

                <div className="article-content">
                  {selectedPost.content.split("\n").map((paragraph, index) => {
                    if (paragraph.startsWith("## ")) {
                      return (
                        <h2 key={index} className="article-h2">
                          {paragraph.replace("## ", "")}
                        </h2>
                      );
                    } else if (paragraph.startsWith("### ")) {
                      return (
                        <h3 key={index} className="article-h3">
                          {paragraph.replace("### ", "")}
                        </h3>
                      );
                    } else if (paragraph.startsWith("- ")) {
                      return (
                        <li key={index} className="article-li">
                          {paragraph.replace("- ", "")}
                        </li>
                      );
                    } else if (paragraph.trim() === "") {
                      return <br key={index} />;
                    } else {
                      return (
                        <p key={index} className="article-p">
                          {paragraph}
                        </p>
                      );
                    }
                  })}
                </div>

                <footer className="article-footer text-center mt-5 pt-4"></footer>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Default view - blog post grid
  return (
    <section className="blog-page">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <div className="blog-header">
              <h1 className="blog-title">Our Blog</h1>
              <p className="blog-subtitle">
                Discover insights, tutorials, and industry trends
              </p>
              <div className="blog-decoration">
                <div className="decoration-line"></div>
                <div className="decoration-dot"></div>
                <div className="decoration-line"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-lg-4 col-md-6 mb-5">
              <article
                className="blog-card"
                onClick={() => handleReadMore(post)}
              >
                <div className="card-image">
                  <img
                    src={post.image}
                    alt={post.title}
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.target.src = "/assets/images/default-blog-image.jpg";
                    }}
                  />
                  <div className="card-category">{post.category}</div>
                </div>
                <div className="card-content">
                  <div className="card-meta">
                    <span className="card-date">{post.date}</span>
                    <span className="card-read-time">{post.readTime}</span>
                  </div>
                  <h3 className="card-title">{post.title}</h3>
                  <p className="card-excerpt">{post.excerpt}</p>
                  <div className="card-footer">
                    <button className="card-btn">
                      Read More
                      <span className="btn-arrow">→</span>
                    </button>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
