import { classNames } from "shared/lib/classNames";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Disney from "shared/assets/images/discovery/disney.png";
import NationalGeographic from "shared/assets/images/discovery/national-geographic.png";
import StarWars from "shared/assets/images/discovery/star-wars.png";
import Marvel from "shared/assets/images/discovery/marvel.png";
import "swiper/css/bundle";

import style from "./BrandSlider.module.scss";
import { BrandSliderProps } from "./types";

export const BrandSlider = ({ className }: BrandSliderProps) => (
    <div className={classNames(style.BrandSlider, {}, [className])}>
        <Swiper
            modules={[Autoplay]}
            spaceBetween={32}
            slidesPerView="auto"
            className={style.slider}
        >
            <SwiperSlide className={style.slide}>
                <div className={style.brand}><img src={Disney} alt="slide" /></div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.brand}><img src={NationalGeographic} alt="slide" /></div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.brand}><img src={StarWars} alt="slide" /></div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.brand}><img src={Marvel} alt="slide" /></div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.brand}><img src={Disney} alt="slide" /></div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.brand}><img src={Marvel} alt="slide" /></div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.brand}><img src={NationalGeographic} alt="slide" /></div>
            </SwiperSlide>
        </Swiper>
    </div>
);
