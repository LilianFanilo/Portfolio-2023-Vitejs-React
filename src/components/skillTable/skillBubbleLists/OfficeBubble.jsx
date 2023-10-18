import SkillTitle from "../skillTitle/SkillTitle";
import SkillBubble from "./SkillBubble"

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
            <ul>
                {officeList}
            </ul>
        </div>
    )
}

export default OfficeBubble