import "./styles/_index.scss"
import { classNames } from "shared/lib/classNames"
import { AppRouter } from "./providers/router"
import { NavBar } from "widgets/NavBar"
import { useTheme } from "./providers/ThemeProvider"
import { Sidebar } from "widgets/Sidebar/ui"
import { Suspense } from "react"


const App = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', { hovered: true, selected: true, active: false }, [theme])}>
            <Suspense fallback="">
                <NavBar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App