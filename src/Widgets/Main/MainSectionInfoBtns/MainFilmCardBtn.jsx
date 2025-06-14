import '../Main.css';
import MoreDetalis from '../../../assets/icons/MoreDetalis.svg';

const MainFilmCardBtn = () => {
    return (
        <button className="cardBtn-more__details">
            <img src={MoreDetalis} alt="" />
            <span className='more__details-title'>Подробнее</span>
        </button>
    );
};

export default MainFilmCardBtn;