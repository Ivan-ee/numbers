import './App.css'
import {Header} from "./components/header/header.jsx";
import {Main} from "./components/main/main.jsx";
import {Services} from "./components/services/services.jsx";
import {QA} from "./components/slider/slider.jsx";
import {Footer} from "./components/footer/footer.jsx";
import {Case} from "./components/case/case.jsx";
import {Test} from "./components/test/test.jsx";

function App() {

    return (
        <>
            <Header/>
            <Main/>
            <Services/>
            <Case/>
            <QA/>
            {/*<Test/>*/}
            <Footer/>
        </>
    )
}

export default App
