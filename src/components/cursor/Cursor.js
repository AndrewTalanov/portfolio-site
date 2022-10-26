import { useEffect } from "react";
import { useRef, useState } from "react";

import styles from "./Cursor.module.scss";

import imgLink from "../../img/3.svg";

const Cursor = () => {

    const ref = useRef();
    const refImg = useRef();

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
        
        refImg.current.style.opacity = interacting ? 1 : 0;
    }

    useEffect(() => {
        window.onmousemove = e => {

            const interactable = e.target.closest(".item");
            const interacting = interactable !== null;

            animateRound(e, interacting);
            
        }
    });

    return (
        <div className={styles.cursor} ref={ref} style={{ transform: `translate(${roundPos.x}px, ${roundPos.y}px)` }}>
            <img ref={refImg} src={imgLink} style={{ opacity: 0 }} alt="icon" />
        </div>
    );
}

export default Cursor;