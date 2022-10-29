import { useRef, useEffect, useState } from "react";
import { setStyles } from "../../GlobalFunctions.js";
import data from "../../DataSites.js";

import styles from "./Swiper.module.scss";

import arrow from "../../img/arrow.svg";

const Swiper = () => {

    const [dots, setDots] = useState();
    const [sites, setSites] = useState();
    const heightVieport = document.documentElement.clientHeight;
    let heightTranslate = 0;

    const refDot = useRef();

    useEffect(() => {
        setDots(document.querySelectorAll('div[data-index]'));
        setSites(document.querySelectorAll('div[data-site]'));
    }, [setDots, setSites]);

    const clickTop = () => {

        heightTranslate += heightVieport;

        if (heightTranslate > 0) {
            heightTranslate = -(data.length - 1) * heightVieport;
        }

        translateSites(heightTranslate);
        toggleDots(heightTranslate);
        
    }

    const clickDown = () => {

        heightTranslate -= heightVieport;

        if (-data.length * heightVieport === heightTranslate) {
            heightTranslate = 0;
        }

        translateSites(heightTranslate);
        toggleDots(heightTranslate);

    }

    const toggleDots = (heightTranslate) => {
        
        const id = Math.abs(heightTranslate / heightVieport);

        dots.forEach(el => {
            el.classList.remove(styles.active);
        });
        dots[id].classList.add(styles.active);

        // console.log(test);
        // console.log(heightVieport);

    }

    const translateSites = (heightTranslate) => {
        sites.forEach(el => {

            const keyframes = {
                transform: `translateY(${heightTranslate}px)`
            }
            animateTranslateSites(el, keyframes);

        });
    }

    const animateTranslateSites = (el, keyframes) => {

        el.animate(keyframes, {
            duration: 400,
            fill: "forwards"
        });
    }

    return (
        <div className={styles.swiper}>

            <img onClick={clickTop} className={setStyles(styles.arrow, styles['arrow-top'], 'arrow-top')} src={arrow} alt="arrow top" />

            <div className={styles.dots}>
                {data.map((item, i) => {
                    if (i === 0) {
                        return <div key={item.id} ref={refDot} className={setStyles(styles.dot, styles.active)} data-index={i}></div>    
                    }
                    return <div key={item.id} ref={refDot} className={setStyles(styles.dot)} data-index={i}></div>
                })}
            </div>

            <img onClick={clickDown} className={setStyles(styles.arrow, styles['arrow-down'], 'arrow-down')} src={arrow} alt="arrow down" />

        </div>
    );
}

export default Swiper;
