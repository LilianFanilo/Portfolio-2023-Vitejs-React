import CardSkill from "./CardSkill"
import s from './CardSkill.module.scss'

const CardSkillList = () => {
    return (
        <ul className={s.CardSkillList}>
            <CardSkill>Site MMI</CardSkill>
            <CardSkill>Résaweb</CardSkill>
            <CardSkill>Yonnha</CardSkill>
        </ul>
    )
}

export default CardSkillList