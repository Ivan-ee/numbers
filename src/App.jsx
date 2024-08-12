import './App.css'
import {Header} from "./components/header/header.jsx";
import {Main} from "./components/main/main.jsx";
import {Services} from "./components/services/services.jsx";
import {WhyMe} from "./components/whyme/whyme.jsx";
import {Case} from "./components/slider/slider.jsx";
import {Test} from "./components/test/test.jsx";

function App() {

    return (
        <>
            <Header/>
            <Main/>
            <Services/>
            <Test/>
            <WhyMe/>
            <Case/>
        </>
    )
}

export default App
