import arrow from '../../assets/images/arrow.png';
import {useEffect, useState} from "react";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const pcElement = document.querySelector('.header-pc .logo');
            const mobileElement = document.querySelector('.header-mobile .main .logo');
            if (window.scrollY > window.innerHeight) {

                pcElement.classList.add('anim');
                mobileElement.classList.add('anim');
            } else {
                pcElement.classList.remove('anim');
                mobileElement.classList.remove('anim');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
                        <img className={`image ${isOpen ? 'active' : ''}`} src={arrow} alt="arrow"/>
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
