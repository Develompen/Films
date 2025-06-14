import './Main.css';
import ratingfilm from '../../assets/img/ratingfilm.png';
import ratingShadow from '../../assets/img/ratingShadow.png';

const MainRatingFilms = () => {
    return (
        <section className="rating-films__section">
            <div className="rating-films">
                <h3 className='main-rating__title'>
                    <span className='ratind'>ТОП</span> <span className='ten'>10</span>
                </h3>
                <div className="rating-films__cards">
                    <div className="films__card">
                        <h1 className="film-card__title">
                            1
                        </h1>
                        <div className="film-card__img">
                            <img className='ratingfilm' src={ratingfilm} alt="" />
                            <img className='ratingShadow' src={ratingShadow} alt="" />
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    );
};

export default MainRatingFilms;