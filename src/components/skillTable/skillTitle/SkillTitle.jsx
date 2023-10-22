import s from './SkillTitle.module.scss'

const SkillTitle = (props) => {
    return (
        <h3 id='gsap-skillTitle' className={s.SkillTitle}>{props.children}</h3>
    )
}

export default SkillTitle