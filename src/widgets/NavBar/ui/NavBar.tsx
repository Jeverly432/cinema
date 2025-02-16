import { classNames } from "shared/lib/classNames"
import style from "./NavBar.module.scss"
import { NavBarProps } from "./types"
import { AppLink } from "shared/ui/AppLink/AppLink"
import { ThemeSwitcher } from "widgets/ThemeSwitcher"
import Logo from "shared/assets/images/logo.png"
import { Button } from "shared/ui/Button/Button"
import { ButtonTheme } from "shared/ui/Button/types"
import Location from "shared/assets/icons/location.svg"
import { LangSwitcher } from "widgets/LangSwitcher"
import { useTranslation } from "react-i18next"

export const NavBar = ({ className }: NavBarProps) => {
    const { t } = useTranslation()
    
    return (
        <header className={classNames(style.Navbar, {}, [className])}>
            <div className="container">
                <div className={style.wrapper}>
                    <AppLink to={"/"} className={style.logo}>
                        <img src={Logo} alt="logo" />
                    </AppLink>
                    <nav className={classNames(style.nav, {}, [className])}>
                        <AppLink to={"/about"} className={style.link}>
                            {t('nav-about-page')}
                        </AppLink>
                        <AppLink to={"/about"} className={style.link}>
                            {t('nav-page-catalog')}
                        </AppLink>
                    </nav>
                    <div className={style.navigation}>
                        <Button theme={ButtonTheme.CLEAR}>
                            <Location />
                            {t('location')}
                        </Button>
                        <LangSwitcher />
                        <ThemeSwitcher className="" />
                        <Button>
                            {t('login')}
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}