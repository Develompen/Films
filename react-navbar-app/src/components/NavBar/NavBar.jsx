import './NavBar.css';
import logo from '../../../assets/icons/Logo.svg';
import { Link } from 'react-scroll';

const NavBar = () => {
    const links = [
        {name: 'Главная', to: 'Main'},
        {name: 'Фильмы', to: 'Films'},
        {name: 'Сериалы', to: 'Series'},
    ];
    
    return (
        <nav className="nav">
            <div className="nav__content NavContainer">
                <div className="nav__logo">
                    <img src={logo} alt="Логотип" />
                </div>
                <ul className="nav__list">
                    {
                        links.map((link, index) => (
                            <li key={index}>
                                <Link className='nav__list-link' to={link.to} smooth={true} duration={500} offset={-window.innerHeight / 5}>
                                    {link.name}
                                    <span></span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;