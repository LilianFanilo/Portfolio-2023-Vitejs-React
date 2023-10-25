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

const Campagne = () => {

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
        "Figma",
    ]

    const projectList = projectSkills.map((projectSkill) =>
        <SkillBubble>{projectSkill}</SkillBubble>
    );

    return (
        <>
            <NavBar/>
            <SectionPage style="column" sectionPT ="40px">
                <SectionTitle>Campagne institutionnelle</SectionTitle>
                <div className={s.SingleProject}>
                    <div id="gsap_left_project">
                        <ImgBlock imgHeight="100%" imgURL='./images/projects/campInstImg.jpg'/>
                    </div>
                    <div id="gsap_right_project">
                        <TextZone title="Objectif:">
                        En lien avec notre voyage à Londres de deuxième année du BUT MMI, nous avions eu pour projet de réaliser une campagne publicitaire d’un monument  londonien. Nous devions réaliser des designs d’affiches et de bannières sous différents formats ainsi que le design de la page d’accueil du site de réservation au format ordinateur, tablette et smartphone.
                        </TextZone>
                        <TextZone>
                        Mon choix s’est porté sur “The Clink Prison Museum” un musée construit sur le site d’origine du “Clink Prison”, la prison la plus vieille d'Angleterre. J’avais choisi cet endroit horrifique car notre voyage s’était déroulé pendant la semaine d’Halloween.
                        </TextZone>
                        <div className={s.SingleProjectList}>
                            <SkillTitle>Outils utilisés</SkillTitle>
                            <ul>{projectList}</ul>
                        </div>
                        <Button url="https://www.figma.com/file/pV3vC4J4IZwWWHrcXMh3nD/Mockup-Campagne-institutionnel?type=design&node-id=0%3A1&mode=design&t=cilIhBxhdTZyQhvN-1" new_tab>Voir le projet</Button>
                    </div>
                </div>
            </SectionPage>
            <Contact/>
        </>
    )
}

export default Campagne