import SkillTitle from "../skillTitle/SkillTitle";
import SkillBubble from "./SkillBubble"
import s from './SkillBubble.module.scss';


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
        <div className="gsap-skill-list">
            <SkillTitle>
                Développement web
            </SkillTitle>
            <ul className={s.SkillBubbleList}>
                {devList}
            </ul>
        </div>
    )
}

export default DevBubble