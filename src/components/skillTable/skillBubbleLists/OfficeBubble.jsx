import SkillTitle from "../skillTitle/SkillTitle";
import SkillBubble from "./SkillBubble"
import s from './SkillBubble.module.scss';


const OfficeBubble = () => {
    const officeSkills = [
        "Suite",
        "Notion"
    ]

    const officeList = officeSkills.map((officeSkill, i) =>
        <SkillBubble key={i}>{officeSkill}</SkillBubble>
    );

    return (
        <div className="gsap-skill-list">
            <SkillTitle>
                Bureautique
            </SkillTitle>
            <ul className={s.SkillBubbleList}>
                {officeList}
            </ul>
        </div>
    )
}

export default OfficeBubble