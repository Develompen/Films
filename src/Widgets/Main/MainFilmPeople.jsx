import './Main.css';
import people1 from '../../assets/icons/people1.svg';
import people2 from '../../assets/icons/people2.svg';
import people3 from '../../assets/icons/people3.svg';
import people4 from '../../assets/icons/people4.svg';

const MainFilmPeople = () => {
    return (
        <div className="peoples-info">
            <div className="people">
                <img src={people1} alt="" />
                <h1 className="people-name">
                    Simu Liu
                </h1>
            </div>
            <div className="people">
                <img src={people2} alt="" />
                <h1 className="people-name">
                    Tony Leung Chiu-Wai
                </h1>
            </div>
            <div className="people">
                <img src={people3} alt="" />
                <h1 className="people-name">
                    Awkwafina
                </h1>
            </div>
            <div className="people">
                <img src={people4} alt="" />
                <h1 className="people-name">
                    Michelle Yeoh
                </h1>
            </div>
        </div>  
    );
};

export default MainFilmPeople;