import React, {useState} from 'react';
import Slider from "react-slick";
import {AnimatePresence, motion} from 'framer-motion';

import image1 from '../../assets/images/slider/paylay.png';
import image2 from '../../assets/images/slider/getbox.png';
import image3 from '../../assets/images/slider/construct.png';
import image4 from '../../assets/images/slider/site.png';

export const Case = () => {
    const [selectedId, setSelectedId] = useState(null);

    const items = [
        {
            id: 1,
            image: image1,
            title: "GetBox",
            description: "Сайт аренды боксов для хранения вещей"
        },
        {
            id: 2,
            image: image2,
            title: "GetBox",
            description: "Сайт аренды боксов для хранения вещей"
        },
        {
            id: 3,
            image: image3,
            title: "GetBox",
            description: "Сайт аренды боксов для хранения вещей"
        },
        {
            id: 4,
            image: image4,
            title: "GetBox",
            description: "Сайт аренды боксов для хранения вещей"
        }
    ];


    function SampleNextArrow(props) {
        const {className, style, onClick} = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    backgroundSize: "50% 50%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    top: "113%",
                    right: "80px",
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const {className, style, onClick} = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    backgroundSize: "50% 50%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    top: "113%",
                    left: "80px",
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };

    return (
        <div className="page-container slider">
            <div className="title medium_h1">
                Кейсы
            </div>
            <div className="content">
                <div className="slider-container">
                    <Slider {...settings}>
                        {items.map((item, index) => (
                            <div className="block" key={index}>
                                <img src={item.image} className={'image'} alt={item.title}/>
                                <div className="body">
                                    <div className={'top medium_h3'}>
                                        {item.title}
                                    </div>
                                    <div className={'text medium_h5'}>
                                        {item.description}
                                    </div>
                                    <div
                                        className={'button medium_h4'}
                                    >
                                        <div>Выбрать</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <AnimatePresence>
                
            </AnimatePresence>
        </div>
    );
};
