import Contact from "../partials/home/contact/Contact"
import Formation from "../partials/home/formation/Formation"
import Introduction from "../partials/home/introduction/Introduction"
import Presentation from "../partials/home/presentation/Presentation"
import Projects from "../partials/home/projects/Projects"

const Home = () => {
    return (
        <>        
            <Introduction/>
            <Presentation/>
            <Formation/>
            <Projects/>
            <Contact/>
        </>
    )
}

export default Home