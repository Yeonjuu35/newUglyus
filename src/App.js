import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Footer from './component/footer/Footer';
import Quickmenu from './component/quick/Quickmenu';
import Maincontent from './component/Maincontent';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Maincontent />}></Route>
            </Routes>            
            <Footer />
            <Quickmenu />
        </>
    );
}

export default App;
