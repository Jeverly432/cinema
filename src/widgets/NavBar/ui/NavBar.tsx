import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import Logo from "shared/assets/images/global/logo.png";
import { Button } from "shared/ui/Button/Button";
import { ButtonSize, ButtonTheme } from "shared/ui/Button/types";
import { LangSwitcher } from "widgets/LangSwitcher";
import { useTranslation } from "react-i18next";
import Search from "shared/assets/icons/global/search.svg";
import Notice from "shared/assets/icons/global/notice.svg";
import Profile from "shared/assets/images/global/profile.png";
import { Dropdown } from "shared/ui/Dropdown/Dropdown";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { useCallback, useState } from "react";
import { Modal } from "shared/ui/Modal/Modal";
import { ModalSize } from "shared/ui/Modal/types";
import { NavBarProps } from "./types";
import style from "./NavBar.module.scss";

export const NavBar = ({ className, layoutColor }: NavBarProps) => {
    const { t } = useTranslation();
    const [auth, setAuth] = useState(false);
    const [openAuthModal, setOpenAuthModal] = useState<boolean>(false);

    const handleOpenAuthModal = useCallback(() => {
        setOpenAuthModal(!openAuthModal);
    }, [openAuthModal]);

    return (
        <header className={classNames(style.Navbar, {}, [className, layoutColor])} data-testid="navbar">
            <div className="container">
                <div className={style.wrapper}>
                    <AppLink to={RoutePath.main} className={style.logo}>
                        <img src={Logo} alt="logo" />
                    </AppLink>
                    <div className={style.navigation}>
                        <nav className={classNames(style.nav, {}, [className])}>
                            <AppLink to={RoutePath.about} className={style.link}>
                                {t("nav-about-page")}
                            </AppLink>
                            <AppLink to={RoutePath.not_found} className={style.link}>
                                {t("nav-page-catalog")}
                            </AppLink>
                        </nav>
                        <Button
                            theme={ButtonTheme.CLEAR}
                            size={ButtonSize.M}
                            className={style.search}
                        >
                            <Search />
                        </Button>
                        <Button
                            theme={ButtonTheme.CLEAR}
                            size={ButtonSize.M}
                            className={style.notice}
                        >
                            <Notice />
                        </Button>
                        {auth
                            ? (
                                <Dropdown>
                                    <Dropdown.Anchor>
                                        <Button
                                            theme={ButtonTheme.CLEAR}
                                            size={ButtonSize.M}
                                            data-testid="dropdown-toggle"
                                        >
                                            <img src={Profile} alt="profile" />
                                        </Button>
                                    </Dropdown.Anchor>
                                    <Dropdown.Content>
                                        <ul className={style.list} data-testid="dropdown-list">
                                            <li>
                                                <LangSwitcher className={style.lang} />
                                            </li>
                                            <li>
                                                <ThemeSwitcher className={style.theme} />
                                            </li>
                                        </ul>
                                    </Dropdown.Content>
                                </Dropdown>
                            )
                            : (
                                <Button theme={ButtonTheme.PRIMARY} size={ButtonSize.S} onClick={handleOpenAuthModal}>
                                    {t("nav-login-button")}
                                </Button>
                            )}

                    </div>
                </div>
            </div>
            <Modal open={openAuthModal} setOpen={setOpenAuthModal} size={ModalSize.L}>
                авторизация
            </Modal>
        </header>
    );
};
