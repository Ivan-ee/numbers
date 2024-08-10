import './App.css'
import {Header} from "./components/header/header.jsx";
import {Main} from "./components/main/main.jsx";
import {Services} from "./components/services/services.jsx";
import {WhyMe} from "./components/whyme/whyme.jsx";

function App() {

    return (
        <>
            <Header/>
            <Main/>
            <Services/>
            <WhyMe/>
        </>
    )
}

export default App
