import { classNames } from "shared/lib/classNames";
import { useState } from "react";
import { AppLink } from "shared/ui/AppLink/AppLink";
import Discovery from "shared/assets/icons/global/discover.svg";
import Star from "shared/assets/icons/global/star.svg";
import Timer from "shared/assets/icons/global/timer.svg";
import Clock from "shared/assets/icons/global/clock.svg";
import Download from "shared/assets/icons/global/download.svg";
import Moon from "shared/assets/icons/global/moon.svg";
import Settings from "shared/assets/icons/global/setting.svg";
import { useTranslation } from "react-i18next";
import { Switch } from "shared/ui/Switch";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import style from "./Sidebar.module.scss";
import { SidebarProps } from "./types";

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<string>("discovery");
    const { t } = useTranslation();
    const { theme, toggleTheme } = useTheme();

    const handleChangeTab = (id: string) => {
        setActiveTab(id);
    };

    const handleChangeTheme = () => {
        toggleTheme();
    };

    return (
        <div className={classNames(style.Sidebar, {}, [className])}>
            <div>
                <h2 className={style.subtitle}>
                    {t("sidebar-menu")}
                </h2>
                <ul className={style.list}>
                    <li className={classNames(style.item, {}, [activeTab === "discovery" ? style.active : ""])}>
                        <AppLink to={RoutePath.discovery} onClick={() => handleChangeTab("discovery")}>
                            <span><Discovery /></span>
                            {t("sidebar-page-discovery")}
                        </AppLink>
                    </li>
                    <li className={classNames(style.item, {}, [activeTab === "top-rated" ? style.active : ""])}>
                        <AppLink to="" onClick={() => handleChangeTab("top-rated")}>
                            <span><Star /></span>
                            {t("sidebar-page-top")}
                        </AppLink>
                    </li>
                    <li className={classNames(style.item, {}, [activeTab === "coming-soon" ? style.active : ""])}>
                        <AppLink to="" onClick={() => handleChangeTab("coming-soon")}>
                            <span><Timer /></span>
                            {t("sidebar-page-soon")}
                        </AppLink>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className={style.subtitle}>
                    {t("sidebar-library")}
                </h2>
                <ul className={style.list}>
                    <li className={classNames(style.item, {}, [activeTab === "recent-played" ? style.active : ""])}>
                        <AppLink to="/" onClick={() => handleChangeTab("recent-played")}>
                            <span><Clock /></span>
                            {t("sidebar-recent")}
                        </AppLink>
                    </li>
                    <li className={classNames(style.item, {}, [activeTab === "download" ? style.active : ""])}>
                        <AppLink to="/" onClick={() => handleChangeTab("download")}>
                            <span><Download /></span>
                            {t("sidebar-download")}
                        </AppLink>
                    </li>
                    <li className={classNames(style.item, {}, [])}>
                        <div className={style.themeSwitch}>
                            <span><Moon /></span>
                            {t("sidebar-theme")}
                            <Switch
                                onChange={handleChangeTheme}
                                checked={theme === Theme.DARK}
                                className={style.switch}
                            />
                        </div>
                    </li>
                    <li className={classNames(style.item, {}, [activeTab === "setting" ? style.active : ""])}>
                        <AppLink to="/" onClick={() => handleChangeTab("setting")}>
                            <span><Settings /></span>
                            {t("sidebar-settings")}
                        </AppLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};
