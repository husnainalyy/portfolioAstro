import React, { useState } from "react";
import "../styles/accordion.css";

const education = [
  {
    company: "Comsats University Islamabad",
    title: "Software Engineering",
    duration: "2023-2027",
    location: "Lda Avenue, Lahore, Pakistan",
    bullets: [""],
  },
  {
    company: "District Public School and college",
    title: "Matric & Intermediate",
    duration: "2022",
    location: "Gt road Okara, Pakistan",
    bullets: [""],
  },
];

export function EducationList() {
  return (
    <div className="experience-list">
      {education.map((education, index) => (
        <div key={index} className="content">
          <p className="location">{education.location}</p>
          <h5>{education.company}</h5>
          <p className="job-title">
            <strong>{education.title}</strong>
          </p>

          <ul>
            {education.bullets.map((bullet, bulletIndex) => (
              <li key={bulletIndex}>{bullet}</li>
            ))}
          </ul>
          <p className="duration">{education.duration}</p>
          {education.current && <p className="current"></p>}
        </div>
      ))}
    </div>
  );
}
