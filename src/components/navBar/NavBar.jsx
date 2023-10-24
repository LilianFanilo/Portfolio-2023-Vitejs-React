import s from './NavBar.module.scss'

const NavBar = () => {
    return (
        <>
            <nav className={s.NavBar}>
                <ul>
                    <li id='nav_menu'><a href="/#qui_suis_je">Qui suis-je ?</a></li>
                    <li id='nav_menu'><a href="/#formations">Formations</a></li>
                    <li id='nav_menu'><a href="/#experiences_projects">Expériences & Projets</a></li>
                    <li id='nav_menu'><a href="/#contact">Me contacter</a></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar