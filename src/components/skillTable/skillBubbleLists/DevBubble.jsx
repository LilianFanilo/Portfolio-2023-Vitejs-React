import SkillTitle from "../skillTitle/SkillTitle";
import SkillBubble from "./SkillBubble";
import s from "./SkillBubble.module.scss";

const DevBubble = () => {
  const devSkills = [
    "HTML5",
    "CSS/SASS",
    "Javascript",
    "PHP",
    "SQL",
    "React.js",
    "Next.js",
    "Symfony",
    "WordPress",
    "Git",
    "Docker",
  ];

  const devList = devSkills.map((devSkill, i) => (
    <SkillBubble key={i}>{devSkill}</SkillBubble>
  ));

  return (
    <div className="gsap-skill-list">
      <SkillTitle>Développement web</SkillTitle>
      <ul className={s.SkillBubbleList}>{devList}</ul>
    </div>
  );
};

export default DevBubble;
