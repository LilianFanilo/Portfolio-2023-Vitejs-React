import s from './SectionPage.module.scss'
import gsap from 'gsap'


const SectionPage = (props) => {

    const SectionStyle = {
        flexDirection : props.style
    }
    return (
      <section id={props.id} className={s.SectionPage} style={SectionStyle}>
        {props.children}
      </section>
    );
  }

export default SectionPage