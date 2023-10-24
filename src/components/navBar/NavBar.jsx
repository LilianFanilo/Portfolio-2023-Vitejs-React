import s from './NavBar.module.scss'
import gsap from 'gsap'
import { useRef,useEffect } from 'react'

const NavBar = () => {

    useEffect(() => {
        gsap.fromTo('#gsap_nav',{
            y : -60,
        },{
            y : 0,
            duration : 0.1,
            delay : 1,
            stagger : 0.1,
        })
    },[])

    const linkNav = [
        '/#qui_suis_je',
        '/#formations',
        '/#experiences_projects',
        '/#contact',
    ]

    const textNav = [
        'Qui suis-je ?',
        'Formations',
        'Expériences & Projets',
        'Me contacter',
    ]

    return (
        <>
            <nav className={s.NavBar}>
                <ul>
                    {
                        linkNav.map((link,i) => {
                        return (
                            <li id='gsap_nav' key={i}><a href={link} key={i}>{textNav[i]}</a></li>
                        )
                    })
                    }
                </ul>
            </nav>
        </>
    )
}

export default NavBar