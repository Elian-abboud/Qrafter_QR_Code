// src/components/Hero.jsx
import React, { useState, useRef, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css";
import linkIcon from "../../../public/assets/images/link.png";
import textIcon from "../../../public/assets/images/text.png";
import emailIcon from "../../../public/assets/images/email.png";
import callIcon from "../../../public/assets/images/call.png";
import smsIcon from "../../../public/assets/images/sms.png";
import whatsappIcon from "../../../public/assets/images/whatsapp.png";
import socialIcon from "../../../public/assets/images/social.png";
import appIcon from "../../../public/assets/images/mobileapp.png";
import vcardIcon from "../../../public/assets/images/cvv.png";
import wifiIcon from "../../../public/assets/images/wifi.png";
import locationIcon from "../../../public/assets/images/location.jpg";
import imagesIcon from "../../../public/assets/images/image.png";
import videoIcon from "../../../public/assets/images/video.png";
const Hero = () => {
  const [selectedType, setSelectedType] = useState("link");
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    link: { url: "" },
    text: { content: "" },
    email: { address: "", subject: "", body: "" },
    call: { phoneNumber: "" },
    sms: { phoneNumber: "", message: "" },
    whatsapp: { phoneNumber: "", message: "" },
    social: { platform: "facebook", username: "" },
    app: { url: "" },
    vcard: { name: "", company: "", phone: "", email: "", website: "" },
    wifi: { ssid: "", password: "", encryption: "WPA", hidden: false },
    location: { url: "" },
    images: { imageUrl: "" },
    video: { videoUrl: "" },
  });
  const [qrValue, setQrValue] = useState("");
  const [qrStyle, setQrStyle] = useState({
    fgColor: "#000000",
    bgColor: "#ffffff",
    size: 200,
    level: "H",
    includeMargin: true,
  });
  const [qrDesign, setQrDesign] = useState({
    theme: "classic",
    hasLogo: false,
    logo: null,
    frame: "none",
  });
  const qrRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // مسارات الأيقونات الجديدة
  const iconPaths = {
    link: linkIcon,
    text: textIcon,
    email: emailIcon,
    call: callIcon,
    sms: smsIcon,
    whatsapp: whatsappIcon,
    social: socialIcon,
    app: appIcon,
    vcard: vcardIcon,
    wifi: wifiIcon,
    location: locationIcon,
    images: imagesIcon,
    video: videoIcon,
  };
  const dataTypes = [
    { id: "link", label: "Link", icon: iconPaths.link },
    { id: "text", label: "Text", icon: iconPaths.text },
    { id: "email", label: "E-mail", icon: iconPaths.email },
    { id: "call", label: "Call", icon: iconPaths.call },
    { id: "sms", label: "SMS", icon: iconPaths.sms },
    { id: "whatsapp", label: "WhatsApp", icon: iconPaths.whatsapp },
    { id: "social", label: "Social Media", icon: iconPaths.social },
    { id: "app", label: "App Link", icon: iconPaths.app },
    { id: "vcard", label: "V-card", icon: iconPaths.vcard },
    { id: "wifi", label: "Wi-Fi", icon: iconPaths.wifi },
    { id: "location", label: "Location", icon: iconPaths.location },
    { id: "images", label: "Images", icon: iconPaths.images },
    { id: "video", label: "Video", icon: iconPaths.video },
  ];

  const socialPlatforms = [
    { id: "facebook", name: "Facebook", webLink: "https://facebook.com/" },
    { id: "instagram", name: "Instagram", webLink: "https://instagram.com/" },
    { id: "twitter", name: "Twitter", webLink: "https://twitter.com/" },
    { id: "linkedin", name: "LinkedIn", webLink: "https://linkedin.com/in/" },
    { id: "tiktok", name: "TikTok", webLink: "https://tiktok.com/@" },
    { id: "snapchat", name: "Snapchat", webLink: "https://snapchat.com/add/" },
    { id: "youtube", name: "YouTube", webLink: "https://youtube.com/" },
  ];

  const designThemes = [
    {
      id: "classic",
      name: "Classic",
      fgColor: "#000000",
      bgColor: "#ffffff",
      frame: "none",
      icon: "⚫",
    },
    {
      id: "modern",
      name: "Modern",
      fgColor: "#1e40af",
      bgColor: "#f0f9ff",
      frame: "rounded",
      icon: "🔵",
    },
    {
      id: "elegant",
      name: "Elegant",
      fgColor: "#7c3aed",
      bgColor: "#faf5ff",
      frame: "simple",
      icon: "🟣",
    },
    {
      id: "colorful",
      name: "Colorful",
      fgColor: "#dc2626",
      bgColor: "#fef2f2",
      frame: "circle",
      icon: "🔴",
    },
    {
      id: "dark",
      name: "Dark",
      fgColor: "#ffffff",
      bgColor: "#1f2937",
      frame: "none",
      icon: "⚪",
    },
  ];

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setQrValue("");
  };

  const handleInputChange = (type, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [type]: { ...prev[type], [field]: value },
    }));
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          const mapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
          handleInputChange("location", "url", mapsUrl);
        },
        // eslint-disable-next-line no-unused-vars
        (_error) => {
          alert(
            "Unable to get current location. Please enable location services and try again."
          );
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 60000,
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const generateQRValue = () => {
    const currentData = formData[selectedType];
    switch (selectedType) {
      case "link":
        return currentData.url || "https://example.com";
      case "text":
        return currentData.content || "Your text here";
      case "email":
        if (currentData.address) {
          let matmsg = `MATMSG:TO:${currentData.address};`;
          if (currentData.subject) matmsg += `SUB:${currentData.subject};`;
          if (currentData.body) matmsg += `BODY:${currentData.body};`;
          matmsg += `;`;
          return matmsg;
        }
        return "mailto:example@email.com";
      case "call":
        return currentData.phoneNumber || "+1234567890";
      case "sms": {
        const smsNumber =
          currentData.phoneNumber?.replace(/\s/g, "") || "+1234567890";
        const smsMessage = currentData.message ? `:${currentData.message}` : "";
        return `SMSTO:${smsNumber}${smsMessage}`;
      }
      case "whatsapp": {
        const whatsappNumber =
          currentData.phoneNumber?.replace(/\s/g, "") || "1234567890";
        const whatsappMessage = currentData.message
          ? `?text=${encodeURIComponent(currentData.message)}`
          : "";
        return `https://wa.me/${whatsappNumber}${whatsappMessage}`;
      }
      case "social": {
        const platform =
          socialPlatforms.find((p) => p.id === currentData.platform) ||
          socialPlatforms[0];
        return `${platform.webLink}${currentData.username || "username"}`;
      }
      case "app":
        return (
          currentData.url ||
          "https://play.google.com/store/apps/details?id=com.example.app"
        );
      case "vcard": {
        return [
          "BEGIN:VCARD",
          "VERSION:3.0",
          `FN:${currentData.name || "John Doe"}`,
          `ORG:${currentData.company || "Company"}`,
          `TEL:${currentData.phone || "+1234567890"}`,
          `EMAIL:${currentData.email || "john@example.com"}`,
          `URL:${currentData.website || "https://example.com"}`,
          "END:VCARD",
        ].join("\n");
      }
      case "wifi": {
        let wifiString = `WIFI:S:${currentData.ssid || "MyWiFi"};T:${
          currentData.encryption || "WPA"
        };`;
        if (currentData.password) wifiString += `P:${currentData.password};`;
        if (currentData.hidden) wifiString += `H:true;`;
        wifiString += `;`;
        return wifiString;
      }
      case "location":
        return (
          currentData.url || "https://www.google.com/maps?q=40.7128,-74.0060"
        );
      case "images":
        return currentData.imageUrl || "https://example.com/image.jpg";
      case "video":
        return currentData.videoUrl || "https://example.com/video.mp4";
      default:
        return "QR Code Generator";
    }
  };

  const handleGenerateQR = () => {
    const value = generateQRValue();
    setQrValue(value);
  };

  const applyDesignTheme = (theme) => {
    setQrStyle((prev) => ({
      ...prev,
      fgColor: theme.fgColor,
      bgColor: theme.bgColor,
    }));
    setQrDesign((prev) => ({ ...prev, theme: theme.id, frame: theme.frame }));
  };

  const toggleLogo = () => {
    setQrDesign((prev) => ({
      ...prev,
      hasLogo: !prev.hasLogo,
      logo: !prev.hasLogo ? "/assets/images/default-logo.png" : null,
    }));
  };

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setQrDesign((prev) => ({
          ...prev,
          logo: e.target.result,
          hasLogo: true,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const resetDesign = () => {
    applyDesignTheme(designThemes[0]);
    setQrDesign((prev) => ({ ...prev, hasLogo: false, logo: null }));
  };

  const handleDownload = () => {
    if (!qrRef.current) return;
    const svg = qrRef.current;
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.fillStyle = qrStyle.bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);

      if (qrDesign.hasLogo && qrDesign.logo) {
        const logoImg = new Image();
        logoImg.onload = () => {
          const logoSize = 40;
          const x = (canvas.width - logoSize) / 2;
          const y = (canvas.height - logoSize) / 2;
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(x - 2, y - 2, logoSize + 4, logoSize + 4);
          ctx.drawImage(logoImg, x, y, logoSize, logoSize);
          downloadImage();
        };
        logoImg.src = qrDesign.logo;
      } else {
        downloadImage();
      }
    };

    const downloadImage = () => {
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = `qrcode-${selectedType}-${qrDesign.theme}.png`;
      downloadLink.href = pngFile;
      downloadLink.click();
    };

    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };

  const renderInputFields = () => {
    const currentData = formData[selectedType];
    switch (selectedType) {
      case "link":
        return (
          <div className="mb-3">
            <label htmlFor="url" className="form-label">
              URL
            </label>
            <input
              type="url"
              className="form-control"
              id="url"
              value={currentData.url}
              onChange={(e) => handleInputChange("link", "url", e.target.value)}
              placeholder="https://example.com"
            />
          </div>
        );
      case "text":
        return (
          <div className="mb-3">
            <label htmlFor="text" className="form-label">
              Text Content
            </label>
            <textarea
              className="form-control"
              id="text"
              rows="4"
              value={currentData.content}
              onChange={(e) =>
                handleInputChange("text", "content", e.target.value)
              }
              placeholder="Enter your text here..."
            />
          </div>
        );
      case "email":
        return (
          <>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address *
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={currentData.address}
                onChange={(e) =>
                  handleInputChange("email", "address", e.target.value)
                }
                placeholder="example@email.com"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                value={currentData.subject}
                onChange={(e) =>
                  handleInputChange("email", "subject", e.target.value)
                }
                placeholder="Email subject"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="body" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="body"
                rows="3"
                value={currentData.body}
                onChange={(e) =>
                  handleInputChange("email", "body", e.target.value)
                }
                placeholder="Email message body"
              />
            </div>
          </>
        );
      case "call":
        return (
          <div className="mb-3">
            <label htmlFor="call-phone" className="form-label">
              Phone Number *
            </label>
            <input
              type="tel"
              className="form-control"
              id="call-phone"
              value={currentData.phoneNumber}
              onChange={(e) =>
                handleInputChange("call", "phoneNumber", e.target.value)
              }
              placeholder="+1234567890"
              required
            />
          </div>
        );
      case "sms":
        return (
          <>
            <div className="mb-3">
              <label htmlFor="sms-phone" className="form-label">
                Phone Number *
              </label>
              <input
                type="tel"
                className="form-control"
                id="sms-phone"
                value={currentData.phoneNumber}
                onChange={(e) =>
                  handleInputChange("sms", "phoneNumber", e.target.value)
                }
                placeholder="+1234567890"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="sms-message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="sms-message"
                rows="3"
                value={currentData.message}
                onChange={(e) =>
                  handleInputChange("sms", "message", e.target.value)
                }
                placeholder="Type your message here..."
              />
            </div>
          </>
        );
      case "whatsapp":
        return (
          <>
            <div className="mb-3">
              <label htmlFor="whatsapp-phone" className="form-label">
                Phone Number *
              </label>
              <input
                type="tel"
                className="form-control"
                id="whatsapp-phone"
                value={currentData.phoneNumber}
                onChange={(e) =>
                  handleInputChange("whatsapp", "phoneNumber", e.target.value)
                }
                placeholder="1234567890"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="whatsapp-message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="whatsapp-message"
                rows="3"
                value={currentData.message}
                onChange={(e) =>
                  handleInputChange("whatsapp", "message", e.target.value)
                }
                placeholder="Type your message here..."
              />
            </div>
          </>
        );
      case "social":
        return (
          <>
            <div className="mb-3">
              <label htmlFor="social-platform" className="form-label">
                Social Platform
              </label>
              <select
                className="form-select"
                id="social-platform"
                value={currentData.platform}
                onChange={(e) =>
                  handleInputChange("social", "platform", e.target.value)
                }
              >
                {socialPlatforms.map((platform) => (
                  <option key={platform.id} value={platform.id}>
                    {platform.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="social-username" className="form-label">
                Username *
              </label>
              <input
                type="text"
                className="form-control"
                id="social-username"
                value={currentData.username}
                onChange={(e) =>
                  handleInputChange("social", "username", e.target.value)
                }
                placeholder="username"
                required
              />
            </div>
          </>
        );
      case "app":
        return (
          <div className="mb-3">
            <label htmlFor="app-url" className="form-label">
              App Store URL *
            </label>
            <input
              type="url"
              className="form-control"
              id="app-url"
              value={currentData.url}
              onChange={(e) => handleInputChange("app", "url", e.target.value)}
              placeholder="https://play.google.com/store/apps/details?id=com.example.app"
              required
            />
          </div>
        );
      case "vcard":
        return (
          <>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={currentData.name}
                onChange={(e) =>
                  handleInputChange("vcard", "name", e.target.value)
                }
                placeholder="John Doe"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="company" className="form-label">
                Company
              </label>
              <input
                type="text"
                className="form-control"
                id="company"
                value={currentData.company}
                onChange={(e) =>
                  handleInputChange("vcard", "company", e.target.value)
                }
                placeholder="Company Name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="vcard-phone" className="form-label">
                Phone
              </label>
              <input
                type="tel"
                className="form-control"
                id="vcard-phone"
                value={currentData.phone}
                onChange={(e) =>
                  handleInputChange("vcard", "phone", e.target.value)
                }
                placeholder="+1234567890"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="vcard-email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="vcard-email"
                value={currentData.email}
                onChange={(e) =>
                  handleInputChange("vcard", "email", e.target.value)
                }
                placeholder="john@example.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="website" className="form-label">
                Website
              </label>
              <input
                type="url"
                className="form-control"
                id="website"
                value={currentData.website}
                onChange={(e) =>
                  handleInputChange("vcard", "website", e.target.value)
                }
                placeholder="https://example.com"
              />
            </div>
          </>
        );
      case "wifi":
        return (
          <>
            <div className="mb-3">
              <label htmlFor="ssid" className="form-label">
                Network Name (SSID) *
              </label>
              <input
                type="text"
                className="form-control"
                id="ssid"
                value={currentData.ssid}
                onChange={(e) =>
                  handleInputChange("wifi", "ssid", e.target.value)
                }
                placeholder="MyWiFi"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={currentData.password}
                onChange={(e) =>
                  handleInputChange("wifi", "password", e.target.value)
                }
                placeholder="WiFi password"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="encryption" className="form-label">
                Encryption
              </label>
              <select
                className="form-select"
                id="encryption"
                value={currentData.encryption}
                onChange={(e) =>
                  handleInputChange("wifi", "encryption", e.target.value)
                }
              >
                <option value="WPA">WPA/WPA2</option>
                <option value="WEP">WEP</option>
                <option value="nopass">No Encryption</option>
              </select>
            </div>
            <div className="mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="hiddenNetwork"
                  checked={currentData.hidden}
                  onChange={(e) =>
                    handleInputChange("wifi", "hidden", e.target.checked)
                  }
                />
                <label className="form-check-label" htmlFor="hiddenNetwork">
                  Hidden Network
                </label>
              </div>
            </div>
          </>
        );
      case "location":
        return (
          <>
            <div className="mb-3">
              <label htmlFor="location-url" className="form-label">
                Location URL *
              </label>
              <div className="input-group">
                <input
                  type="url"
                  className="form-control"
                  id="location-url"
                  value={currentData.url}
                  onChange={(e) =>
                    handleInputChange("location", "url", e.target.value)
                  }
                  placeholder="https://www.google.com/maps?q=latitude,longitude"
                  required
                />
                <button
                  type="button"
                  className="btn btn-primary location-btn"
                  onClick={getCurrentLocation}
                >
                  <img
                    src={iconPaths.location}
                    alt="Current Location"
                    className="location-icon"
                    width="16"
                    height="16"
                  />
                  <span className="location-text">Current Location</span>
                </button>
              </div>
            </div>
          </>
        );
      case "images":
        return (
          <div className="mb-3">
            <label htmlFor="imageUrl" className="form-label">
              Image URL
            </label>
            <input
              type="url"
              className="form-control"
              id="imageUrl"
              value={currentData.imageUrl}
              onChange={(e) =>
                handleInputChange("images", "imageUrl", e.target.value)
              }
              placeholder="https://example.com/image.jpg"
            />
          </div>
        );
      case "video":
        return (
          <div className="mb-3">
            <label htmlFor="videoUrl" className="form-label">
              Video URL
            </label>
            <input
              type="url"
              className="form-control"
              id="videoUrl"
              value={currentData.videoUrl}
              onChange={(e) =>
                handleInputChange("video", "videoUrl", e.target.value)
              }
              placeholder="https://example.com/video.mp4"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className={`hero-section ${scrolled ? "hero-scrolled" : ""}`}>
      {/* Hero Header */}
      <div className="hero-header">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title">
              🎯 Create <span className="gradient-text">Stunning QR Codes</span>
            </h1>
            <p className="hero-description">
              Advanced QR Code Generator with many Data Types • Custom Designs •
              Instant Download
            </p>
          </div>
        </div>
      </div>

      {/* Main Generator */}
      <div className="container">
        <div className="hero-generator">
          <div className="generator-card">
            <div className="row g-4">
              {/* Left Side - Data Type Selection */}
              <div className="col-lg-6">
                <div className="type-selector-section">
                  <div className="section-header">
                    <h3 className="section-title">
                      <i className="section-icon">📊</i>
                      Select Data Type
                    </h3>
                  </div>

                  {/* Data Type Grid */}
                  <div className="type-grid">
                    {dataTypes.map((type) => (
                      <button
                        key={type.id}
                        className={`type-card ${
                          selectedType === type.id ? "type-card-active" : ""
                        }`}
                        onClick={() => handleTypeSelect(type.id)}
                      >
                        <div className="type-icon-wrapper">
                          <img
                            src={type.icon}
                            alt={type.label}
                            className="type-icon-img"
                            width="24"
                            height="24"
                          />
                        </div>
                        <span className="type-label">{type.label}</span>
                      </button>
                    ))}
                  </div>

                  {/* Input Fields */}
                  <div className="input-section">
                    <div className="section-header">
                      <h4 className="input-section-title">
                        <i className="section-icon">⚡</i>
                        {
                          dataTypes.find((t) => t.id === selectedType)?.label
                        }{" "}
                        Details
                      </h4>
                    </div>
                    {renderInputFields()}
                  </div>
                </div>
              </div>

              {/* Right Side - QR Preview */}
              <div className="col-lg-6">
                <div className="qr-preview-section">
                  <div className="section-header">
                    <h3 className="section-title">
                      <i className="section-icon">🎨</i>
                      QR Code Preview
                    </h3>
                  </div>

                  {/* QR Code Display */}
                  <div className="qr-display-container">
                    <div className={`qr-display frame-${qrDesign.frame}`}>
                      {qrValue ? (
                        <div className="qr-code-inner">
                          <QRCodeSVG
                            ref={qrRef}
                            value={qrValue}
                            size={qrStyle.size}
                            level={qrStyle.level}
                            includeMargin={qrStyle.includeMargin}
                            fgColor={qrStyle.fgColor}
                            bgColor={qrStyle.bgColor}
                            className="qr-code"
                          />
                          {qrDesign.hasLogo && qrDesign.logo && (
                            <div
                              className="qr-logo"
                              style={{
                                backgroundImage: `url(${qrDesign.logo})`,
                              }}
                            />
                          )}
                        </div>
                      ) : (
                        <div className="qr-placeholder">
                          <div className="placeholder-icon">✨</div>
                          <p className="placeholder-text">
                            Generate your QR code to preview
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Design Customization */}
                  <div className="design-section">
                    <div className="section-header">
                      <h5 className="design-title">
                        <i className="section-icon">🎨</i>
                        Customize Design
                      </h5>
                    </div>

                    {/* Design Themes */}
                    <div className="design-themes">
                      <div className="theme-grid">
                        {designThemes.map((theme) => (
                          <button
                            key={theme.id}
                            className={`theme-card ${
                              qrDesign.theme === theme.id
                                ? "theme-card-active"
                                : ""
                            }`}
                            onClick={() => applyDesignTheme(theme)}
                          >
                            <div
                              className="theme-preview"
                              style={{
                                background: theme.bgColor,
                                border: `2px solid ${theme.fgColor}`,
                              }}
                            >
                              <div
                                className="theme-dots"
                                style={{ color: theme.fgColor }}
                              >
                                ●●●
                              </div>
                            </div>
                            <span className="theme-name">{theme.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Logo Options */}
                    <div className="logo-section">
                      <div className="logo-toggle">
                        <label className="toggle-label">
                          <input
                            type="checkbox"
                            checked={qrDesign.hasLogo}
                            onChange={toggleLogo}
                          />
                          <span className="toggle-slider"></span>
                          <span className="toggle-text">Add Logo</span>
                        </label>
                        {qrDesign.hasLogo && (
                          <input
                            type="file"
                            className="logo-upload"
                            accept="image/*"
                            onChange={handleLogoUpload}
                          />
                        )}
                      </div>
                    </div>

                    {/* Reset Design */}
                    <button className="reset-design-btn" onClick={resetDesign}>
                      <i className="reset-icon">🔄</i>
                      Reset Design
                    </button>
                  </div>

                  {/* Action Buttons */}
                  <div className="action-section">
                    <div className="action-grid">
                      <button
                        className="generate-btn"
                        onClick={handleGenerateQR}
                        disabled={
                          !formData[selectedType]?.[
                            Object.keys(formData[selectedType])[0]
                          ]
                        }
                      >
                        <i className="btn-icon">⚡</i>
                        Generate QR Code
                      </button>
                      <button
                        className="download-btn"
                        onClick={handleDownload}
                        disabled={!qrValue}
                      >
                        <i className="btn-icon">📥</i>
                        Download
                      </button>
                    </div>
                  </div>

                  {/* QR Info */}
                  {qrValue && (
                    <div className="qr-info">
                      <div className="qr-preview-value">
                        <span className="preview-label">Preview:</span>
                        <code className="preview-text">
                          {qrValue.length > 80
                            ? `${qrValue.substring(0, 80)}...`
                            : qrValue}
                        </code>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
