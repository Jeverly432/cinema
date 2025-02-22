import { classNames } from "shared/lib/classNames/classNames";
import { useState } from "react";
import { Button } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { SidebarProps } from "./types";
import style from "./Sidebar.module.scss";

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames(style.Sidebar, { [style.collapsed]: collapsed }, [className])}>
            <Button onClick={onToggle}>{collapsed ? t("sidebar-toggle-open") : t("sidebar-toggle-close")}</Button>
        </div>
    );
};
