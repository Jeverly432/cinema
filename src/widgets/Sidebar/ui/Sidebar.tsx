import { classNames } from "shared/lib/classNames";
import { useState } from "react";
import style from "./Sidebar.module.scss";
import { SidebarProps } from "./types";

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    return (
        <div className={classNames(style.Sidebar, {}, [className])}>
            <div>
                s
            </div>
        </div>
    );
};
