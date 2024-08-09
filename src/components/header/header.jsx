import arrow from '../../assets/images/arrow.png';
import {useState} from "react";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="page-container header">
            <div className={'header-pc'}>
                <div className={'logo medium_h5'}>Numbers</div>
                <div className={'buttons medium_h5'}>
                    <div className={'button'}>Услуги</div>
                    <div className={'button'}>Кейсы</div>
                    <div className={'button'}>Вопросы</div>
                </div>
                <div className={'special-btn medium_h5'}>Контакты</div>
            </div>
            <div className={`header-mobile ${isOpen ? 'active' : ''}`}>
                <div className={'main'}>
                    <div className={'logo medium_h5'}>Numbers</div>
                    <div className={'arrow'} onClick={() => setIsOpen(!isOpen)}>
                        <img className={'image'} src={arrow} alt="arrow"/>
                    </div>
                </div>
                <div className={`buttons medium_h5 ${isOpen ? 'active' : ''}`}>
                    <div className={'button'}>Услуги</div>
                    <div className={'button'}>Кейсы</div>
                    <div className={'button'}>Вопросы</div>
                    <div className={'button'}>Контакты</div>
                </div>
            </div>
        </div>
    );
};
