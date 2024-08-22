import './App.css'
import {Header} from "./components/header/header.jsx";
import {Main} from "./components/main/main.jsx";
import {Services} from "./components/services/services.jsx";
import {QA} from "./components/slider/slider.jsx";
import {Footer} from "./components/footer/footer.jsx";
import {Case} from "./components/case/case.jsx";
import {Process} from "./components/process/process.jsx";

function App() {

    return (
        <>
            <Header/>
            <Main/>
            <Services/>
            <Process/>
            <Case/>
            <QA/>
            <Footer/>
        </>
    )
}

export default App
