import s from './ContactList.module.scss'

const ContactBubble = (props) => {

    return (
        <li className={s.ContactBubble}>
            <a href={props.url} target='_blank'>
                <img src={props.img} alt="" />
            </a>
            <span>
                {props.children}
            </span>
        </li>
    )
}

export default ContactBubble