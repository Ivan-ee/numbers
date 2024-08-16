import image1 from '../../assets/images/services/image1.png'
import image2 from '../../assets/images/services/image2.png'
import image3 from '../../assets/images/services/image3.png'
import {SuccessModal} from "../Success.jsx";
import {Form} from "./Form.jsx";
import {useModal} from "./useModal.jsx";
import {useState} from "react";
import {motion} from "framer-motion";

export const Services = () => {
    const [isShowingModal, toggleModal] = useModal();
    const [selectedType, setSelectedType] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);

    const handleRentClick = (size, color) => {
        setSelectedType(size);
        setSelectedColor(color);
        toggleModal();
    };

    const handleSuccess = () => {
        setSuccessModalVisible(true);
    };

    const handleCloseSuccessModal = () => {
        setSuccessModalVisible(false);
    };

    return (
        <>
            <Form show={isShowingModal} onCloseButtonClick={toggleModal} type={selectedType} color={selectedColor}
                  onSuccess={handleSuccess}/>
            <SuccessModal show={isSuccessModalVisible} onClose={handleCloseSuccessModal}/>
            <div id={'service'}
                className="page-container services">
                <div className="title medium_h1">
                    Услуги
                </div>
                <div
                    className="content">
                    <div

                        className="block">
                        <img
                            src={image1}
                            className={'image'}
                            alt={image1}/>
                        <div className="body">
                            <div className={'top medium_h2'}>
                                Лендинг
                            </div>
                            <div className={'text medium_h5'}>
                                Одностраничный сайт. Подойдет,
                                если надо презентовать услуги
                                или продукт. Например, сайт-визитка,
                                портфолио, продажа услуг
                                или сайт мероприятия
                            </div>
                            <div className={'price medium_h2'}>
                                от 70 000 ₽
                            </div>
                            <div className={'button medium_h4'} onClick={() => handleRentClick('lending', 'green')}>
                                <div>Выбрать</div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="block">
                        <img src={image2} className={'image'} alt={image2}/>
                        <div className="body">
                            <div className={'top medium_h2'}>
                                Мультисайт
                            </div>
                            <div className={'text medium_h5'}>
                                Многостраничный сайт. Подойдет
                                для компаний, бизнеса, личного бренда. Удобный вариант, если
                                нужно много страниц и разделов
                                на одном сайте
                            </div>
                            <div className={'price medium_h2'}>
                                от 100 000 ₽
                            </div>
                            <div className={'button medium_h4'} onClick={() => handleRentClick('multisite', 'red')}>
                                <div>Выбрать</div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="block">
                        <img src={image3} className={'image'} alt={image3}/>
                        <div className="body">
                            <div className={'top medium_h2'}>
                                Интернет-магазин
                            </div>
                            <div className={'text medium_h5'}>
                                Полноценный сайт, на котором можно
                                будет добавлять и редактировать
                                товары. Сделаем так, чтобы
                                пользователям было удобно
                                выбирать и покупать товары
                            </div>
                            <div className={'price medium_h2'}>
                                от 190 000 ₽
                            </div>
                            <div className={'button medium_h4'} onClick={() => handleRentClick('ecommerce', 'orange')}>
                                <div>Выбрать</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};
