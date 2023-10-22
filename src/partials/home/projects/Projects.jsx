import CardSkillList from "../../../components/cardSkillList/CardSkillList"
import SectionTitle from "../../../components/sectionTitle/SectionTitle"
import SectionPage from "../../../components/sections/SectionPage"

const Projects = () => {
    return (
        <SectionPage id="experiences_projects" style="column">
            <SectionTitle>Expériences & Projets</SectionTitle>
            <CardSkillList/>
        </SectionPage>
    )
}

export default Projects