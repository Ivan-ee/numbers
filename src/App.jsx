import './App.css'
import { Header } from "./components/header/header.jsx";
import { Main } from "./components/main/main.jsx";
import { Services } from "./components/services/services.jsx";
import { QA } from "./components/slider/slider.jsx";
import { Footer } from "./components/footer/footer.jsx";
import { Case } from "./components/case/case.jsx";
import { Process } from "./components/process/process.jsx";

function App() {
    return (
        <>
            {/*<Helmet>*/}
            {/*    <html lang="ru" />*/}
            {/*    <meta charSet="utf-8" />*/}
            {/*    <title>Приступим?</title>*/}
            {/*    <link rel="canonical" href="https://numbers-agency.ru/" />*/}
            {/*    <meta name="viewport" content="width=device-width, initial-scale=1.0" />*/}
            {/*    <meta name="description" content="Разработка. Дизайн. Продвижение." />*/}
            {/*    <meta property="og:url" content="https://numbers-agency.ru/" />*/}
            {/*    <meta property="og:title" content="Numbers" />*/}
            {/*    <meta property="og:description" content="Разработка. Дизайн. Продвижение." />*/}
            {/*    <meta property="og:image" content="https://numbers-agency.ru/src/assets/logo-black-no-bg.png" />*/}
            {/*    <meta property="og:type" content="website" />*/}
            {/*</Helmet>*/}
            <Header />
            <Main />
            <Services />
            <Process />
            <Case />
            <QA />
            <Footer />
        </>
    )
}

export default App;
