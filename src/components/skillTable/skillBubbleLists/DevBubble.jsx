import SkillTitle from "../skillTitle/SkillTitle";
import SkillBubble from "./SkillBubble"

const DevBubble = () => {

    const devSkills = [
        "HTML5",
        "CSS/SASS",
        "Javascript",
        "Reactjs",
        "PHP",
        "WordPress",
        "Git"
    ]

    const devList = devSkills.map((devSkill) =>
        <SkillBubble>{devSkill}</SkillBubble>
    );

    return (
        <div>
            <SkillTitle>
                Développement web
            </SkillTitle>
            <ul>
                {devList}
            </ul>
        </div>
    )
}

export default DevBubble