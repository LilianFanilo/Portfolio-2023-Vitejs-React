import Button from "../button/Button";
import DesignBubble from "./skillBubbleLists/DesignBubble";
import DevBubble from "./skillBubbleLists/DevBubble";
import OfficeBubble from "./skillBubbleLists/OfficeBubble";
import s from "./SkillTable.module.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const SkillTable = () => {
  const tableRef = useRef(null);
  useEffect(() => {
    const el = tableRef.current;

    var tl = gsap.timeline();

    // tl.fromTo(el, {
    //     opacity : 0,
    //     y : 50
    // },
    //     {
    //     opacity : 1,
    //     y : 0,
    //     duration: 1,
    //     scrollTrigger : {
    //         trigger : el,
    //         start: 'top center',
    //         end: 'center center',
    //         scrub: false
    //     }
    // })

    tl.fromTo(
      ".gsap-skill-list",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.5,
        delay: 1,
        scrollTrigger: {
          trigger: el,
          start: "top center",
          scrub: false,
          // markers : true
        },
      }
    );

    tl.fromTo(
      "#gsap-skillBubble",
      {
        opacity: 0,
        rotation: 30,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        rotation: 0,
        duration: 0.9,
        delay: 1,
        ease: "back.out(1.7)",
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <div className={s.SkillTable} ref={tableRef}>
      <DevBubble />
      <DesignBubble />
      <OfficeBubble />
      <Button url="images/cv/CV-LilianPeuron-MMI3-StageAlterne.pdf" download>
        Télécharger mon CV
      </Button>
    </div>
  );
};

export default SkillTable;
