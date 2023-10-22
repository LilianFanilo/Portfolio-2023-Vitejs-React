import s from './SectionTitle.module.scss'
import gsap from 'gsap'
import { useEffect,useRef } from 'react'

const SectionTitle = (props) => {

    useEffect(() => {


    }, [])


    return (
        <h2 className={s.SectionTitle}>{props.children}</h2>
    )
}

export default SectionTitle