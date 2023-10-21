import s from "./TextZone.module.scss"

const TextZone = (props) => {
    return (
        <div className={s.TextZone}>
            <strong>{props.title}</strong>
            <p>
            {props.children}
            </p>
        </div>
    )
}

export default TextZone