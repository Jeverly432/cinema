import { Route, Routes } from "react-router-dom"
import { Test } from "./components/Couner"
import "./styles/_index.scss"
import { Link } from "react-router-dom"
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async"
import { MainPageAsync } from "./pages/MainPage/MainPage.async"
import { Suspense } from "react"
import { useTheme } from "./theme/useTheme"
import { classNames } from "./helpers/classNames/classNames"



const App = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <div className={classNames('app', { hovered: true, selected: true }, [theme])}>
            <button onClick={toggleTheme}>
                Тема
            </button>
            <Link to={"/"}>
                Главная
            </Link>
            <Link to={"/about"}>
                О сайте
            </Link>
            <Test />
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} Component={AboutPageAsync} />
                    <Route path={'/'} Component={MainPageAsync} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App