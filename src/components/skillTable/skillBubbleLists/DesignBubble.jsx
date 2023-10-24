import SkillTitle from "../skillTitle/SkillTitle";
import SkillBubble from "./SkillBubble";
import s from './SkillBubble.module.scss';


const DesignBubble = () => {

    const designSkills = [
        "Photoshop",
        "Illustrator",
        "InDesign",
        "Premiere Pro",
        "Figma",
        "Canva"
    ]

    const designList = designSkills.map((designSkill, i) =>
        <SkillBubble key={i}>{designSkill}</SkillBubble>
    );

    return (
        <div className="gsap-skill-list">
            <SkillTitle>
                Design
            </SkillTitle>
            <ul className={s.SkillBubbleList}>
                {designList}
            </ul>
        </div>
    )
}

export default DesignBubble