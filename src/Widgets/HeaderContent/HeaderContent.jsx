import './Header.css';
import headerBg from '../../assets/img/headerBg.png';
import HeaderBtn from './HeaderBtn';
import HeaderNextFilm from '../HeaderContent/HeaderNextFilm';
import { useState, useEffect } from 'react';

const HeaderContent = () => {
    const filmsInfo = [
        { title: 'Мир Юрского периода', paragraf: 'После уничтожения острова Нублар динозавры вырвались на свободу и стали полноправными обитателями планеты. Людям удается поддерживать хрупкое равновесие, определяющее мирное сосуществование на Земле. Но как долго человек сможет сохранять...' },
        { title: 'Тор: Любовь и гром', paragraf: 'Тор, который ищет себя и сталкивается с новым врагом – Горром Убийцей Богов. Горр, ожесточенный после трагической гибели своей дочери, жаждет мщения над всеми богами. Тор объединяется с Валькирией, Коргом и Джейн Фостер, чтобы помешать Горру' },
    ];

    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % filmsInfo.length);
                setFade(true); 
            }, 500);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="section">
            <div className={`header-content`}>
                <img src={headerBg} className='header-img' alt="" />

                <h1 className={`header-title ${fade ? 'fade-in' : 'fade-out'}`}>
                    {filmsInfo[index].title}
                </h1>

                <p className={`header-paragrf ${fade ? 'fade-in' : 'fade-out'}`}>
                    {filmsInfo[index].paragraf}
                </p>

                <HeaderBtn />
                <HeaderNextFilm filmsInfo = {filmsInfo} index = {index} fade = {fade}/>
            </div>
        </section>
    );
};

export default HeaderContent;
