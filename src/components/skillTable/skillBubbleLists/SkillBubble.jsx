import s from './SkillBubble.module.scss';

const SkillBubble = (props) => {
    return (
        <li id='gsap-skillBubble' className={s.SkillBubble}>
            <span>{props.children}</span>
        </li>
    )
}

export default SkillBubble