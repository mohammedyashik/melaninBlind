import { Camera, Smartphone, Activity, Clock } from 'lucide-react';
import "./Science.css";
const Science = () => {
 const data = [
    { type: 'I', label: 'Very Fair', accuracy: '70%', color: '#F9E4D4', barClass: 'works-well' },
    { type: 'II', label: 'Fair', accuracy: '65%', color: '#E9C4A6', barClass: 'works-well' },
    { type: 'III', label: 'Medium', accuracy: '50%', color: '#D4A373', barClass: 'partial' },
    { type: 'IV', label: 'Olive', accuracy: '30%', color: '#8B5E3C', barClass: 'fails' },
    { type: 'V', label: 'Brown', accuracy: '20%', color: '#5C3D2E', barClass: 'fails' },
    { type: 'VI', label: 'Deep', accuracy: '17%', color: '#2C1B12', barClass: 'fails' },
  ];
  return (
    <>
      <section id="science" className="science-section">
      <div className="science-container">
        
        {/* Left Side: Physics Description */}
        <div className="science-left">
          <div className="sci-label">— THE SCIENCE</div>
          <h1 className="sci-title">
            Advanced EIS Physics in a Patch You Can Hold in One Hand.
          </h1>
          <div className="sci-description">
            <p>
              Electrical Impedance Spectroscopy has been studied for over 40 years. 
              The Nevisense device — the commercial predecessor to MelaninBlind — 
              achieved <b  style={{color:"black"}}>96.6% melanoma sensitivity</b> in an international multicentre 
              clinical trial and received FDA clearance in 2012.
            </p>
            <p>
              The physics is simple. Cancer cells have disrupted membranes and leaky 
              junctions. They conduct electricity differently from healthy tissue. A 
              frequency sweep across the lesion produces an impedance signature — a 
              fingerprint of the cellular biology underneath.
            </p>
            <p>
              Melanin — the pigment that gives skin its colour — sits on the surface. 
              Light cannot get past it, which is why every optical and AI tool fails on 
              dark skin. <b style={{color:"black"}}>Electricity is not affected by melanin at all.</b> It reads 
              straight through to the cells.
            </p>
            <p className="sci-insight">That is the insight. That is MelaninBlind.</p>
          </div>

          {/* Signal Visualization Placeholder */}
          <div className="sci-graph-box">
             <div className="graph-header">
                EIS SIGNAL — 1KHZ TO 2.5MHZ — NORMAL VS CANCEROUS TISSUE — MELANIN-TRANSPARENT
             </div>
             {/* You can replace this with an actual SVG or Image of a wave */}
             <div className="wave-box">
                <svg viewBox="0 0 800 120" className="wave-svg">
                  
                  {/* Normal Wave */}
                  <path
                    className="wave normal-wave"
                    d="M0,60 Q40,40 80,60 T160,60 T240,60 T320,60 T400,60 T480,60 T560,60 T640,60 T720,60 T800,60"
                  />

                  {/* Cancer Wave */}
                  <path
                    className="wave cancer-wave"
                    d="M0,60 Q40,10 80,60 T160,60 T240,60 T320,60 T400,60 T480,60 T560,60 T640,60 T720,60 T800,60"
                  />
                </svg>
               </div>
          </div>

          <div className="sci-footer-tag">
            15 development, validation and clinical utility studies referenced 
            <span>• FDA-cleared technology pathway identified • CDSCO Class B regulatory route - India</span>
          </div>
        </div>

        {/* Right Side: Data Cards */}
        <div className="science-right">
          <div className="sci-card">
            <h2 className="sci-value">96.6%</h2>
            <p className="sci-meta">Melanoma Sensitivity — International Multicentre Trial</p>
            <span className="sci-source">Malvehy et al. — British Journal of Dermatology — 2014 — PMC4257582</span>
          </div>

          <div className="sci-card">
            <h2 className="sci-value gold">1,943</h2>
            <p className="sci-meta">Lesions Evaluated — Histopathology-Verified Gold Standard</p>
            <span className="sci-source">Malvehy et al. — BJD 2014 — 5 US + 17 European sites</span>
          </div>

          <div className="sci-card">
            <h2 className="sci-value blue">FDA 2012</h2>
            <p className="sci-meta">EIS for Skin Cancer First Cleared — Updated 510(k) 2020</p>
            <span className="sci-source">FDA 510(k) K143188 — Nevisense 3.0 — SciBase AB — 2020</span>
          </div>

          <div className="sci-card">
            <h2 className="sci-value green">2025</h2>
            <p className="sci-meta">Battery-Free NFC EIS Patch — Peer-Reviewed Validation</p>
            <span className="sci-source">PMC11484435 — 2025 — Directly validates MelaninBlind architecture</span>
          </div>

          <div className="sci-card alert">
            <h2 className="sci-value red">17%</h2>
            <p className="sci-meta">AI Accuracy on Dark Skin vs 70% on Fair Skin — The Gap MelaninBlind Closes</p>
            <span className="sci-source">Kamulegeya et al. — BMC Med Educ — 2023 — PMC10752283</span>
          </div>
        </div>
      </div>
    </section>
    <section className="bias-section">
      <div className="bias-container">
        <div className="sci-label">— THE BIAS BUILT INTO EVERY EXISTING TOOL</div>
        <h1 className="bias-title">Every diagnostic tool currently available was built for fair skin.</h1>
        <p className="bias-subtitle">
          Not by deliberate exclusion — but by the physics of optical measurement and the demographics of clinical training datasets. The result is a 53-percentage-point accuracy gap. MelaninBlind closes it entirely.
        </p>

        <div className="chart-box">
          <div className="chart-header">FITZPATRICK SCALE — AI OPTICAL ACCURACY VS EIS (MELANINBLIND)</div>
          
          <div className="fitzpatrick-grid">
            {data.map((item, idx) => (
              <div key={idx} className="chart-column">
                <div className="skin-circle" style={{ backgroundColor: item.color }}>{item.type}</div>
                <div className="skin-label">{item.label}</div>
                <div className="bar-container">
                   <div className={`accuracy-bar ${item.barClass}`} style={{ height: item.accuracy }}></div>
                </div>
                <div className="accuracy-val" style={{ color: item.barClass === 'fails' ? '#EF4444' : item.barClass === 'partial' ? '#F59E0B' : '#10B981' }}>
                  {item.accuracy}
                </div>
                <div className="check-icon">✓</div>
              </div>
            ))}
            <div className="divider-line"></div>
          </div>

          <div className="chart-footer">
            <p>EIS (MelaninBlind) ✓ Delivers equal accuracy across all 6 Fitzpatrick types</p>
            <span>Kamulegeya et al. — BMC Medical Education — 2023 — PMC10782289</span>
            
            <div className="legend">
               <div><span className="dot well"></span> AI works well (≥65%)</div>
               <div><span className="dot partial"></span> AI partial accuracy</div>
               <div><span className="dot fails"></span> AI fails (17% vs 70%)</div>
               <div><span className="dot eis"></span> EIS always works</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default Science