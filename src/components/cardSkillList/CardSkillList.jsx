import CardSkill from "./CardSkill"
import s from './CardSkill.module.scss'

const CardSkillList = () => {
    return (
        <ul className={s.CardSkillList}>
            <CardSkill img='./images/cards_projects/card_img_resaweb.jpg' >Site MMI</CardSkill>
            <CardSkill img='./images/cards_projects/card_img_resaweb.jpg' url='/resaweb' >Résaweb</CardSkill>
            <CardSkill img='./images/cards_projects/card_img_resaweb.jpg' >Yonnha</CardSkill>
            <CardSkill img='./images/cards_projects/card_img_dataviz.jpg' url='/dataviz' >DataViz</CardSkill>
            <CardSkill img='./images/cards_projects/card_img_vovinam.jpg' url='/vovinam' >Vovinam</CardSkill>
            <CardSkill img='./images/cards_projects/card_img_daftpunk.jpg' url='/daftpunk' >Daft-Punk</CardSkill>
        </ul>
    )
}

export default CardSkillList