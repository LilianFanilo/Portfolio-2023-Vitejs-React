import s from './CardSkill.module.scss'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger"
import { useRef, useEffect } from "react"

gsap.registerPlugin(ScrollTrigger);

const CardSkill = (props) => {

    useEffect(() => {
        gsap.fromTo('#gsap-cardSkill',{
            opacity : 0,
            y : 30,
        },
        {
            opacity : 1,
            y : 0,
            duration: 0.5,
            stagger: 0.5,
            scrollTrigger : {
                trigger : '#gsap-cardSkill',
                start: 'top center',
                scrub: false,
                markers : true
            }
        })
    }, [])

    return (
        <li id='gsap-cardSkill' className={s.CardSkill}>
            <a href={props.url} >
                <h3>
                    {props.children}
                </h3>
            </a>
        </li>
    )
}

export default CardSkill