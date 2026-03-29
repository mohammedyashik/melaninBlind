import React, { useState } from 'react';
import { Stethoscope, Building2, Globe, Heart, ShieldCheck } from 'lucide-react';
import "./Whos.css"

const Whos = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { 
      name: "GP / Family Medicine", 
      icon: <Stethoscope size={18}/>,
      title: "General Practitioners",
      desc: "The GP is the gatekeeper of skin cancer triage. They see 40–60 patients per day, most with no dermatology training, no objective tool, and no way to confidently distinguish a benign mole from an early malignancy. MelaninBlind gives the GP an objective 60-second answer — and eliminates the reflexive biopsy referral that drives 77% of unnecessary procedures."
    },
    { 
      name: "Hospital Outpatient", 
      icon: <Building2 size={18}/>,
      title: "Hospital Outpatient Departments",
      desc: "High-volume dermatology outpatient clinics see hundreds of patients per week with months-long wait times. A MelaninBlind patch at triage level — before the patient even reaches the dermatologist — filters the caseload intelligently and reduces the referral backlog dramatically."
    },
    { 
      name: "Community Health Workers", 
      icon: <Globe size={18}/>,
      title: "Community Health Workers",
      desc: "In rural India, Africa, and Southeast Asia, the community health worker is often the only trained medical contact a person will have. MelaninBlind requires no specialist training, no electricity, and no laboratory. A health worker with an NFC smartphone and a patch can provide objective skin cancer triage anywhere on earth."
    },
    { 
      name: "NGO / Global Health", 
      icon: <Heart size={18}/>,
      title: "NGO and Global Health Programmes",
      desc: "WHO, MSF, USAID, and BIRAC-funded programmes operate in exactly the settings where skin cancer goes undetected. At $5 per patch, MelaninBlind is designed to work within the procurement and budget structures of global health institutions. One patch. One phone. One result. Anywhere."
    },
    { 
      name: "Dermatology Clinics", 
      icon: <ShieldCheck size={18}/>,
      title: "Dermatology Clinics",
      desc: "For dermatologists who want to reduce the volume of low-risk referrals reaching their clinic, MelaninBlind provides an objective pre-screening tool that filters patients before they arrive. Only the cases that genuinely need specialist attention reach the specialist — saving time, improving outcomes, and reducing patient anxiety."
    }
  ];
  const techCards = [
    {
      value: "96.6%",
      label: "Clinical Sensitivity — International Trial",
      desc: "Multicentre clinical trial — 5 US and 17 European sites. 1,943 evaluable lesions. Histopathology-verified on every lesion. The same EIS physics applies equally to every Fitzpatrick type.",
      source: "Malvehy et al. — British Journal of Dermatology — 2014 — PMC4257582",
      color: "teal"
    },
    {
      value: "FDA",
      label: "Cleared Regulatory Pathway — 2012 & 2020",
      desc: "EIS for skin cancer first cleared by the FDA in 2012. Nevisense 3.0 received an updated 510(k) in 2020 — currently active. MelaninBlind targets the identical pathway through CDSCO Class B in India.",
      source: "FDA 510(k) K143188 — Nevisense 3.0 — SciBase AB — 2020",
      color: "gold"
    },
    {
      value: "2025",
      label: "Battery-Free EIS Patch — Peer-Reviewed",
      desc: "A fully battery-free, NFC-powered EIS skin diagnostic patch was demonstrated and published in a peer-reviewed study in 2025. This directly validates the core hardware architecture of MelaninBlind.",
      source: "PMC12484435 — 2025 — Peer-reviewed publication",
      color: "blue"
    }
  ];
  const outcomes = [
    {
      percentage: "~85%",
      label: "of cases",
      status: "NORMAL",
      subtitle: "No Biopsy Needed",
      desc: "The lesion shows a normal tissue impedance signature. Patient is discharged with routine follow-up. Eliminates the $800–$3,000 biopsy procedure that was never clinically justified.",
      footer: "No further action required",
      colorClass: "green"
    },
    {
      percentage: "~10%",
      label: "of cases",
      status: "MONITOR",
      subtitle: "Recheck in 90 Days",
      desc: "The lesion shows a borderline impedance signal. GP schedules a follow-up in 90 days. No immediate biopsy referral needed. Patient is monitored without cost and anxiety.",
      footer: "Follow-up appointment in 90 days",
      colorClass: "yellow"
    },
    {
      percentage: "~5%",
      label: "of cases",
      status: "REFER",
      subtitle: "Biopsy Justified",
      desc: "High-confidence malignancy signal. This is the only group that proceeds to biopsy — and they proceed with full clinical confidence. Every referral is justified.",
      footer: "Refer to dermatologist immediately",
      colorClass: "red"
    }
  ];

  return (
    <>
    <section id="who-its-for" className="who-section">
      <div className="who-container">
        <div className="who-layout">
          {/* LEFT SIDE: Selection Tabs */}
          <div className="who-left">
            <div className="sci-label">— WHO IT'S FOR</div>
            <h1 className="who-title">Built for the doctor<br/>who sees everyone.</h1>
            <p className="who-subtitle">MelaninBlind is designed for first-contact clinical settings where no dermatologist is present — the vast majority of the world's healthcare interactions.</p>
            
            <div className="tabs-list">
              {tabs.map((tab, i) => (
                <div key={i} className={`tab-item ${activeTab === i ? 'active' : ''}`} onClick={() => setActiveTab(i)}>
                  <div className="tab-icon">{tab.icon}</div>
                  {tab.name}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Dynamic Content */}
          <div className="who-right">
            <div className="img-placeholder">
               <div className="pattern-overlay"></div>
               <p>MelaninBlind in Clinical Practice</p>
               <span>Objective Triage • 60 Seconds • No Bias</span>
            </div>
            
            <div className="who-detail-card">
              <h3>{tabs[activeTab].title}</h3>
              <p>{tabs[activeTab].desc}</p>
            </div>

            <div className="quote-card">
              <p>"Any GP equipped with MelaninBlind can make an objective triage decision in 60 seconds — without a dermatology referral, without a biopsy, and without bias toward any skin tone."</p>
              <span className="quote-author">— Mohammed Yashik B. Founder, MelaninBlind</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="outcome-section">
      <div className="outcome-container">
        {/* Header Section */}
        <div className="outcome-header">
          <h1 className="outcome-main-title">One patch. Three possible outcomes.<br />One objective answer.</h1>
          <p className="outcome-main-desc">
            MelaninBlind does not diagnose cancer. It triages the decision. The result tells any <br />
            GP exactly what to do next — without guesswork, without bias, and without a <br />
            ₹25,000 biopsy that was never needed.
          </p>
        </div>

        {/* Status Bar */}
        <div className="status-nav">
          <span>PATCH APPLIED</span>
          <span>→</span>
          <span>NFC SCAN</span>
          <span>→</span>
          <span>EIS READS TISSUE</span>
          <span>→</span>
          <span className="active-status">RESULT IN 60 SECONDS</span>
        </div>

        {/* Cards Grid */}
        <div className="outcome-grid">
          {outcomes.map((item, index) => (
            <div key={index} className={`outcome-card ${item.colorClass}`}>
              <div className="circle-stat">
                <span className="percent">{item.percentage}</span>
                <span className="label">{item.label}</span>
              </div>
              <h2 className="status-title">{item.status}</h2>
              <div className="divider"></div>
              <h4 className="subtitle">{item.subtitle}</h4>
              <p className="description">{item.desc}</p>
              <div className="card-footer-btn">{item.footer}</div>
            </div>
          ))}
        </div>

        {/* Bottom Small Text */}
        <div className="outcome-footer-meta">
          96.6% sensitivity maintained  •  77% unnecessary biopsies eliminated  •  Nevisense clinical protocol – Malvehy et al. BJD 2014
        </div>
      </div>
    </section>
    <section className="proven-tech-section">
      <div className="proven-container">
        {/* Top Header */}
        <div className="proven-label">— PROVEN TECHNOLOGY</div>
        <h1 className="proven-title">
          We did not invent new science.<br />
          We built a new form factor<br />
          around proven science.
        </h1>
        <p className="proven-subtitle">
          The physics of EIS has been validated in peer-reviewed trials, cleared by the FDA,<br />
          and published in leading dermatology journals. MelaninBlind engineers that<br />
          validated science into a $2 battery-free patch.
        </p>

        {/* Feature Quote Box */}
        <div className="proven-quote-box">
          <p>
            "The same electrical impedance physics that achieved 96.6% melanoma sensitivity in 1,943 lesions across 22 clinical sites applies <span className="highlight-text">equally to every skin tone on earth.</span> Melanin is electrically transparent. That is the entire insight."
          </p>
        </div>

        {/* Info Cards */}
        <div className="proven-grid">
          {techCards.map((card, index) => (
            <div key={index} className={`tech-card ${card.color}`}>
              <h2 className="tech-value">{card.value}</h2>
              <h4 className="tech-label">{card.label}</h4>
              <p className="tech-desc">{card.desc}</p>
              <span className="tech-source">{card.source}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    </>
  )
}

export default Whos;