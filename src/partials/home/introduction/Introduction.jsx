import { ScrollCTA } from "../../../components/scrollCTA/ScrollCTA";
import SectionPage from "../../../components/sections/SectionPage";
import s from './Introduction.module.scss';


const Introduction = () => {
return (
    <SectionPage style="column" sectionH = "100vh">
        <div className={s.Introduction}>
            <div className={s.IntroductionTitle}>
                <h1>
                    Lilian Peuron
                    <br />
                    <span>
                    Développeur web
                    </span>
                </h1>

                <img src="./images/logo.svg" alt="" />

                <h1>
                    Portfolio MMI
                    <br />
                    <span>2023</span>
                </h1>
            </div>
            <ScrollCTA/>
            <q>Ne reste pas là, continue de scroller !</q>
        </div>
    </SectionPage>
);
}

export default Introduction