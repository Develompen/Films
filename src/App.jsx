import Header from './Widgets/HeaderContent/Header';
import NavBar from './Widgets/NavBar/NavBar';
import MainFilm from './Widgets/Main/MainFilm';
import FooterContent from './Widgets/Footer/FooterContent';

const App = () => {
    return (
        <>
            <NavBar/>
            <Header />
            <MainFilm />
            <FooterContent/>
        </>
    )
}

export default App;