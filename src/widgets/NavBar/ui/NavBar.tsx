import { classNames } from "shared/lib/classNames"
import style from "./NavBar.module.scss"
import { NavBarProps } from "./types"
import { AppLink } from "shared/ui/AppLink/AppLink"
import { ThemeSwitcher } from "widgets/ThemeSwitcher"
import Logo from "shared/assets/images/global/logo.png"
import { Button } from "shared/ui/Button/Button"
import { ButtonSize, ButtonTheme } from "shared/ui/Button/types"
import Location from "shared/assets/icons/location.svg"
import { LangSwitcher } from "widgets/LangSwitcher"
import { useTranslation } from "react-i18next"
import Search from "shared/assets/icons/global/search.svg"
import Notice from "shared/assets/icons/global/notice.svg"
import Profile from "shared/assets/images/global/profile.png"
import { Tooltip, TooltipPlacement } from "shared/ui/Toolltip/Tooltip"

export const NavBar = ({ className }: NavBarProps) => {
    const { t } = useTranslation()

    return (
        <header className={classNames(style.Navbar, {}, [className])}>
            <div className="container">
                <div className={style.wrapper}>
                    <AppLink to={"/"} className={style.logo}>
                        <img src={Logo} alt="logo" />
                    </AppLink>
                    <div className={style.navigation}>
                        <nav className={classNames(style.nav, {}, [className])}>
                            <AppLink to={"/about"} className={style.link}>
                                {t('nav-about-page')}
                            </AppLink>
                            <AppLink to={"/about"} className={style.link}>
                                {t('nav-page-catalog')}
                            </AppLink>
                        </nav>
                        <LangSwitcher />
                        <ThemeSwitcher className="" />
                        <Button theme={ButtonTheme.CLEAR} size={ButtonSize.M} className={style.search}>
                            <Search />
                        </Button>
                        <Button theme={ButtonTheme.CLEAR} size={ButtonSize.M} className={style.notice}>
                            <Notice />
                        </Button>
                        <Tooltip placement={TooltipPlacement.BottomEnd}>
                            <Tooltip.Trigger>
                                <Button theme={ButtonTheme.CLEAR} size={ButtonSize.M}>
                                    <img src={Profile} alt="profile" className={style.profile} />
                                </Button>
                            </Tooltip.Trigger>
                            <Tooltip.Content>
                                dawdawdwadaw
                            </Tooltip.Content>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </header>
    )
}