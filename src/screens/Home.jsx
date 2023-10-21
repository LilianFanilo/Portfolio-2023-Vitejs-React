import Contact from "../partials/home/contact/Contact"
import Introduction from "../partials/home/introduction/Introduction"
import Presentation from "../partials/home/presentation/Presentation"
import Projects from "../partials/home/projects/Projects"

const Home = () => {
    return (
        <>        
            <Introduction/>
            <Presentation/>
            <Projects/>
            <Contact/>
        </>
    )
}

export default Home