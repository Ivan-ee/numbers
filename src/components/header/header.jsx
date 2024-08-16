import arrow from '../../assets/images/arrow.png';
import {useEffect, useRef, useState} from "react";
import useSmoothScroll from "../SmoothScroll.jsx";

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

    const headerRef = useRef(null);

    useSmoothScroll(headerRef);

    return (
        <div className="header" ref={headerRef}>
            <div className="page-container">
                <div className={'header-pc'}>
                    <div data-id={'#main'} className={'logo medium_h5'}>Numbers</div>
                    <div className={'buttons medium_h5'}>
                        <div data-id={'#service'} className={'button'}>Услуги</div>
                        <div data-id={'#case'} className={'button'}>Кейсы</div>
                        <div data-id={'#qa'} className={'button'}>Вопросы</div>
                    </div>
                    <div data-id={'#contact'} className={'special-btn medium_h5'}>Контакты</div>
                </div>
            </div>
            <div className={`header-mobile ${isOpen ? 'active' : ''}`}>
                <div className={'main'}>
                    <div className={'logo medium_h5'} data-id={'#main'}>Numbers</div>
                    <div className={'arrow'} onClick={() => setIsOpen(!isOpen)}>
                        <img className={`image ${isOpen ? 'active' : ''}`} src={arrow} alt="arrow"/>
                    </div>
                </div>
                <div className={`buttons medium_h5 ${isOpen ? 'active' : ''}`}>
                <div
                        data-id={'#service'}
                        className={'button'}
                        onClick={() => setIsOpen(!isOpen)}>
                        Услуги
                    </div>
                    <div
                        data-id={'#case'}
                        className={'button'}
                        onClick={() => setIsOpen(!isOpen)}>
                        Кейсы
                    </div>
                    <div
                        data-id={'#qa'}
                        className={'button'}
                        onClick={() => setIsOpen(!isOpen)}>Вопросы
                    </div>
                    <div
                        data-id={'#contact'}
                        className={'button'}
                        onClick={() => setIsOpen(!isOpen)}>Контакты
                    </div>
                </div>
            </div>
        </div>
    );
};
