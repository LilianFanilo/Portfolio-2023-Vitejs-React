import SectionPage from "../../../components/sections/SectionPage";
import s from './Introduction.module.scss';


const Introduction = () => {
return (
    <SectionPage style="column">
        <div className={s.Introduction}>
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
        <q>Ne reste pas là, continue de scroller !</q>
    </SectionPage>
);
}

export default Introduction