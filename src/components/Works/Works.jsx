import "./Works.css";
import { Camera, Smartphone, Activity, Clock } from 'lucide-react';
import { useEffect } from "react";

const Works = () => {
    const steps = [
  {
    id: '01',
    title: 'Apply the Patch',
    icon: <Camera size={20} />,
    desc: 'Place the MelaninBlind patch directly on the suspicious lesion. No skin preparation. No pain. Works on any skin tone, any body site, any Fitzpatrick type from I to VI.'
  },
  {
    id: '02',
    title: 'Scan with Any Phone',
    icon: <Smartphone size={20} />,
    desc: 'Hold any NFC-enabled smartphone over the patch. The phone wirelessly powers the patch and initiates the frequency sweep. No proprietary reader, no Bluetooth pairing, no app login.'
  },
  {
    id: '03',
    title: 'EIS Reads the Tissue',
    icon: <Activity size={20} />,
    desc: 'The patch sweeps 1kHz to 2.5MHz across 35 frequency points, measuring electrical impedance. Cancer cells have structurally distinct electrical properties — detectable regardless of skin colour.',
    highlight: true
  },
  {
    id: '04',
    title: 'Result in 60 Seconds',
    icon: <Clock size={20} />,
    desc: 'Normal. Monitor. Refer. Three possible outcomes — objective and reproducible. No biopsy needed for ~85% of patients. Any GP can act on the result immediately, anywhere on earth.'
  }
];
useEffect(() => {
  const elements = document.querySelectorAll(".step-card, .works-header, .pilot-btn");

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

  elements.forEach((el) => observer.observe(el));
}, []);
    
  return (
    <>
       <section className="works-section">
      <div className="container">
        <header className="works-header">
          <span className="label">— HOW IT WORKS</span>
          <h1>Four steps. Sixty seconds.<br />Any clinic on earth.</h1>
          <p className="subtitle">No proprietary hardware. No specialist training. No laboratory. Just a patch, a phone, and the physics of electrical impedance.</p>
        </header>

        <div className="steps-container">
          <div className="connector-line"></div>
          
          <div className="steps-grid">
            {steps.map((step) => (
              <div key={step.id} className={`step-card ${step.highlight ? 'active-border' : ''}`}>
                <div className="icon-wrapper">
                  {step.icon}
                </div>
                <span className="step-number">STEP {step.id}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cta-wrapper">
          <button className="pilot-btn">
            Ready to bring this to your clinic? Apply for the Clinical Pilot →
          </button>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default Works