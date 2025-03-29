import React, { useState } from "react";
import InputMask from "react-input-mask";
import { SuccessModal } from "../Success.jsx";
import telegram from '../../assets/images/footer/telegram.png';
import ReactLoading from "react-loading";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const [isLoading, setIsLoading] = useState(false);

    const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({
        name: false,
        phone: false,
    });

    const handleSubmit = async () => {
        const newErrors = {
            name: !name,
            phone: !phone,
        };
        setErrors(newErrors);

        if (!newErrors.name && !newErrors.phone) {
            setIsLoading(true);
            try {
                const response = await fetch('/tgbot/add', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        title: 'Обсуждение проекта',
                        data: {
                            name,
                            phone,
                            company: company || undefined,
                            email: email || undefined,
                            description: description || undefined,
                        }
                    }),
                });

                if (!response.ok) {
                    throw new Error('Сервер вернул ошибку');
                }

                const result = await response.json();
                console.log(result);
                setSuccessModalVisible(true);
                setIsLoading(false);
            } catch (error) {
                console.error('Ошибка при отправке заявки:', error);
            }
        }
    };

    const handleFocus = (field) => {
        setErrors(prevErrors => ({
            ...prevErrors,
            [field]: false
        }));
    };

    const handleCloseSuccessModal = () => {
        setSuccessModalVisible(false);
    };

    return (
        <>
            <SuccessModal show={isSuccessModalVisible} onClose={handleCloseSuccessModal} initial={0} />

            <div className="footer-container">
                <footer className="page-container footer" id={'contact'}>
                    <div className={'info'}>
                        <div className="title medium_h3">
                            Так, давайте обсудим<br/>
                            ваш проект
                        </div>
                        <div className="bottom medium_h5">
                            <div>© Numbers, {currentYear}</div>
                            <a href={'https://t.me/RodionOpryshko'}>
                                <img src={telegram} alt="telegram" className="image"/>
                            </a>
                        </div>
                    </div>
                    <div className={'form'}>
                        <div className="title medium_h4">
                            Контактные данные
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
                                onFocus={() => handleFocus('phone')}
                            />
                            <input
                                className={'input'}
                                placeholder={'Компания'}
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                            />
                            <input
                                className={'input'}
                                placeholder={'Почта'}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="title medium_h4">
                            Проект
                        </div>
                        <div className={'block'}>
                            <textarea
                                placeholder={"Опишите задачу"}
                                className={'input textarea'}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className={'form-bottom'}>
                            <div className={'text'}>
                                Нажимая на кнопку, вы соглашаетесь<br/>
                                на <span>обработку персональных данных</span>
                            </div>
                            <div className={'button medium_h4'} onClick={handleSubmit}>
                                <div> {isLoading ?
                                    <ReactLoading type={'bars'} color="#fff" height={20}
                                                  width={20}/> : 'Отправить'}</div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};
