import image1 from '../../assets/images/whyme/1.png'
import image2 from '../../assets/images/whyme/2.png'
import image3 from '../../assets/images/whyme/3.png'
import image4 from '../../assets/images/whyme/4.png'


export const WhyMe = () => {

    return (
        <div className="page-container whyme">
            <div className="title medium_h1">
                Почему
            </div>
            <div className="content">
                <div className="block">
                    <div className="image-container">
                        <img src={image1} className={'image'} alt={image1}/>
                    </div>
                    <div className="body">
                        <div className="top medium_h3">Прозрачно</div>
                        <div className="text medium_h5">Мы предлагаем вам следующие причины, почему стоит выбрать наше
                            агенство
                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="image-container">
                        <img src={image2} className={'image'} alt={image1}/>
                    </div>
                    <div className="body">
                        <div className="top medium_h3">Быстро</div>
                        <div className="text medium_h5">Мы предлагаем вам следующие причины, почему стоит выбрать наше
                            агенство
                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="image-container">
                        <img src={image3} className={'image'} alt={image1}/>
                    </div>
                    <div className="body">
                        <div className="top medium_h3">Надежно</div>
                        <div className="text medium_h5">Мы предлагаем вам следующие причины, почему стоит выбрать наше
                            агенство
                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="image-container">
                        <img src={image1} className={'image'} alt={image1}/>
                    </div>
                    <div className="body">
                        <div className="top medium_h3">Эффективно</div>
                        <div className="text">Мы предлагаем вам следующие причины, почему стоит выбрать наше агенство
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
