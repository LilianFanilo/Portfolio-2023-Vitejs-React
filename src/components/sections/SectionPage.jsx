import s from './SectionPage.module.scss'

const SectionPage = (props) => {
    return (
      <section className={s.SectionPage}>
        {props.children}
      </section>
    );
  }

export default SectionPage