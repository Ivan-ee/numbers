// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from "./components/header/header.jsx";
import { Main } from "./components/main/main.jsx";
import { Services } from "./components/services/services.jsx";
import { QA } from "./components/slider/slider.jsx";
import { Footer } from "./components/footer/footer.jsx";
import { Case } from "./components/case/case.jsx";
import { Process } from "./components/process/process.jsx";

const SuccessPage = () => {
    return <div>BOT!</div>;
};

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <>
                        <Header/>
                        <Main/>
                        <Services/>
                        <Process/>
                        <Case/>
                        <QA/>
                        <Footer/>
                    </>
                } />
                <Route path="/tgbot/add" element={<SuccessPage />} />
            </Routes>
        </Router>
    );
}

export default App;
