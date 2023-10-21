import s from "./TextZone.module.scss"

const TextZone = (props) => {
    return (
        <div className={s.TextZone}>
            <strong>{props.title}</strong>
            {props.children}
        </div>
    )
}

export default TextZone