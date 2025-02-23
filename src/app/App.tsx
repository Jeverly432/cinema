import "./styles/_index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { NavBar } from "widgets/NavBar";
import { Suspense, useEffect, useState } from "react";
import { Modal } from "shared/ui/Modal/Modal";
import { Button } from "shared/ui/Button/Button";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/ThemeProvider";

const App = () => {
    const { theme } = useTheme();
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
    }, [theme]);

    return (
        <div className={classNames("app", { hovered: true, selected: true, active: false }, [theme])}>
            <Suspense fallback="">
                {/*   <NavBar /> */}
                <Button onClick={() => setOpen(!open)}>
                    ОТкрыть модалку
                </Button>
                <Modal open={open} setOpen={setOpen}>
                    Пример
                </Modal>
                <div className="content-page">
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
