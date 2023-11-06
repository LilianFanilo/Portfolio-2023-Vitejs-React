import ImgBlock from "../../../components/imgBlock/ImgBlock"
import SectionTitle from "../../../components/sectionTitle/SectionTitle"
import SectionPage from "../../../components/sections/SectionPage"
import SkillTable from "../../../components/skillTable/SkillTable"
import TextZone from "../../../components/textZone/TextZone"
import s from "./Presentation.module.scss"

const Presentation = () => {
    return (
        <SectionPage id='qui_suis_je' sectionPT="80px">
            <div className={s.Presentation}>
                <ImgBlock imgWidth="213px" imgHeight="307px" imgURL='./images/profil/photo-cv-v2.jpg' imgALT=''/>
                <SectionTitle>
                    Qui suis-je ?
                </SectionTitle>
                <TextZone>
                20 ans - À la recherche d’un contrat d’alternance pour 2023-2024. <br />
                Mon stage de développeur web chez Peexeo m’a permis de renforcer mes compétences en 
                programmation, de participer à des projets clients et d'acquérir une expérience concrète dans 
                le domaine du développement web, mais aussi de partager des idées et d'échanger au sein 
                d'une équipe.
                </TextZone>
            </div>
            <div>
                <SkillTable/>
            </div>
        </SectionPage>
    )
}

export default Presentation