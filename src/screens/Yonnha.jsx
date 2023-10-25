import Button from "../components/button/Button"
import ImgBlock from "../components/imgBlock/ImgBlock"
import NavBar from "../components/navBar/NavBar"
import SectionTitle from "../components/sectionTitle/SectionTitle"
import SectionPage from "../components/sections/SectionPage"
import SkillBubble from "../components/skillTable/skillBubbleLists/SkillBubble"
import SkillTitle from "../components/skillTable/skillTitle/SkillTitle"
import TextZone from "../components/textZone/TextZone"
import Contact from "../partials/home/contact/Contact"
import s from './SingleProject.module.scss'
import gsap from 'gsap'
import { useRef, useEffect } from "react"

const Yonnha = () => {

    useEffect(() => {
        const tl = gsap.timeline()

        tl.fromTo( "#gsap_left_project" ,{
            opacity : 0,
            y : 50
        },
        {
            opacity : 1,
            y : 0,
            duration : 0.5,
            delay : 0.5
        })

        tl.fromTo( "#gsap_right_project" ,{
            opacity : 0,
            y : 50
        },
        {
            opacity : 1,
            y : 0,
            duration : 0.5,
            delay : -0.2
        })

    }, [])

    const projectSkills = [
        "HTML5",
        "CSS3",
        "Javascript",
        "Reactjs",
        "PHP",
    ]

    // const projectSkills2 = [
    //     "WordPress",
    //     "WooCommerce",
    //     "ACF",
    // ]

    const projectList = projectSkills.map((projectSkill) =>
        <SkillBubble>{projectSkill}</SkillBubble>
    );

    // const projectList2 = projectSkills2.map((projectSkill2) =>
    //     <SkillBubble>{projectSkill2}</SkillBubble>
    // );

    return (
        <>
            <NavBar/>
            <SectionPage style="column" sectionPT ="40px">
                <SectionTitle>Site de réservation : Yonnha</SectionTitle>
                <div className={s.SingleProject}>
                    <div id="gsap_left_project">
                        <ImgBlock imgHeight="100%" imgURL='./images/projects/yonnha.jpg'/>
                    </div>
                    <div id="gsap_right_project">
                        <TextZone title="Objectif:">
                        Projet de 2ème année : création d’une agence qui aurait pour objectif d’imaginer une exposition sur l’art ou la science - Thème choisi : l’impressionnisme, travail d’équipe 6 personnes.
                        </TextZone>
                        <TextZone title="Rôle:">
                        Durant ce projet, j'ai réalisé un site de réservation de l'exposition avec comme contrainte d'avoir une partie du site codé en Reactjs. Étant chargé de m'occuper principalement du back, j'ai décidé de réaliser le back-office du site en Reactjs.
                        </TextZone>
                        <div className={s.SingleProjectList}>
                            <SkillTitle>Outils utilisés</SkillTitle>
                            <ul>{projectList}</ul>
                            {/* <ul>{projectList2}</ul> */}
                        </div>
                        <Button url="https://reservation.yonnha.fr/" new_tab>Voir le site</Button>
                    </div>
                </div>
            </SectionPage>
            <Contact/>
        </>
    )
}

export default Yonnha