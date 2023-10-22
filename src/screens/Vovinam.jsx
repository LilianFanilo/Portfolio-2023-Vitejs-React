import Button from "../components/button/Button"
import ImgBlock from "../components/imgBlock/ImgBlock"
import SectionTitle from "../components/sectionTitle/SectionTitle"
import SectionPage from "../components/sections/SectionPage"
import SkillBubble from "../components/skillTable/skillBubbleLists/SkillBubble"
import SkillTitle from "../components/skillTable/skillTitle/SkillTitle"
import TextZone from "../components/textZone/TextZone"
import Contact from "../partials/home/contact/Contact"
import s from './SingleProject.module.scss'

const Vovinam = () => {
    const projectSkills = [
        "Premiere Pro",
    ]

    const projectList = projectSkills.map((projectSkill) =>
        <SkillBubble>{projectSkill}</SkillBubble>
    );
    return (
        <>
            <SectionPage style="column">
                <SectionTitle>Vovinam</SectionTitle>
                <div className={s.SingleProject}>
                    <div>
                        <ImgBlock imgWidth="100%" imgHeight="100%" imgURL='./images/projects/vovinam_img.jpg'/>
                    </div>
                    <div>
                        <TextZone title="Objectif">
                            Réalisation d'une vidéo résumé d'environ 7 mn sur l'ensemble de l'évènement (installation, épreuves et grande finale).
                        </TextZone>
                        <TextZone title="Rôle">
                            Sélection et insertion des clips, localisation des transitions.
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

export default Vovinam