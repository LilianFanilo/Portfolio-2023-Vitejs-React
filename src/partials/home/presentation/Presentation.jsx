import ImgBlock from "../../../components/imgBlock/ImgBlock"
import SectionTitle from "../../../components/sectionTitle/SectionTitle"
import SectionPage from "../../../components/sections/SectionPage"
import SkillTable from "../../../components/skillTable/SkillTable"
import TextZone from "../../../components/textZone/TextZone"

const Presentation = () => {
    return (
        <SectionPage id='qui_suis_je'>
            <div>
                <ImgBlock imgWidth="270px" imgHeight="307px" imgURL='./images/profil/photo-cv.jpg' imgALT=''/>
                <SectionTitle>
                    Qui suis-je ?
                </SectionTitle>
                <TextZone>
                    Actuellement, mon stage de développeur web chez Peexeo me permet de renforcer mes compétences en programmation, de participer à des projets clients et d'acquérir une expérience concrète dans le domaine du développement web, mais aussi de partager des idées et d'échanger au sein d'une équipe.
                </TextZone>
            </div>
            <div>
                <SkillTable/>
            </div>
        </SectionPage>
    )
}

export default Presentation