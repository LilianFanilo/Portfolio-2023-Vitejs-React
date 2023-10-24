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

const Resaweb = () => {

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
        "Suite",
        "Notion"
    ]

    const projectList = projectSkills.map((projectSkill) =>
        <SkillBubble>{projectSkill}</SkillBubble>
    );
    return (
        <>
            <NavBar/>
            <SectionPage style="column" sectionPT ="40px">
                <SectionTitle>Résaweb</SectionTitle>
                <div className={s.SingleProject}>
                    <div id="gsap_left_project">
                        <ImgBlock imgHeight="100%" imgURL='./images/projects/resaweb_img.PNG'/>
                    </div>
                    <div id="gsap_right_project">
                        <TextZone title="Objectif">
                            Création d'un site de réservation de salles de classe.
                        </TextZone>
                        <div className={s.SingleProjectList}>
                            <SkillTitle>Outils utilisés</SkillTitle>
                            <ul>{projectList}</ul>
                        </div>
                        <Button>Voir le site</Button>
                    </div>
                </div>
            </SectionPage>
            <Contact/>
        </>
    )
}

export default Resaweb