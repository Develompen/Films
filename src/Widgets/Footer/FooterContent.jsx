import './Footer.css';
import FooterContac from './FooterContac';
import PROWEB from '../../assets/icons/PROWEB.svg';

const FoorerContent = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <FooterContac/>
                <ul className="footer-list">
                    <li className="footer-list__link">  
                        © 2022 CINEPHILE. Может содержать информацию, не предназначенную для несовершеннолетних
                    </li>   
                    <li className="footer-list__link">
                        Данные получены с сайта themoviedb.org
                    </li>
                </ul>
                <div className="PROWEB">
                    <img src={PROWEB} alt=""/>
                </div>
            </div>
        </footer>
    );
};

export default FoorerContent;