import s from './ContactList.module.scss'
import ContactBubble from "./ContactBubble"

const ContactList = () => {
    return (
        <ul className={s.ContactList}>
            <ContactBubble url="mailto:lilianpeuron@gmail.com" img="/images/contact/contact-mail.svg">Mail - lilianpeuron@gmail.com</ContactBubble>
            <ContactBubble url="https://www.linkedin.com/in/lilian-peuron-a12864221/" img="/images/contact/contact-linkedin.svg">LinkedIn - Lilian Peuron</ContactBubble>
            <ContactBubble url="https://github.com/LilianFanilo" img="/images/contact/contact-github.svg">GitHub - LilianFanilo</ContactBubble>
        </ul>
    )
}

export default ContactList