import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import style from "./ListItem.module.scss";
import { ListItemProps } from "./types";

export const ListItem: FC<ListItemProps> = ({ children, className }) => (
    <div className={classNames(style.ListItem, {}, [className])}>
        {children}
    </div>
);
