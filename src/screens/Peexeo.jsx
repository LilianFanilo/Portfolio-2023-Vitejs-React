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

const Peexeo = () => {

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
        "PHP",
    ]

    const projectSkills2 = [
        "WordPress",
        "WooCommerce",
        "ACF",
    ]

    const projectList = projectSkills.map((projectSkill) =>
        <SkillBubble>{projectSkill}</SkillBubble>
    );

    const projectList2 = projectSkills2.map((projectSkill2) =>
        <SkillBubble>{projectSkill2}</SkillBubble>
    );

    return (
        <>
            <NavBar/>
            <SectionPage style="column" sectionPT ="40px">
                <SectionTitle>Refonte de site : Peexeo</SectionTitle>
                <div className={s.SingleProject}>
                    <div id="gsap_left_project">
                        <ImgBlock imgHeight="100%" imgURL='./images/projects/interview_img.png'/>
                    </div>
                    <div id="gsap_right_project">
                        <TextZone title="Objectif">
                            Lors de mon stage de 2ème année de BUT, j'ai eu pour mission de participer à la refonte du site de formation de l'agence. L’objectif a été de refaire entièrement le site avec WordPress en développant un thème personnalisé à l’aide de l’extension ACF et en se conformant à la nouvelle identité de marque.
                        </TextZone>
                        <TextZone>
                            Le nouveau site est plus attractif, avec une lisibilité et une rapidité de navigation améliorées et l’extension Woocommerce a été utilisée pour créer une boutique en ligne.
                        </TextZone>
                        <div className={s.SingleProjectList}>
                            <SkillTitle>Outils utilisés</SkillTitle>
                            <ul>{projectList}</ul>
                            <ul>{projectList2}</ul>
                        </div>
                        <Button url="https://formations.peexeo.com/" new_tab>Voir le site</Button>
                    </div>
                </div>
            </SectionPage>
            <Contact/>
        </>
    )
}

export default Peexeo