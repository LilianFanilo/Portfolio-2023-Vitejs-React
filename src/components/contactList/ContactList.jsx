import s from './ContactList.module.scss'
import ContactBubble from "./ContactBubble"

const ContactList = () => {
    return (
        <ul className={s.ContactList}>
            <ContactBubble>Mail - lilianpeuron@gmail.com</ContactBubble>
            <ContactBubble>LinkedIn - Lilian Peuron</ContactBubble>
            <ContactBubble>GitHub - LilianFanilo</ContactBubble>
        </ul>
    )
}

export default ContactList