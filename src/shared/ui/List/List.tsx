import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ListProps } from "./types";
import style from "./List.module.scss";

export const List: FC<ListProps> = ({ children, className }) => (
    <ul className={classNames(style.List, {}, [className])}>
        {children}
    </ul>
);
