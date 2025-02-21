import { classNames } from "shared/lib/classNames/classNames";
import { FC } from "react";
import { Link } from "react-router-dom";
import style from "./AppLink.module.scss";
import { AppLinkProps, AppLinkTheme } from "./types";

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link to={to} {...otherProps} className={classNames(style.AppLink, {}, [className, style[theme]])}>
            {children}
        </Link>
    );
};
