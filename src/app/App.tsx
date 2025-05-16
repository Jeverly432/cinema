import "./styles/_index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { NavBar } from "widgets/NavBar";
import { Suspense, useEffect } from "react";
import { Sidebar } from "widgets/Sidebar/ui/Sidebar";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/ThemeProvider";

const App = () => {
    const { theme } = useTheme();

    useEffect(() => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
    }, [theme]);

    return (
        <div className={classNames("app", { hovered: true, selected: true, active: false }, [theme])}>
            <Suspense fallback="">
                <div>
                    <NavBar />
                </div>
                <div className="content-wrapper">
                    <div className="container">
                        <div className="content-inner">
                            <Sidebar />
                            <div className="content-page">
                                <AppRouter />
                            </div>
                        </div>
                    </div>
                </div>
            </Suspense>
        </div>
    );
};

export default App;
