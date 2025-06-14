import './NavBar.css';
import logo from '../../assets/icons/Logo.svg';
import NavSearchBtn from './NavSearchBtn';
import { Link } from 'react-scroll';

const NavBar = () => {
    const links = [
        {name: 'Главная', to: 'Main'},
        {name: 'Фильмы', to: 'Films'},
        {name: 'Сериалы', to: 'Series'},
    ]
    return (
        <nav className="nav">
            <div className="nav__content NavContainer">
                <div className="nav__logo">
                    <img src={logo} alt="" />
                </div>
                <ul className="nav__list">
                    {
                        links.map((link, index) => (
                            <li key={index}>
                                <Link className='nav__list-link' to={link.to} key={link} smooth={true} duration={500} offset={-window.innerHeight / 5}>
                                    {link.name}
                                    <span></span>
                                </Link>
                            </li>
                        ))
                    }
                    <NavSearchBtn/>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;