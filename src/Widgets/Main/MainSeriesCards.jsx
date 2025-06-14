import './Main.css';
import SeriesCardImg from '../../assets/img/seriesCardImg.png';

const MainSeriesCards = () => {
    return (
        <section className="section">
            <div className="series-cards__content">
                <div className="series__card">
                    <img className='SeriesCardImg' src={SeriesCardImg} alt="" />
                </div>
            </div>
        </section>
    );
};

export default MainSeriesCards;