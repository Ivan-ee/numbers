import telegram from '../../assets/images/footer/telegram.png'
import React, {useState} from "react";
import {SuccessModal} from "../Success.jsx";


export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({
        name: false,
        phone: false,
    });

    const handleSubmit = () => {
        const newErrors = {
            name: !name,
            phone: !phone,
        };
        setErrors(newErrors);

        if (!newErrors.name && !newErrors.phone) {
            setSuccessModalVisible(true)
            console.log({name, phone});
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
            <SuccessModal show={isSuccessModalVisible} onClose={handleCloseSuccessModal}/>

            <footer className="page-container footer" id={'contact'}>
                <div className={'info'}>
                    <div className="title medium_h3">
                        Так, давайте обсудим<br/>
                        ваш проект
                    </div>
                    <div className="bottom medium_h5">
                        <div>© Numbers, {currentYear}</div>
                        <img src={telegram} alt={telegram} className="image"/>
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
                        <input
                            type="tel"
                            className={`input ${errors.phone ? 'error' : ''}`}
                            placeholder="Телефон"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            onFocus={() => handleFocus('phone')}
                        />
                        <input className={'input'} placeholder={'Компания'}/>
                        <input className={'input'} placeholder={'Почта'}/>
                    </div>
                    <div className="title medium_h4">
                        Проект
                    </div>
                    <div className={'block'}>
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
            </footer>
        </>

    );
};
