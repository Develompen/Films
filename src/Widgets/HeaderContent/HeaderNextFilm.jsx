import './Header.css';
import NextImg from '../../assets/icons/NextImg.svg';
import shadow from '../../assets/icons/shadow.svg';
import { useState, useEffect } from 'react';
import headerBg from '../../assets/img/bg.png';

const HeaderNextFilm = () => {
    const filmsInfo = [
        { title: 'Тор: Любовь и гром',  src: NextImg },
        { title: 'Мир Юрского периода',  src: headerBg },
    ];
    const [title, setTitle] = useState(0);
    const [fade, setFade] = useState(true);
    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);

            setTimeout(() => {
                setTitle((prevIndex) => (prevIndex + 1) % filmsInfo.length);
                setFade(true); 
            }, 500);
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="NextFilmClick">
            <img src={shadow} className='shadow' alt="" />
            <button className="NextFilmBtn">
                <span className='Next'>Следующий</span>
                <span className={`title-next ${fade ? 'fade-in' : 'fade-out'}`}>{filmsInfo[title].title}</span>
            </button>
            <img src={filmsInfo[title].src} className={`NextImg ${fade ? 'fade-in' : 'fade-out'}`} alt="" />
            <div className="bottom-strip"></div>
            <div className="bottom-strip__bg"></div>
        </div>
    );
};

export default HeaderNextFilm;