import CardSkill from "./CardSkill"
import s from './CardSkill.module.scss'

const CardSkillList = () => {
    return (
        <ul className={s.CardSkillList}>
            <CardSkill img='./images/projects/resaweb_card.jpg' >Site MMI</CardSkill>
            <CardSkill img='./images/projects/resaweb_card.jpg' url='/resaweb' >Résaweb</CardSkill>
            <CardSkill img='./images/projects/resaweb_card.jpg' >Yonnha</CardSkill>
            <CardSkill img='./images/projects/dataviz_card.jpg' url='/dataviz' >DataViz</CardSkill>
            <CardSkill img='./images/projects/vovinam_card.jpg' url='/vovinam' >Vovinam</CardSkill>
            <CardSkill img='./images/projects/siteonepage_card.jpg' url='/daftpunk' >Daft-Punk</CardSkill>
        </ul>
    )
}

export default CardSkillList