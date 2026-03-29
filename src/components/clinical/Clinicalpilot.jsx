import { Target, Battery, Clock, Smartphone, DollarSign, ShieldCheck } from 'lucide-react';
import { Calendar, Inbox, FileText } from 'lucide-react';
import './Clinicalpilot.css';

const Clinicalpilot = () => {
    const features = [
    {
      icon: <Target size={20} />,
      title: "Skin-Tone Blind by Design",
      desc: "Electrical impedance is not affected by melanin. The same accuracy on Fitzpatrick I as on Fitzpatrick VI — built into the physics, not into a training dataset."
    },
    {
      icon: <Battery size={20} />,
      title: "Completely Battery-Free",
      desc: "NFC harvests all power from any smartphone. No charging, no replacement, no hardware failure from a dead battery. Works in any clinic, anywhere on earth."
    },
    {
      icon: <Clock size={20} />,
      title: "60-Second Result",
      desc: "From patch application to triage decision in under 60 seconds. No lab results. No specialist appointment. Any GP acts on the result immediately."
    },
    {
      icon: <Smartphone size={20} />,
      title: "Any NFC Smartphone",
      desc: "No proprietary reader. No Bluetooth. No app subscription. Any Android or iOS device with NFC reads the patch. The hardware your GP already owns is all that is needed."
    },
    {
      icon: <DollarSign size={20} />,
      title: "$2 Cost of Goods",
      desc: "At manufacturing scale, each patch costs $1.50–$2 to produce. GP channel: $8. Hospital: $15. Global health: $5. Accessible to every care setting on earth."
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "FDA-Cleared Pathway Identified",
      desc: "CDSCO Class B in India — targeting Q1 2027. FDA 510(k) via substantial equivalence to Nevisense 3.0 for export markets. Regulatory strategy mapped from day one."
    }
  ]
  return (
     <>
        <section className="clinical-section">
      <div className="clinical-container">
        
        {/* Header Section */}
        <header className="clinical-header">
          <div className="sci-label">— CLINICAL PILOT PROGRAMME</div>
          <h1 className="clinical-title">
            Be part of the 500-lesion study that validates MelaninBlind for regulatory submission.
          </h1>
          <p className="clinical-subtitle">
            We are recruiting GP clinics, hospital outpatient departments, and community health 
            programmes in Chennai and South India for our Phase 1 clinical pilot. Your participation 
            provides the histopathology-verified dataset that enables CDSCO Class B clearance — 
            and gives your clinic first access to the technology.
          </p>
        </header>

        {/* Info Cards Grid */}
        <div className="clinical-grid">
          <div className="clinical-card">
            <div className="clinical-icon-box">
              <Calendar size={20} color="#f87171" />
            </div>
            <h3>3-Month Structured Pilot</h3>
            <p>
              Full protocol support, IEC ethics documentation, and data management provided. 
              Participation requires patient access and biopsy correlation data from your clinic.
            </p>
          </div>

          <div className="clinical-card">
            <div className="clinical-icon-box">
              <Inbox size={20} color="#fb923c" />
            </div>
            <h3>Patches Provided Free</h3>
            <p>
              All MelaninBlind patches are provided at zero cost during the pilot phase. 
              Your clinic contributes the clinical setting, patient access, and follow-up biopsy data.
            </p>
          </div>

          <div className="clinical-card">
            <div className="clinical-icon-box">
              <FileText size={20} color="#94a3b8" />
            </div>
            <h3>Co-Authorship on Publication</h3>
            <p>
              All participating clinicians receive co-authorship credit on the peer-reviewed 
              clinical study publication. First-mover advantage in the dermatology literature.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="clinical-cta">
          <button className="apply-btn">Apply for the Clinical Pilot →</button>
        </div>

        {/* Footer Credits */}
        <footer className="clinical-footer">
          <p>
            Currently incubating at <b>HTIC IIT Madras</b> • Backed by <b>BIRAC and DST</b> • Targeting CDSCO Class B clearance Q1 2027
          </p>
        </footer>
      </div>
    </section>
    <section className="props-section">
      <div className="props-container">
        <header className="props-header">
          <div className="props-label">— WHY MELANINBLIND</div>
          <h1 className="props-main-title">
            The only skin cancer triage tool built for every human being on earth.
          </h1>
          <p className="props-subtitle">
            Not the most expensive. Not the most complex. The most accessible — and the most equitable.
          </p>
        </header>

        <div className="props-grid">
          {features.map((f, i) => (
            <div key={i} className="prop-card">
              <div className="prop-icon-box">{f.icon}</div>
              <h3 className="prop-title">{f.title}</h3>
              <p className="prop-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    
     </>
  )
}

export default Clinicalpilot