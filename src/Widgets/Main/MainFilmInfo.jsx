import './Main.css';
import MainFilmPeople from './MainFilmPeople';
import MainFilmCardBtn from './MainSectionInfoBtns/MainFilmCardBtn';
import filmInfoImg from '../../assets/img/filmInfoImg.png';
import filmInfoShadow from '../../assets/img/filmInfoShadow.png';

const MainFilmInfo = () => {
    return (
        <section className="section">
            <div className="main-film__info__content">
                <div className="film-info__content">
                    <h1 className="film-info__title">
                        Шан-Чи и легенда десяти колец
                    </h1>
                    <p className="film-info__paragrf">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh bibendum nec, pulvinar id in in ac nisl semper. Condimentum tellus ac integer condimentum. Amet, vitae dictum convallis dignissim. Lacus, suscipit sagittis, adipiscing metus, risus convallis sit...
                    </p>
                    <h2 className="info-film__name">
                        2021, боевик, приключения, фэнтези
                        <span className='film-time'>
                            2h 12m
                        </span>
                    </h2>
                    <MainFilmPeople/>
                    <MainFilmCardBtn/>  
                </div>
                {/* <div className="film-info__img">
                    <img className='filmInfoImg' src={filmInfoImg} alt="" />
                    <img className='filmInfoShadow' src={filmInfoShadow} alt="" />
                </div> */}
            </div>
        </section>  
    );
};

export default MainFilmInfo;