import s from './SkillTitle.module.scss'

const SkillTitle = (props) => {
    return (
        <h3 className={s.SkillTitle}>{props.children}</h3>
    )
}

export default SkillTitle