import React from "react";
import "./About.css";

import yashikImg from "../../assets/yashik.png";
import anushaImg from "../../assets/anusha.jpg.jpeg";

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Mohammed Yashik",
      role: "Founder, CEO",
      image: yashikImg,
      linkedin: "https://www.linkedin.com/in/mohammed-yashik/",
    },
    {
      id: 2,
      name: "Anusha",
      role: "Co-Founder, CTO",
      image: anushaImg,
      linkedin: "http://linkedin.com/in/k-anusha-bhavani",
    },
  ];

  return (
    <div className="about-page">
      <section className="leadership-section">
        <div className="container">
          <h2 className="section-title">Our Leadership Team</h2>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <div className="team-card" key={member.id}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-image"
                />

                <h3>{member.name}</h3>

                <p>{member.role}</p>

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bio-btn"
                >
                  View Bio
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
