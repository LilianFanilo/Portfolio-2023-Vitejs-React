import s from './Button.module.scss'

const Button = (props) => {
    if (props.download == true) {        
        return (
            <a href={props.url} className={s.Button} download>
                {props.children}
            </a>
        )
    } else {
        if (props.new_tab == true) {
            return (
                <a href={props.url} className={s.Button} target="_blank">
                    {props.children}
                </a>
            )
        } else {
            return (
                <a href={props.url} className={s.Button}>
                    {props.children}
                </a>
            )
        }
    }
}

export default Button