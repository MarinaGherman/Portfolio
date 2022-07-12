import React from 'react';
import s from './Project.module.scss'
import Tilt from 'react-tilt'
import Slider from "react-slick";

const Project = ({image2, image3, title, text, link, image1}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };
    return (
        <div className={s.projectBlock}>
                <div className={s.sliderPosition} style={{'outline': 'none'}}>
                    <Slider {...settings}>
                            <div >
                                <img className={s.img} src={image1} alt="image1"/>
                            </div>
                            <div>
                                <img  className={s.img} src={image2} alt="image2"/>
                            </div>
                            <div>
                                <img className={s.img} src={image3} alt="image3"/>
                            </div>
                    </Slider>
                        <div className={s.btnBlock}>
                            <Tilt className="Tilt" options={{ max : 10 }} >
                            <button className={s.btn}>
                                <a target="_blank" href={link} rel="noreferrer">Open Link</a>
                            </button>
                            </Tilt>
                        </div>
                </div>
            <p>{title}</p>
            <span>{text}</span>
        </div>
    );
};

export default Project;