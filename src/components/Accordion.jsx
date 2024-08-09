import React, { useState } from "react";
import "../styles/accordion.css";

const faqs = [
    {
        "title": "What services do you offer as a full-stack web developer?",
        "text": "I offer a comprehensive range of services including full-stack web development using Next.js, React, the MERN stack, and Firebase. I also provide custom UI/UX design to create visually appealing and user-friendly websites. Additionally, I develop mobile applications using React Native."
    },
    {
        "title": "How do you approach web design and development projects?",
        "text": "My approach involves understanding your goals and vision, followed by crafting a detailed plan to design and develop a solution that meets your needs. I focus on both aesthetics and functionality to ensure a seamless and engaging user experience."
    },
    {
        "title": "Can you work on both front-end and back-end development?",
        "text": "Yes, I am proficient in both front-end and back-end development. I use technologies like React for front-end development and Node.js, Express, and MongoDB for back-end development, allowing me to build complete, full-stack solutions."
    },
    {
        "title": "What makes you different from other web developers?",
        "text": "My combination of full-stack expertise, proficiency in modern technologies, and a strong focus on UI/UX design sets me apart. I aim to deliver tailored, high-quality solutions that not only meet but exceed client expectations. Additionally, my skills in mobile app development with React Native extend my ability to deliver cross-platform solutions."
    }
];

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div
      className={`accordion-item ${isOpen ? "open" : ""}`}
      onClick={handleToggle}
    >
      <p className="accordion-number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="accordion-title">{title}</p>
      <p className="accordion-icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}

export function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((item, i) => (
        <AccordionItem
          title={item.title}
          text={item.text}
          num={i}
          key={item.title}
        />
      ))}
    </div>
  );
}
