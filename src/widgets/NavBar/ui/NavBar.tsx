import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { Button } from "shared/ui/Button/Button";
import { ButtonSize, ButtonTheme } from "shared/ui/Button/types";
import { LangSwitcher } from "widgets/LangSwitcher";
import { useTranslation } from "react-i18next";
import Search from "shared/assets/icons/global/search.svg";
import Notice from "shared/assets/icons/global/notice.svg";
import Login from "shared/assets/icons/global/login.svg";
import Profile from "shared/assets/images/global/profile.png";
import { Dropdown } from "shared/ui/Dropdown/Dropdown";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { useState } from "react";
import ArrowDown from "shared/assets/icons/global/arrow-down.svg";
import { NavBarProps } from "./types";
import style from "./NavBar.module.scss";

export const NavBar = ({ className, layoutColor }: NavBarProps) => {
    const { t } = useTranslation();
    const [auth, setAuth] = useState(true);
    const [notification, setNotification] = useState<number>(3);

    return (
        <header className={classNames(style.Navbar, {}, [className, layoutColor])} data-testid="navbar">
            <div className="container">
                <div className={style.wrapper}>
                    <div className={style.inner}>
                        <AppLink to={RoutePath.main} className={style.logo}>
                            CineMax
                        </AppLink>
                        <nav className={classNames(style.nav, {}, [className])}>
                            <AppLink to={RoutePath.about} className={style.link}>
                                {t("nav-about-page")}
                            </AppLink>
                            <AppLink to={RoutePath.not_found} className={style.link}>
                                {t("nav-page-catalog")}
                            </AppLink>
                            <AppLink to={RoutePath.not_found} className={style.link}>
                                {t("nav-page-animation")}
                            </AppLink>
                            <AppLink to={RoutePath.not_found} className={style.link}>
                                {t("nav-page-genres")}
                            </AppLink>
                        </nav>
                    </div>
                    <div className={style.navigation}>
                        <Button
                            theme={ButtonTheme.CLEAR}
                            size={ButtonSize.COMPACT}
                            className={style.search}
                        >
                            <Search />
                        </Button>
                        <Button
                            theme={ButtonTheme.PRIMARY}
                            size={ButtonSize.S}
                            className={style.search}
                        >
                            {t("nav-subscribe")}
                        </Button>
                        <Button
                            theme={ButtonTheme.CLEAR}
                            size={ButtonSize.COMPACT}
                            className={style.notice}
                        >
                            <Notice />
                            <span className={style.notification}>
                                {notification}
                            </span>
                        </Button>
                        {auth
                            ? (
                                <Dropdown>
                                    <Dropdown.Anchor>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            size={ButtonSize.COMPACT}
                                            data-testid="dropdown-toggle"
                                        >
                                            <img src={Profile} alt="profile" className={style.ava} />
                                            <ArrowDown />
                                        </Button>
                                    </Dropdown.Anchor>
                                    <Dropdown.Content>
                                        <ul className={style.list} data-testid="dropdown-list">
                                            <li>
                                                <LangSwitcher className={style.lang} />
                                            </li>
                                        </ul>
                                    </Dropdown.Content>
                                </Dropdown>
                            )
                            : (
                                <Button theme={ButtonTheme.CLEAR} size={ButtonSize.COMPACT} className={style.login}>
                                    <AppLink to="/login">
                                        <Login />
                                    </AppLink>
                                </Button>
                            )}

                    </div>
                </div>
            </div>
        </header>
    );
};
