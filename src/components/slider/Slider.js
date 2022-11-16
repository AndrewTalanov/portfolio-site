import { useRef } from 'react';

import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import anime from "animejs/lib/anime.es.js"

import { data } from '../../DataSites.js';

import { setStyles } from "../../GlobalFunctions.js";

import arrow from "../../img/arrow.svg";

import 'swiper/css';
import 'swiper/css/pagination';

import styles from './Slider.module.scss';
import './Pagination.css';

const Slider = () => {

    const navigationPrevRef = useRef();
    const navigationNextRef = useRef();

    return (

        <Swiper
            className={styles.slider}
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            pagination={{ 
                clickable: true,
                el: '.swiper-pagination-test',
                type : 'custom',
                bulletClass:'swiper_pagination_item-test'
            }}
            direction="vertical"
            onSlideNextTransitionStart={function () {
                anime({
                    targets: '.swiper-slide',
                    scale: 0.8,
                    duration: 1000
                });
            }}

            onSlideNextTransitionEnd={function () {
                anime({
                    targets: '.swiper-slide',
                    scale: 1,
                    duration: 1000
                });
            }}

            onSlidePrevTransitionStart={function () {
                anime({
                    targets: '.swiper-slide',
                    scale: 0.8,
                    duration: 1000
                });
            }}

            onSlidePrevTransitionEnd={function () {
                anime({
                    targets: '.swiper-slide',
                    scale: 1,
                    duration: 1000
                });
            }}
        >

            {data.map(item => {
                return <SwiperSlide key={item.id} className={styles['slider-container']}>
                    <div className={styles['slide-wrapper']}>
                        <div style={{ backgroundImage: `url(${item.img})` }} className={styles['slide-content']}></div>
                        <a className={item.flag} href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>
                    </div>
                </SwiperSlide>
            })}

            <div className={styles["slider-buttons"]}>
                <div className={styles['slider-btn-prev']} ref={navigationPrevRef}>
                    <img className={setStyles(styles.arrow, styles['arrow-top'], 'arrow-top')} src={arrow} alt="arrow top" />
                </div>
                <div className="swiper-pagination-test">
                    <span className="swiper_pagination_item-test" tabIndex="0" role="button" aria-label="Go to slide 1" aria-current="true"></span>
                    <span className="swiper_pagination_item-test" tabIndex="0" role="button" aria-label="Go to slide 2" aria-current="true"></span>
                    <span className="swiper_pagination_item-test" tabIndex="0" role="button" aria-label="Go to slide 3" aria-current="true"></span>
                    <span className="swiper_pagination_item-test" tabIndex="0" role="button" aria-label="Go to slide 4" aria-current="true"></span>
                    <span className="swiper_pagination_item-test" tabIndex="0" role="button" aria-label="Go to slide 5" aria-current="true"></span>
                    <span className="swiper_pagination_item-test" tabIndex="0" role="button" aria-label="Go to slide 6" aria-current="true"></span>
                </div>
                <div className={styles['slider-btn-next']} ref={navigationNextRef}>
                    <img className={setStyles(styles.arrow, styles['arrow-down'], 'arrow-down')} src={arrow} alt="arrow down" />
                </div>
            </div>
            {/* <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-vertical" style={{backgroundColor: 'white'}}><span className="swiper-pagination-bullet" tabIndex="0" role="button" aria-label="Go to slide 1" aria-current="true"></span></div> */}
        </Swiper>
    );
}

export default Slider;