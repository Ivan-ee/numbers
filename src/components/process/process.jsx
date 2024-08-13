import image1 from '../../assets/images/process/Icon/mobile-code.png'
import image2 from '../../assets/images/process/Icon/mobile-connect.png'
import image3 from '../../assets/images/process/Icon/mobile-chat.png'
import image4 from '../../assets/images/process/Icon/mobile-done.png'
import image5 from '../../assets/images/process/Icon/mobile-support.png'
import image6 from '../../assets/images/process/Icon/mobile-layout.png'


export const Process = () => {
    return (
        <div className="page-container process">
            <div className="title medium_h1">
                Процесс
            </div>
            <div className="content">
                <div className="block">
                    <div className="top">
                        <div className={'number medium_h1'}>1</div>
                        <img src={image3} className={'image'} alt={image2}/>
                    </div>
                    <div className="text medium_h4">
                        Обсуждаем, что будем делать.
                        Ставим цели, задачи
                    </div>
                </div>
                <div className="block">
                    <div className="top">
                        <div className={'number medium_h1'}>2</div>
                        <img src={image6} className={'image'} alt={image2}/>

                    </div>
                    <div className="text medium_h4">
                        Делаем макет сайта.
                        Согласовываем, дорабатываем
                    </div>
                </div>
                <div className="block">
                    <div className="top">
                        <div className={'number medium_h1'}>3</div>

                        <img src={image1} className={'image'} alt={image2}/>

                    </div>
                    <div className="text medium_h4">
                    Верстаем, пишем код,
                        разрабатываем
                    </div>
                </div>
                <div className="block">
                    <div className="top">
                        <div className={'number medium_h1'}>4</div>
                        <img src={image2} className={'image'} alt={image2}/>

                    </div>
                    <div className="text medium_h4">
                        Подключаем и настраиваем серивисы
                    </div>
                </div>
                <div className="block">
                    <div className="top">
                        <div className={'number medium_h1'}>5</div>
                        <img src={image4} className={'image'} alt={image2}/>

                    </div>
                    <div className="text medium_h4">
                    Тестируем, проверяем
                        несколькораз и запускаем
                    </div>
                </div>
                <div className="block">
                    <div className="top">
                        <div className={'number medium_h1'}>6</div>
                        <img src={image5} className={'image'} alt={image2}/>

                    </div>
                    <div className="text medium_h4">
                        Поддерживаем и обновляем сайт
                        после разработки
                    </div>
                </div>
            </div>
        </div>
    )
};
