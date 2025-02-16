import "./styles/_index.scss"
import { classNames } from "shared/lib/classNames"
import { AppRouter } from "./providers/router"
import { NavBar } from "widgets/NavBar"
import { useTheme } from "./providers/ThemeProvider"
import { Suspense, useEffect } from "react"

const App = () => {
    const { theme } = useTheme()

    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
    }, [theme]);

    return (
        <div className={classNames('app', { hovered: true, selected: true, active: false }, [theme])}>
            <Suspense fallback="">
                <NavBar />
                <div className="content-page">
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App