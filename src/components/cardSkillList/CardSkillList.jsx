import CardSkill from "./CardSkill"
import s from './CardSkill.module.scss'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useRef, useEffect } from "react"
gsap.registerPlugin(ScrollTrigger);


const CardSkillList = () => {

    // Trouver solution animation des cartes

    const gsapCard = useRef(null);

    useEffect(() => {
        const el = gsapCard.current;

        gsap.fromTo( el ,{
            opacity : 0,
            y : 50
        },
        {
            opacity : 1,
            y : 0,
            duration : 1,
            stagger : 0.5,
            scrollTrigger : {
                trigger : el ,
                start: 'top center',
                markers : true
            }
        })
    }, [])

    return (
        <ul ref={gsapCard} className={s.CardSkillList}>
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