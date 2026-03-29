import React, { useState } from 'react';
import "./Reachout.css";

const Reachout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: ""
  });

  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:8080/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error("Submission failed");

      setStatus("success");
      setMessage("Message Sent. Initializing Connection. ⚡");
      setFormData({ name: "", email: "", linkedin: "" });

    } catch (error) {
      setStatus("error");
      setMessage("Error. Request Terminated. ⚠️");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reach-viewport">
      <div className="tech-bg"></div>
      
      <div className="reach-wrapper">
        <form className="reach-panel" onSubmit={handleSubmit}>
          
          <div className="back-link" onClick={() => window.history.back()}>
            [ Go Back ]
          </div>

          <div className="header-zone">
            <h2>Reach Out</h2>
            <p className="subtitle">// Scientific & Strategic Collaboration //</p>
          </div>

          <div className="data-field">
            <input
              type="text"
              name="name"
              required
              placeholder="YOUR_NAME"
              value={formData.name}
              onChange={handleChange}
            />
            <div className="focus-line"></div>
          </div>

          <div className="data-field">
            <input
              type="email"
              name="email"
              required
              placeholder="PROFESSIONAL_EMAIL"
              value={formData.email}
              onChange={handleChange}
            />
            <div className="focus-line"></div>
          </div>

          <div className="data-field">
            <input
              type="url"
              name="linkedin"
              required
              placeholder="LINKEDIN_URL"
              value={formData.linkedin}
              onChange={handleChange}
            />
            <div className="focus-line"></div>
          </div>

          <button type="submit" className="neon-btn" disabled={loading}>
            {loading ? <div className="dot-pulse"></div> : "SEND_REQUEST"}
          </button>

          {message && (
            <div className={`console-msg ${status}`}>
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Reachout;