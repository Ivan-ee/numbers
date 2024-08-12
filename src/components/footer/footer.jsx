import telegram from '../../assets/images/footer/telegram.png'


export const Footer = () => {


    return (
        <footer className="page-container footer">
            <div className={'info'}>
                <div className="title medium_h3">
                    Так, давайте обсудим<br/>
                    ваш проект
                </div>
                <div className="bottom medium_h5">
                    <div>© Numbers, 2024</div>
                    <img src={telegram} alt={telegram} className="image"/>
                </div>
            </div>
            <div className={'form'}>
                <div className="title medium_h4">
                    Контактные данные
                </div>
                <div className={'block'}>
                    <input className={'input'} placeholder={'Имя'}/>
                    <input className={'input'} placeholder={'Телефон'}/>
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
                    <div className={'button medium_h4'}>
                        <div>Отправить</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
