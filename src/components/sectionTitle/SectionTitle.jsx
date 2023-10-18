import s from './SectionTitle.module.scss'

const SectionTitle = (props) => {
    return (
        <h2 className={s.SectionTitle}>{props.children}</h2>
    )
}

export default SectionTitle