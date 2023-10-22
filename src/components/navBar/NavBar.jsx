import s from './NavBar.module.scss'

const NavBar = () => {
    return (
        <nav className={s.NavBar}>
            <ul>
                <li><a href="/#qui_suis_je">Qui suis-je ?</a></li>
                <li><a href="/#formations">Formations</a></li>
                <li><a href="/#experiences_projects">Expériences & Projets</a></li>
                <li><a href="/#contact">Me contacter</a></li>
            </ul>
        </nav>
    )
}

export default NavBar