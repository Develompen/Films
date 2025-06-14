import './Footer.css';
import telegram from '../../assets/icons/telegram.svg';
import wk from '../../assets/icons/wk.svg';
import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';
import tiktok from '../../assets/icons/tiktok.svg';
import youtube from '../../assets/icons/youtube.svg';
import tviter from '../../assets/icons/tviter.svg';
import linkedin from '../../assets/icons/linkedin.svg';

const FooterContac = () => {
    return (
        <div className="footer-contac__content">
            <button className='footer-btn'>
                <img src={telegram} alt="" />
            </button>
            <button className='footer-btn'>
                <img src={wk} alt="" />
            </button>
            <button className='footer-btn'>
                <img src={facebook} alt="" />
            </button>
            <button className='footer-btn'>
                <img src={instagram} alt="" />
            </button>
            <button className='footer-btn'>
                <img src={tiktok} alt="" />
            </button>
            <button className='footer-btn'>
                <img src={youtube} alt="" />
            </button>
            <button className='footer-btn'>
                <img src={tviter} alt="" />
            </button>
            <button className='footer-btn'>
                <img src={linkedin} alt="" />
            </button>
        </div>
    );
};

export default FooterContac;