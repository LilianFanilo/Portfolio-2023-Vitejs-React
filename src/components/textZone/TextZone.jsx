import { useRef } from "react"
import s from "./TextZone.module.scss"
import { useLayoutEffect } from "react"
import gsap from 'gsap'

const TextZone = (props) => {

    return (
        <div className={s.TextZone}>
            <strong id="box">{props.title}</strong>
            <p>
            {props.children}
            </p>
        </div>
    )
}

export default TextZone