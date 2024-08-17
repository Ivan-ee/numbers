import React, {useState, useEffect, useRef} from 'react';
import {AnimatePresence, motion} from 'framer-motion';

import image1 from '../../assets/images/case/paylay.png';
import image2 from '../../assets/images/case/getboxx.png';
import image3 from '../../assets/images/case/construct.png';
import image4 from '../../assets/images/case/site.png';

export const Case = () => {
    const [selectedId, setSelectedId] = useState(null);
    const modalRef = useRef(null);

    const items = [
        {
            id: 1,
            image: image2,
            title: "GetBox",
            description: "Сайт аренды боксов для хранения вещей",
            url: "https://getboxx.ru/"
        },
        {
            id: 2,
            image: image1,
            title: "PayLay",
            description: "Сайт по приему платежей",
            url: "https://paylay.ru/"
        },
        {
            id: 3,
            image: image3,
            title: "Construct",
            description: "Сайт строительной компании",
            url: "https://getboxx.ru/"
        },
        {
            id: 4,
            image: image4,
            title: "Site",
            description: "Интернет-магазин",
            url: "https://getboxx.ru/"
        }
    ];

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            setSelectedId(null);
        }
    };

    const handleClickOutside = (e) => {
        if (modalRef.current && e.target.classList.contains('modal')) {
            setSelectedId(null);
        }
    };

    useEffect(() => {
        if (selectedId) {
            document.addEventListener('keydown', handleKeyDown);
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [selectedId]);

    return (
        <div className="page-container case" id={'case'}>
            <div className="title medium_h1">
                Кейсы
            </div>
            <div className="content">
                {items.map((item, index) => (
                    <motion.div className="block" key={index}>
                        <motion.img src={item.image} className={'image'} alt={item.title}/>
                        <motion.div className="body">
                            <motion.div className={'top medium_h2'}>
                                {item.title}
                            </motion.div>
                            <motion.div className={'text medium_h5'}>
                                {item.description}
                            </motion.div>
                            <motion.div
                                key={item.id}
                                className={'button medium_h4'}
                                layoutId={String(item.id)}
                                onClick={() => setSelectedId(item.id)}
                            >
                                <motion.div>Выбрать</motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                ))}
                <AnimatePresence>
                    {selectedId && (
                        <motion.div
                            layoutId={String(selectedId)}
                            className="modal"
                            ref={modalRef}
                            initial={{ opacity: 0, scale: 0.3 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.1 }}
                            transition={{
                                duration: 0.5,
                                ease: [0.4, 0, 0.2, 1],
                                damping: 0, // Уменьшить значение, чтобы анимация была более плавной и менее "жесткой"
                                stiffness: 0, // Снизить жесткость для более мягкой анимации
                                restDelta: 0.001
                            }}
                        >
                            <motion.div
                                onClick={() => setSelectedId(null)}
                                className={'button'}
                            >
                                <motion.div>Закрыть</motion.div>
                            </motion.div>

                            <motion.iframe
                                src={items.find(item => item.id === selectedId)?.url}
                                className={'iframe '}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
