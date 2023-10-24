import s from './CardSkill.module.scss'
// import gsap from 'gsap'
// import ScrollTrigger from "gsap/ScrollTrigger"
// import { useRef, useEffect } from "react"

// gsap.registerPlugin(ScrollTrigger);

const CardSkill = (props) => {
    // const gsapCard = useRef(null);

    // useEffect(() => {
    //     const el = gsapCard.current;

    //     gsap.fromTo( el ,{
    //         opacity : 0,
    //         y : 50
    //     },
    //     {
    //         opacity : 1,
    //         y : 0,
    //         duration : 1,
    //         scrollTrigger : {
    //             trigger : el ,
    //             start: 'top center',
    //             markers : true
    //         }
    //     })
    // }, [])

    const cardStyle = {
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%), url(${props.img}), white`,
        backgroundSize: `cover`,
    };

    return (
        <li className={s.CardSkill} style={cardStyle}>
            <a href={props.url} >
                <h3>
                    {props.children}
                </h3>
            </a>
        </li>
    )
}

export default CardSkill