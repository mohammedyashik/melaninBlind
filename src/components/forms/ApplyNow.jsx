import React, { useState } from 'react';
import "./ApplyNow.css";

const ApplyNow = () => {
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
      setMessage("Application Sent! We'll be in touch. 🌿");
      setFormData({ name: "", email: "", linkedin: "" });

    } catch (error) {
      setStatus("error");
      setMessage("Connection error. Please try again. ⚠️");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="apply-viewport">
      <div className="bg-overlay"></div>
      
      <div className="apply-container">
        <form className="apply-form" onSubmit={handleSubmit}>
          <div className="accent-bar"></div>
          
          <div className="apply-header">
             <span className="back-btn" onClick={() => window.history.back()}>← Back</span>
          </div>

          <div className="title-section">
            <h2>Partner with Us</h2>
            <p>Clinical Pilot & Pre-Incubation Application</p>
          </div>

          <div className="field-wrapper">
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="field-wrapper">
            <input
              type="email"
              name="email"
              required
              placeholder="Professional Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="field-wrapper">
            <input
              type="url"
              name="linkedin"
              required
              placeholder="LinkedIn Profile URL"
              value={formData.linkedin}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? <span className="loader"></span> : "Submit Application"}
          </button>

          {message && (
            <div className={`status-msg ${status}`}>
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default ApplyNow;