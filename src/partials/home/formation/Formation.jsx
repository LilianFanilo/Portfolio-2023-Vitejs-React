import ImgBlock from '../../../components/imgBlock/ImgBlock'
import SectionTitle from '../../../components/sectionTitle/SectionTitle'
import SectionPage from '../../../components/sections/SectionPage'
import TextZone from '../../../components/textZone/TextZone'
import s from './Formation.module.scss'

const Formation = () => {
    return (
        <SectionPage id="formations" style="column" sectionPT ="40px">
            <SectionTitle>
                Formations
            </SectionTitle>
            <div className={s.Formation}>
                <div>
                    <TextZone title="2021 > 2024:">
                        2e année de BUT MMI (Métiers du Multimédia et de l’Internet) à l’IUT de Champs-sur-Marne – Parcours Développement web et Dispositifs interactifs. Formation pluridisciplinaire (Programmation, développement web, production audiovisuelle, infographie, communication, expression artistique, marketing, gestion de projet etc.) sur 3 ans, comprenant des stages et 600 heures de projets tutorés.
                    </TextZone>
                    <TextZone title="2021:">
                        Baccalauréat général spécialité Mathématiques et Arts Plastiques – mention Bien, Lycée Jean Renoir Bondy.
                    </TextZone>
                </div>
                <div>
                    <ImgBlock imgWidth="100%" imgHeight="100%" imgURL='./images/formation/iut_img.jpg' imgALT=''/>
                </div>
            </div>
        </SectionPage>
    )
}

export default Formation