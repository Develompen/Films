import './NavBar.css';
import search from '../../assets/icons/search.svg';

const NavSearchBtn = () => {
    return (
        <button className='nav__search'>
            <img src={search} alt="" />
        </button>  
    );
};

export default NavSearchBtn;