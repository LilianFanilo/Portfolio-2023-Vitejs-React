import s from './ContactList.module.scss'

const ContactBubble = (props) => {
    return (
        <li className={s.ContactBubble}>
            <a href="">
                <div>
                </div>
            </a>
            <span>
                {props.children}
            </span>
        </li>
    )
}

export default ContactBubble