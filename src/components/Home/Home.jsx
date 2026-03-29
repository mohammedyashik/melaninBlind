import "./Home.css";
import { useEffect } from "react";
import heroImage from "../../assets/melaninbrand.png";
import { Section } from "lucide-react";
import Science from "../Science/Science";
import Works from "../Works/Works";
import Whos from "../Whos/Whos";
import Clinicalpilot from "../clinical/Clinicalpilot";
import About from "../About/About";
import Partner from "../partner/Partner";

const Home = () => {
  const partners = [
    { title: 'BIRAC', subtitle: 'Govt of India' },
    { title: 'DST', subtitle: 'Dept of Science & Technology' },
    { title: 'IIM Bangalore', subtitle: 'IICDC 2019 National Winner' },
    { title: 'IIM Calcutta', subtitle: 'Incubation Programme' },
    { title: 'AIC-CCMB', subtitle: 'Incubation · Hyderabad' },
    { title: 'C-CAMP', subtitle: 'Incubation · Bangalore' },
    { title: 'La Trobe University', subtitle: 'Melbourne & Sydney' },
    { title: 'HTIC IIT Madras', subtitle: 'Pre-Incubation 2026', highlight: true },
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
      {
        value: '1.7M+',
        description: 'New skin cancer cases per year globally — rising annually',
        source: 'GLOBOCAN 2022 / WHO'
      },
      {
        value: '3B+',
        description: 'People worldwide with no access to a dermatologist',
        source: 'Science Advances 2022 - KPMG 2026'
      },
      {
        value: '$9.42B',
        description: 'Global skin cancer diagnostics market in 2026',
        source: 'Precedence Research 2026'
      },
      {
        value: '77%',
        description: 'Skin biopsies that come back benign — most never needed',
        source: 'UW EMR Study 2028 - JAMA Dermatology'
      }
    ];
    useEffect(() => {
    const cards = document.querySelectorAll(".story-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((card) => observer.observe(card));
  }, []);
  return (
    <>
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-left">
          <div className="top-badge">
            ● Early-Stage MedTech · Chennai · 2026
          </div>
          <p className="hero-quote">
            "She had a dark spot on her arm for two years. Every tool said inconclusive..."
          </p>

          <h1>
            Cancer doesn’t <br />
            discriminate. <br />
            <span>Now neither</span> <br />
            does diagnosis.
          </h1>

          <p className="hero-desc">
            MelaninBlind is a battery-free skin cancer screening patch that measures 
            <b> electricity, not colour</b> — so it works on every human being equally.
          </p>
          <ul className="hero-points">
            <li>✔ 94–97% sensitivity — clinically validated</li>
            <li>✔ Battery-free NFC — no extra hardware</li>
            <li>✔ Works on all Fitzpatrick skin types</li>
          </ul>
          <div className="hero-buttons">
            <button className="btn-primary">See How It Works →</button>
            <button className="btn-outline">Apply for Clinical Pilot</button>
          </div>

        </div>
        <div className="hero-right">
          <div className="image-wrapper">
            <img src={heroImage} alt="device" />
            <div className="scan-line"></div>
          </div>
        </div>

      </div>
      </section>
      <section className="partner-container">
        <h3 className="section-title">RECOGNISED & SUPPORTED BY</h3>
        
        <div className="partner-grid">
          {partners.map((item, index) => (
            <div key={index} className={`partner-card ${item.highlight ? 'highlight' : ''}`}>
              <h4>{item.title}</h4>
              <p>{item.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="stats-footer">
          <span className="dot">•</span>
          <span>6+ incubations</span>
          <span className="dot">•</span>
          <span>Rs. 20L+ in government grants</span>
          <span className="dot">•</span>
          <span>National IICDC 2019 Winner</span>
          <span className="dot">•</span>
          <span>Texas Instruments & DST</span>
        </div>
      </section>
      <section className="problem-container">
        <header className="header-content">
          <div className="label">— THE PROBLEM – IN THREE LIVES</div>
          <h1>Same disease.<br />Completely different outcomes.<br />Because of skin colour.</h1>
          <p className="description">
            These are not edge cases. They are the global standard. MelaninBlind exists to 
            change this — using physics that has nothing to do with pigment.
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
      <section className="stats-container">
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-item">
              <h2 className="stat-value">{stat.value}</h2>
              <p className="stat-description">{stat.description}</p>
              <span className="stat-source">{stat.source}</span>
            </div>
          ))}
        </div>
      </section>
      <section id="howitworks">
        <Works />
      </section>
       <section id="science">
        <Science/>
      </section>
      <section id="who-its-for">
        <Whos/>
      </section>
      <section id="partners">
        <Clinicalpilot/>
      </section>
      <section id="About">
        <About/>
      </section>
      <section id="partner">
        <Partner/>
      </section>
    </>
  );
};

export default Home;