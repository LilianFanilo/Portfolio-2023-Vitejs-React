import s from './ContactList.module.scss'

const ContactBubble = (props) => {

    return (
        <li className={s.ContactBubble}>
            <a href="">
                <img src={props.img} alt="" />
            </a>
            <span>
                {props.children}
            </span>
        </li>
    )
}

export default ContactBubble