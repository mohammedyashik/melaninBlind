import melaninLogo from "../../assets/melanin.png";
  import "./Partner.css";
  import { useNavigate } from "react-router-dom";
  const Partner = () => {
    const navigate = useNavigate();
    return (
      <>
     <div className="this-container">
      <header className="header">
        <div className="get-in-touch">— GET IN TOUCH</div>
        <h1>Partner with MelaninBlind.</h1>
        <p className="subtitle">
          We are in active conversations with GP clinics, hospital outpatient departments, 
          global health organisations, medtech investors, and research institutions. If you 
          see the same problem we see — let us talk.
        </p>
      </header>

      <div className="grid">

      <div className="card" style={{ borderTop: "4px solid #117a65" }}>
              <div className="icon-box">💊</div>
          <h3>Join the Clinical Pilot</h3>
          <p>
            GP clinics and hospital OPDs in Chennai and South India — apply to participate 
            in our 500-lesion Phase 1 study. Patches provided free. Co-authorship on 
            publication included.
          </p>
          <button style={{ backgroundColor: "#117a65" }} onClick={() =>navigate("/applynow")}>Apply Now →</button>
      </div>

      {/* Card 2: Invest or Partner */}
      <div className="card" style={{ borderTop: "4px solid #e1a945" }}>
          <div className="icon-box">💼</div>
          <h3>Invest or Partner</h3>
          <p>
            Seed round open. $500,000 target. 20% equity. Closing Q2 2026. 
            Backed by BIRAC and DST. Incubating at HTIC IIT Madras. 
            Pitch deck available on request.
          </p>
          <button style={{ backgroundColor: "#e1a945" }} onClick={()=>navigate("/requestform")}>Request Pitch Deck →</button>
      </div>

      {/* Card 3: Research Collaboration */}
      <div className="card" style={{ borderTop: "4px solid #117a65" }}>
          <div className="icon-box">🔬</div>
          <h3>Research Collaboration</h3>
          <p>
            Seeking co-publication partnerships, clinical advisory board members, 
            and institutional research collaborators in dermatology, biomedical 
            engineering, and global health.
          </p>
          <button style={{ backgroundColor: "#117a65" }} onClick={() =>navigate("/reachout")}>Reach Out →</button>
      </div>
  </div>

      <footer className="footer">
        <div className="footer-item"><span>✉</span> mohammedyashik.b@gmail.com</div>
        <div className="footer-item"><span>📞</span> +91 9566857390</div>
        <div className="footer-item"><span>🌐</span> linkedin.com/in/mohammed-yashik/</div>
        <div className="footer-item"><span>📍</span> Chennai, India</div>
      </footer>
    </div>
    <footer className="main-footer">
      <div className="footer-content">
        {/* Brand Column */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={melaninLogo} alt="MelaninBlind" />
          </div>
          <p className="footer-tagline">
            Skin Cancer Triage. Reimagined with Impedance Physics.
          </p>
          <p className="footer-disclaimer">
            MelaninBlind is currently in pre-clinical development. The device has not yet received regulatory clearance. This website is for informational and partnership purposes only. All clinical statistics referenced are from published peer-reviewed studies using the Nevisense EIS technology.
          </p>
        </div>

        {/* Product Column */}
        <div className="footer-links">
          <h4>PRODUCT</h4>
          <ul>
            <li><a href="#how">How It Works</a></li>
            <li><a href="#science">The Science</a></li>
            <li><a href="#outcomes">Clinical Outcomes</a></li>
            <li><a href="#why">Why MelaninBlind</a></li>
          </ul>
        </div>

        {/* Company Column */}
        <div className="footer-links">
          <h4>COMPANY</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#pilot">Clinical Pilot</a></li>
            <li><a href="#who">Who It's For</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Resources Column */}
        <div className="footer-links">
          <h4>RESOURCES</h4>
          <ul>
            <li><a href="#pitch">Request Pitch Deck</a></li>
            <li><a href="#apply">Apply for Pilot</a></li>
            <li><a href="#linkedin">LinkedIn</a></li>
            <li><a href="mailto:mohammedyashik.b@gmail.com">mohammedyashik.b@gmail.com</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          © 2026 MelaninBlind · A subsidiary of Uped Learning Solutions Pvt Ltd · Chennai, India
        </div>
        <div className="footer-legal">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Use</a>
        </div>
      </div>
    </footer>
    </>
    )
  }
  
  export default Partner