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

const Chat = () => {

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
        "CSS3/SASS",
        "Next.js",
        "GSAP",
    ]

    const projectList = projectSkills.map((projectSkill) =>
        <SkillBubble>{projectSkill}</SkillBubble>
    );
    return (
        <>
            <NavBar/>
            <SectionPage style="column" sectionPT ="40px">
                <SectionTitle>Chat - Next.js</SectionTitle>
                <div className={s.SingleProject}>
                    <div id="gsap_left_project">
                        <ImgBlock imgHeight="100%" imgURL='./images/projects/coming-soon_card.jpg'/>
                    </div>
                    <div id="gsap_right_project">
                        <TextZone title="Objectif">
                            Production d'une interview pour la médiathèque de la ferme Dubuisson (travail d'équipe 4 personnes).
                        </TextZone>
                        <TextZone title="Rôle">
                            Participation à la préparation, au tournage, au montage et à la publication sur Internet.
                        </TextZone>
                        <div className={s.SingleProjectList}>
                            <SkillTitle>Outils utilisés</SkillTitle>
                            <ul>{projectList}</ul>
                        </div>
                        <Button url="https://chat-nextjs-deploy-three.vercel.app/" new_tab>Voir le site</Button>
                    </div>
                </div>
            </SectionPage>
            <Contact/>
        </>
    )
}

export default Chat