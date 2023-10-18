import SkillTitle from "../skillTitle/SkillTitle";
import SkillBubble from "./SkillBubble"

const DesignBubble = () => {

    const designSkills = [
        "Photoshop",
        "Illustrator",
        "InDesign",
        "Premiere Pro",
        "Figma",
        "Canva"
    ]

    const designList = designSkills.map((designSkill) =>
        <SkillBubble>{designSkill}</SkillBubble>
    );

    return (
        <div>
            <SkillTitle>
                Design
            </SkillTitle>
            <ul>
                {designList}
            </ul>
        </div>
    )
}

export default DesignBubble