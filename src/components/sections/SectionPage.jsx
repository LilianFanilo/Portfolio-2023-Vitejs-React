import s from './SectionPage.module.scss'

const SectionPage = (props) => {

    const SectionStyle = {
        flexDirection : props.style
    }
    return (
      <section id='box' className={s.SectionPage} style={SectionStyle}>
        {props.children}
      </section>
    );
  }

export default SectionPage