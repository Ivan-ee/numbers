import React, {useState} from "react";
import {SuccessModal} from "../ModalForm/Success.jsx";

export const Asdsa = () => {
    const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [duration, setDuration] = useState('');
    const [errors, setErrors] = useState({
        name: false,
        phone: false,
        duration: false
    });

    const handleSubmit = () => {
        const newErrors = {
            name: !name,
            phone: !phone,
            duration: !duration
        };
        setErrors(newErrors);

        if (!newErrors.name && !newErrors.phone && !newErrors.duration) {
            setSuccessModalVisible(true)
            console.log({name, phone, duration});
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

            <div className={'container-page question'} id={'question'}>
                <div className={'content'}>
                    <div className={'title regular_h2'}>
                        Остались вопросы?
                    </div>
                    <div className="body">
                        <input
                            type="text"
                            className={`input regular_h4 ${errors.name ? 'error' : ''}`}
                            placeholder="Имя"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onFocus={() => handleFocus('name')}
                        />
                        <input
                            type="tel"
                            className={`input regular_h4 ${errors.phone ? 'error' : ''}`}
                            placeholder="Номер"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            onFocus={() => handleFocus('phone')}
                        />
                        <textarea
                            className={`input regular_h4 ${errors.duration ? 'error' : ''}`}
                            placeholder="Вопрос"
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                            onFocus={() => handleFocus('duration')}
                        />
                    </div>
                    <div className="desc">
                        Нажимая на кнопку «Отправить заявку», вы соглашаетесь
                        с <span>политикой конфиденциальности</span> и <span>пользовательским соглашением</span>
                    </div>
                    <div className="button regular_h4" onClick={handleSubmit}>
                        <div>Отправить заявку</div>
                    </div>
                </div>
                <div className={'cart'}>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A8ce4cc194d116e51feafdf410bf1eae86d58d84cd52c6e7b365604f6b79da163&amp;source=constructor"
                        width="570" height="590" frameBorder="0"></iframe>
                </div>
            </div>
        </>
    )
};
