import s from './ImgBlock.module.scss'

export const ImgBlock = ({imgWidth, imgHeight, imgURL , imgALT}) => {

    const Imgstyle = {
        margin: "0 auto",
        overflow: "hidden",
        borderRadius: "10px",
        boxShadow: "inset 0 0 20px 0 rgba(0,0,0,0.4)",
        width: imgWidth,
        height: imgHeight
      };

    return (
        <div style={Imgstyle}>
            <img className={s.ImgBlock} src={imgURL} alt={imgALT} />
        </div>
    )
}

export default ImgBlock