import image1 from '../../assets/images/slider/paylay.png'
import image2 from '../../assets/images/slider/getbox.png'
import image3 from '../../assets/images/slider/construct.png'
import image4 from '../../assets/images/slider/site.png'

import Slider from "react-slick";

export const Case = () => {

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
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
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
            },

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
                        <div className="block">
                            <img
                                src={image1}
                                className={'image'}
                                alt={image1}/>
                            <div className="body">
                                <div className={'top medium_h3'}>
                                    GetBox
                                </div>
                                <div className={'text medium_h5'}>
                                    Сайт аренды боксов для хранения вещей
                                </div>
                                <div className={'button medium_h4'}>
                                    <div>Выбрать</div>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <img
                                src={image2}
                                className={'image'}
                                alt={image1}/>
                            <div className="body">
                                <div className={'top medium_h3'}>
                                    GetBox
                                </div>
                                <div className={'text medium_h5'}>
                                    Сайт аренды боксов для хранения вещей
                                </div>
                                <div className={'button medium_h4'}>
                                    <div>Выбрать</div>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <img
                                src={image3}
                                className={'image'}
                                alt={image1}/>
                            <div className="body">
                                <div className={'top medium_h3'}>
                                    GetBox
                                </div>
                                <div className={'text medium_h5'}>
                                    Сайт аренды боксов для хранения вещей
                                </div>
                                <div className={'button medium_h4'}>
                                    <div>Выбрать</div>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <img
                                src={image4}
                                className={'image'}
                                alt={image1}/>
                            <div className="body">
                                <div className={'top medium_h3'}>
                                    GetBox
                                </div>
                                <div className={'text medium_h5'}>
                                    Сайт аренды боксов для хранения вещей
                                </div>
                                <div className={'button medium_h4'}>
                                    <div>Выбрать</div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};
