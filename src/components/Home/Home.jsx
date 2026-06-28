import "./Home.css";
import { useEffect, useRef } from "react";
import heroImage from "../../assets/Patch_image.PNG";
import Science from "../Science/Science";
import Works from "../Works/Works";
import Whos from "../Whos/Whos";
import Clinicalpilot from "../clinical/Clinicalpilot";
import About from "../About/About";
import Partner from "../partner/Partner";
import nsrcellogo from '../../assets/NSRCEL LOGO.png'

/* ── Utility: count up a number displayed in an element ── */
function animateCounter(el, target, duration = 1800) {
  const isDecimal = target.toString().includes(".");
  const numericVal = parseFloat(target.toString().replace(/[^0-9.]/g, ""));
  const suffix = target.toString().replace(/[0-9.]/g, "");
  const prefix = "";
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const current = isDecimal
      ? (ease * numericVal).toFixed(2)
      : Math.floor(ease * numericVal);
    el.textContent = prefix + current + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const Home = () => {
  const partners = [
    { title: "Product Status", subtitle: "Prototype Development" },
    { title: "IP", subtitle: "Patent Filed" },
    { title: "NSRCEL", subtitle: "IICDC 2019 National Winner" },
    { title: "La Trobe University", subtitle: "Melbourne & Sydney" },
  ];

  const stories = [
    {
      id: '01',
      name: 'Sarah, 34 AU',
      location: 'BRISBANE, AUSTRALIA',
      skinColor: '#F5D0B4',
      quote: '"They found two suspicious moles at my annual check. My GP sent me for biopsies on both. Both came back benign. $2,400 spent and three weeks of anxiety — for nothing. There has to be a better way to know before you cut."',
      stat: '77% of biopsies come back benign. She was part of the majority.'
    },
    {
      id: '02',
      name: 'Priya, 41 IN',
      location: 'COIMBATORE, INDIA',
      skinColor: '#A6734E',
      quote: '"The AI app said low risk. My dermatologist was 200 kilometres away and a 3-month wait. By the time I was seen, it had progressed to Stage II. The tool was not built for my skin tone. Nobody said that out loud, but the data is clear."',
      stat: 'AI accuracy on dark skin: 17%. On fair skin: 70%. That gap costs lives.'
    },
    {
      id: '03',
      name: 'Emmanuel, 28 NG',
      location: 'LAGOS, NIGERIA',
      skinColor: '#4A2C1D',
      quote: '"There is no dermatologist in my district. My GP looked at my arm and made his best guess. He is a good doctor and a careful man. But guessing is not medicine — it is hope with a stethoscope. He deserved a better tool."',
      stat: '1 dermatologist per 1.5 million people outside Indian cities. Zero in many African districts.'
    }
  ];

  const statsData = [
    { value: '1.7M+', description: 'New cases annually', source: 'GLOBOCAN 2022 / WHO' },
    { value: '3B+', description: 'Without access dermatology care', source: 'Science Advances 2022 - KPMG 2026' },
    { value: '$9.42B', description: 'Global diagnostics market', source: 'Precedence Research 2026' },
    { value: '77%', description: 'Biopsies unnecessary', source: 'UW EMR Study 2028 - JAMA Dermatology' },
  ];

  const statRefs = useRef([]);
  const countersFired = useRef(false);

  useEffect(() => {
    // ── Story card stagger reveal ──
    const cards = document.querySelectorAll(".story-card");
    const storyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("show"), i * 120);
          }
        });
      },
      { threshold: 0.15 }
    );
    cards.forEach((card) => storyObserver.observe(card));

    // ── Partner card stagger reveal ──
    const partnerCards = document.querySelectorAll(".partner-card");
    const partnerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 80);
          }
        });
      },
      { threshold: 0.1 }
    );
    partnerCards.forEach((card) => partnerObserver.observe(card));

    // ── Stats counter animation ──
    const statItems = document.querySelectorAll(".stat-item");
    const statObserver = new IntersectionObserver(
      (entries) => {
        if (countersFired.current) return;
        const allVisible = entries.every((e) => e.isIntersecting);
        if (allVisible) {
          countersFired.current = true;
          statItems.forEach((item, i) => {
            setTimeout(() => {
              item.classList.add("visible");
              const valEl = item.querySelector(".stat-value");
              if (valEl) animateCounter(valEl, statsData[i].value);
            }, i * 150);
          });
        }
      },
      { threshold: 0.3 }
    );
    statItems.forEach((item) => statObserver.observe(item));

    return () => {
      storyObserver.disconnect();
      partnerObserver.disconnect();
      statObserver.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-left">
            <div className="top-badge">
              Early-Stage MedTech · India · 2026
            </div>
            <p className="hero-quote">
              "She had a dark spot on her arm for two years. Every tool said inconclusive..."
            </p>

            <h1>
              MelaninBlind <br />
              Skin Cancer Triage.
              <span>
                Every Skin Tone
              </span>
              
              Does Diagnosis.
            </h1>

            <p className="hero-desc">
              Diagnosis shouldn’t depend on skin tone.{" "}
             — A battery-free patch that measures tissue .
            </p>

            <ul className="hero-points">
              <li>94–97% sensitivity — clinically validated</li>
              <li>Battery-free NFC — no extra hardware</li>
              <li>Consistent across all skin types </li>
            </ul>

            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => {
                document.getElementById('howitworks')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                See How It Works →
              </button>
              <button className="btn-outline" onClick={() => {
                document.getElementById('partners')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Apply for Clinical Pilot
              </button>
            </div>
            <div className="incubation-badge">
            <img src={nsrcellogo} alt="NSRCEL" />
            <p>Proudly Incubated in <br /><strong>NSRCEL, IIM Bangalore</strong></p>
          </div>
          </div>
          
          <div className="hero-right">
            <div className="image-wrapper">
              <img src={heroImage} alt="MelaninBlind device" />
              <div className="scan-line"></div>
            </div>
            
          </div>
          
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section className="ds-partners-bar">
        <div className="ds-container">
          <p className="partners-bar-label ds-reveal">CURRENT STATUS OF MELANINBLIND</p>
          <div className="partners-scroll-track">
            {[...partners, ...partners, ...partners, ...partners].map((p, i) => (
              <div key={i} className={`partner-logo-pill ${p.highlight ? "partner-logo-pill--highlight" : ""}`}>
                <strong>{p.title}</strong>
                <span>{p.subtitle}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── PROBLEM ── */}
      <section className="problem-container">
        <header className="header-content">
          <div className="label">— Three real-world patterns.One systemic failure</div>
          <h1>Same disease.<br />Different outcomes.<br />Because of skin tone.</h1>
          <p className="description">
            This is not the exception. This is the system. MelaninBlind changes this at the level of measurement.
          </p>
        </header>

        <div className="story-grid">
          {stories.map((story) => (
            <div key={story.id} className="story-card">
              <div className="skin-circle" style={{ backgroundColor: story.skinColor }}></div>
              <h3 className="name">{story.name}</h3>
              <p className="location">{story.location}</p>
              <p className="quote">{story.quote}</p>
              <p className="stat-line">
                <span className="arrow">→</span> {story.stat}
              </p>
              <span className="bg-number">{story.id}</span>
            </div>
          ))}
        </div>

        <footer className="disclaimer">
          These stories represent documented global patterns. Names are fictional. All statistics are peer-reviewed and cited.
        </footer>
      </section>

      {/* ── STATS ── */}
      <section className="stats-container">
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-item" ref={(el) => (statRefs.current[index] = el)}>
              <h2 className="stat-value">{stat.value}</h2>
              <p className="stat-description">{stat.description}</p>
              <span className="stat-source">{stat.source}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTIONS ── */}
      <section id="howitworks"><Works /></section>
      <section id="science"><Science /></section>
      <section id="who-its-for"><Whos /></section>
      <section id="partners"><Clinicalpilot /></section>
      <section id="About"><About /></section>
      <section id="partner"><Partner /></section>
    </>
  );
};

export default Home;
