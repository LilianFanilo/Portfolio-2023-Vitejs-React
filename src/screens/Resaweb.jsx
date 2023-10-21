import Button from "../components/button/Button"
import ImgBlock from "../components/imgBlock/ImgBlock"
import SectionTitle from "../components/sectionTitle/SectionTitle"
import SectionPage from "../components/sections/SectionPage"
import SkillBubble from "../components/skillTable/skillBubbleLists/SkillBubble"
import SkillTitle from "../components/skillTable/skillTitle/SkillTitle"
import TextZone from "../components/textZone/TextZone"
import Contact from "../partials/home/contact/Contact"
import s from './SingleProject.module.scss'

const Resaweb = () => {
    const projectSkills = [
        "Suite",
        "Notion"
    ]

    const projectList = projectSkills.map((projectSkill) =>
        <SkillBubble>{projectSkill}</SkillBubble>
    );
    return (
        <>
            <SectionPage style="column">
                <SectionTitle>Résaweb</SectionTitle>
                <div className={s.SingleProject}>
                    <div>
                        <ImgBlock imgHeight="100%" imgURL='./images/projects/resaweb_img.PNG'/>
                    </div>
                    <div>
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