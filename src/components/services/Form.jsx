import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import ReactLoading from "react-loading";
import {motion, AnimatePresence} from 'framer-motion';
import InputMask from "react-input-mask";

import close from '../../assets/images/close2.png';

export const Form = ({show, onCloseButtonClick, type, color, onSuccess}) => {
    const [isLoading, setIsLoading] = useState(false);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({
        name: false,
        phone: false,
    });

    const data = {
        lending: "Лендинг",
        multisite: "Мультисайт",
        ecommerce: "Интернет-магазин"
    };

    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Очистка стиля при размонтировании компонента
        return () => {
            document.body.style.overflow = '';
        };
    }, [show]);

    const handleOverlayClick = (e) => {
        e.stopPropagation();
        onCloseButtonClick();
    };

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    const handleSubmit = async () => {
        const newErrors = {
            name: !name,
            phone: !phone,
        };
        setErrors(newErrors);

        if (!newErrors.name && !newErrors.phone) {
            setIsLoading(true);

            const requestData = {
                title: type,
                data: {
                    name,
                    phone,
                    company: company || undefined,
                    email: email || undefined,
                    description: description || undefined,
                }
            };

            try {
                const response = await fetch('/tgbot/add', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestData),
                });

                if (response.ok) {
                    const result = await response.json();
                    console.log('Success:', result);
                    onSuccess();
                } else {
                    console.error('Error:', response.statusText);
                }
            } catch (error) {
                console.error('Error:', error);
            }

            setIsLoading(false);
            onCloseButtonClick();
        }
    };

    const handleFocus = (field) => {
        setErrors(prevErrors => ({
            ...prevErrors,
            [field]: false
        }));
    };

    return ReactDOM.createPortal(
        <AnimatePresence>
            {show && (
                <motion.div
                    className="modal-wrapper"
                    onClick={handleOverlayClick}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.4}}
                >
                    <motion.div
                        className="modal-service"
                        onClick={handleModalClick}
                    >
                        <div className={` ${color}  color-top`}></div>
                        <div className="body">
                            <div className="top">
                                <div>
                                    <div className="title medium_h3">
                                        {data[type]}
                                    </div>
                                    <div className="desc medium_h5">
                                        Заполните данные
                                    </div>
                                </div>

                                <img
                                    src={close}
                                    alt="close"
                                    className={'image'}
                                    onClick={onCloseButtonClick}
                                />
                            </div>
                            <div className={'block'}>
                                <input
                                    type="text"
                                    className={`input ${errors.name ? 'error' : ''}`}
                                    placeholder="Имя"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    onFocus={() => handleFocus('name')}
                                />
                                <InputMask
                                    type="tel"
                                    value={phone}
                                    placeholder="Телефон"
                                    mask="+7 (999) 999-99-99"
                                    className={`input ${errors.phone ? 'error' : ''}`}
                                    onChange={(e) => setPhone(e.target.value)}
                                    onFocus={() => handleFocus('phone')}/>

                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Компания"
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                />
                                <input
                                    type="email"
                                    className="input"
                                    placeholder="Почта"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <textarea
                                    placeholder="Опишите задачу"
                                    className="input textarea"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <div className="form-bottom">
                                <div className="text">
                                    Нажимая на кнопку, вы соглашаетесь<br/>
                                    на <span>обработку персональных данных</span>
                                </div>
                                <div className="button medium_h4" onClick={handleSubmit}>
                                    <div> {isLoading ?
                                        <ReactLoading type={'spinningBubbles'} color="#fff" height={18}
                                                      width={24}/> : 'Отправить'}</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};
