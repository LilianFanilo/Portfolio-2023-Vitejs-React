import s from './CardSkill.module.scss'

const CardSkill = (props) => {
    return (
        <li className={s.CardSkill}>
            <a href={props.url} >
                <h3>
                    {props.children}
                </h3>
            </a>
        </li>
    )
}

export default CardSkill