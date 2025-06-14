import './Main.css';
import filmCardImg from '../../assets/img/filmCardImg.png';

const MainFilmCards = () => {
    return (
        <section className="section">
            <div className="film-cards__content">
                <div className="film__card">
                    <img className='filmCardImg' src={filmCardImg} alt="" />
                </div>
            </div>
        </section>
    );
};

export default MainFilmCards;