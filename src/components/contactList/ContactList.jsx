import s from './ContactList.module.scss'
import ContactBubble from "./ContactBubble"

const ContactList = () => {
    return (
        <ul className={s.ContactList}>
            <ContactBubble img="/images/contact/contact-mail.svg">Mail - lilianpeuron@gmail.com</ContactBubble>
            <ContactBubble img="/images/contact/contact-linkedin.svg">LinkedIn - Lilian Peuron</ContactBubble>
            <ContactBubble img="/images/contact/contact-github.svg">GitHub - LilianFanilo</ContactBubble>
        </ul>
    )
}

export default ContactList