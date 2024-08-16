import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import close from '../../assets/images/close2.png'

export const Form = ({show, onCloseButtonClick, type, color, onSuccess}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({
        name: false,
        phone: false,
    });

    if (!show) {
        return null;
    }

    const data = {
        lending: "Лендинг",
        multisite: "Мультисайт",
        ecommerce: "Интернет-магазин"
    };

    const handleOverlayClick = (e) => {
        e.stopPropagation();
        onCloseButtonClick();
    };

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    const handleSubmit = () => {
        const newErrors = {
            name: !name,
            phone: !phone,
        };
        setErrors(newErrors);

        if (!newErrors.name && !newErrors.phone) {
            console.log({name, phone});
            onCloseButtonClick();
            onSuccess();
        }
    };

    const handleFocus = (field) => {
        setErrors(prevErrors => ({
            ...prevErrors,
            [field]: false
        }));
    };

    return ReactDOM.createPortal(
        <div className="modal-wrapper" onClick={handleOverlayClick}>
            <div className="modal-service" onClick={handleModalClick}>
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
                        <input
                            type="tel"
                            className={`input ${errors.phone ? 'error' : ''}`}
                            placeholder="Телефон"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            onFocus={() => handleFocus('phone')}
                        />
                        <input type={"text"} className={'input'} placeholder={'Компания'}/>
                        <input type={"email"} className={'input'} placeholder={'Почта'}/>
                        <textarea placeholder={"Опишите задачу"} className={'input textarea'}/>
                    </div>
                    <div className={'form-bottom'}>
                        <div className={'text'}>
                            Нажимая на кнопку, вы соглашаетесь<br/>
                            на <span>обработку персональных данных</span>
                        </div>
                        <div className={'button medium_h4'} onClick={handleSubmit}>
                            <div>Отправить</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};
