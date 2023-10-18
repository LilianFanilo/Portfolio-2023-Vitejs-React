import s from './Button.module.scss'

const Button = (props) => {
    return (
        <a href="" className={s.Button}>
            {props.children}
        </a>
    )
}

export default Button