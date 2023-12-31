import ContactList from "../../../components/contactList/ContactList"
import SectionTitle from "../../../components/sectionTitle/SectionTitle"
import SectionPage from "../../../components/sections/SectionPage"

const Contact = () => {
    return (
        <SectionPage id="contact" style="column" sectionH="35vh" sectionPT="40px">
            <SectionTitle>
                Me contacter
            </SectionTitle>
            <ContactList/>
        </SectionPage>
    )
}

export default Contact