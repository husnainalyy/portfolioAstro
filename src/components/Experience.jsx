import React, { useState } from "react";
import "../styles/accordion.css";

const experiences = [
    {
        company: "Infinity Wave Inc",
        title: "🖥️ Web Development Intern",
        duration: "June 2024 - Present",
        location: "Lahore, Punjab, Pakistan",
        current: true,
        bullets: [
            "Developing and maintaining web applications using the MERN Stack (MongoDB, Express, React, Node.js).",
            "Utilizing Tailwind CSS to create responsive and visually appealing user interfaces.",
            "Designing and implementing user-friendly web interfaces with HTML, CSS, and JavaScript.",
            "Collaborating with the team to resolve technical issues and enhance project functionality.",
        ],
    },
    {
        company: "buildspace",
        title: "💡 Gaudmire",
        duration: "June 2024 - August 2024",
        location: "United States",
        current: false,
        bullets: [
            "Collaborating on cutting-edge projects that push the boundaries of technology and innovation.",
            "Developing and implementing creative solutions for complex technical challenges.",
            "Participating in community-driven tech initiatives and hackathons to drive progress and share knowledge.",
            ],
    },
    {
        company: "GDSC COMSATS University Lahore",
        title: "📱 Social Media Lead",
        duration: "November 2023 - June 2024",
        location: "Lahore, Punjab, Pakistan",
        current: false,
        bullets: [
            "Leading the digital narrative and managing social media engagement for the community.",
            "Building a vibrant online presence and fostering active engagement among members.",
        ],
    },
    {
        company: "Microsoft",
        title: "🌐 Microsoft Student Ambassador",
        duration: "November 2023 - June 2024",
        location: "Pakistan",
        current: false,
        bullets: [
            "Contributing knowledge and resources to the Microsoft Learn community.",
            "Engaging with fellow students and professionals to promote technological advancements.",
        ],
    },
    {
        company: "ACM Student Chapter, CUI Lahore",
        title: "📣 Director of Social Media",
        duration: "September 2023 - January 2024",
        location: "Lahore, Punjab, Pakistan",
        current: false,
        bullets: [
            "Overseeing social media strategies and content creation for the ACM chapter.",
            "Enhancing the chapter's online visibility and engagement through effective social media management.",
        ],
    },
    {
        company: "ACM Student Chapter, CUI Lahore",
        title: "🎯 Deputy Director of Social Media Team",
        duration: "March 2023 - June 2023",
        location: "Lahore, Punjab, Pakistan",
        current: false,
        bullets: [
            "Supporting the social media team in executing campaigns and managing content.",
            "Assisting in strategic planning to boost online presence and engagement.",
        ],
    },
];


export function ExperienceList() {
  return (
    <div className="experience-list">
      {experiences.map((experience, index) => (
        <div key={index} className="content">
          <p className="location">{experience.location}</p>
          <h5>{experience.company}</h5>
          <p className="job-title">
            <strong>{experience.title}</strong>
          </p>

          <ul>
            {experience.bullets.map((bullet, bulletIndex) => (
              <li key={bulletIndex}>{bullet}</li>
            ))}
          </ul>
          <p className="duration">{experience.duration}</p>
          {experience.current && <p className="current"></p>}
        </div>
      ))}
    </div>
  );
}
