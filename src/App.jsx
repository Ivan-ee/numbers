import './App.css'
import {Header} from "./components/header/header.jsx";
import {Main} from "./components/main/main.jsx";
import {Services} from "./components/services/services.jsx";
import {QA} from "./components/slider/slider.jsx";
import {Footer} from "./components/footer/footer.jsx";

function App() {

    return (
        <>
            <Header/>
            <Main/>
            <Services/>
            <QA/>
            <Footer/>
        </>
    )
}

export default App
