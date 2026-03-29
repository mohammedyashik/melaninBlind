import React from 'react';
import { Check } from 'lucide-react';
import "./About.css";
// Corrected import: Images are default exports, do not use { }
import image from "../../assets/DSC04786.JPG"; 

const About = () => {
  const credentials = [
    { text: "Rs. 20L+ ($24,000+) in government grants — BIRAC, DST, IIMB, IIM Calcutta, AIC-CCMB, C-CAMP" },
    { text: "National Winner — IICDC 2019 (Texas Instruments & DST, IIM Bangalore)" },
    { text: "6+ incubations at India's leading medtech and innovation institutions" },
    { text: "Non-invasive skin cancer diagnostic built to prototype — twice, 3 design iterations" },
    { text: "International — La Trobe University Melbourne & Sydney" },
    { text: "50+ peer-reviewed EIS and skin cancer diagnostics papers synthesised" },
    { text: "7 national startup stage presentations across India" },
    { text: "Co-Founder & COO, Livvolta Healthcare — prior medtech exit" }
  ];

  return (
    <section className="founder-section">
      <div className="founder-container">
        <div className="sci-label">— THE FOUNDER</div>
        <h1 className="founder-title">
          Built by a biomedical engineer<br />
          who has built this twice before.
        </h1>

        <div className="founder-content">
          {/* Sidebar with Image */}
          <div className="founder-sidebar">
            <div className="image-frame">
              <div className="frame-label">Mohammed Yashik Sahib</div>
              <div className="frame-sub">Biomedical Engineer. Founder Of melaninBlind</div>
              <img 
                src={image} 
                alt="Mohammed Yashik B" 
                className="profile-img"
              />
            </div>
          </div>

          {/* Bio and Stats */}
          <div className="founder-main">
            <h2 className="name">Mohammed Yashik B</h2>
            <p className="role">Founder & CEO • Biomedical Engineer • Chennai, India</p>
            
            <blockquote className="quote">
              "I have been building non-invasive skin cancer diagnostic tools since 2019. MelaninBlind is the third iteration — the one that gets the physics right, the economics right, and the equity right simultaneously."
            </blockquote>

            <div className="credentials-grid">
              {credentials.map((item, index) => (
                <div key={index} className="credential-item">
                  <Check size={16} className="check-icon" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <div className="contact-footer">
              <div className="contact-col">
                <a href="mailto:mohammedyashik.b@gmail.com">mohammedyashik.b@melaninblind.com</a>
                <p>+91 9566857390</p>
              </div>
              <div className="contact-col">
                <a href="https://linkedin.com/in/mohammed-yashik/">linkedin.com/in/mohammed-yashik/</a>
                <p>melaninblind.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hiring-bar">
          Currently seeking: <span>Head of Clinical Affairs</span> • <span>Head of Hardware Engineering</span> • <span>Head of Business Development</span>
        </div>
      </div>
    </section>
  );
};

export default About;
