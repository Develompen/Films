import React from 'react';
import NavBar from './components/NavBar/NavBar';

const App = () => {
    return (
        <div>
            <NavBar />
            <main>
                <section id="Main">
                    <h1>Главная</h1>
                </section>
                <section id="Films">
                    <h1>Фильмы</h1>
                </section>
                <section id="Series">
                    <h1>Сериалы</h1>
                </section>
            </main>
        </div>
    );
};

export default App;