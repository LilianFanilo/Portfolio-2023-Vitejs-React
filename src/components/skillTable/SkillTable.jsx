import Button from "../button/Button"
import DesignBubble from "./skillBubbleLists/DesignBubble"
import DevBubble from "./skillBubbleLists/DevBubble"
import OfficeBubble from "./skillBubbleLists/OfficeBubble"
import s from "./SkillTable.module.scss"

const SkillTable = () => {
    return (
        <div className={s.SkillTable}>
            <DevBubble/>
            <DesignBubble/>
            <OfficeBubble/>
            <Button>
                Télécharger mon CV
            </Button>
        </div>
    )
}

export default SkillTable