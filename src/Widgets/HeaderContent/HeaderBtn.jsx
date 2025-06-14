import './Header.css';
import MoreDetalis from '../../assets/icons/MoreDetalis.svg';


const HeaderBtn = () => {
    return (
        <button className='more-details'>
            <img src={MoreDetalis} alt="" />
            <span>Подробнее</span>
        </button>
    );
};

export default HeaderBtn;