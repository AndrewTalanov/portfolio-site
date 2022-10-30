import { useRef, useEffect, useState } from "react";
import { setStyles } from "../../GlobalFunctions.js";
import data from "../../DataSites.js";

import styles from "./Swiper.module.scss";

import arrow from "../../img/arrow.svg";

const Swiper = () => {

    const [dots, setDots] = useState();
    const [sites, setSites] = useState();
    const [heightVieport, setHeightVieport] = useState(document.documentElement.clientHeight);
    const [widthVieport, setWidthVieport] = useState(document.documentElement.clientWidth);

    const refDot = useRef();
    let heightTranslate = 0;

    useEffect( () => {

        const resizeHeightVieport = () => {
            setHeightVieport(document.documentElement.clientHeight)
        } 

        window.addEventListener('resize', resizeHeightVieport);

        return () => {
            window.removeEventListener('resize', resizeHeightVieport);
        }
        
    }, []);

    useEffect( () => {

        const resizeWidthViewport = () => {
            setWidthVieport(document.documentElement.clientWidth)
        } 

        window.addEventListener('resize', resizeWidthViewport);

        return () => {
            window.removeEventListener('resize', resizeWidthViewport);
        }

    }, []);

    useEffect(() => {

        setDots(document.querySelectorAll('div[data-index]'));
        
        setSites(document.querySelectorAll('div[data-site]'));

    }, [setDots, setSites]);

    // анимация смены слайда

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
    
    // функционал точек

    const toggleDots = (heightTranslate) => {
        
        const id = Math.abs(heightTranslate / heightVieport);

        dots.forEach(el => {
            el.classList.remove(styles.active);
        });
        dots[id].classList.add(styles.active);

    }

    // перемещение по кнопкам

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

    // скролл

    function once(fn, context) { 
        let result;
    
        return function() {
            let save = fn; 
            
            if(fn) {
                result = fn.apply(context || this, arguments);
                fn = null;
                setTimeout( () => {
                    fn = save;
                }, 1200);
            }
    
            return result;
        };
    }

    const launchOnce = once(function(e) {
        if (e.deltaY > 0 ) {
            clickDown();
        } else if (e.deltaY < 0 ) {
            clickTop();
        }  
    });

    onwheel = e => { launchOnce(e) }


    // свайп 
    let touchstartY = 0
    let touchendY = 0
        
    function checkDirection() {
      if (touchendY < touchstartY) clickDown();
      if (touchendY > touchstartY) clickTop();
    }
    
    document.addEventListener('touchstart', e => {
      touchstartY = e.changedTouches[0].screenY
    });
    
    document.addEventListener('touchend', e => {
      touchendY = e.changedTouches[0].screenY
      if (widthVieport > 611) {
        checkDirection();
      } 
    });

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
