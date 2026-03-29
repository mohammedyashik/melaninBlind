import React, { useState } from 'react'; // Added missing import
import "./RequestForm.css";
const RequestForm = () => {
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
      // Note: Ensure your backend handles CORS for localhost:8080
      const response = await fetch("http://localhost:8080/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error("Submission failed");

      setStatus("success");
      setMessage("Form submitted successfully ✅");
      setFormData({ name: "", email: "", linkedin: "" });

    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-header">
          {/* Typically you'd add an onClick here to close the modal */}
          <span className="close">✕</span>
        </div>

        <h2>MelaninBlind</h2>

        <div className="input-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>LinkedIn URL</label>
          <input
            type="url"
            name="linkedin"
            required
            placeholder="https://linkedin.com/in/..."
            value={formData.linkedin}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="button" disabled={loading}>
          {loading ? "Sending..." : "Submit"}
        </button>

        {/* Fixed Template Literal syntax below */}
        {message && (
          <p className={`message-text ${status}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

export default RequestForm;