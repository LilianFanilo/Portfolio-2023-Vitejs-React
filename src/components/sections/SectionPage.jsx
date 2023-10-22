import s from './SectionPage.module.scss'

const SectionPage = (props) => {

    const SectionStyle = {
      flexDirection : props.style,
      Height : props.sectionH,
      paddingTop : props.sectionPT,
    }



    return (
      <section id={props.id} className={s.SectionPage} style={SectionStyle}>
        {props.children}
      </section>
    );
  }

export default SectionPage