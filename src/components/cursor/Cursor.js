import { useEffect } from "react";
import { useRef, useState } from "react";

import styles from "./Cursor.module.scss";

import imgLink from "../../img/3.svg";
import imgArrowDown from "../../img/arrow-black.svg";
import imgArrowTop from "../../img/arrow-top.svg";
import imgTelegram from "../../img/telegram.svg";

const Cursor = () => {

    const ref = useRef();
    const refImg = useRef();
    const refArrowDown = useRef();
    const refArrowTop = useRef();
    const refTelegram = useRef();

    const [ roundPos, setRoundPos ] = useState({ x: 0, y: 0 });

    const animateRound = (e, interacting) => {
        const x = e.clientX - ref.current.offsetWidth / 2;
        const y = e.clientY - ref.current.offsetHeight / 2;
    
        setRoundPos({x: x, y: y});

        const keyframes = {
            transform: `translate(${roundPos.x}px, ${roundPos.y}px) scale(${interacting ? 4 : 1})`
        }

        ref.current.animate(keyframes, {
            duration: 500,
            fill: "forwards"
        });

        refImg.current.style.opacity = interacting === 1 ? 1 : 0;
        refArrowTop.current.style.opacity = interacting === 2 ? 1 : 0;
        refArrowDown.current.style.opacity = interacting === 3 ? 1 : 0;
        refTelegram.current.style.opacity = interacting === 4 ? 1 : 0;

    }

    useEffect(() => {
        window.onmousemove = e => {

            let interactable = null;

            if (e.target.closest(".item")) {
                interactable = 1;
            } else if (e.target.closest(".arrow-top")) {
                interactable = 2;
            } else if (e.target.closest(".arrow-down")) {
                interactable = 3
            } else if (e.target.closest(".btn-modal")) {
                interactable = 4
            }

            const interacting = interactable;

            animateRound(e, interacting);
            
        }
    });

    return (
        <div className={styles.cursor} ref={ref} >
            <img ref={refImg} src={imgLink} style={{ opacity: 0 }} alt="icon" />
            <img ref={refArrowDown} src={imgArrowDown} style={{ opacity: 0 }} alt="icon" />
            <img ref={refArrowTop} src={imgArrowTop} style={{ opacity: 0 }} alt="icon" />
            <img ref={refTelegram} src={imgTelegram} style={{ opacity: 0 }} alt="icon" />
        </div>
    );
}

export default Cursor;