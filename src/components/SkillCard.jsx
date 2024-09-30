import React from "react";
import "../styles/SkillCard.css";

const SkillCard = ({ skill }) => {
  return (
    <div className="card" data-aos="flip-up">
      <img className="logo mt-2" src={skill.image} alt={skill.name} />
      <div className="card-body">
        <h5 className="card-title">{skill.name}</h5>
        <p className="card-text">{skill.description}</p>
      </div>
    </div>
  );
};

export default SkillCard;
