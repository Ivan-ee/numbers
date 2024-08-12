import React, {useState} from 'react';
import Slider from "react-slick";
import {AnimatePresence, motion} from 'framer-motion';

import secure from '../../assets/images/qa/secure.png';
import fast from '../../assets/images/qa/fast.png';
import calendar from '../../assets/images/qa/calendar.png';
import market from '../../assets/images/qa/maket.png';
import support from '../../assets/images/qa/support.png';
import language from '../../assets/images/qa/language.png';

export const QA = () => {
    const [selectedId, setSelectedId] = useState(null);

    const items = [
        {
            id: 1,
            icon: calendar,
            title: "Сроки",
            description: "Лендинг — 1 неделя,<br/>Мультисайт — 2 недели,<br/>Интернет-магазин — от 2 до 4 недель",

        },
        {
            id: 2,
            icon: secure,
            title: "Безопасность",
            description: "Шифруем данные по SSL-сертификатам, чтобы их не украли или не подделали сайт. Настраиваем защиту против взломов\n" +
                "и DDoS-атак. Регулярно делаем резервные копии данных",
        },
        {
            id: 3,
            icon: support,
            title: "Поддержка",
            description: "Обслуживаем сайт, чтобы он стабильно работал. Предлагаем два варианта поддержки сайта:<br/>" +
                "<br/>1. Долгосрочный контракт  на обслуживание сайта" +
                "<br/>2. Разовые запросы, когда появляется проблема",
        },
        {
            id: 4,
            icon: fast,
            title: "Срочно",
            description: "Если сайт нужен срочно, мы можем сделать его быстрее, например, использовать готовые шаблоны. Свяжитесь с нами, чтобы обсудить это",
        },
        {
            id: 5,
            icon: market,
            title: "Дизайн",
            description: "Делаем индивидуальный дизайн по вашим запросам. Можем использовать готовые шаблоны. Готовые шаблоны помогают быстрее запустить сайт и уменьшают затраты",
        },
        {
            id: 6,
            icon: language,
            title: "Язык",
            description: "Можем добавить поддержку других языков. Весь текст на сайте будет переведен на любой другой язык.\n" +
                "Язык можно будет переключить",
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
                    top: "125%",
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
                    top: "125%",
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
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        infinite: false,
        responsive: [
            {
                infinite: false,
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                infinite: false,
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <>
            <div className="page-container qa">
                <div className="title medium_h1">
                    Вопросы
                </div>
                <div className="content">
                    <div className="slider-container">
                        <Slider {...settings}>
                            {items.map((item, index) => (
                                <div
                                    className="block"
                                    key={item.id}
                                >
                                    <div className={'top medium_h3'}>
                                        <div>{item.title}</div>
                                        <img src={item.icon} className={'icon'}/>
                                    </div>

                                    <div className={'text medium_h4'} dangerouslySetInnerHTML={{ __html: item.description }}>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>

            {/*<AnimatePresence>*/}
            {/*    {selectedId && (*/}
            {/*        <motion.div*/}
            {/*            layoutId={String(selectedId)}*/}
            {/*            className="modal"*/}
            {/*        >*/}
            {/*            <motion.button*/}
            {/*                onClick={() => setSelectedId(null)}*/}
            {/*                style={{marginBottom: "10px"}}*/}
            {/*            >*/}
            {/*                Close*/}
            {/*            </motion.button>*/}

            {/*            <motion.iframe*/}
            {/*                src={items.find(item => item.id === selectedId)?.url}*/}
            {/*                className={'iframe'}*/}
            {/*            />*/}
            {/*        </motion.div>*/}
            {/*    )}*/}
            {/*</AnimatePresence>*/}
        </>
    );
};
