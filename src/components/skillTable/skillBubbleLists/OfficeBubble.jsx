import SkillTitle from "../skillTitle/SkillTitle";
import SkillBubble from "./SkillBubble"
import s from './SkillBubble.module.scss';


const OfficeBubble = () => {
    const officeSkills = [
        "Suite",
        "Notion"
    ]

    const officeList = officeSkills.map((officeSkill) =>
        <SkillBubble>{officeSkill}</SkillBubble>
    );

    return (
        <div>
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