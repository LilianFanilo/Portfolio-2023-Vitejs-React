import { useRef } from "react"
import s from "./TextZone.module.scss"
import { useLayoutEffect } from "react"
import gsap from 'gsap'

const TextZone = (props) => {

    const app = useRef()
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from("#box",{
                opacity : 0,
                duration : 2
            })
        }, app)

        return () => ctx.revert();
    },[])

    return (
        <div ref={app} className={s.TextZone}>
            <strong id="box">{props.title}</strong>
            <p>
            {props.children}
            </p>
        </div>
    )
}

export default TextZone