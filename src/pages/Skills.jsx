import skillList from "../data/SkillList";
import SkillCard from "../components/SkillCard";

const Skills = ({ skill }) => {
  return (
    <div className="skill-grid container-fluid mb-5">
      <div className="row">
        <div className="col">
          {skillList.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
