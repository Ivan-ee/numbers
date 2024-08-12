import './App.css'
import {Header} from "./components/header/header.jsx";
import {Main} from "./components/main/main.jsx";
import {Services} from "./components/services/services.jsx";
import {WhyMe} from "./components/whyme/whyme.jsx";
import {QA} from "./components/slider/slider.jsx";
import {Test} from "./components/test/test.jsx";
import Slider from "react-slick";

function App() {

    return (
        <>
            <Header/>
            <Main/>
            <Services/>
            <QA/>
        </>
    )
}

export default App
